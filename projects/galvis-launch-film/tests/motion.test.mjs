import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cubicBezier, UI_EASE, since } from '../shared/motion/ease.js';
import { vortexPoint, lerpRect } from '../shared/motion/paths.js';

test('UI_EASE is cubic-bezier(.2,0,0,1): pinned ends, fast start, monotonic', () => {
  assert.equal(UI_EASE(0), 0);
  assert.equal(UI_EASE(1), 1);
  // x(u) = 0.6u(1-u)^2 + u^3 = 0.5 at u ≈ 0.782, so y = 3u^2 - 2u^3 ≈ 0.878.
  assert.ok(Math.abs(UI_EASE(0.5) - 0.878) <= 0.005, `UI_EASE(0.5) = ${UI_EASE(0.5)}`);
  let prev = -1;
  for (let i = 0; i <= 100; i++) { const y = UI_EASE(i / 100); assert.ok(y >= prev - 1e-9); prev = y; }
});

test('cubicBezier(0,0,1,1) is linear', () => {
  const lin = cubicBezier(0, 0, 1, 1);
  for (const x of [0.1, 0.37, 0.9]) assert.ok(Math.abs(lin(x) - x) < 1e-4);
});

test('since gives eased progress of a change that starts at t0', () => {
  assert.equal(since(5, 6, 1), 0);
  assert.equal(since(8, 6, 1), 1);
  assert.equal(since(6.5, 6, 1, (k) => k), 0.5);
});

test('vortexPoint spirals from the start into the centre and shrinks', () => {
  assert.deepEqual(vortexPoint([0, 0], [100, 0], 0), { x: 0, y: 0, scale: 1, rotation: 0 });
  const end = vortexPoint([0, 0], [100, 0], 1);
  assert.ok(Math.abs(end.x - 100) < 1e-9 && Math.abs(end.y) < 1e-9);
  assert.ok(Math.abs(end.scale - 0.15) < 1e-9);
  const mid = vortexPoint([0, 0], [100, 0], 0.5);
  assert.ok(Math.hypot(mid.x - 100, mid.y) < 100 && Math.abs(mid.y) > 1, 'midway it is closer and off the straight line');
});

test('lerpRect interpolates every field', () => {
  assert.deepEqual(lerpRect({ x: 0, y: 0, w: 10, h: 20, r: 0 }, { x: 10, y: 20, w: 30, h: 40, r: 10 }, 0.5), { x: 5, y: 10, w: 20, h: 30, r: 5 });
});

test('the act 05 → 06 handoff disc sits where the pushed camera puts the left branch end', async () => {
  const { HANDOFF, CAM_END } = await import('../shared/handoff.js');
  assert.equal(CAM_END, 1.06);
  assert.ok(Math.abs(HANDOFF.workspace.cx - 387.6) < 1e-9 && Math.abs(HANDOFF.workspace.cy - 836.8) < 1e-9);
  assert.ok(Math.abs(HANDOFF.workspace.r - 26.5) < 1e-9);
});
