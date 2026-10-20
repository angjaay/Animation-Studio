import COPY from './copy.json' with { type: 'json' };

export { COPY };
export { CUES, ACTS, IMPACTS, DURATION, barStart, actWindow } from './cues.js';
export { mountDither } from './dither/dither-layer.js';
export { ditherCell, ditherPixel, BAYER4, BRAND_RAMP } from './dither/reference.js';
export { branchGeometry } from './thread.js';
export { logoParts } from './logo.js';
export { renderWorkspace } from './ui/workspace.js';
export { renderLegend } from './ui/legend.js';
export { renderLabel } from './ui/label.js';
export { loadImage, ditheredCanvas, seeded } from './media.js';
export { default as SEA_POINTS } from '../assets/geo/sea-points.json' with { type: 'json' };
export { default as SEA_SVG } from '../assets/geo/sea.svg';
export { default as RIAU_SVG } from '../assets/geo/province-riau.svg';
