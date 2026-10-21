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
    assert.ok(html.includes(`window.__timelines["${act.id}"]`) || html.includes(`GV.register('${act.id}'`));
  });
}

// A frame callback added before an await reaches code declared after it: if that await rejects (a missing
// asset), every seek into the act throws. Each act adds its frame clock after its last await.
for (const act of ACTS) {
  test(`${act.file} adds its frame clock after its last await`, () => {
    const html = read(`compositions/${act.file}`);
    const clock = html.indexOf('tl.to(clock');
    if (clock < 0) return;
    assert.ok(html.lastIndexOf('await ') < clock, `${act.file}: an await follows the frame clock`);
  });
}

test('act 03 moves a camera wrapper that leaves the dithered dust screen-locked', () => {
  const html = read('compositions/03-reveal.html');
  assert.doesNotMatch(html, /\$\('root'\),\s*\{[^}]*scale/, 'the root (with the dust) is scaled');
  const cam = html.match(/<div id="act03-reveal-cam">([\s\S]*?)<\/div>\s*<div id="act03-reveal-inside">/);
  assert.ok(cam, 'no #act03-reveal-cam wrapper before the navy layer');
  assert.ok(!cam[1].includes('act03-reveal-dust'), 'the dust is inside the camera');
});
