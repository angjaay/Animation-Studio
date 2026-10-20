// Prefix every id in an SVG string and rewrite url(#id) references to match.
// Gradient ids must be unique per instance: a url(#id) that resolves to a gradient
// inside a hidden clip renders nothing.
export function scopeIds(svg, prefix) {
  if (!prefix) return svg;
  return svg.replace(/id="([^"]+)"/g, `id="${prefix}-$1"`).replace(/url\(#([^)]+)\)/g, `url(#${prefix}-$1)`);
}
