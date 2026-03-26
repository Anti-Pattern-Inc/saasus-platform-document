#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

usage() {
  cat <<'EOF'
Usage:
  ./merge_version_markdown.sh <version> [output_file] [locale] [plugin_dir]

Arguments:
  version      Required. Accepts either "1.12" or "version-1.12".
  output_file  Optional. Default: merged-<version>.md
  locale       Optional. Default: ja
  plugin_dir   Optional. Default: docusaurus-plugin-content-docs

Examples:
  ./merge_version_markdown.sh 1.12
  ./merge_version_markdown.sh version-1.11 output/version-1.11.md
  ./merge_version_markdown.sh 1.10 merged.md en docusaurus-plugin-content-docs

Notes:
  - Merges .md and .mdx under the versioned docs directory.
  - Also appends API spec files under api/.
  - For locale=ja, *.jpn.yml is preferred; if no Japanese file exists, *.yml is used.
EOF
}

if [[ "${1:-}" == "" ]] || [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

input_version="$1"
version_dir="$input_version"
if [[ "$version_dir" != version-* ]]; then
  version_dir="version-$version_dir"
fi

locale="${3:-ja}"
plugin_dir="${4:-docusaurus-plugin-content-docs}"
target_dir="$SCRIPT_DIR/i18n/$locale/$plugin_dir/$version_dir"
output_file="${2:-$SCRIPT_DIR/merged-$version_dir.md}"
api_dir="$SCRIPT_DIR/api"

if [[ ! -d "$target_dir" ]]; then
  echo "Target directory not found: $target_dir" >&2
  exit 1
fi

target_abs="$(cd "$target_dir" && pwd)"
output_dir="$(dirname "$output_file")"
mkdir -p "$output_dir"
output_abs="$(cd "$output_dir" && pwd)/$(basename "$output_file")"

mapfile -d '' files < <(
  find "$target_abs" -type f \( -name '*.md' -o -name '*.mdx' \) ! -path "$output_abs" -print0 | sort -z
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
  printf -- '- Docs source: `%s`\n' "${target_dir#$SCRIPT_DIR/}"
  if [[ -d "$api_dir" ]]; then
    printf -- '- API source: `%s`\n' "${api_dir#$SCRIPT_DIR/}"
  fi
  printf -- '- Generated: `%s`\n\n' "$(date '+%Y-%m-%d %H:%M:%S %z')"

  for file in "${files[@]}"; do
    rel_path="${file#"$target_abs"/}"

    printf '\n\n---\n\n'
    printf '## %s\n\n' "$rel_path"

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
  done

  if [[ "${#api_files[@]}" -gt 0 ]]; then
    printf '\n\n---\n\n'
    printf '## API Specs\n'

    for file in "${api_files[@]}"; do
      rel_path="${file#"$SCRIPT_DIR"/}"

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
