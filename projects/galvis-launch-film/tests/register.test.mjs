import { test } from 'node:test';
import assert from 'node:assert/strict';
import { register } from '../shared/register.js';

function fakeEnv() {
  const errors = [];
  const tl = { _d: 0, set(_t, _v, pos) { this._d = Math.max(this._d, pos ?? 0); return this; }, duration() { return this._d; } };
  globalThis.window = { __timelines: {} };
  globalThis.gsap = { timeline: () => tl };
  const orig = console.error;
  console.error = (...a) => errors.push(a.join(' '));
  return { tl, errors, restore: () => { console.error = orig; } };
}

test('a build that throws still registers the timeline and logs once', async () => {
  const env = fakeEnv();
  await register('act99-test', () => { throw new Error('image failed'); }, 6);
  env.restore();
  assert.ok(window.__timelines['act99-test']);
  assert.equal(env.errors.length, 1);
  assert.match(env.errors[0], /act99-test/);
});

test('the timeline is padded to the act duration', async () => {
  const env = fakeEnv();
  await register('act99-test', () => {}, 6);
  env.restore();
  assert.equal(window.__timelines['act99-test'].duration(), 6);
});

test('a timeline longer than its act is reported', async () => {
  const env = fakeEnv();
  await register('act99-test', (tl) => { tl.set({}, {}, 7.5); }, 6);
  env.restore();
  assert.equal(env.errors.length, 1);
  assert.match(env.errors[0], /overruns/);
});
