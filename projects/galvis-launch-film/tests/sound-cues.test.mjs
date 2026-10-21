import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { CUES, actWindow } from '../shared/cues.js';
import COPY from '../shared/copy.json' with { type: 'json' };
import { buildSoundCues, serialize, EXTRA_THINGS } from '../scripts/export-sound-cues.mjs';

const FPS = 30;
const out = buildSoundCues();
const E = out.events;
const at = (t, kind) => E.filter((e) => e.kind === kind && Math.abs(e.f - t * FPS) < 1e-6);
const one = (t, kind) => {
  const hit = at(t, kind);
  assert.equal(hit.length, 1, `${kind} at ${t}s`);
  return hit[0];
};
const thingOf = (e) => e.id.split(':')[1];

test('header and event shape', () => {
  assert.equal(out.fps, 30);
  assert.equal(out.total, 3600);
  const KINDS = ['veil', 'impact', 'riser.end', 'stopdown', 'land', 'whoosh', 'wipe', 'key', 'step', 'ping', 'pop', 'bell', 'comet', 'sting', 'section'];
  for (const e of E) {
    assert.ok(KINDS.includes(e.kind), `${e.id}: kind ${e.kind}`);
    assert.ok(Number.isFinite(e.f) && e.f >= 0 && e.f < out.total, `${e.id}: f ${e.f}`);
    assert.match(e.id, /^act\d\d:[a-z0-9]+:\d+$/, e.id);
  }
});

test('ids are unique and the list is sorted by frame', () => {
  assert.equal(new Set(E.map((e) => e.id)).size, E.length);
  for (let i = 1; i < E.length; i++) assert.ok(E[i].f >= E[i - 1].f, `${E[i].id} out of order`);
});

test('every cues.json event appears exactly once, at round(t*30)', () => {
  const key = (act, f) => `${act}@${f}`;
  const want = new Map();
  for (const e of CUES.events) {
    const k = key(e.act.slice(0, 5), Math.round(e.t * FPS));
    want.set(k, (want.get(k) ?? 0) + 1);
  }
  const got = new Map();
  for (const e of E.filter((x) => !EXTRA_THINGS.includes(thingOf(x)))) {
    const k = key(e.id.slice(0, 5), e.f);
    got.set(k, (got.get(k) ?? 0) + 1);
  }
  assert.deepEqual([...got].sort(), [...want].sort());
  assert.equal(E.filter((x) => !EXTRA_THINGS.includes(thingOf(x))).length, CUES.events.length);
});

test('one section event at every act start', () => {
  const s = E.filter((e) => e.kind === 'section');
  assert.deepEqual(s.map((e) => e.f), CUES.acts.map((a) => actWindow(a.id).start * FPS));
  assert.deepEqual(s.map((e) => e.id), CUES.acts.map((a) => `${a.id.slice(0, 5)}:section:1`));
});

test('impact only at 24.0 and 56.0 s, each with riser.end on the frame and stopdown 0.25 s before', () => {
  assert.deepEqual(E.filter((e) => e.kind === 'impact').map((e) => e.f), [720, 1680]);
  assert.deepEqual(E.filter((e) => e.kind === 'riser.end').map((e) => e.f), [720, 1680]);
  assert.deepEqual(E.filter((e) => e.kind === 'stopdown').map((e) => e.f), [720 - 7.5, 1680 - 7.5]);
  for (const t of [24, 56]) {
    assert.equal(one(t, 'impact').f, one(t, 'riser.end').f);
    assert.equal(one(t - 0.25, 'stopdown').f, (t - 0.25) * FPS);
  }
});

test('one key per prompt character of act 06, 0.025 s apart from 66.0 s', () => {
  const prompt = COPY['workspace.prompt'];
  const keys = E.filter((e) => e.kind === 'key');
  assert.equal(keys.length, prompt.length);
  keys.forEach((k, i) => {
    assert.equal(k.id, `act06:key:${i + 1}`);
    assert.ok(Math.abs(k.f / FPS - (66 + i * 0.025)) < 1e-6, `key ${i + 1} at ${k.f / FPS}`);
  });
  assert.equal(keys[0].f, 1980);
});

test('typing constants still match the picture (compositions/06-workspace.html)', () => {
  const src = readFileSync(new URL('../compositions/06-workspace.html', import.meta.url), 'utf8');
  assert.match(src, /typeFrom = A\(34\), typeTo = A\(34\) \+ prompt\.length \* 0\.025/);
  assert.match(src, /Math\.round\(\(t - typeFrom\) \/ 0\.025\)/);
  assert.equal(actWindow('act06-workspace').start + 4, 66);
});

test('bells carry the sonic logo A4 / D5 / F#5 at 58.0 / 58.5 / 59.0 s; sting at 112.5 s', () => {
  assert.equal(E.filter((e) => e.kind === 'bell').length, 3);
  assert.equal(one(58, 'bell').pitch, 'A4');
  assert.equal(one(58.5, 'bell').pitch, 'D5');
  assert.equal(one(59, 'bell').pitch, 'F#5');
  assert.equal(E.filter((e) => e.kind === 'sting').length, 1);
  assert.equal(one(112.5, 'sting').f, 3375);
});

test('wipes at 62 / 76 / 90 / 106 s pan from their origin (x/960 - 1)', () => {
  const H = 387.6, END8 = 960 + (1500 - 960) * 1.06;
  const want = [[62, H], [76, 960], [90, END8], [106, 960]];
  assert.equal(E.filter((e) => e.kind === 'wipe').length, 4);
  for (const [t, x] of want) assert.ok(Math.abs(one(t, 'wipe').pan - (x / 960 - 1)) < 1e-3, `wipe ${t}`);
});

test('whoosh at the match boundaries 12.0 and 34.0 s', () => {
  for (const t of [12, 34]) {
    const m = at(t, 'whoosh').filter((e) => thingOf(e) === 'match');
    assert.equal(m.length, 1, `match whoosh at ${t}`);
  }
});

test('picture changes without a cues.json event get a whoosh cue (takeover 69.7 s, clears 103.75 / 105.7 s)', () => {
  assert.equal(E.find((e) => e.id === 'act06:takeover:1').f, 69.7 * FPS);
  assert.deepEqual(E.filter((e) => thingOf(e) === 'clear').map((e) => [e.id, e.kind, e.f]),
    [['act08:clear:1', 'whoosh', 103.75 * FPS], ['act08:clear:2', 'whoosh', 105.7 * FPS]]);
  const src = readFileSync(new URL('../compositions/08-enterprise.html', import.meta.url), 'utf8');
  assert.match(src, /flashTo = flashFrom \+ 0\.75/);
  assert.match(src, /A\(53, 3\) \+ 0\.2/);
  assert.equal(actWindow('act08-enterprise').start + 4 + 4 * 2.25 + 0.75, 103.75);
});

test('audio/cues.json on disk is what the script generates', () => {
  const disk = readFileSync(new URL('../audio/cues.json', import.meta.url), 'utf8');
  assert.equal(disk, serialize(out));
});

test('kinds of the cues that had no obvious home, and the stop-down holes stay free of whooshes', () => {
  const byF = (f) => E.filter((e) => e.f === f);
  assert.ok(byF(3240).some((e) => e.kind === 'land'), 'full chord 108.0 s is land');
  assert.equal(E.find((e) => e.id === 'act10:converge:1').f, 3360);
  assert.equal(E.find((e) => e.id === 'act10:converge:1').kind, 'whoosh');
  const veil = E.find((e) => e.id === 'act02:veil:1');
  assert.equal(veil.kind, 'veil');
  assert.equal(veil.f, 705);
  for (const [a, b] of [[705, 720], [1665, 1680]]) {
    assert.deepEqual(E.filter((e) => e.kind === 'whoosh' && e.f >= a && e.f <= b), [], `whoosh in ${a}..${b}`);
  }
});
