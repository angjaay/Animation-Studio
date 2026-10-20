// Audio/visual sync on the rendered animatic: each hit (24.0 reveal, 56.0 split, 112.0 sting) must land
// on the frame where the picture visibly changes: the same frame, and a change of at least 2 grey levels.
// Usage: node scripts/sync-check.mjs [renders/animatic-v1.mp4]
import { execFileSync } from 'node:child_process';
import { CUES } from '../shared/cues.js';

const MP4 = process.argv[2] ?? 'renders/animatic-v1.mp4';
const FPS = CUES.fps;
const FRAME = 1 / FPS;
const HITS = [...CUES.impacts.map((i) => i.t), 112.0];
const RATE = 48000, W = 160, H = 90;
const raw = (args) => execFileSync('ffmpeg', ['-v', 'error', '-i', MP4, ...args, '-'], { maxBuffer: 1 << 30 });

// Audio: 5 ms energy hops; the onset is the hop with the largest rise over the 50 ms before it.
const pcm = new Float32Array(raw(['-vn', '-ac', '1', '-ar', String(RATE), '-f', 'f32le']).buffer.slice(0));
const HOP = RATE * 0.005;
const energy = (h) => { let s = 0; for (let i = h * HOP; i < (h + 1) * HOP && i < pcm.length; i++) s += pcm[i] * pcm[i]; return s / HOP; };
const audioOnset = (t) => {
  let best = -1, bestRatio = 0;
  for (let h = Math.round((t - 0.1) / 0.005); h <= Math.round((t + 0.1) / 0.005); h++) {
    let before = 0;
    for (let k = 1; k <= 10; k++) before += energy(h - k);
    const ratio = energy(h) / (before / 10 + 1e-9);
    if (ratio > bestRatio) { bestRatio = ratio; best = h; }
  }
  return best * 0.005;
};

// Picture: mean absolute difference between consecutive frames (grey, 160x90). The change frame is the first
// one in ±0.2 s whose difference stands clear of the quiet frames before the hit.
const video = raw(['-an', '-vf', `scale=${W}:${H},format=gray`, '-f', 'rawvideo']);
const N = Math.floor(video.length / (W * H));
const diff = (f) => { let s = 0; const a = f * W * H, b = (f - 1) * W * H; for (let i = 0; i < W * H; i++) s += Math.abs(video[a + i] - video[b + i]); return s / (W * H); };
const visualChange = (t) => {
  const from = Math.round((t - 0.2) * FPS), to = Math.min(N - 1, Math.round((t + 0.2) * FPS));
  const quiet = [];
  for (let f = from - 6; f < from; f++) quiet.push(diff(f));
  quiet.sort((a, b) => a - b);
  const floor = quiet[Math.floor(quiet.length / 2)];
  for (let f = from; f <= to; f++) if (diff(f) > Math.max(2, floor * 3)) return f / FPS;
  return NaN;
};

let failed = false;
for (const t of HITS) {
  const a = audioOnset(t), v = visualChange(t);
  const off = v - a;
  const ok = Math.abs(a - t) <= 0.05 && Math.abs(off) < FRAME / 2;
  failed ||= !ok;
  console.log(`${ok ? 'PASS' : 'FAIL'} hit ${t.toFixed(1)} s: audio onset ${a.toFixed(3)} s, picture change ${v.toFixed(3)} s, offset ${(off * 1000).toFixed(0)} ms`);
}
process.exit(failed ? 1 : 0);
