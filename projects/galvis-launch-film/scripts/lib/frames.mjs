// Pure frame analysis for the QA scripts. Frames are 160x90 greyscale (Uint8Array).
export const W = 160, H = 90;
const SCALE = 1920 / W;

export function frameDiff(a, b) {
  let s = 0;
  for (let i = 0; i < W * H; i++) s += Math.abs(a[i] - b[i]);
  return s / (W * H);
}

// Mean absolute difference inside a box given in 1920x1080 coordinates.
export function boxDiff(a, b, [x, y, w, h]) {
  const x0 = Math.max(0, Math.floor(x / SCALE)), y0 = Math.max(0, Math.floor(y / SCALE));
  const x1 = Math.min(W, Math.ceil((x + w) / SCALE)), y1 = Math.min(H, Math.ceil((y + h) / SCALE));
  let s = 0, n = 0;
  for (let yy = y0; yy < y1; yy++) for (let xx = x0; xx < x1; xx++) { s += Math.abs(a[yy * W + xx] - b[yy * W + xx]); n++; }
  return n ? s / n : 0;
}

export const boundaryDiff = frameDiff;

// diffs[i] is the change into frame i (frame i at t0 + i / fps). A frozen span runs from the frame
// before the first quiet diff to the last quiet frame; spans shorter than minSeconds, or lying
// inside a hold, are ignored.
export function staticSpans(diffs, fps, { threshold = 0.15, minSeconds = 1.0, holds = [], t0 = 0 } = {}) {
  const spans = [];
  let start = -1;
  const close = (end) => {
    const a = t0 + (start - 1) / fps, b = t0 + end / fps;
    if (b - a >= minSeconds && !holds.some(([h0, h1]) => a >= h0 - 1e-9 && b <= h1 + 1e-9)) spans.push([a, b]);
  };
  for (let i = 1; i < diffs.length; i++) {
    if (diffs[i] < threshold) { if (start < 0) start = i; } else if (start >= 0) { close(i - 1); start = -1; }
  }
  if (start >= 0) close(diffs.length - 1);
  return spans;
}
