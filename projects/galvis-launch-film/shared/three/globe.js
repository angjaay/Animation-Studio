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
  const uniforms = { day: { value: texture(day) }, night: { value: texture(night) }, sun: { value: new THREE.Vector3(1, 0, 0) }, exposure: { value: 1 } };
  const globe = new THREE.Mesh(new THREE.SphereGeometry(1, 192, 128), new THREE.ShaderMaterial({ uniforms, vertexShader: EARTH_VERT, fragmentShader: EARTH_FRAG }));
  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(1.07, 96, 64),
    new THREE.ShaderMaterial({ uniforms, vertexShader: HALO_VERT, fragmentShader: HALO_FRAG, side: THREE.BackSide, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }),
  );
  scene.add(halo, globe);

  const v = new THREE.Vector3(), n = new THREE.Vector3(), eye = new THREE.Vector3();

  return {
    // state: { rotY, sun: [x,y,z], eye: [x,y,z], target: [x,y,z], exposure }
    render({ rotY, sun, eye: e, target, exposure = 1 }) {
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
