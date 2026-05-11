#!/usr/bin/env bash
#
# Verify that `make merge_gem` produces correct outputs.
# Designed for autonomous re-runs (CI-friendly exit codes).
#
# Usage:
#   ./scripts/verify_merge_gem.sh
#
# Exits non-zero if any check fails.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$SCRIPT_DIR"

PLUGIN_DIR="docusaurus-plugin-content-docs"
LOCALE="ja"

if ! command -v jq >/dev/null 2>&1; then
  echo "[FAIL] jq is required for this check" >&2
  exit 1
fi

LATEST="$(jq -r '.[0]' versions.json)"
PRIMARY="i18n/$LOCALE/$PLUGIN_DIR/current/ai-reference/knowledge.md"
SECONDARY="i18n/$LOCALE/$PLUGIN_DIR/version-$LATEST/ai-reference/knowledge.md"

pass=0
fail=0

check() {
  local label="$1"; shift
  if "$@"; then
    echo "[OK]   $label"
    pass=$((pass + 1))
  else
    echo "[FAIL] $label" >&2
    fail=$((fail + 1))
  fi
}

# 1. Script runs successfully
check "merge_gem runs without error" bash -c './merge_version_markdown.sh current >/dev/null 2>&1'

# 2. Both output files exist
check "primary output exists" test -f "$PRIMARY"
check "secondary output exists" test -f "$SECONDARY"

# 3. Files are identical
check "primary and secondary are byte-identical" cmp -s "$PRIMARY" "$SECONDARY"

# 4. File is non-empty
if [[ -f "$PRIMARY" ]]; then
  size=$(wc -c < "$PRIMARY" | tr -d ' ')
  lines=$(wc -l < "$PRIMARY" | tr -d ' ')
  echo "[INFO] size=$size bytes lines=$lines"
  check "file size > 0" test "$size" -gt 0
fi

# 5. First line is the merge header
check "first line is '# Merged Markdown'" \
  bash -c "head -1 '$PRIMARY' | grep -qx '# Merged Markdown'"

# 6. No leaked frontmatter keys at line start
fm_hits=$(grep -cE '^(title|slug|hidden|createdAt|updatedAt):' "$PRIMARY" || true)
check "no leaked frontmatter keys (got=$fm_hits)" test "$fm_hits" -eq 0

# 7. Make target works
check "make merge_gem target runs" bash -c 'make merge_gem >/dev/null 2>&1'

echo ""
echo "Summary: $pass passed, $fail failed"
[[ "$fail" -eq 0 ]]
