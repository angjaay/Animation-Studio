// A solid curtain that opens cell by cell in Bayer order: the act-to-act transition.
// With an origin it opens radially: only a band moving out from the origin is mid-dissolve, so the
// frame is never one full-screen Bayer checker.
import { BAYER4 } from './dither/reference.js';

export function bayerVisible(cx, cy, progress) {
  return (BAYER4[cy & 3][cx & 3] + 0.5) / 16 < progress;
}

// Local opening of a cell at normalised distance d (0 at the origin, 1 at the farthest corner).
export function radialProgress(progress, d, band) {
  if (progress >= 1) return 1;
  if (progress <= 0) return 0;
  return Math.min(1, Math.max(0, (progress * (1 + band) - d) / band));
}

export function mountCurtain(canvas, color, cell = 12, { origin, band = 0.2 } = {}) {
  const ctx = canvas.getContext('2d');
  const far = origin ? Math.max(...[[0, 0], [canvas.width, 0], [0, canvas.height], [canvas.width, canvas.height]].map(([x, y]) => Math.hypot(x - origin[0], y - origin[1]))) : 1;
  return {
    set(progress) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (progress >= 1) return;
      ctx.fillStyle = color;
      const cw = Math.ceil(canvas.width / cell), ch = Math.ceil(canvas.height / cell);
      for (let cy = 0; cy < ch; cy++) for (let cx = 0; cx < cw; cx++) {
        const p = origin ? radialProgress(progress, Math.hypot((cx + 0.5) * cell - origin[0], (cy + 0.5) * cell - origin[1]) / far, band) : progress;
        if (!bayerVisible(cx, cy, p)) ctx.fillRect(cx * cell, cy * cell, cell, cell);
      }
    },
  };
}
