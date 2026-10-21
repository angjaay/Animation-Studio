import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ditherCell, ditherImageData } from '../shared/dither/reference.js';

const CW = 640, CH = 360;
function sample(seed) {
  const d = new Uint8ClampedArray(CW * CH * 4);
  let a = seed;
  for (let i = 0; i < d.length; i++) { a = (a * 1664525 + 1013904223) >>> 0; d[i] = i % 4 === 3 ? 255 : a >>> 24; }
  return d;
}

for (const palette of ['landing', 'brand']) {
  test(`in-place dither equals ditherCell (${palette})`, () => {
    const src = sample(3);
    const out = src.slice();
    ditherImageData(out, CW, CH, { palette, resolve: 0.25 });
    for (let cy = 0; cy < CH; cy += 7) for (let cx = 0; cx < CW; cx += 5) {
      const i = (cy * CW + cx) * 4;
      assert.deepEqual([out[i], out[i + 1], out[i + 2]], ditherCell([src[i], src[i + 1], src[i + 2]], cx, cy, { palette, resolve: 0.25 }));
    }
  });
}

for (const palette of ['brand', 'landing']) test(`640x360 cells dither in at most 20 ms (${palette}, median of 5)`, () => {
  const src = sample(9);
  const times = [];
  for (let r = 0; r < 6; r++) {
    const d = src.slice();
    const t0 = performance.now();
    ditherImageData(d, CW, CH, { palette });
    times.push(performance.now() - t0);
  }
  times.shift();
  times.sort((x, y) => x - y);
  assert.ok(times[2] <= 20, `median ${times[2].toFixed(1)} ms`);
});
