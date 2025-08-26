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

echo "Copying error-tag-removed YAML files to static/file/saasus_api ..."

OUTPUT_DIR="./static/file/saasus_api"
mkdir -p "$OUTPUT_DIR"

for file in ./api/*.yml; do
  if [[ "$file" == *.jpn.yml ]]; then
    continue
  fi
  base=$(basename "$file")
  cp "$file" "$OUTPUT_DIR/$base"
  echo "Copied: $file -> $OUTPUT_DIR/$base"
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
