#!/usr/bin/env bash
#
# knowledge ファイル (static/ai-reference/knowledge.[ja.]txt) を生成するスクリプト
#
# Usage:
#   ./scripts/merge_version_markdown.sh [locale]
#
# Arguments:
#   locale  ja (default) | en

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

version_dir="current"
locale="${1:-ja}"
plugin_dir="docusaurus-plugin-content-docs"

if [[ "$locale" != "ja" && "$locale" != "en" ]]; then
  echo "Usage: $0 [ja|en]" >&2
  exit 1
fi

if [[ "$locale" == "en" ]]; then
  target_dir="$PROJECT_ROOT/docs"
else
  target_dir="$PROJECT_ROOT/i18n/$locale/$plugin_dir/$version_dir"
fi

api_dir="$PROJECT_ROOT/api"

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

# Generated行を除外して比較し、実質的な差分がある場合のみファイルを更新する
write_if_changed() {
  local dest="$1" tmp="$2"
  if [[ -f "$dest" ]]; then
    if diff -q <(sed '1,10{/^- Generated: /d}' "$dest") <(sed '1,10{/^- Generated: /d}' "$tmp") >/dev/null 2>&1; then
      rm -f "$tmp"
      return 1
    fi
  fi
  mv -f "$tmp" "$dest"
  return 0
}

# --- ドキュメントファイル収集 ---
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

# --- APIファイル収集 ---
api_files=()
if [[ -d "$api_dir" ]]; then
  if [[ "$locale" == "ja" ]]; then
    while IFS= read -r file; do
      api_files+=("$file")
    done < <(find "$api_dir" -maxdepth 1 -type f -name '*.jpn.yml' | LC_ALL=C sort)

    while IFS= read -r file; do
      base_name="$(basename "$file")"
      [[ "$base_name" == *.jpn.yml ]] && continue
      jpn_variant="$api_dir/${base_name%.yml}.jpn.yml"
      [[ ! -f "$jpn_variant" ]] && api_files+=("$file")
    done < <(find "$api_dir" -maxdepth 1 -type f -name '*.yml' | LC_ALL=C sort)
  else
    while IFS= read -r file; do
      api_files+=("$file")
    done < <(find "$api_dir" -maxdepth 1 -type f -name '*.yml' ! -name '*.jpn.yml' | LC_ALL=C sort)
  fi
fi

# --- knowledge ファイル生成 ---
{
  printf '# Merged Markdown\n'
  printf -- '- Version: `%s`\n' "$version_dir"
  printf -- '- Locale: `%s`\n' "$locale"
  printf -- '- Docs source: `%s`\n' "${target_dir#$PROJECT_ROOT/}"
  [[ -d "$api_dir" ]] && printf -- '- API source: `%s`\n' "${api_dir#$PROJECT_ROOT/}"
  printf -- '- Generated: `%s`\n' "$(date '+%Y-%m-%d %H:%M:%S %z')"

  for file in "${files[@]}"; do
    rel_path="${file#"$target_abs"/}"
    printf '\n---\n## %s\n````markdown\n' "$rel_path"
    awk '
      BEGIN { fm=0 }
      NR==1 && $0=="---" { fm=1; next }
      fm && $0=="---" { fm=0; next }
      fm { next }
      { gsub(/[ \t]+$/,""); if($0!="") print }
    ' "$file"
    printf '````\n'
  done

  if [[ "${#api_files[@]}" -gt 0 ]]; then
    printf '\n---\n## API Specs\n'
    for file in "${api_files[@]}"; do
      rel_path="${file#"$PROJECT_ROOT"/}"
      printf '\n---\n### %s\n```yaml\n' "$rel_path"
      awk '{ gsub(/[ \t]+$/,""); if($0!="") print }' "$file"
      printf '\n```\n'
    done
  fi
} > "$output_abs.tmp"

if write_if_changed "$output_abs" "$output_abs.tmp"; then
  printf 'Created %s from %d docs files and %d API files\n' "$output_abs" "${#files[@]}" "${#api_files[@]}"
else
  printf 'Unchanged %s\n' "$output_abs"
fi
