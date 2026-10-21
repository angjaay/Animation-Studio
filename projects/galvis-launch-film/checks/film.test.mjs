// Gates on a full render: every event lands, every 'match' boundary matches, nothing freezes outside the
// holds, and format and loudness are to spec. FILM=renders/film-vN.mp4 npm run test:film
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { CUES } from '../shared/cues.js';
import { W, H, boxDiff, frameDiff, staticSpans } from '../scripts/lib/frames.mjs';

const FILM = process.env.FILM ?? 'renders/film-v1.mp4';
const EVENT_MIN = 8, MATCH_MAX = 6, STEP = 0.25, FPS = CUES.fps;

test(`${FILM} exists`, () => assert.ok(existsSync(FILM), `${FILM} missing: node scripts/render.mjs --name <stem>`));

const video = existsSync(FILM) ? execFileSync('ffmpeg', ['-v', 'error', '-i', FILM, '-an', '-vf', `scale=${W}:${H},format=gray`, '-f', 'rawvideo', '-'], { maxBuffer: 1 << 30 }) : null;
const frame = (t) => { const i = Math.round(t * FPS); return new Uint8Array(video.buffer, video.byteOffset + i * W * H, W * H); };

test('every event lands within one frame, in its box', { skip: !video }, () => {
  const misses = CUES.events.map((e) => [e, boxDiff(frame(e.t - 1 / FPS), frame(e.t + 1 / FPS), e.box)]).filter(([, d]) => d < EVENT_MIN);
  assert.deepEqual(misses.map(([e, d]) => `${e.t} ${e.what}: ${d.toFixed(1)}`), []);
});

test('every match boundary is continuous', { skip: !video }, () => {
  const jumps = CUES.boundaries.filter((b) => b.kind === 'match').map((b) => [b.t, frameDiff(frame(b.t - 1 / FPS), frame(b.t))]).filter(([, d]) => d > MATCH_MAX);
  assert.deepEqual(jumps.map(([t, d]) => `${t}: ${d.toFixed(1)}`), []);
});

test('nothing freezes for more than a second outside the holds', { skip: !video }, () => {
  const n = Math.round(CUES.duration / STEP);
  const diffs = Array.from({ length: n }, (_, i) => (i === 0 ? 255 : frameDiff(frame((i - 1) * STEP), frame(i * STEP))));
  assert.deepEqual(staticSpans(diffs, 1 / STEP, { holds: CUES.holds }), []);
});

test('format: 120.0 s, 1920x1080, 30 fps, AAC; -14 LUFS (±1), true peak ≤ -1 dBTP', { skip: !video }, () => {
  const { streams, format } = JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', FILM], { encoding: 'utf8' }));
  const v = streams.find((s) => s.codec_type === 'video'), a = streams.find((s) => s.codec_type === 'audio');
  assert.ok(Math.abs(Number(format.duration) - 120) <= 0.05);
  assert.deepEqual([v.width, v.height, v.r_frame_rate, a?.codec_name], [1920, 1080, '30/1', 'aac']);
  const err = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-i', FILM, '-map', '0:a', '-af', 'ebur128=peak=true', '-f', 'null', '-'], { encoding: 'utf8' }).stderr;
  const summary = err.slice(err.lastIndexOf('Summary:'));
  const lufs = Number(summary.match(/I:\s+(-?[\d.]+) LUFS/)[1]), peak = Number(summary.match(/Peak:\s+(-?[\d.]+) dBFS/)[1]);
  assert.ok(Math.abs(lufs + 14) <= 1 && peak <= -1, `${lufs} LUFS, ${peak} dBTP`);
});
