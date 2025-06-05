#!/usr/bin/env node
// Usage: node scripts/filter-error-tag.js <target.yml>

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

// --- 引数チェック -------------------------------------------------------
const file = process.argv[2];
if (!file) {
  console.error('Usage: node filter-error-tag.js <target.yml>');
  process.exit(1);
}

// --- YAML 読み込み ------------------------------------------------------
const doc = yaml.load(fs.readFileSync(file, 'utf8'));

// --- 1. paths から "error" タグ付き operation を削除 ------------------
for (const [route, ops] of Object.entries(doc.paths ?? {})) {
  for (const m of Object.keys(ops)) {
    if (ops[m]?.tags?.includes('error')) delete ops[m];
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