import COPY from './copy.json' with { type: 'json' };

export { COPY };
export { CUES, ACTS, IMPACTS, DURATION, barStart, actWindow } from './cues.js';
export { mountDither } from './dither/dither-layer.js';
export { ditherCell, ditherPixel, BAYER4, BRAND_RAMP } from './dither/reference.js';
export { branchGeometry } from './thread.js';
export { logoParts } from './logo.js';
