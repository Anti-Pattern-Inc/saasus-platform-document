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

# 4 output locations (Phase 2: mirror to English side so Docusaurus registers the route)
PRIMARY="i18n/$LOCALE/$PLUGIN_DIR/current/ai-reference/knowledge.md"
SECONDARY="i18n/$LOCALE/$PLUGIN_DIR/version-$LATEST/ai-reference/knowledge.md"
EN_CURRENT="docs/ai-reference/knowledge.md"
EN_VERSIONED="versioned_docs/version-$LATEST/ai-reference/knowledge.md"

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

# 2. All four output files exist
check "ja current output exists"      test -f "$PRIMARY"
check "ja versioned output exists"    test -f "$SECONDARY"
check "en current output exists"      test -f "$EN_CURRENT"
check "en versioned output exists"    test -f "$EN_VERSIONED"

# 3. All four files are identical
check "ja-current == ja-versioned"    cmp -s "$PRIMARY" "$SECONDARY"
check "ja-current == en-current"      cmp -s "$PRIMARY" "$EN_CURRENT"
check "ja-current == en-versioned"    cmp -s "$PRIMARY" "$EN_VERSIONED"

# 4. File is non-empty
if [[ -f "$PRIMARY" ]]; then
  size=$(wc -c < "$PRIMARY" | tr -d ' ')
  lines=$(wc -l < "$PRIMARY" | tr -d ' ')
  echo "[INFO] size=$size bytes lines=$lines"
  check "file size > 0" test "$size" -gt 0
fi

# 5. Frontmatter exists with unlisted: true
check "frontmatter starts with ---" \
  bash -c "head -1 '$PRIMARY' | grep -qx -- '---'"
check "frontmatter contains unlisted: true" \
  bash -c "head -10 '$PRIMARY' | grep -qx 'unlisted: true'"

# 6. No leaked source-doc frontmatter keys (title:/slug:/hidden:/createdAt/updatedAt at line start)
# Note: our own added frontmatter has a `title:` line which we must allow once.
fm_leak=$(grep -cE '^(slug|hidden|createdAt|updatedAt):' "$PRIMARY" || true)
check "no leaked slug/hidden/createdAt/updatedAt (got=$fm_leak)" test "$fm_leak" -eq 0

# 7. Make target works
check "make merge_gem target runs" bash -c 'make merge_gem >/dev/null 2>&1'

echo ""
echo "Summary: $pass passed, $fail failed"
[[ "$fail" -eq 0 ]]
