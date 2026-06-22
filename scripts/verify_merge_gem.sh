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

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

# Current output layout (knowledge.txt is served statically from /[ja/]ai-reference/knowledge.txt)
EN_OUTPUT="static/ai-reference/knowledge.txt"
JA_OUTPUT="static/ja/ai-reference/knowledge.txt"

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

# 1. `make merge_gem` runs without error
check "make merge_gem target runs" bash -c 'make merge_gem >/dev/null 2>&1'

# 2. Both output files exist
check "en output exists ($EN_OUTPUT)" test -f "$EN_OUTPUT"
check "ja output exists ($JA_OUTPUT)" test -f "$JA_OUTPUT"

# 3. Files are non-empty
if [[ -f "$EN_OUTPUT" ]]; then
  en_size=$(wc -c < "$EN_OUTPUT" | tr -d ' ')
  en_lines=$(wc -l < "$EN_OUTPUT" | tr -d ' ')
  echo "[INFO] en: size=$en_size bytes lines=$en_lines"
  check "en file size > 0" test "$en_size" -gt 0
fi
if [[ -f "$JA_OUTPUT" ]]; then
  ja_size=$(wc -c < "$JA_OUTPUT" | tr -d ' ')
  ja_lines=$(wc -l < "$JA_OUTPUT" | tr -d ' ')
  echo "[INFO] ja: size=$ja_size bytes lines=$ja_lines"
  check "ja file size > 0" test "$ja_size" -gt 0
fi

# 4. First line is the merge header
check "en first line is '# Merged Markdown'" \
  bash -c "head -1 '$EN_OUTPUT' | grep -qx '# Merged Markdown'"
check "ja first line is '# Merged Markdown'" \
  bash -c "head -1 '$JA_OUTPUT' | grep -qx '# Merged Markdown'"

# 5. No leaked source-doc frontmatter keys (frontmatter stripping regression guard)
en_fm_leak=$(grep -cE '^(title|slug|hidden|createdAt|updatedAt):' "$EN_OUTPUT" || true)
ja_fm_leak=$(grep -cE '^(title|slug|hidden|createdAt|updatedAt):' "$JA_OUTPUT" || true)
check "en: no leaked frontmatter keys (got=$en_fm_leak)" test "$en_fm_leak" -eq 0
check "ja: no leaked frontmatter keys (got=$ja_fm_leak)" test "$ja_fm_leak" -eq 0

# 6. Locale header matches the file
check "en file declares 'Locale: en'" \
  bash -c "head -20 '$EN_OUTPUT' | grep -qE '^- Locale: \`en\`'"
check "ja file declares 'Locale: ja'" \
  bash -c "head -20 '$JA_OUTPUT' | grep -qE '^- Locale: \`ja\`'"

echo ""
echo "Summary: $pass passed, $fail failed"
[[ "$fail" -eq 0 ]]
