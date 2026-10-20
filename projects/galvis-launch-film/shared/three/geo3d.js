// Lon/lat on a unit sphere, matching THREE.SphereGeometry's texture mapping for an
// equirectangular image (u = (lon + 180) / 360, v = (lat + 90) / 180).
const RAD = Math.PI / 180;

export function lonLatToVec3(lon, lat, r = 1) {
  const phi = (lon + 180) * RAD, theta = (90 - lat) * RAD;
  return [-Math.cos(phi) * Math.sin(theta) * r, Math.cos(theta) * r, Math.sin(phi) * Math.sin(theta) * r];
}

// Rotation about +y that turns the given longitude to face +z, where the camera sits.
export function faceLongitude(lon) {
  const [x, , z] = lonLatToVec3(lon, 0);
  return -Math.atan2(x, z);
}
