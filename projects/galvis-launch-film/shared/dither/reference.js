// Ordered (Bayer 4x4) dither. The one implementation used by tests and by the canvas layer.

export const BAYER4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

// Luminance ramp for the `brand` palette, darkest to lightest.
export const BRAND_RAMP = ['#032750', '#024ABC', '#1FAFA1', '#86C36A', '#FFFFFF'];

const RAMP_RGB = BRAND_RAMP.map((h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)));

export const DEFAULTS = { cell: 3, levels: 4, palette: 'landing', resolve: 0 };

function threshold(cx, cy) {
  return (BAYER4[cy & 3][cx & 3] + 0.5) / 16;
}

function landing(rgb, t, levels) {
  const n = levels - 1;
  return rgb.map((c) => {
    const q = Math.floor((c / 255) * n + t) / n;
    return Math.min(1, Math.max(0, q)) * 255;
  });
}

function brand(rgb, t) {
  const L = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;
  const n = RAMP_RGB.length;
  const p = L * (n - 1);
  const i = Math.floor(p);
  const step = p - i > t ? 1 : 0;
  return RAMP_RGB[Math.min(i + step, n - 1)];
}

// Dither one cell, addressed in cell coordinates.
export function ditherCell(rgb, cx, cy, opts = {}) {
  const { levels, palette, resolve } = { ...DEFAULTS, ...opts };
  const t = threshold(cx, cy);
  const d = palette === 'brand' ? brand(rgb, t) : landing(rgb, t, levels);
  return d.map((v, k) => Math.round(v + (rgb[k] - v) * resolve));
}

// Dither one pixel; every pixel of a cell gets the same value.
export function ditherPixel(rgb, px, py, opts = {}) {
  const cell = opts.cell ?? DEFAULTS.cell;
  return ditherCell(rgb, Math.floor(px / cell), Math.floor(py / cell), opts);
}
