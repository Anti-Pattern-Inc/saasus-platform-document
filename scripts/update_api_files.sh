#!/bin/bash
set -e

echo "Filtering error tags..."

for file in ./api/*.yml; do
  if [[ "$file" == *.jpn.yml ]]; then
    continue
  fi
  echo "Filtering: $file"
  node scripts/filter-error-tag.js "$file"
done

echo "Translating to Japanese..."

for file in ./api/*.yml; do
  if [[ "$file" == *.jpn.yml ]]; then
    continue
  fi

  base=$(basename "$file" .yml)

  if [[ "$base" == "integration" ]]; then
    output="./api/integrationapi.jpn.yml"
  else
    output="./api/${base}.jpn.yml"
  fi

  echo "Translating: $file -> $output"
  npx swagger-i18n-extension translate "$file" jpn > "$output"
done

echo "update_api_files.sh completed successfully."
