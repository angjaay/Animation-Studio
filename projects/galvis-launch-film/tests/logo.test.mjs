import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (p) => readFileSync(new URL(`../assets/logo/${p}`, import.meta.url), 'utf8');
const viewBox = (svg) => svg.match(/viewBox="([^"]+)"/)[1];
const paths = (svg) => (svg.match(/<path\b/g) || []).length;
const PARTS = ['plates', 'hexagon', 'arrow'];

test('the three anatomy parts exist', () => {
  for (const p of PARTS) assert.ok(existsSync(new URL(`../assets/logo/parts/${p}.svg`, import.meta.url)), p);
});

test('parts share the original viewBox so they stack into the full mark', () => {
  const main = read('galvis-main.svg');
  for (const p of PARTS) assert.equal(viewBox(read(`parts/${p}.svg`)), viewBox(main), p);
});

test('parts together hold every path of the original', () => {
  const main = read('galvis-main.svg');
  const sum = PARTS.reduce((n, p) => n + paths(read(`parts/${p}.svg`)), 0);
  assert.equal(sum, paths(main));
});

test('each part keeps the gradients it references', () => {
  for (const p of PARTS) {
    const svg = read(`parts/${p}.svg`);
    for (const [, id] of svg.matchAll(/url\(#([^)]+)\)/g)) assert.ok(svg.includes(`id="${id}"`), `${p}: ${id}`);
  }
});

test('scopeIds prefixes gradient ids and their references', async () => {
  const { scopeIds } = await import('../shared/svg-scope.js');
  const plates = scopeIds(read('parts/plates.svg'), 'act04');
  const ids = [...plates.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
  assert.ok(ids.length > 0 && ids.every((i) => i.startsWith('act04-')));
  for (const [, ref] of plates.matchAll(/url\(#([^)]+)\)/g)) assert.ok(ids.includes(ref), ref);
});
