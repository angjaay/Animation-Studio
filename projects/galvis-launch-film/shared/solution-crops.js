// gisact.io solution maps carry UI baked into the raster (legends, location labels, pins, charts).
// UI_BOXES records where, as [x, y, w, h] fractions of the image; CLEAN_CROPS are map-only regions.
const S = 'assets/solution';

export const UI_BOXES = {
  [`${S}/DMR/desktop/risk.jpg`]: [[0.32, 0.29, 0.23, 0.1], [0.64, 0.71, 0.35, 0.26]],
  [`${S}/ESC/desktop/biodiversity.jpg`]: [[0.23, 0.11, 0.22, 0.08], [0.32, 0.2, 0.06, 0.1], [0.02, 0.7, 0.34, 0.27], [0.67, 0.52, 0.31, 0.44]],
  [`${S}/WRWS/desktop/WaterResource-Desktop.jpg`]: [[0.64, 0.4, 0.34, 0.56]],
  [`${S}/ESRE/desktop/Network-Desktop.jpg`]: [[0.68, 0.6, 0.3, 0.37]],
  [`${S}/AFS/desktop/precision.jpg`]: [[0.37, 0.32, 0.23, 0.08], [0.64, 0.66, 0.35, 0.33]],
  [`${S}/ESRE/desktop/SolarProperty-Desktop.jpg`]: [[0.64, 0.7, 0.34, 0.27]],
  [`${S}/ESRE/desktop/EnergyPotential-Desktop.jpg`]: [[0.36, 0.45, 0.23, 0.08], [0.64, 0.7, 0.35, 0.3]],
  [`${S}/EBG/desktop/SiteSelection-Desktop.jpg`]: [[0.4, 0.43, 0.22, 0.08], [0.64, 0.7, 0.36, 0.25]],
  [`${S}/EBG/desktop/Geomarketing-Desktop.jpg`]: [[0.91, 0.38, 0.09, 0.62], [0.01, 0.88, 0.18, 0.1]],
};

export const CLEAN_CROPS = {
  [`${S}/DMR/desktop/risk.jpg`]: [0, 0.395, 1, 0.31], // the full-width band between the label and the legend
  [`${S}/ESC/desktop/biodiversity.jpg`]: [0.4, 0.3, 0.26, 0.4],
  [`${S}/WRWS/desktop/WaterResource-Desktop.jpg`]: [0, 0, 0.62, 0.75],
  [`${S}/ESRE/desktop/Network-Desktop.jpg`]: [0.02, 0.02, 0.64, 0.56],
  [`${S}/AFS/desktop/precision.jpg`]: [0, 0, 1, 0.31],
  [`${S}/ESRE/desktop/SolarProperty-Desktop.jpg`]: [0, 0, 1, 0.68],
  [`${S}/ESRE/desktop/EnergyPotential-Desktop.jpg`]: [0, 0, 1, 0.44],
  [`${S}/EBG/desktop/SiteSelection-Desktop.jpg`]: [0, 0, 1, 0.42],
  [`${S}/EBG/desktop/Geomarketing-Desktop.jpg`]: [0.2, 0, 0.7, 0.86],
};

export function cleanCrop(path) {
  const crop = CLEAN_CROPS[path];
  if (!crop) throw new Error(`no measured clean crop for ${path}`);
  return crop;
}
