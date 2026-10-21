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

// Width and height from a baseline/progressive JPEG's SOF marker.
const jpegSize = (file) => {
  const b = readFileSync(file);
  for (let i = 2; i < b.length;) {
    const marker = b[i + 1], len = b.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xc2) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
    i += 2 + len;
  }
  throw new Error(`no SOF in ${file}`);
};

test('act 08 never upscales a clear strip more than 2× (clear means sharp)', () => {
  const html = readFileSync(new URL('../compositions/08-enterprise.html', import.meta.url), 'utf8');
  // A strip is 1920x600 and draws 86 % of its crop's width (7 % drift margin each side), cover-fitted.
  const paths = [...html.matchAll(/clear\(`\$\{S\}\/([^`]+)`, clean\('\1'\)\)/g)].map((m) => `assets/solution/${m[1]}`);
  assert.ok(paths.length >= 3, `found ${paths.length} clear strips`);
  for (const path of paths) {
    const [iw, ih] = jpegSize(new URL(`../${path}`, import.meta.url));
    const [, , fw, fh] = cleanCrop(path);
    const up = Math.max(1920 / (iw * fw * 0.86), 600 / (ih * fh));
    assert.ok(up <= 2, `${path} is upscaled ${up.toFixed(2)}×`);
  }
});
