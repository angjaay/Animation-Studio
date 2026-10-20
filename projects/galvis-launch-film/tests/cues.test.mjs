import { test } from 'node:test';
import assert from 'node:assert/strict';
import { barStart, actWindow, ACTS, IMPACTS, DURATION } from '../shared/cues.js';

test('bar start', () => {
  assert.equal(barStart(1), 0);
  assert.equal(barStart(13), 24);
  assert.equal(barStart(29), 56);
  assert.equal(barStart(57), 112);
});

test('acts are contiguous and cover 0..120', () => {
  let t = 0;
  for (const a of ACTS) {
    const w = actWindow(a.id);
    assert.equal(w.start, t);
    t = w.end;
  }
  assert.equal(t, DURATION);
});

test('act windows match spec', () => {
  assert.deepEqual(actWindow('act04-core'), { start: 34, end: 52, duration: 18 });
  assert.deepEqual(actWindow('act10-final'), { start: 112, end: 120, duration: 8 });
});

test('styleframeAt lies inside its act', () => {
  for (const a of ACTS) {
    const w = actWindow(a.id);
    assert.ok(a.styleframeAt >= w.start && a.styleframeAt < w.end, a.id);
  }
});

test('impacts on bar downbeats', () => {
  assert.deepEqual(IMPACTS.map((i) => i.t), [24, 56]);
});
