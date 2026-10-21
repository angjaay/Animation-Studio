import { test } from 'node:test';
import assert from 'node:assert/strict';
import { barStart, actWindow, ACTS, IMPACTS, DURATION, CUES } from '../shared/cues.js';

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

test('events sit on the 1/8 grid inside their act, with a box', () => {
  for (const e of CUES.events) {
    assert.ok(Number.isInteger(Math.round(e.t * 4 * 1e6) / 1e6), `${e.t} off grid`);
    const w = actWindow(e.act);
    assert.ok(e.t >= w.start && e.t < w.end, `${e.t} outside ${e.act}`);
    assert.equal(e.box.length, 4, `${e.t} box`);
  }
});

test('boundaries are every act start after 0, cut only at 24 and 112', () => {
  assert.deepEqual(CUES.boundaries.map((b) => b.t), [12, 24, 34, 52, 62, 76, 90, 106, 112]);
  assert.deepEqual(CUES.boundaries.filter((b) => b.kind === 'cut').map((b) => b.t), [24, 112]);
  assert.ok(CUES.boundaries.every((b) => b.kind === 'match' || b.kind === 'cut'));
});

test('holds are ordered spans inside the film', () => {
  for (const [a, b] of CUES.holds) assert.ok(a < b && a >= 0 && b <= DURATION);
});

test('act 02 checks every plate landing (12.5 … 15.5)', () => {
  const lands = CUES.events.filter((e) => e.act === 'act02-complexity' && /^plate \d lands$/.test(e.what)).map((e) => e.t);
  assert.deepEqual(lands, [12.5, 13, 13.5, 14, 14.5, 15, 15.5]);
});
