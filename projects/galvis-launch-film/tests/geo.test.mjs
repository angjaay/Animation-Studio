import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const pts = JSON.parse(readFileSync(new URL('../assets/geo/sea-points.json', import.meta.url), 'utf8'));

test('signal points: 2500 deterministic land points inside the 1920x1080 frame', () => {
  assert.equal(pts.length, 2500);
  for (const [x, y] of pts) assert.ok(x >= 0 && x <= 1920 && y >= 0 && y <= 1080, `${x},${y}`);
});
