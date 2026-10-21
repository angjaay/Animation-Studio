import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const pts = JSON.parse(readFileSync(new URL('../assets/geo/sea-points.json', import.meta.url), 'utf8'));

test('signal points: 2500 deterministic land points inside the 1920x1080 frame', () => {
  assert.equal(pts.length, 2500);
  for (const [x, y] of pts) assert.ok(x >= 0 && x <= 1920 && y >= 0 && y <= 1080, `${x},${y}`);
});

test('Riau province outline is a single 600x600 path', () => {
  const svg = readFileSync(new URL('../assets/geo/province-riau.svg', import.meta.url), 'utf8');
  assert.match(svg, /viewBox="0 0 600 600"/);
  assert.equal((svg.match(/<path\b/g) || []).length, 1);
});

test('globe points carry their country, aligned with sea-points.json (same seed and order)', async () => {
  const { readFileSync } = await import('node:fs');
  const g = JSON.parse(readFileSync(new URL('../assets/geo/globe-sea.json', import.meta.url), 'utf8'));
  const projected = JSON.parse(readFileSync(new URL('../assets/geo/sea-points.json', import.meta.url), 'utf8'));
  const SEA = ['IDN', 'MYS', 'SGP', 'BRN', 'PHL', 'THA', 'VNM', 'LAO', 'KHM', 'MMR', 'TLS'];
  assert.equal(g.countries.length, g.points.length);
  assert.equal(g.points.length, projected.length);
  assert.ok(g.countries.every((c) => SEA.includes(c)));
  assert.ok(g.countries.filter((c) => c === 'IDN').length > 1000);
});
