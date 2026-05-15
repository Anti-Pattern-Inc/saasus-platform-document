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
               - ja: Output to static/ai-reference/knowledge.ja.txt
               - en: Output to static/ai-reference/knowledge.txt

Behavior:
  - Always extracts from "current" version
  - Merges .md and .mdx under i18n/<locale>/docusaurus-plugin-content-docs/current/
  - Skips any path matching */ai-reference/*
  - Appends API spec files under api/
  - For locale=ja, *.jpn.yml is preferred; if no Japanese file exists, *.yml is used
  - Output is fixed to static/ai-reference/knowledge.[ja.]txt

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

# Fixed output path based on locale
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
  printf '# Merged Markdown\n\n'
  printf -- '- Version: `%s`\n' "$version_dir"
  printf -- '- Locale: `%s`\n' "$locale"
  printf -- '- Docs source: `%s`\n' "${target_dir#$PROJECT_ROOT/}"
  if [[ -d "$api_dir" ]]; then
    printf -- '- API source: `%s`\n' "${api_dir#$PROJECT_ROOT/}"
  fi
  printf -- '- Generated: `%s`\n\n' "$(date '+%Y-%m-%d %H:%M:%S %z')"

  for file in "${files[@]}"; do
    rel_path="${file#"$target_abs"/}"

    printf '\n\n---\n\n'
    printf '## %s\n\n' "$rel_path"

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
        print
      }
    ' "$file"
    printf '````\n'
  done

  if [[ "${#api_files[@]}" -gt 0 ]]; then
    printf '\n\n---\n\n'
    printf '## API Specs\n'

    for file in "${api_files[@]}"; do
      rel_path="${file#"$PROJECT_ROOT"/}"

      printf '\n\n---\n\n'
      printf '### %s\n\n' "$rel_path"
      printf '```yaml\n'
      cat "$file"
      printf '\n```\n'
    done
  fi

  printf '\n'
} > "$output_abs"

printf 'Created %s from %d docs files and %d API files\n' \
  "$output_abs" "${#files[@]}" "${#api_files[@]}"
