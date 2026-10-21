// Motion paths computed from progress k (0..1).

// A point spiralling from start into center (vortex-keyhole): the radius shrinks as (1-k)^1.6 while the
// angle turns `turns` times; scale goes 1 -> 0.15; rotation in degrees follows the angle.
export function vortexPoint([sx, sy], [cx, cy], k, turns = 1.25) {
  const r0 = Math.hypot(sx - cx, sy - cy);
  const a0 = Math.atan2(sy - cy, sx - cx);
  const a = a0 + turns * 2 * Math.PI * k;
  const r = r0 * Math.pow(1 - k, 1.6);
  const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
  return { x: k === 0 ? sx : x, y: k === 0 ? sy : y, scale: 1 - 0.85 * k, rotation: (turns * 360 * k) };
}

// A rectangle {x, y, w, h, r} between a and b.
export function lerpRect(a, b, k) {
  const out = {};
  for (const key of ['x', 'y', 'w', 'h', 'r']) out[key] = a[key] + (b[key] - a[key]) * k;
  return out;
}
