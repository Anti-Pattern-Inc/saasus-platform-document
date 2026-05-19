#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

usage() {
  cat <<'EOF'
Usage:
  ./merge_version_markdown.sh [locale]

Arguments:
  locale       Optional. Default: ja
               - ja: Output to static/ai-reference/*.ja.txt
               - en: Output to static/ai-reference/*.txt

Behavior:
  - Always extracts from "current" version
  - Merges .md and .mdx under i18n/<locale>/docusaurus-plugin-content-docs/current/
  - Skips any path matching */ai-reference/*
  - Skips any path matching */reference/*.mdx
  - Appends API spec files under api/
  - For locale=ja, *.jpn.yml is preferred; if no Japanese file exists, *.yml is used

Output:
  - static/ai-reference/knowledge.[ja.]txt  (all docs + API merged)
  - static/ai-reference/<subdir>.[ja.]txt   (per subdirectory under target_dir)
  - static/ai-reference/<apiname>.[ja.]txt  (per API spec file)

Examples:
  ./merge_version_markdown.sh           # Japanese version
  ./merge_version_markdown.sh ja        # Japanese version
  ./merge_version_markdown.sh en        # English version
EOF
}

if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

# Fixed to "current" version
version_dir="current"

# locale parameter (default: ja)
locale="${1:-ja}"
plugin_dir="docusaurus-plugin-content-docs"

# Set target directory based on locale
if [[ "$locale" == "en" ]]; then
  # English is the default language, stored in docs/
  target_dir="$PROJECT_ROOT/docs"
else
  # Other languages are stored in i18n/<locale>/
  target_dir="$PROJECT_ROOT/i18n/$locale/$plugin_dir/$version_dir"
fi

api_dir="$PROJECT_ROOT/api"

# Fixed output path for the main merged file based on locale
if [[ "$locale" == "ja" ]]; then
  output_file="$PROJECT_ROOT/static/ai-reference/knowledge.ja.txt"
else
  output_file="$PROJECT_ROOT/static/ai-reference/knowledge.txt"
fi

if [[ ! -d "$target_dir" ]]; then
  echo "Target directory not found: $target_dir" >&2
  exit 1
fi

target_abs="$(cd "$target_dir" && pwd)"
output_dir="$(dirname "$output_file")"
mkdir -p "$output_dir"
output_abs="$(cd "$output_dir" && pwd)/$(basename "$output_file")"

files=()
while IFS= read -r file; do
  files+=("$file")
done < <(
  find "$target_abs" -type f \( -name '*.md' -o -name '*.mdx' \) \
    ! -path "$output_abs" \
    -not -path "*/ai-reference/*" \
    -not -path "*/reference/*.mdx" \
    | LC_ALL=C sort
)

if [[ "${#files[@]}" -eq 0 ]]; then
  echo "No docs files found under: $target_dir" >&2
  exit 1
fi

api_files=()
if [[ -d "$api_dir" ]]; then
  if [[ "$locale" == "ja" ]]; then
    while IFS= read -r file; do
      api_files+=("$file")
    done < <(
      find "$api_dir" -maxdepth 1 -type f -name '*.jpn.yml' | sort
    )

    while IFS= read -r file; do
      base_name="$(basename "$file")"
      if [[ "$base_name" == *.jpn.yml ]]; then
        continue
      fi
      jpn_variant="$api_dir/${base_name%.yml}.jpn.yml"
      if [[ ! -f "$jpn_variant" ]]; then
        api_files+=("$file")
      fi
    done < <(
      find "$api_dir" -maxdepth 1 -type f -name '*.yml' | sort
    )
  else
    while IFS= read -r file; do
      api_files+=("$file")
    done < <(
      find "$api_dir" -maxdepth 1 -type f -name '*.yml' ! -name '*.jpn.yml' | sort
    )
  fi
fi

{
  printf '# Merged Markdown\n'
  printf -- '- Version: `%s`\n' "$version_dir"
  printf -- '- Locale: `%s`\n' "$locale"
  printf -- '- Docs source: `%s`\n' "${target_dir#$PROJECT_ROOT/}"
  if [[ -d "$api_dir" ]]; then
    printf -- '- API source: `%s`\n' "${api_dir#$PROJECT_ROOT/}"
  fi
  printf -- '- Generated: `%s`\n' "$(date '+%Y-%m-%d %H:%M:%S %z')"

  for file in "${files[@]}"; do
    rel_path="${file#"$target_abs"/}"

    printf '\n---\n'
    printf '## %s\n' "$rel_path"

    printf '````markdown\n'

    awk '
      BEGIN {
        in_frontmatter = 0
      }
      NR == 1 && $0 == "---" {
        in_frontmatter = 1
        next
      }
      in_frontmatter && $0 == "---" {
        in_frontmatter = 0
        next
      }
      in_frontmatter {
        next
      }
      {
        # 行末のスペース・タブを削除
        gsub(/[ \t]+$/, "")
        
        # 空行（空白のみの行を含む）を削除
        if ($0 != "") {
          print
        }
      }
    ' "$file"
    printf '````\n'
  done

  if [[ "${#api_files[@]}" -gt 0 ]]; then
    printf '\n---\n'
    printf '## API Specs\n'

    for file in "${api_files[@]}"; do
      rel_path="${file#"$PROJECT_ROOT"/}"

      printf '\n---\n'
      printf '### %s\n' "$rel_path"
      printf '```yaml\n'
      awk '
        {
          # 行末のスペース・タブを削除
          gsub(/[ \t]+$/, "")
          
          # 空行（空白のみの行を含む）を削除
          if ($0 != "") {
            print
          }
        }
      ' "$file"
      printf '\n```\n'
    done
  fi
} > "$output_abs"

printf 'Created %s from %d docs files and %d API files\n' \
  "$output_abs" "${#files[@]}" "${#api_files[@]}"

# --- サブディレクトリごとの個別ファイル出力 ---
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
      # part-7/faq/billing.md → part-7-faq-billing
      file_id="${rel_path#part-7/}"
      file_id="${file_id%.md}"
      file_id="${file_id%.mdx}"
      file_id="part-7-${file_id//\//-}"

      if [[ "$locale" == "ja" ]]; then
        per_file_output="$output_dir/${file_id}.ja.txt"
      else
        per_file_output="$output_dir/${file_id}.txt"
      fi

      {
        printf '# %s\n' "$rel_path"
        printf -- '- Locale: `%s`\n' "$locale"
        printf -- '- Generated: `%s`\n' "$(date '+%Y-%m-%d %H:%M:%S %z')"
        printf '\n````markdown\n'
        awk '
          BEGIN { in_frontmatter = 0 }
          NR == 1 && $0 == "---" { in_frontmatter = 1; next }
          in_frontmatter && $0 == "---" { in_frontmatter = 0; next }
          in_frontmatter { next }
          {
            gsub(/[ \t]+$/, "")
            if ($0 != "") print
          }
        ' "$file"
        printf '````\n'
      } > "$per_file_output"

      printf 'Created %s\n' "$per_file_output"
    done
    continue
  fi

  if [[ "$locale" == "ja" ]]; then
    sub_output="$output_dir/${dir_name}.ja.txt"
  else
    sub_output="$output_dir/${dir_name}.txt"
  fi

  {
    printf '# Merged Markdown (%s)\n' "$dir_name"
    printf -- '- Locale: `%s`\n' "$locale"
    printf -- '- Generated: `%s`\n' "$(date '+%Y-%m-%d %H:%M:%S %z')"

    for file in "${sub_files[@]}"; do
      rel_path="${file#"$target_abs"/}"

      printf '\n---\n'
      printf '## %s\n' "$rel_path"
      printf '````markdown\n'

      awk '
        BEGIN { in_frontmatter = 0 }
        NR == 1 && $0 == "---" { in_frontmatter = 1; next }
        in_frontmatter && $0 == "---" { in_frontmatter = 0; next }
        in_frontmatter { next }
        {
          gsub(/[ \t]+$/, "")
          if ($0 != "") print
        }
      ' "$file"
      printf '````\n'
    done
  } > "$sub_output"

  printf 'Created %s from %d files\n' "$sub_output" "${#sub_files[@]}"
done < <(find "$target_abs" -mindepth 1 -maxdepth 1 -type d | LC_ALL=C sort)

# --- APIファイルごとの個別ファイル出力 ---
for file in "${api_files[@]}"; do
  base_name="$(basename "$file")"
  # ファイル名からAPI名を抽出（.jpn.yml / .yml を除去）
  api_name="${base_name%.jpn.yml}"
  api_name="${api_name%.yml}"

  if [[ "$locale" == "ja" ]]; then
    api_output="$output_dir/${api_name}.ja.txt"
  else
    api_output="$output_dir/${api_name}.txt"
  fi

  {
    printf '# API Spec (%s)\n' "$api_name"
    printf -- '- Locale: `%s`\n' "$locale"
    printf -- '- Generated: `%s`\n' "$(date '+%Y-%m-%d %H:%M:%S %z')"
    printf '\n```yaml\n'
    awk '
      {
        gsub(/[ \t]+$/, "")
        if ($0 != "") print
      }
    ' "$file"
    printf '\n```\n'
  } > "$api_output"

  printf 'Created %s\n' "$api_output"
done
