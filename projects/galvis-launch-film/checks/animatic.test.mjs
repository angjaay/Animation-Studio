// Checks the rendered animatic (run after `node scripts/animatic.mjs`): npm run test:animatic
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const MP4 = 'renders/animatic-v1.mp4';

const probe = () => JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', MP4], { encoding: 'utf8' }));

test('animatic is rendered', () => {
  assert.ok(existsSync(MP4), `${MP4} is missing; run node scripts/animatic.mjs`);
});

test('animatic is 120.0 s of 1920x1080 at 30 fps with an audio stream', () => {
  const { streams, format } = probe();
  const video = streams.find((s) => s.codec_type === 'video');
  const audio = streams.find((s) => s.codec_type === 'audio');
  assert.ok(Math.abs(Number(format.duration) - 120) <= 0.05, `duration ${format.duration}`);
  assert.equal(video.width, 1920);
  assert.equal(video.height, 1080);
  assert.equal(video.r_frame_rate, '30/1');
  assert.ok(audio, 'no audio stream');
  assert.equal(audio.codec_name, 'aac');
});

test('animatic audio is at -14 LUFS (±1) with a true peak at or under -1 dBTP', () => {
  const err = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-i', MP4, '-map', '0:a', '-af', 'ebur128=peak=true', '-f', 'null', '-'], { encoding: 'utf8' }).stderr;
  const summary = err.slice(err.lastIndexOf('Summary:'));
  const lufs = Number(summary.match(/I:\s+(-?[\d.]+) LUFS/)[1]);
  const peak = Number(summary.match(/Peak:\s+(-?[\d.]+) dBFS/)[1]);
  assert.ok(Math.abs(lufs + 14) <= 1, `integrated ${lufs} LUFS`);
  assert.ok(peak <= -1, `true peak ${peak} dBTP`);
});
