import { test } from 'node:test';
import assert from 'node:assert/strict';
import { offenders } from './lib/copy-scan.mjs';

const wrap = (js, type = '') => `<template><script${type}>${js}</script></template>`;

test('double-quoted copy in a script is caught', () => {
  assert.deepEqual(offenders(wrap('el.textContent = "Two words here";')), ['Two words here']);
});

test('template copy around an interpolation is caught', () => {
  assert.deepEqual(offenders(wrap('el.textContent = `${n} steps done`;')), ['steps done']);
});

test('copy inside a typed script block is caught', () => {
  assert.deepEqual(offenders(wrap("el.textContent = 'Hard coded line';", ' type="module"')), ['Hard coded line']);
});

test('CSS values and GV.COPY lookups are not copy', () => {
  assert.deepEqual(offenders(wrap("gsap.to(el, { boxShadow: '0 0 0 3px #1FAFA1, 0 0 40px rgba(31,175,161,0.8)' }); el.textContent = GV.COPY['world.line1'];")), []);
});

test('font family names are not copy', () => {
  assert.deepEqual(offenders(wrap("svgEl('text', { 'font-family': 'JetBrains Mono' }); el.style.fontFamily = 'Plus Jakarta Sans';")), []);
});
