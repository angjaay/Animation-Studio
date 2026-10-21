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
