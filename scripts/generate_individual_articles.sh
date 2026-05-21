#!/usr/bin/env bash
#
# ドキュメント・APIを個別ファイルとして出力するスクリプト
# ワークフロー内で一時生成し、差分判定に使用する（Git管理しない）
#
# Usage:
#   ./scripts/generate_individual_articles.sh [locale] [output_dir]
#
# Arguments:
#   locale      ja (default) | en
#   output_dir  出力先ディレクトリ (default: /tmp/individual-articles)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

locale="${1:-ja}"
output_dir="${2:-/tmp/individual-articles}"
version_dir="current"
plugin_dir="docusaurus-plugin-content-docs"

if [[ "$locale" != "ja" && "$locale" != "en" ]]; then
  echo "Usage: $0 [ja|en] [output_dir]" >&2
  exit 1
fi

if [[ "$locale" == "en" ]]; then
  target_dir="$PROJECT_ROOT/docs"
else
  target_dir="$PROJECT_ROOT/i18n/$locale/$plugin_dir/$version_dir"
fi

api_dir="$PROJECT_ROOT/api"

if [[ ! -d "$target_dir" ]]; then
  echo "Target directory not found: $target_dir" >&2
  exit 1
fi

target_abs="$(cd "$target_dir" && pwd)"
if [[ -z "$output_dir" || "$output_dir" == "/" ]]; then
  echo "エラー: output_dir が不正です: '$output_dir'" >&2
  exit 1
fi
# 出力先を空の状態で再作成（このスクリプト専用のディレクトリを前提）
rm -rf "$output_dir"
mkdir -p "$output_dir"

suffix=""
[[ "$locale" == "ja" ]] && suffix=".ja"

# frontmatter除去+空行・末尾空白除去の awk
strip_md() {
  awk '
    BEGIN { fm=0 }
    NR==1 && $0=="---" { fm=1; next }
    fm && $0=="---" { fm=0; next }
    fm { next }
    { gsub(/[ \t]+$/,""); if($0!="") print }
  ' "$1"
}

# --- サブディレクトリごとの出力 ---
while IFS= read -r subdir; do
  dir_name="$(basename "$subdir")"

  sub_files=()
  while IFS= read -r file; do
    sub_files+=("$file")
  done < <(
    find "$subdir" -type f \( -name '*.md' -o -name '*.mdx' \) \
      -not -path "*/ai-reference/*" \
      -not -path "*/reference/*.mdx" \
      | LC_ALL=C sort
  )
  [[ "${#sub_files[@]}" -eq 0 ]] && continue

  # part-7 はファイル単位で個別出力
  if [[ "$dir_name" == "part-7" ]]; then
    for file in "${sub_files[@]}"; do
      rel_path="${file#"$target_abs"/}"
      file_id="${rel_path#part-7/}"
      file_id="${file_id%.md}"
      file_id="${file_id%.mdx}"
      file_id="part-7-${file_id//\//-}"

      {
        printf '# %s\n- Locale: `%s`\n\n````markdown\n' "$rel_path" "$locale"
        strip_md "$file"
        printf '````\n'
      } > "$output_dir/${file_id}${suffix}.txt"
    done
    continue
  fi

  # その他のサブディレクトリはまとめて1ファイル
  {
    printf '# Merged Markdown (%s)\n- Locale: `%s`\n' "$dir_name" "$locale"
    for file in "${sub_files[@]}"; do
      rel_path="${file#"$target_abs"/}"
      printf '\n---\n## %s\n````markdown\n' "$rel_path"
      strip_md "$file"
      printf '````\n'
    done
  } > "$output_dir/${dir_name}${suffix}.txt"
done < <(find "$target_abs" -mindepth 1 -maxdepth 1 -type d | LC_ALL=C sort)

# --- APIファイルごとの出力 ---
api_files=()
if [[ -d "$api_dir" ]]; then
  if [[ "$locale" == "ja" ]]; then
    while IFS= read -r file; do api_files+=("$file"); done < <(find "$api_dir" -maxdepth 1 -type f -name '*.jpn.yml' | sort)
    while IFS= read -r file; do
      base_name="$(basename "$file")"
      [[ "$base_name" == *.jpn.yml ]] && continue
      [[ ! -f "$api_dir/${base_name%.yml}.jpn.yml" ]] && api_files+=("$file")
    done < <(find "$api_dir" -maxdepth 1 -type f -name '*.yml' | sort)
  else
    while IFS= read -r file; do api_files+=("$file"); done < <(find "$api_dir" -maxdepth 1 -type f -name '*.yml' ! -name '*.jpn.yml' | sort)
  fi
fi

for file in "${api_files[@]}"; do
  base_name="$(basename "$file")"
  api_name="${base_name%.jpn.yml}"
  api_name="${api_name%.yml}"

  {
    printf '# API Spec (%s)\n- Locale: `%s`\n\n```yaml\n' "$api_name" "$locale"
    awk '{ gsub(/[ \t]+$/,""); if($0!="") print }' "$file"
    printf '\n```\n'
  } > "$output_dir/${api_name}${suffix}.txt"
done

count=$(find "$output_dir" -name '*.txt' | wc -l | tr -d ' ')
printf 'Generated %s individual article files in %s\n' "$count" "$output_dir"
