#!/usr/bin/env node
// Usage: node scripts/filter-error-tag.js <target.yml>

const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// --- 引数チェック -------------------------------------------------------
const file = process.argv[2];
if (!file) {
  console.error('Usage: node filter-error-tag.js <target.yml>');
  process.exit(1);
}

// --- YAML 読み込み ------------------------------------------------------
const doc = yaml.load(fs.readFileSync(file, 'utf8'));

// --- 除外する operationId 一覧（UI に表示させない operation） ------------
const EXCLUDED_OPERATION_IDS = [
  'DeleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates',
];

// --- 1. paths から "error" タグ付き / 除外対象 operation を削除 ---------
for (const [route, ops] of Object.entries(doc.paths ?? {})) {
  for (const m of Object.keys(ops)) {
    const op = ops[m];
    if (op?.tags?.includes('error')) {
      delete ops[m];
    } else if (op?.operationId && EXCLUDED_OPERATION_IDS.includes(op.operationId)) {
      delete ops[m];
    }
  }
  if (Object.keys(ops).length === 0) delete doc.paths[route];
}

// --- 2. ルート tags から "error" を削除 --------------------------------
if (Array.isArray(doc.tags)) {
  doc.tags = doc.tags.filter(t => t.name !== 'error');
  if (doc.tags.length === 0) delete doc.tags;
}

// --- 3. 上書き保存 ------------------------------------------------------
fs.writeFileSync(file, yaml.dump(doc, { lineWidth: -1 }), 'utf8');
console.log(`✔ cleaned ${path.basename(file)}`);