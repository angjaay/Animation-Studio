// The engine chamber for act 04: a tunnel of hexagonal rings, a tilted orbit ring with six hexagonal
// pedestals, light cables into one core. Everything is placed from a state object, so any frame can be
// rendered on its own. The logo, module visuals and labels stay in the DOM, pinned with screenOf().
import * as THREE from 'three';

const TEAL = new THREE.Color('#1FAFA1');
const NAVY = new THREE.Color('#0A3366');
const WHITE = new THREE.Color('#FFFFFF');

const hexPoints = (r) => Array.from({ length: 6 }, (_, k) => {
  const a = Math.PI / 2 + (k * Math.PI) / 3;
  return new THREE.Vector3(r * Math.cos(a), r * Math.sin(a), 0);
});

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.25, 'rgba(160,230,220,0.55)');
  grad.addColorStop(1, 'rgba(31,175,161,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export function mountCoreScene({ canvas, count = 6, radius = 1.3, seed = 4 }) {
  const W = canvas.width, H = canvas.height;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(W, H, false);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x032750, 6, 22);
  const camera = new THREE.PerspectiveCamera(40, W / H, 0.05, 60);
  const CORE = new THREE.Vector3(0, 0, -6);
  scene.add(new THREE.HemisphereLight(0xbfe9ff, 0x032750, 1.1));
  const coreLight = new THREE.PointLight(0x9ff5e8, 6, 9, 1.4);
  coreLight.position.copy(CORE);
  scene.add(coreLight);

  // Tunnel: hexagonal rings from in front of the camera's start to well behind the core.
  const rings = [];
  for (let k = 0; k < 18; k++) {
    const geo = new THREE.BufferGeometry().setFromPoints(hexPoints(3.4));
    const mat = new THREE.LineBasicMaterial({ color: k % 3 === 0 ? TEAL : WHITE, transparent: true, opacity: 0.3 });
    const ring = new THREE.LineLoop(geo, mat);
    ring.position.z = 7 - k * 1.25;
    scene.add(ring);
    rings.push(ring);
  }

  // Orbit: a group at the core, tilted and spun from state.
  const orbit = new THREE.Group();
  orbit.position.copy(CORE);
  scene.add(orbit);
  const circle = (r, opacity) => new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints(Array.from({ length: 160 }, (_, k) => new THREE.Vector3(r * Math.cos((k / 160) * Math.PI * 2), r * Math.sin((k / 160) * Math.PI * 2), 0))),
    new THREE.LineBasicMaterial({ color: WHITE, transparent: true, opacity }),
  );
  orbit.add(circle(radius, 0.22), circle(radius * 1.32, 0.08));

  const slots = Array.from({ length: count }, (_, i) => {
    const a = Math.PI / 2 - (i * Math.PI * 2) / count;
    const at = new THREE.Vector3(radius * Math.cos(a), radius * Math.sin(a), 0);
    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.31, 0.31, 0.1, 6),
      new THREE.MeshStandardMaterial({ color: NAVY, emissive: TEAL, emissiveIntensity: 0, roughness: 0.45, metalness: 0.3 }),
    );
    pedestal.rotation.x = Math.PI / 2;
    pedestal.position.copy(at).setZ(-0.1);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(pedestal.geometry), new THREE.LineBasicMaterial({ color: WHITE, transparent: true, opacity: 0.5 }));
    edges.rotation.copy(pedestal.rotation);
    edges.position.copy(pedestal.position);
    const curve = new THREE.QuadraticBezierCurve3(at.clone(), at.clone().multiplyScalar(0.5).setZ(0.45), new THREE.Vector3(0, 0, 0));
    const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, 0.009, 6), new THREE.MeshBasicMaterial({ color: WHITE, transparent: true, opacity: 0.25 }));
    orbit.add(pedestal, edges, cable);
    return { at, pedestal, edges, curve, cable };
  });

  // The core: a slow hexagonal cage behind the logo, and a glow.
  const cage = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.CylinderGeometry(0.5, 0.5, 0.7, 6)), new THREE.LineBasicMaterial({ color: TEAL, transparent: true, opacity: 0.6 }));
  cage.position.copy(CORE);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }));
  glow.position.copy(CORE).setZ(CORE.z - 0.4);
  scene.add(cage, glow);

  // Dust for parallax, seeded.
  let a = seed;
  const rnd = () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const dust = new Float32Array(900);
  for (let i = 0; i < 900; i += 3) { dust[i] = (rnd() - 0.5) * 9; dust[i + 1] = (rnd() - 0.5) * 6; dust[i + 2] = -1.5 - rnd() * 14; }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dust, 3));
  scene.add(new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0xcfefff, size: 0.03, map: glowTexture(), transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending })));

  const v = new THREE.Vector3();
  const screenOf = (world) => {
    v.copy(world).project(camera);
    const depth = camera.position.distanceTo(world);
    return [(v.x + 1) * 0.5 * W, (1 - v.y) * 0.5 * H, depth];
  };

  return {
    core: CORE,
    // state: { camZ, lookY, tilt, spin, time, orbitScale, glow: [0..1] per module, cable: [0..1] per module, core: 0..1, tunnel: 0..1 }
    render(state) {
      const { camZ, lookY = 0.25, tilt, spin, time = 0, glow: g = [], cable: c = [], core = 1, tunnel = 1, orbitScale = 1 } = state;
      camera.position.set(0, 0, camZ);
      camera.lookAt(0, lookY, CORE.z);
      camera.updateMatrixWorld();
      orbit.rotation.set(tilt, 0, spin);
      orbit.scale.setScalar(Math.max(1e-3, orbitScale));
      orbit.updateMatrixWorld(true);
      rings.forEach((ring) => {
        const d = Math.abs(camZ - ring.position.z);
        ring.material.opacity = tunnel * (d < 0.6 ? d / 0.6 : 1) * Math.max(0.06, 0.42 - Math.max(0, ring.position.z < CORE.z ? (CORE.z - ring.position.z) * 0.04 : 0));
        ring.rotation.z = time * 0.03 * (ring.position.z < CORE.z ? -1 : 1);
      });
      slots.forEach((s, i) => {
        const k = g[i] ?? 0, w = c[i] ?? 0;
        s.pedestal.material.emissiveIntensity = 0.12 + 0.9 * k;
        s.edges.material.color.copy(WHITE).lerp(TEAL, k);
        s.edges.material.opacity = 0.45 + 0.5 * k;
        s.cable.material.color.copy(WHITE).lerp(TEAL, w);
        s.cable.material.opacity = 0.22 + 0.7 * w;
      });
      cage.rotation.y = time * 0.35;
      cage.material.opacity = 0.25 + 0.5 * core;
      glow.scale.setScalar(1.8 + 1.0 * core);
      glow.material.opacity = 0.35 + 0.65 * core;
      coreLight.intensity = 3 + 7 * core;
      renderer.render(scene, camera);
    },
    // Screen position and camera distance of module i, the core, or a point along module i's cable (u: 0 module → 1 core).
    moduleScreen: (i) => screenOf(slots[i].at.clone().applyMatrix4(orbit.matrixWorld)),
    coreScreen: () => screenOf(CORE),
    cableScreen: (i, u) => screenOf(slots[i].curve.getPoint(u).applyMatrix4(orbit.matrixWorld)),
  };
}
