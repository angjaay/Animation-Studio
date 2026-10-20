import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';

const dir = new URL('../compositions/', import.meta.url);
const PHRASE = /[A-Za-z]{2,}(\s+[A-Za-z&/]{2,})+/;

function visibleStrings(html) {
  const body = html
    .replace(/<style>[\s\S]*?<\/style>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\/\/[^\n]*/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  const text = [...body.replace(/<script>[\s\S]*?<\/script>/g, '').matchAll(/>([^<]+)</g)].map((m) => m[1]);
  const scripts = [...body.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]).join('\n');
  const literals = [...scripts.matchAll(/'([^'\n]*)'|`([^`\n]*)`/g)].map((m) => m[1] ?? m[2]);
  return [...text, ...literals].map((s) => s.trim()).filter(Boolean);
}

for (const file of readdirSync(dir).filter((f) => f.endsWith('.html'))) {
  test(`${file} takes its on-screen copy from copy.json`, () => {
    const offenders = visibleStrings(readFileSync(new URL(file, dir), 'utf8')).filter((s) => PHRASE.test(s) && !/[{}$<>=;#()]|GV\.|\bcopy\b/.test(s));
    assert.deepEqual(offenders, []);
  });
}
