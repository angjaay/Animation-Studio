// The architecture glimpse between product acts: core trunk and three branches in act 05's geometry,
// one branch lit in its product colour, the others dimmed. Drawn through act 05's camera push.
import { branchGeometry } from '../thread.js';

export const BRANCH_COLORS = { workspace: '#024ABC', enrichment: '#1FAFA1', enterprise: '#86C36A' };
const KEYS = ['workspace', 'enrichment', 'enterprise'];
const ENDS = [[420, 820], [960, 820], [1500, 820]];
const DIM = 0.35;

export function architectureSvg({ lit, scale = 1 } = {}) {
  const geo = branchGeometry({ top: [960, 318], split: [960, 560], ends: ENDS });
  const m = `matrix(${scale} 0 0 ${scale} ${+(960 * (1 - scale)).toFixed(4)} ${+(540 * (1 - scale)).toFixed(4)})`;
  const branches = geo.branches.map((d, i) => {
    const o = KEYS[i] === lit ? 1 : DIM;
    return `<path d="${d}" fill="none" stroke="${BRANCH_COLORS[KEYS[i]]}" stroke-width="3" opacity="${o}"/>`;
  }).join('');
  const ends = ENDS.map(([x, y], i) => {
    const o = KEYS[i] === lit ? 1 : DIM;
    return `<circle cx="${x}" cy="${y}" r="9" fill="${BRANCH_COLORS[KEYS[i]]}" stroke="#FFFFFF" stroke-width="2" opacity="${o}"/>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080"><g transform="${m}">`
    + `<path d="${geo.trunk}" fill="none" stroke="#FFFFFF" stroke-width="3" opacity="0.7"/>${branches}${ends}</g></svg>`;
}

// Act 05's backdrop (navy plus its blue glow, through the same camera push), as a canvas: the frame the
// architecture glimpses sit on. Used as a fill pattern for Bayer dissolves between dark and light.
export function navyGlowCanvas(scale = 1) {
  const c = document.createElement('canvas');
  c.width = 1920; c.height = 1080;
  const g = c.getContext('2d');
  g.fillStyle = '#032750';
  g.fillRect(0, 0, 1920, 1080);
  const cy = 540 + (360 - 540) * scale;
  const glow = g.createRadialGradient(960, cy, 0, 960, cy, 900 * scale);
  glow.addColorStop(0, 'rgba(2,74,188,0.5)');
  glow.addColorStop(1, 'rgba(3,39,80,0)');
  g.save();
  g.translate(960, cy); g.scale(1, 520 / 900); g.translate(-960, -cy);
  g.fillStyle = glow;
  g.fillRect(0, -1080, 1920, 1080 * 3);
  g.restore();
  return c;
}
