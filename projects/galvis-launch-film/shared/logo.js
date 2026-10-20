// Inline SVG markup of the logo anatomy, bundled at build time so compositions never fetch.
import plates from '../assets/logo/parts/plates.svg';
import hexagon from '../assets/logo/parts/hexagon.svg';
import arrow from '../assets/logo/parts/arrow.svg';

export function logoParts() {
  const viewBox = hexagon.match(/viewBox="([^"]+)"/)[1];
  return { plates, hexagon, arrow, viewBox };
}
