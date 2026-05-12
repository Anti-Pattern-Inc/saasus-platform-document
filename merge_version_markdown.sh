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
  # Frontmatter for Docusaurus:
  #   - unlisted: true  → exclude from sidebar, search, sitemap (3.0+ feature)
  #   - title: set explicitly so Docusaurus doesn't try to infer from the first H1
  printf -- '---\n'
  printf -- 'unlisted: true\n'
  printf -- 'title: AI Reference Knowledge\n'
  printf -- 'sidebar_class_name: hidden\n'
  printf -- '---\n\n'

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

    # Wrap each source file's body in a 4-backtick fence so MDX/JSX inside
    # (e.g. `<Tabs>`, `import` statements, `<TabItem>`) is treated as literal
    # text and never parsed by Docusaurus's MDX compiler.
    # Inner 3-backtick code blocks in the source remain valid.
    printf '````markdown\n'

    # 1) awk: strip YAML frontmatter
    # 2) perl: strip every markdown link/image/autolink/reference-style link
    #    so that knowledge.md never re-exposes broken hrefs from source docs.
    #    Docusaurus' brokenLinks extractor sees raw href targets even when the
    #    content is inside a code fence, so we remove all link syntax up-front.
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
    ' "$file" | perl -pe '
      # image: ![alt](src "title")  ->  alt
      s/!\[([^\]]*)\]\([^)]*\)/$1/g;
      # inline link: [text](url "title")  ->  text
      s/\[([^\]]*)\]\([^)]*\)/$1/g;
      # reference link: [text][ref]  ->  text
      s/\[([^\]]*)\]\[[^\]]*\]/$1/g;
      # link reference definition: [ref]: url  ->  drop entire line
      s/^\s*\[[^\]]+\]:\s*\S.*$//;
      # autolink: <https://...> or <http://...>  ->  the URL as plain text
      s/<((?:https?|mailto):[^>]+)>/$1/g;
      # HTML anchor on a single line: <a ...>text</a>  ->  text
      s/<a\s[^>]*>([^<]*)<\/a>/$1/gi;
      # Self-closing or empty HTML anchor: <a ... />  ->  drop
      s/<a\s[^>]*\/>//gi;
    '

    printf '````\n'
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
      # AI reference is mirrored to four locations so that Docusaurus
      # (defaultLocale=en) registers the route and the ja translation is picked up.
      # The English copies use the same content (Japanese) because the AI
      # consumer doesn't care about UI locale.
      copy_targets=(
        "$SCRIPT_DIR/i18n/$locale/$plugin_dir/version-$latest_version/ai-reference/knowledge.md"
        "$SCRIPT_DIR/docs/ai-reference/knowledge.md"
        "$SCRIPT_DIR/versioned_docs/version-$latest_version/ai-reference/knowledge.md"
      )
      for target in "${copy_targets[@]}"; do
        mkdir -p "$(dirname "$target")"
        cp "$output_abs" "$target"
        printf 'Also copied to %s\n' "$target"
      done
    fi
  fi
fi
