#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

usage() {
  cat <<'EOF'
Usage:
  ./merge_version_markdown.sh <version|current> [output_file] [locale] [plugin_dir]

Arguments:
  version      Required. Accepts "current", "1.12", or "version-1.12".
  output_file  Optional. Default depends on version:
                 - current     : i18n/<locale>/<plugin_dir>/current/ai-reference/knowledge.md
                 - version-X.Y : merged-<version>.md (script dir)
  locale       Optional. Default: ja
  plugin_dir   Optional. Default: docusaurus-plugin-content-docs

Behavior:
  - Merges .md and .mdx under the target docs directory.
  - Skips any path matching */ai-reference/* (so this tool's own output
    never feeds back into the next run).
  - Appends API spec files under api/.
  - For locale=ja, *.jpn.yml is preferred; if no Japanese file exists, *.yml is used.
  - For version="current", additionally copies the generated knowledge.md to:
      i18n/<locale>/<plugin_dir>/version-{LATEST}/ai-reference/knowledge.md
    where LATEST is the first entry in versions.json.

Examples:
  ./merge_version_markdown.sh current
  ./merge_version_markdown.sh 1.12
  ./merge_version_markdown.sh version-1.11 output/version-1.11.md
EOF
}

if [[ "${1:-}" == "" ]] || [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

input_version="$1"

if [[ "$input_version" == "current" ]]; then
  version_dir="current"
else
  version_dir="$input_version"
  if [[ "$version_dir" != version-* ]]; then
    version_dir="version-$version_dir"
  fi
fi

locale="${3:-ja}"
plugin_dir="${4:-docusaurus-plugin-content-docs}"
target_dir="$SCRIPT_DIR/i18n/$locale/$plugin_dir/$version_dir"
api_dir="$SCRIPT_DIR/api"

if [[ "$input_version" == "current" ]]; then
  default_output="$SCRIPT_DIR/i18n/$locale/$plugin_dir/current/ai-reference/knowledge.md"
else
  default_output="$SCRIPT_DIR/merged-$version_dir.md"
fi
output_file="${2:-$default_output}"

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

if [[ "$input_version" == "current" ]]; then
  versions_json="$SCRIPT_DIR/versions.json"
  if [[ ! -f "$versions_json" ]]; then
    echo "Warning: versions.json not found at $versions_json; skipping secondary placement" >&2
  elif ! command -v jq >/dev/null 2>&1; then
    echo "Warning: jq not found; skipping secondary placement" >&2
  else
    latest_version="$(jq -r '.[0] // empty' "$versions_json")"
    if [[ -z "$latest_version" ]]; then
      echo "Warning: versions.json has no entries; skipping secondary placement" >&2
    else
      secondary_dir="$SCRIPT_DIR/i18n/$locale/$plugin_dir/version-$latest_version/ai-reference"
      mkdir -p "$secondary_dir"
      secondary_path="$secondary_dir/knowledge.md"
      cp "$output_abs" "$secondary_path"
      printf 'Also copied to %s\n' "$secondary_path"
    fi
  fi
fi
