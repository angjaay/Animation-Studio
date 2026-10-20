// A solid curtain that opens cell by cell in Bayer order: the act-to-act transition.
import { BAYER4 } from './dither/reference.js';

export function bayerVisible(cx, cy, progress) {
  return (BAYER4[cy & 3][cx & 3] + 0.5) / 16 < progress;
}

export function mountCurtain(canvas, color, cell = 12) {
  const ctx = canvas.getContext('2d');
  return {
    set(progress) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (progress >= 1) return;
      ctx.fillStyle = color;
      const cw = Math.ceil(canvas.width / cell), ch = Math.ceil(canvas.height / cell);
      for (let cy = 0; cy < ch; cy++) for (let cx = 0; cx < cw; cx++) {
        if (!bayerVisible(cx, cy, progress)) ctx.fillRect(cx * cell, cy * cell, cell, cell);
      }
    },
  };
}
