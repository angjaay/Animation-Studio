import { test } from 'node:test';
import assert from 'node:assert/strict';
import { W, H, frameDiff, boxDiff, staticSpans } from '../scripts/lib/frames.mjs';

const frame = (v) => new Uint8Array(W * H).fill(v);

test('frames are 160x90 grey', () => { assert.equal(W, 160); assert.equal(H, 90); });

test('frameDiff is the mean absolute grey difference', () => {
  assert.equal(frameDiff(frame(10), frame(10)), 0);
  assert.equal(frameDiff(frame(10), frame(30)), 20);
});

test('boxDiff only looks inside the box (1920x1080 coordinates)', () => {
  const a = frame(0), b = frame(0);
  for (let y = 0; y < 9; y++) for (let x = 0; x < 16; x++) b[y * W + x] = 90; // top-left 192x108
  assert.equal(boxDiff(a, b, [0, 0, 192, 108]), 90);
  assert.equal(boxDiff(a, b, [960, 540, 192, 108]), 0);
});

test('staticSpans finds frozen spans longer than the minimum, outside holds', () => {
  const fps = 4; // diffs[i] is the change into frame i
  const diffs = [5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5]; // frames 1..8 identical = 0.25..2.0 s; frames 9..12 = 0.75 s
  assert.deepEqual(staticSpans(diffs, fps), [[0.25, 2]]);
  assert.deepEqual(staticSpans(diffs, fps, { holds: [[0, 2.5]] }), []);
  assert.deepEqual(staticSpans(diffs, fps, { t0: 100 }), [[100.25, 102]]);
});
