#!/usr/bin/env bash
#
# .txt ファイルを Intercom Internal Articles に同期（upsert）するスクリプト
#
# 環境変数:
#   INTERCOM_ACCESS_TOKEN - Intercom API トークン (必須)
#   INTERCOM_ADMIN_ID     - author_id / owner_id に使う Admin ID (必須)
#   SYNC_FILES            - 同期対象ファイルの絶対パス（改行区切り、必須）
#
# 使い方:
#   ./scripts/sync_intercom_internal_articles.sh [--dry-run]

set -euo pipefail

for cmd in curl jq; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "エラー: $cmd がインストールされていません" >&2
    exit 1
  fi
done

BASE_URL="https://api.intercom.io"
DRY_RUN=false

[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=true

if [[ "$DRY_RUN" == false ]]; then
  if [[ -z "${INTERCOM_ACCESS_TOKEN:-}" ]] || [[ -z "${INTERCOM_ADMIN_ID:-}" ]]; then
    echo "環境変数 INTERCOM_ACCESS_TOKEN と INTERCOM_ADMIN_ID を設定してください" >&2
    exit 1
  fi
  if ! [[ "$INTERCOM_ADMIN_ID" =~ ^[0-9]+$ ]]; then
    echo "エラー: INTERCOM_ADMIN_ID は数値である必要があります: '$INTERCOM_ADMIN_ID'" >&2
    exit 1
  fi
fi

# --- 対象ファイル列挙 ---
# SYNC_FILES 環境変数が設定されている場合はそのファイルのみ対象にする

target_files=()
if [[ -z "${SYNC_FILES:-}" ]]; then
  echo "エラー: 環境変数 SYNC_FILES が設定されていません" >&2
  exit 1
fi
while IFS= read -r f; do
  [[ -z "$f" ]] && continue
  if [[ "$f" != /* ]]; then
    echo "エラー: SYNC_FILES には絶対パスを指定してください: $f" >&2
    exit 1
  fi
  if [[ -f "$f" ]]; then
    target_files+=("$f")
  else
    echo "警告: ファイルが見つかりません: $f" >&2
  fi
done <<< "$SYNC_FILES"

echo "対象ファイル: ${#target_files[@]} 件"

if [[ ${#target_files[@]} -eq 0 ]]; then
  echo "同期対象ファイルがありません。終了します。"
  exit 0
fi

if [[ "$DRY_RUN" == true ]]; then
  for file in "${target_files[@]}"; do
    title="$(basename "$file" .txt)"
    title="${title%.ja}"
    size=$(wc -c < "$file")
    printf '  [dry-run] "%s" (%.1f KB)\n' "$title" "$(awk "BEGIN{printf \"%.1f\", $size/1024}")"
  done
  echo ""
  echo "dry-run 完了。実行するには --dry-run を外してください。"
  exit 0
fi

# --- 既存の内部記事を全件取得 ---

# --- 一時ファイル管理 ---
_tmp_files=()
cleanup() { rm -f "${_tmp_files[@]+"${_tmp_files[@]}"}"; }
trap cleanup EXIT

echo "既存の内部記事を取得中..."
existing_file=$(mktemp); _tmp_files+=("$existing_file" "${existing_file}.tmp")
response_file=$(mktemp); _tmp_files+=("$response_file")
echo '[]' > "$existing_file"
page=1
while true; do
  http_code=$(curl -s -o "$response_file" -w '%{http_code}' \
    -H "Authorization: Bearer $INTERCOM_ACCESS_TOKEN" \
    -H "Intercom-Version: 2.15" \
    "$BASE_URL/internal_articles?page=$page&per_page=100") || {
    echo "既存記事の取得中にネットワークエラーが発生しました" >&2
    exit 1
  }
  if [[ "$http_code" -lt 200 || "$http_code" -ge 300 ]]; then
    echo "既存記事の取得に失敗しました (HTTP $http_code):" >&2
    cat "$response_file" >&2
    exit 1
  fi

  jq -c '.data // []' "$response_file" | jq -c -s '.[0] + .[1]' "$existing_file" - > "${existing_file}.tmp"
  mv "${existing_file}.tmp" "$existing_file"

  total_pages=$(jq '.pages.total_pages // 1' "$response_file")
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
  title="${title%.ja}"
  echo "[$current/$total] 処理中: $title ($file)"

  # テキストを HTML エスケープして <pre> で囲む
  body_file=$(mktemp); _tmp_files+=("$body_file")
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

  # 既存記事を検索（title + locale で一意に特定）
  article_id=$(jq -r --arg t "$title" --arg l "$locale" '.[] | select(.title == $t and .locale == $l) | .id // empty' "$existing_file" | head -1)

  if [[ -n "$article_id" ]]; then
    # 更新
    http_code=$(jq -n --arg t "$title" --rawfile b "$body_file" --arg l "$locale" \
      '{title: $t, body: $b, locale: $l}' | \
      curl -s -o "$response_file" -w '%{http_code}' -X PUT "$BASE_URL/internal_articles/$article_id" \
        -H "Authorization: Bearer $INTERCOM_ACCESS_TOKEN" \
        -H "Content-Type: application/json" \
        -H "Intercom-Version: 2.15" \
        -d @-) || {
      echo "  記事の更新中にネットワークエラーが発生しました (id: $article_id)" >&2
      exit 1
    }
    if [[ "$http_code" -lt 200 || "$http_code" -ge 300 ]]; then
      echo "  記事の更新に失敗しました (HTTP $http_code, id: $article_id):" >&2
      cat "$response_file" >&2
      exit 1
    fi
    echo "  → 更新完了 (id: $article_id, locale: $locale)"
    updated=$((updated + 1))
  else
    # 作成
    http_code=$(jq -n --arg t "$title" --rawfile b "$body_file" --arg a "$INTERCOM_ADMIN_ID" --arg l "$locale" \
      '{title: $t, body: $b, author_id: ($a | tonumber), owner_id: ($a | tonumber), locale: $l}' | \
      curl -s -o "$response_file" -w '%{http_code}' -X POST "$BASE_URL/internal_articles" \
        -H "Authorization: Bearer $INTERCOM_ACCESS_TOKEN" \
        -H "Content-Type: application/json" \
        -H "Intercom-Version: 2.15" \
        -d @-) || {
      echo "  記事の作成中にネットワークエラーが発生しました (title: $title)" >&2
      exit 1
    }
    if [[ "$http_code" -lt 200 || "$http_code" -ge 300 ]]; then
      echo "  記事の作成に失敗しました (HTTP $http_code, title: $title):" >&2
      cat "$response_file" >&2
      exit 1
    fi
    echo "  → 新規作成完了 (locale: $locale)"
    created=$((created + 1))
  fi
  rm -f "$body_file"
done

echo ""
echo "完了: 作成 ${created} 件, 更新 ${updated} 件"
