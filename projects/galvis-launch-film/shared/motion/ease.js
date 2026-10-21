// Eased progress as a function of time, so state stays seek-safe.

// CSS cubic-bezier(x1, y1, x2, y2) as a function of x in [0, 1].
export function cubicBezier(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sx = (u) => ((ax * u + bx) * u + cx) * u;
  const sy = (u) => ((ay * u + by) * u + cy) * u;
  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let lo = 0, hi = 1, u = x;
    for (let i = 0; i < 40; i++) {
      u = (lo + hi) / 2;
      if (sx(u) < x) lo = u; else hi = u;
    }
    return sy(u);
  };
}

// The Workspace UI's motion curve (movee-fe): 180 ms, cubic-bezier(.2, 0, 0, 1).
export const UI_EASE = cubicBezier(0.2, 0, 0, 1);

// Progress 0..1 of a change that starts at t0 and lasts dur, eased.
export function since(t, t0, dur, ease = UI_EASE) {
  if (t <= t0) return 0;
  if (t >= t0 + dur) return 1;
  return ease((t - t0) / dur);
}
