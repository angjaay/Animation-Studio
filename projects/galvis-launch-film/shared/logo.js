// Inline SVG markup of the logo anatomy, bundled at build time so compositions never fetch.
import plates from '../assets/logo/parts/plates.svg';
import hexagon from '../assets/logo/parts/hexagon.svg';
import arrow from '../assets/logo/parts/arrow.svg';
import { scopeIds } from './svg-scope.js';

export function logoParts(prefix = '') {
  const viewBox = hexagon.match(/viewBox="([^"]+)"/)[1];
  return { plates: scopeIds(plates, prefix), hexagon: scopeIds(hexagon, prefix), arrow: scopeIds(arrow, prefix), viewBox };
}
