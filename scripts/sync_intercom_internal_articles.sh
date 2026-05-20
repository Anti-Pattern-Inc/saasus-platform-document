#!/usr/bin/env bash
#
# static/ai-reference 以下の knowledge 以外の .txt ファイルを
# Intercom Internal Articles に同期（upsert）するスクリプト
#
# 環境変数:
#   INTERCOM_ACCESS_TOKEN - Intercom API トークン (必須)
#   INTERCOM_ADMIN_ID     - author_id / owner_id に使う Admin ID (必須)
#
# 使い方:
#   ./scripts/sync_intercom_internal_articles.sh [--dry-run]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
AI_REF_DIR="$PROJECT_ROOT/static/ai-reference"
BASE_URL="https://api.intercom.io"
DRY_RUN=false

[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=true

if [[ "$DRY_RUN" == false ]]; then
  if [[ -z "${INTERCOM_ACCESS_TOKEN:-}" ]] || [[ -z "${INTERCOM_ADMIN_ID:-}" ]]; then
    echo "環境変数 INTERCOM_ACCESS_TOKEN と INTERCOM_ADMIN_ID を設定してください" >&2
    exit 1
  fi
fi

# --- 対象ファイル列挙 ---
# SYNC_FILES 環境変数が設定されている場合はそのファイルのみ対象にする

target_files=()
if [[ -n "${SYNC_FILES:-}" ]]; then
  while IFS= read -r f; do
    [[ -f "$f" ]] && target_files+=("$f")
  done <<< "$SYNC_FILES"
else
  while IFS= read -r f; do
    target_files+=("$f")
  done < <(find "$AI_REF_DIR" -maxdepth 1 -name '*.txt' ! -name 'knowledge*' | LC_ALL=C sort)
fi

echo "対象ファイル: ${#target_files[@]} 件"

if [[ "$DRY_RUN" == true ]]; then
  for file in "${target_files[@]}"; do
    title="$(basename "$file" .txt)"
    size=$(wc -c < "$file")
    printf '  [dry-run] "%s" (%.1f KB)\n' "$title" "$(awk "BEGIN{printf \"%.1f\", $size/1024}")"
  done
  echo ""
  echo "dry-run 完了。実行するには --dry-run を外してください。"
  exit 0
fi

# --- 既存の内部記事を全件取得 ---

echo "既存の内部記事を取得中..."
existing_file=$(mktemp)
response_file=$(mktemp)
trap 'rm -f "$existing_file" "$response_file"' EXIT
echo '[]' > "$existing_file"
page=1
while true; do
  http_code=$(curl -s -o $response_file -w '%{http_code}' \
    -H "Authorization: Bearer $INTERCOM_ACCESS_TOKEN" \
    -H "Intercom-Version: 2.15" \
    "$BASE_URL/internal_articles?page=$page&per_page=100")
  if [[ "$http_code" -lt 200 || "$http_code" -ge 300 ]]; then
    echo "既存記事の取得に失敗しました (HTTP $http_code):" >&2
    cat $response_file >&2
    exit 1
  fi
  response=$(cat $response_file)

  echo "$response" | jq -c '.data // []' | jq -c -s '.[0] + .[1]' "$existing_file" - > "${existing_file}.tmp"
  mv "${existing_file}.tmp" "$existing_file"

  total_pages=$(echo "$response" | jq '.pages.total_pages // 1')
  [[ "$page" -ge "$total_pages" ]] && break
  page=$((page + 1))
done

echo "既存記事: $(jq 'length' "$existing_file") 件"

# --- upsert ---

created=0
updated=0

total=${#target_files[@]}
current=0

for file in "${target_files[@]}"; do
  current=$((current + 1))
  title="$(basename "$file" .txt)"
  echo "[$current/$total] 処理中: $title ($file)"

  # テキストを HTML エスケープして <pre> で囲む
  body_file=$(mktemp)
  {
    printf '<pre>'
    sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g' "$file"
    printf '</pre>'
  } > "$body_file"

  # ファイル名から言語を判定
  filename="$(basename "$file")"
  if [[ "$filename" == *.ja.txt ]]; then
    locale="ja"
  else
    locale="en"
  fi

  # 既存記事を検索
  article_id=$(jq -r --arg t "$title" '.[] | select(.title == $t) | .id // empty' "$existing_file" | head -1)

  if [[ -n "$article_id" ]]; then
    # 更新
    http_code=$(jq -n --arg t "$title" --rawfile b "$body_file" --arg l "$locale" \
      '{title: $t, body: $b, locale: $l}' | \
      curl -s -o $response_file -w '%{http_code}' -X PUT "$BASE_URL/internal_articles/$article_id" \
        -H "Authorization: Bearer $INTERCOM_ACCESS_TOKEN" \
        -H "Content-Type: application/json" \
        -H "Intercom-Version: 2.15" \
        -d @-)
    if [[ "$http_code" -lt 200 || "$http_code" -ge 300 ]]; then
      echo "  記事の更新に失敗しました (HTTP $http_code, id: $article_id):" >&2
      cat $response_file >&2
      exit 1
    fi
    echo "  → 更新完了 (id: $article_id, locale: $locale)"
    updated=$((updated + 1))
  else
    # 作成
    http_code=$(jq -n --arg t "$title" --rawfile b "$body_file" --argjson a "$INTERCOM_ADMIN_ID" --arg l "$locale" \
      '{title: $t, body: $b, author_id: $a, owner_id: $a, locale: $l}' | \
      curl -s -o $response_file -w '%{http_code}' -X POST "$BASE_URL/internal_articles" \
        -H "Authorization: Bearer $INTERCOM_ACCESS_TOKEN" \
        -H "Content-Type: application/json" \
        -H "Intercom-Version: 2.15" \
        -d @-)
    if [[ "$http_code" -lt 200 || "$http_code" -ge 300 ]]; then
      echo "  記事の作成に失敗しました (HTTP $http_code, title: $title):" >&2
      cat $response_file >&2
      exit 1
    fi
    echo "  → 新規作成完了 (locale: $locale)"
    created=$((created + 1))
  fi
  rm -f "$body_file"
done

echo ""
echo "完了: 作成 ${created} 件, 更新 ${updated} 件"
