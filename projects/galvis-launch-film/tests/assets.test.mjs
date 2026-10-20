import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../assets/', import.meta.url));
const ledgerPath = join(root, 'LICENSES.json');
const ledger = existsSync(ledgerPath) ? JSON.parse(readFileSync(ledgerPath, 'utf8')) : {};

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [relative(root, p)];
  });
}
const files = walk(root).filter((f) => f !== 'LICENSES.json');

const REQUIRED = [
  'earth/dawn.png', 'earth/blue-marble.jpg', 'earth/black-marble.jpg',
  'logo/galvis-main.svg', 'logo/galvis-full.svg', 'logo/galvis-wordmark-dark.svg',
  'sentinel/riau-plantation.jpg', 'sentinel/morowali-mining.jpg',
  'geo/sea.svg', 'geo/idn-adm1.svg',
  'solution/ESC/desktop/biodiversity.jpg', 'solution/DMR/desktop/risk.jpg', 'solution/ESRE/desktop/EnergyPotential-Desktop.jpg',
];

test('required assets exist', () => {
  for (const f of REQUIRED) assert.ok(files.includes(f), `missing ${f}`);
});

test('every asset has a licence entry', () => {
  for (const f of files) assert.ok(ledger[f], `no licence entry for ${f}`);
});

test('no non-commercial licences or GADM sources', () => {
  for (const [f, e] of Object.entries(ledger)) {
    assert.ok(!/\bNC\b|non-?commercial/i.test(e.license), `${f}: ${e.license}`);
    assert.ok(!/gadm/i.test(e.source), `${f}: ${e.source}`);
  }
});

test('Copernicus data carries attribution', () => {
  for (const [f, e] of Object.entries(ledger)) {
    if (f.startsWith('sentinel/')) assert.match(e.attribution ?? '', /Contains modified Copernicus Sentinel data/);
  }
});

test('no asset is larger than 5 MB', () => {
  for (const f of files) assert.ok(statSync(join(root, f)).size <= 5 * 1024 * 1024, f);
});
