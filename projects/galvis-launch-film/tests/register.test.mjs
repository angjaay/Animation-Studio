import { test } from 'node:test';
import assert from 'node:assert/strict';
import { register } from '../shared/register.js';

function fakeEnv() {
  const errors = [];
  const root = { style: {} };
  globalThis.document = { getElementById: (el) => (el === 'act99-test-root' ? root : null) };
  // Like a real GSAP timeline, the fake is a thenable that settles only when it finishes playing (never, here).
  const tl = { _d: 0, set(_t, _v, pos) { this._d = Math.max(this._d, pos ?? 0); return this; }, duration() { return this._d; }, then() {} };
  globalThis.window = { __timelines: {} };
  globalThis.gsap = { timeline: () => tl };
  const orig = console.error;
  console.error = (...a) => errors.push(a.join(' '));
  return { tl, errors, root, restore: () => { console.error = orig; } };
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

test('the build is announced to the runtime synchronously and resolves once registered', async () => {
  const env = fakeEnv();
  let release;
  const pending = register('act99-test', () => new Promise((r) => { release = r; }), 6);
  const hold = window.__hf?.buildReady?.['act99-test'];
  assert.ok(hold && typeof hold.then === 'function', 'no buildReady hold registered before the first await');
  assert.equal(window.__timelines['act99-test'], undefined);
  release();
  const settled = await Promise.race([hold.then(() => true), new Promise((r) => setTimeout(() => r(false), 200))]);
  assert.ok(settled, 'buildReady hold never settled (it must not adopt the thenable timeline)');
  env.restore();
  assert.ok(window.__timelines['act99-test']);
});

test('the act root stays hidden while building and after a failed build', async () => {
  let env = fakeEnv();
  let release;
  const pending = register('act99-test', () => new Promise((r) => { release = r; }), 6);
  assert.equal(env.root.style.visibility, 'hidden');
  release();
  await pending;
  assert.equal(env.root.style.visibility, 'visible');
  env.restore();

  env = fakeEnv();
  await register('act99-test', () => { throw new Error('image failed'); }, 6);
  env.restore();
  assert.equal(env.root.style.visibility, 'hidden');
});
