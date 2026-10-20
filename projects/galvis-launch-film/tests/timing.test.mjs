import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { ACTS, actWindow, DURATION } from '../shared/cues.js';

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const index = read('index.html');

function hostFor(id) {
  const m = index.match(new RegExp(`<div[^>]*data-composition-id="${id}"[^>]*>`, 's'));
  assert.ok(m, `no host for ${id}`);
  const attr = (name) => m[0].match(new RegExp(`${name}="([^"]*)"`))?.[1];
  return { src: attr('data-composition-src'), start: Number(attr('data-start')), duration: Number(attr('data-duration')) };
}

test('root duration matches cues', () => {
  assert.match(index, new RegExp(`data-composition-id="galvis-launch"[^>]*data-duration="${DURATION}"`, 's'));
});

for (const act of ACTS) {
  test(`host ${act.id} matches cues.json`, () => {
    const host = hostFor(act.id);
    const w = actWindow(act.id);
    assert.equal(host.src, `compositions/${act.file}`);
    assert.equal(host.start, w.start);
    assert.equal(host.duration, w.duration);
  });

  test(`composition ${act.file} registers ${act.id}`, () => {
    const html = read(`compositions/${act.file}`);
    assert.match(html, /<template>/);
    assert.ok(html.includes(`data-composition-id="${act.id}"`));
    assert.ok(html.includes(`window.__timelines["${act.id}"]`));
  });
}
