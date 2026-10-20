// Image helpers for compositions. Everything resolves before a timeline is registered.
import { mountDither } from './dither/dither-layer.js';

export function loadImage(src) {
  const img = new Image();
  img.src = src;
  return img.decode().then(() => img);
}

// A canvas of the given size showing `src` through the dither (cover fit).
export async function ditheredCanvas(src, width, height, opts = {}) {
  const img = await loadImage(src);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const layer = mountDither(canvas, img, opts);
  layer.draw();
  canvas.layer = layer;
  return canvas;
}

// Seeded PRNG (mulberry32) for deterministic scatter.
export function seeded(seed) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
