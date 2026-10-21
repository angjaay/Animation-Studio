import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bayerVisible } from '../shared/curtain.js';

const opened = (p) => {
  let n = 0;
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) if (bayerVisible(x, y, p)) n++;
  return n;
};

test('the curtain opens cell by cell in Bayer order', () => {
  assert.equal(opened(0), 0);
  assert.equal(opened(0.5), 8);
  assert.equal(opened(1), 16);
});

test('a radial curtain opens on a band moving out from its origin', async () => {
  const { radialProgress } = await import('../shared/curtain.js');
  const BAND = 0.2;
  // Closed everywhere at 0 and open everywhere at 1, near or far.
  for (const d of [0, 0.5, 1]) {
    assert.equal(radialProgress(0, d, BAND), 0);
    assert.equal(radialProgress(1, d, BAND), 1);
  }
  // Halfway: cells near the origin are open, far cells still closed; only the band is dithered.
  assert.equal(radialProgress(0.5, 0.1, BAND), 1);
  assert.equal(radialProgress(0.5, 0.9, BAND), 0);
  const mid = radialProgress(0.5, 0.5, BAND);
  assert.ok(mid > 0 && mid < 1, `band cell is partly open, got ${mid}`);
  // Never more than a band's worth of the frame is mid-dissolve.
  const steps = 101, partial = Array.from({ length: steps }, (_, i) => radialProgress(0.5, i / (steps - 1), BAND)).filter((q) => q > 0 && q < 1).length;
  assert.ok(partial / steps <= BAND + 0.02, `${partial} of ${steps} distances mid-dissolve`);
});
