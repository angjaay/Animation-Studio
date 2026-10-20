// Canvas layer that draws a source image through the reference Bayer dither.
// Work happens at cell resolution and is scaled up without smoothing, so the cost
// depends on the number of cells, not on the output resolution.
import { ditherCell, DEFAULTS } from './reference.js';

function coverRect(sw, sh, dw, dh) {
  const s = Math.max(dw / sw, dh / sh);
  return [(dw - sw * s) / 2, (dh - sh * s) / 2, sw * s, sh * s];
}

export function mountDither(canvas, source, initial = {}) {
  let opts = { ...DEFAULTS, fit: 'cover', ...initial };
  const ctx = canvas.getContext('2d');
  const small = document.createElement('canvas');
  const sctx = small.getContext('2d', { willReadFrequently: true });

  function draw() {
    const { cell } = opts;
    const cw = Math.ceil(canvas.width / cell);
    const ch = Math.ceil(canvas.height / cell);
    if (small.width !== cw || small.height !== ch) {
      small.width = cw;
      small.height = ch;
    }
    sctx.imageSmoothingEnabled = true;
    sctx.clearRect(0, 0, cw, ch);
    const fullW = source.naturalWidth || source.width;
    const fullH = source.naturalHeight || source.height;
    // Optional source crop in fractions [x, y, w, h], e.g. to drop UI cards baked into a map.
    const [fx, fy, fw, fh] = opts.crop ?? [0, 0, 1, 1];
    const [sx, sy, sw, sh] = [fx * fullW, fy * fullH, fw * fullW, fh * fullH];
    const [x, y, w, h] = opts.fit === 'cover' ? coverRect(sw, sh, cw, ch) : [0, 0, cw, ch];
    sctx.drawImage(source, sx, sy, sw, sh, x, y, w, h);

    const img = sctx.getImageData(0, 0, cw, ch);
    const d = img.data;
    for (let cy = 0; cy < ch; cy++) {
      for (let cx = 0; cx < cw; cx++) {
        const i = (cy * cw + cx) * 4;
        if (d[i + 3] === 0) continue;
        const out = ditherCell([d[i], d[i + 1], d[i + 2]], cx, cy, opts);
        d[i] = out[0];
        d[i + 1] = out[1];
        d[i + 2] = out[2];
      }
    }
    sctx.putImageData(img, 0, 0);

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(small, 0, 0, cw * cell, ch * cell);
  }

  return {
    set(next) {
      opts = { ...opts, ...next };
    },
    draw,
  };
}
