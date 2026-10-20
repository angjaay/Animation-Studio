import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ditherPixel, BAYER4, BRAND_RAMP } from '../shared/dither/reference.js';

function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

test('Bayer matrix is the standard 4x4', () => {
  assert.deepEqual(BAYER4, [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]);
});

test('landing palette quantizes every channel to 4 levels', () => {
  const rnd = mulberry32(7);
  for (let i = 0; i < 200; i++) {
    const rgb = [rnd() * 255, rnd() * 255, rnd() * 255].map(Math.round);
    const out = ditherPixel(rgb, Math.floor(rnd() * 1920), Math.floor(rnd() * 1080), { palette: 'landing' });
    for (const c of out) assert.ok([0, 85, 170, 255].includes(c), `${rgb} -> ${out}`);
  }
});

test('black and white stay black and white in both palettes', () => {
  for (const palette of ['landing', 'brand']) {
    assert.deepEqual(ditherPixel([0, 0, 0], 5, 5, { palette }), palette === 'brand' ? hex(BRAND_RAMP[0]) : [0, 0, 0]);
    assert.deepEqual(ditherPixel([255, 255, 255], 5, 5, { palette }), [255, 255, 255]);
  }
});

test('mid grey keeps its mean over one Bayer tile', () => {
  let sum = 0;
  for (let y = 0; y < 12; y++) for (let x = 0; x < 12; x++) sum += ditherPixel([128, 128, 128], x, y, {})[0];
  assert.ok(Math.abs(sum / 144 - 128) <= 8, `mean ${sum / 144}`);
});

test('all pixels inside one 3x3 cell are equal', () => {
  const first = ditherPixel([100, 150, 200], 3, 6, { cell: 3 });
  for (let y = 6; y < 9; y++) for (let x = 3; x < 6; x++) assert.deepEqual(ditherPixel([100, 150, 200], x, y, { cell: 3 }), first);
});

test('brand palette only emits ramp colours', () => {
  const ramp = BRAND_RAMP.map(hex).map(String);
  const rnd = mulberry32(3);
  for (let i = 0; i < 200; i++) {
    const out = ditherPixel([rnd() * 255, rnd() * 255, rnd() * 255].map(Math.round), i, i * 3, { palette: 'brand' });
    assert.ok(ramp.includes(String(out)), String(out));
  }
});

test('resolve 1 returns the source pixel', () => {
  assert.deepEqual(ditherPixel([12, 200, 99], 4, 4, { resolve: 1 }), [12, 200, 99]);
});
