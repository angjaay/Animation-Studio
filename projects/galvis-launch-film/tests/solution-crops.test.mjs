import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { CLEAN_CROPS, UI_BOXES, cleanCrop } from '../shared/solution-crops.js';

const overlaps = ([ax, ay, aw, ah], [bx, by, bw, bh]) => ax < bx + bw && bx < ax + aw && ay < by + bh && by < ay + ah;

test('every clean crop stays inside the image and clear of the map’s baked-in UI', () => {
  for (const [path, crop] of Object.entries(CLEAN_CROPS)) {
    const [x, y, w, h] = crop;
    assert.ok(x >= 0 && y >= 0 && x + w <= 1 && y + h <= 1, path);
    for (const box of UI_BOXES[path] ?? []) assert.ok(!overlaps(crop, box), `${path} crop hits ${box}`);
  }
});

test('cleanCrop refuses maps whose UI has not been measured', () => {
  assert.throws(() => cleanCrop('assets/solution/XYZ/desktop/unknown.jpg'));
});

test('act 02 crops every solution map with cleanCrop', () => {
  const html = readFileSync(new URL('../compositions/02-complexity.html', import.meta.url), 'utf8');
  const uses = [...html.matchAll(/image\('(assets\/solution\/[^']+)'(?:, GV\.cleanCrop\('([^']+)'\))?\)/g)];
  assert.ok(uses.length >= 4);
  for (const [, path, cropped] of uses) assert.equal(cropped, path, path);
});
