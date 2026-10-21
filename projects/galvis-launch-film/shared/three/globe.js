// The dawn globe for act 01: Blue Marble by day, Black Marble by night, a warm terminator and a thin
// atmosphere. It renders small (one pixel per dither cell); the composition dithers it screen-locked.
import * as THREE from 'three';
import { lonLatToVec3 } from './geo3d.js';

const EARTH_VERT = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vNormalV;
  void main() {
    vUv = uv;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vNormalV = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const EARTH_FRAG = /* glsl */ `
  uniform sampler2D day;
  uniform sampler2D night;
  uniform vec3 sun;
  uniform float exposure;
  // Layers that light up over Southeast Asia (0..1, may overshoot briefly as an accent).
  uniform float cities;
  uniform float vegetation;
  uniform float water;
  uniform float contours;
  uniform float contourReach; // longitude the contour etch has reached
  const vec4 SEA = vec4(92.0, -11.0, 141.0, 28.0); // lon0, lat0, lon1, lat1

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float relief(vec2 p) { return vnoise(p) * 0.6 + vnoise(p * 2.1 + 7.3) * 0.3 + vnoise(p * 4.3 - 2.1) * 0.1; }
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vNormalV;
  void main() {
    float d = dot(normalize(vNormalW), sun);
    float lit = smoothstep(-0.10, 0.22, d);
    vec3 dayC = texture2D(day, vUv).rgb * (0.30 + 0.95 * clamp(d, 0.0, 1.0));
    vec3 nightC = texture2D(night, vUv).rgb;
    nightC = nightC * nightC * 1.5;
    vec3 c = mix(nightC, dayC, lit);

    vec2 ll = vec2(vUv.x * 360.0 - 180.0, vUv.y * 180.0 - 90.0);
    float inSea = smoothstep(SEA.x - 4.0, SEA.x, ll.x) * smoothstep(SEA.z + 4.0, SEA.z, ll.x)
                * smoothstep(SEA.y - 4.0, SEA.y, ll.y) * smoothstep(SEA.w + 4.0, SEA.w, ll.y);
    vec3 dayRaw = texture2D(day, vUv).rgb;
    float lights = dot(texture2D(night, vUv).rgb, vec3(0.299, 0.587, 0.114));
    float green = smoothstep(0.02, 0.10, dayRaw.g - max(dayRaw.r, dayRaw.b));
    float sea = smoothstep(0.03, 0.12, dayRaw.b - max(dayRaw.r, dayRaw.g));
    float land = 1.0 - sea;
    // Cities glow teal, by day too.
    c += vec3(0.12, 0.69, 0.63) * smoothstep(0.10, 0.50, lights) * cities * inSea * 2.6;
    // Vegetation and water take the brand's green and bright navy.
    c = mix(c, c * 0.55 + vec3(0.53, 0.76, 0.42) * 0.75, clamp(green * vegetation, 0.0, 1.2) * inSea * 0.75);
    c = mix(c, vec3(0.04, 0.33, 0.86), clamp(sea * water, 0.0, 1.2) * inSea * 0.45);
    // Contours etched west to east from a seeded relief field, on land only.
    float h = relief(ll * 0.55) * 9.0;
    float iso = abs(fract(h) - 0.5);
    float line = 1.0 - smoothstep(0.0, 0.09, 0.5 - iso);
    float etched = smoothstep(contourReach, contourReach - 1.5, ll.x);
    c += vec3(1.0) * line * land * inSea * etched * contours * 0.35;
    // Dawn: a narrow warm band on the day side of the terminator.
    c += vec3(1.0, 0.55, 0.25) * exp(-(d * d) / 0.0035) * smoothstep(-0.05, 0.02, d) * 0.30;
    // Thin atmosphere on the lit limb.
    float rim = pow(1.0 - clamp(dot(normalize(vNormalV), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 2.4);
    c += vec3(0.35, 0.62, 1.0) * rim * (0.15 + 0.85 * lit) * 0.9;
    gl_FragColor = vec4(c * exposure, 1.0);
  }
`;

const HALO_VERT = /* glsl */ `
  varying vec3 vNormalW;
  varying vec3 vNormalV;
  void main() {
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vNormalV = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const HALO_FRAG = /* glsl */ `
  uniform vec3 sun;
  uniform float exposure;
  varying vec3 vNormalW;
  varying vec3 vNormalV;
  void main() {
    float glow = pow(clamp(0.62 - dot(normalize(vNormalV), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 3.0);
    float side = smoothstep(-0.35, 0.65, dot(normalize(vNormalW), sun));
    vec3 c = mix(vec3(0.10, 0.25, 0.70), vec3(0.55, 0.78, 1.0), side) + vec3(1.0, 0.55, 0.25) * side * 0.25;
    gl_FragColor = vec4(c * glow * (0.25 + 1.35 * side) * exposure, 1.0);
  }
`;

const texture = (img) => {
  const t = new THREE.Texture(img);
  t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
};

export function mountGlobe({ canvas, day, night }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(canvas.width, canvas.height, false);
  renderer.setClearColor(0x000000, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, canvas.width / canvas.height, 0.01, 50);
  const uniforms = {
    day: { value: texture(day) }, night: { value: texture(night) }, sun: { value: new THREE.Vector3(1, 0, 0) }, exposure: { value: 1 },
    cities: { value: 0 }, vegetation: { value: 0 }, water: { value: 0 }, contours: { value: 0 }, contourReach: { value: -180 },
  };
  const globe = new THREE.Mesh(new THREE.SphereGeometry(1, 192, 128), new THREE.ShaderMaterial({ uniforms, vertexShader: EARTH_VERT, fragmentShader: EARTH_FRAG }));
  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(1.07, 96, 64),
    new THREE.ShaderMaterial({ uniforms, vertexShader: HALO_VERT, fragmentShader: HALO_FRAG, side: THREE.BackSide, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }),
  );
  scene.add(halo, globe);

  const v = new THREE.Vector3(), n = new THREE.Vector3(), eye = new THREE.Vector3();

  return {
    // state: { rotY, sun: [x,y,z], eye: [x,y,z], target: [x,y,z], exposure, layers: { cities, vegetation, water, contours, contourReach } }
    render({ rotY, sun, eye: e, target, exposure = 1, layers = {} }) {
      for (const key of ['cities', 'vegetation', 'water', 'contours', 'contourReach']) if (key in layers) uniforms[key].value = layers[key];
      globe.rotation.y = rotY;
      halo.rotation.y = rotY;
      uniforms.sun.value.set(...sun).normalize();
      uniforms.exposure.value = exposure;
      camera.position.set(...e);
      camera.lookAt(...target);
      camera.updateMatrixWorld();
      globe.updateMatrixWorld();
      renderer.render(scene, camera);
    },
    // Screen position of a lon/lat on the globe surface in a W x H frame; null when it faces away.
    project(lon, lat, W, H, lift = 1.002) {
      v.set(...lonLatToVec3(lon, lat, lift)).applyMatrix4(globe.matrixWorld);
      n.copy(v).normalize();
      eye.copy(camera.position).sub(v);
      if (n.dot(eye) <= 0) return null;
      v.project(camera);
      return [(v.x + 1) * 0.5 * W, (1 - v.y) * 0.5 * H];
    },
  };
}
