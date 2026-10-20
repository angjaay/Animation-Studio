import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { lonLatToVec3, faceLongitude } from '../shared/three/geo3d.js';

const close = (a, b) => a.forEach((v, i) => assert.ok(Math.abs(v - b[i]) < 1e-9, `${a} vs ${b}`));

test('lonLatToVec3 follows the SphereGeometry texture mapping', () => {
  close(lonLatToVec3(0, 0), [1, 0, 0]);
  close(lonLatToVec3(90, 0), [0, 0, -1]);
  close(lonLatToVec3(0, 90), [0, 1, 0]);
  close(lonLatToVec3(0, 0, 2), [2, 0, 0]);
});

test('lonLatToVec3 lands on the texel SphereGeometry gives that lon/lat', () => {
  const g = new THREE.SphereGeometry(1, 72, 36);
  const pos = g.attributes.position, uv = g.attributes.uv;
  for (const i of [100, 777, 1500, 2000]) {
    const lon = uv.getX(i) * 360 - 180, lat = uv.getY(i) * 180 - 90;
    close(lonLatToVec3(lon, lat).map((v) => Math.round(v * 1e6) / 1e6), [pos.getX(i), pos.getY(i), pos.getZ(i)].map((v) => Math.round(v * 1e6) / 1e6));
  }
});

test('faceLongitude turns that longitude towards the camera (+z)', () => {
  for (const lon of [115, -40, 0, 170]) {
    const v = new THREE.Vector3(...lonLatToVec3(lon, 0)).applyAxisAngle(new THREE.Vector3(0, 1, 0), faceLongitude(lon));
    assert.ok(v.z > 0.999, `lon ${lon}: z ${v.z}`);
  }
});
