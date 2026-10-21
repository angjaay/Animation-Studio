// Snapshots at given global times, returned as 160x90 grey frames keyed by time.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { W, H } from './frames.mjs';

export const r3 = (t) => Math.round(t * 1000) / 1000;

export function snapshot(times, { keepDir } = {}) {
  const dir = keepDir ?? mkdtempSync(join(tmpdir(), 'qa-'));
  const uniq = [...new Set(times.map(r3))].sort((a, b) => a - b);
  execFileSync('npx', ['--yes', 'hyperframes@0.8.181', 'snapshot', '--at', uniq.join(','), '--no-end', '--no-browser-gpu', '--timeout', '60000', '--output', dir], { stdio: ['ignore', 'ignore', 'inherit'] });
  const files = readdirSync(dir).filter((f) => /^frame-\d+-at-.*\.png$/.test(f)).sort();
  if (files.length !== uniq.length) throw new Error(`expected ${uniq.length} snapshots, got ${files.length}`);
  const frames = new Map();
  files.forEach((f, i) => {
    const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', join(dir, f), '-vf', `scale=${W}:${H},format=gray`, '-f', 'rawvideo', '-'], { maxBuffer: 1 << 24 });
    frames.set(uniq[i], { grey: new Uint8Array(raw.buffer, raw.byteOffset, W * H), file: join(dir, f) });
  });
  return { dir, frames };
}
