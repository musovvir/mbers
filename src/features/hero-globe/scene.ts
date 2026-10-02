import * as THREE from "three";

const RADIUS = 2;
const DURATION = 4500;
const HUB: [number, number] = [55.27, 25.2];
const ORIGINS: [number, number][] = Array.from({ length: 16 }, (_, index) => {
  const lon = -180 + (index + 0.5) * (360 / 16) + ((index % 3) - 1) * 7;
  const lat = [-42, -18, 8, 34, 55, 20, -30, 44][index % 8];
  return [lon, lat];
});

type MountOptions = {
  reducedMotion: boolean;
  marker: HTMLElement | null;
};

function latLon(lon: number, lat: number, radius: number) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function smooth(value: number) {
  const t = Math.min(1, Math.max(0, value));
  return t * t * (3 - 2 * t);
}

export function mountHeroGlobe(canvas: HTMLCanvasElement, options: MountOptions) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  const globe = new THREE.Group();
  scene.add(globe);

  const disposables: { dispose: () => void }[] = [];
  const track = <T extends { dispose: () => void }>(item: T) => {
    disposables.push(item);
    return item;
  };

  const nodeCount = 300;
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < nodeCount; i += 1) {
    const y = 1 - (i / (nodeCount - 1)) * 2;
    const ring = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = i * 2.399963229728653;
    nodes.push(
      new THREE.Vector3(Math.cos(theta) * ring, y, Math.sin(theta) * ring).multiplyScalar(RADIUS * 1.045),
    );
  }

  const near: THREE.Vector3[] = [];
  const far: THREE.Vector3[] = [];
  const nearDistance = RADIUS * 0.3;
  const farDistance = RADIUS * 0.62;
  for (let i = 0; i < nodeCount; i += 1) {
    for (let j = i + 1; j < nodeCount; j += 1) {
      const distance = nodes[i].distanceTo(nodes[j]);
      if (distance < nearDistance) near.push(nodes[i], nodes[j]);
      else if (distance < farDistance && (i * 31 + j * 17) % 23 === 0) far.push(nodes[i], nodes[j]);
    }
  }

  const nearLines = new THREE.LineSegments(
    track(new THREE.BufferGeometry().setFromPoints(near)),
    track(new THREE.LineBasicMaterial({ transparent: true, opacity: 0.5, depthWrite: false })),
  );
  const farLines = new THREE.LineSegments(
    track(new THREE.BufferGeometry().setFromPoints(far)),
    track(new THREE.LineBasicMaterial({ transparent: true, opacity: 0.28, depthWrite: false })),
  );
  globe.add(nearLines, farLines);

  const glow = document.createElement("canvas");
  glow.width = glow.height = 64;
  const glowContext = glow.getContext("2d");
  if (glowContext) {
    const gradient = glowContext.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.35, "rgba(215,212,255,0.75)");
    gradient.addColorStop(1, "rgba(145,132,217,0)");
    glowContext.fillStyle = gradient;
    glowContext.fillRect(0, 0, 64, 64);
  }
  const glowTexture = track(new THREE.CanvasTexture(glow));
  const nodeMaterial = track(
    new THREE.PointsMaterial({
      size: 0.085,
      map: glowTexture,
      transparent: true,
      depthWrite: false,
      opacity: 0.9,
    }),
  );
  globe.add(new THREE.Points(track(new THREE.BufferGeometry().setFromPoints(nodes)), nodeMaterial));

  const markDot = document.createElement("canvas");
  markDot.width = markDot.height = 64;
  const markContext = markDot.getContext("2d");
  if (markContext) {
    const gradient = markContext.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.3, "rgba(221,224,229,0.9)");
    gradient.addColorStop(1, "rgba(122,141,176,0)");
    markContext.fillStyle = gradient;
    markContext.fillRect(0, 0, 64, 64);
  }
  const markTexture = track(new THREE.CanvasTexture(markDot));

  const hub = latLon(HUB[0], HUB[1], RADIUS).normalize();
  const hubFacing = -(HUB[0] + 90) * (Math.PI / 180);
  const segmentCount = 48;
  const arcNormal = new THREE.Vector3();
  const arcs = ORIGINS.map((origin, index) => {
    const from = latLon(origin[0], origin[1], RADIUS).normalize();
    const angle = from.angleTo(hub);
    const geometry = track(new THREE.BufferGeometry());
    geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array((segmentCount + 1) * 3), 3));
    const material = track(new THREE.LineBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
    const line = new THREE.Line(geometry, material);
    const pulseGeometry = track(new THREE.BufferGeometry());
    pulseGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(3), 3));
    const pulseMaterial = track(
      new THREE.PointsMaterial({
        size: 0.19,
        map: markTexture,
        transparent: true,
        depthWrite: false,
        opacity: 0,
      }),
    );
    globe.add(line, new THREE.Points(pulseGeometry, pulseMaterial));
    return {
      from,
      angle,
      geometry,
      material,
      lift: 0.13 + angle * 0.13,
      index,
      phase: index / ORIGINS.length,
      pulseGeometry,
      pulseMaterial,
    };
  });

  const point = new THREE.Vector3();
  const placeArc = (arc: (typeof arcs)[number], amount: number, time: number, amplitude: number) => {
    const sine = Math.sin(arc.angle) || 1;
    const startWeight = Math.sin((1 - amount) * arc.angle) / sine;
    const endWeight = Math.sin(amount * arc.angle) / sine;
    point.set(
      arc.from.x * startWeight + hub.x * endWeight,
      arc.from.y * startWeight + hub.y * endWeight,
      arc.from.z * startWeight + hub.z * endWeight,
    );
    arcNormal.copy(point).normalize();
    const bell = Math.sin(Math.PI * amount);
    const wobble = Math.sin(amount * 9 + time * 2.2 + arc.phase * 6.28) * amplitude * bell;
    point.copy(arcNormal).multiplyScalar(RADIUS * (1 + arc.lift * bell) + wobble);
    return point;
  };

  for (const arc of arcs) {
    const positions = arc.geometry.attributes.position as THREE.BufferAttribute;
    for (let step = 0; step <= segmentCount; step += 1) {
      placeArc(arc, step / segmentCount, 0, 0);
      positions.setXYZ(step, point.x, point.y, point.z);
    }
    positions.needsUpdate = true;
  }

  const marks = [HUB, ...ORIGINS].map(([lon, lat]) => latLon(lon, lat, RADIUS * 1.01));
  const markMaterial = track(
    new THREE.PointsMaterial({
      size: 0.13,
      map: markTexture,
      transparent: true,
      depthWrite: false,
    }),
  );
  globe.add(new THREE.Points(track(new THREE.BufferGeometry().setFromPoints(marks)), markMaterial));

  const hubMaterial = track(new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
  const hubDot = new THREE.Mesh(track(new THREE.SphereGeometry(0.028, 16, 12)), hubMaterial);
  hubDot.position.copy(latLon(HUB[0], HUB[1], RADIUS * 1.04));
  globe.add(hubDot);

  const ringMaterial = track(
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }),
  );
  const ring = new THREE.Mesh(track(new THREE.RingGeometry(0.035, 0.045, 64)), ringMaterial);
  ring.position.copy(hubDot.position);
  ring.lookAt(0, 0, 0);
  globe.add(ring);

  const hubAnchor = latLon(HUB[0], HUB[1], RADIUS * 1.02);
  const hubWorld = new THREE.Vector3();
  const hubNdc = new THREE.Vector3();
  const facingFrom = new THREE.Vector3();
  const facingNormal = new THREE.Vector3();

  let lightNow = document.documentElement.dataset.theme !== "dark";
  const applyTheme = () => {
    const light = document.documentElement.dataset.theme !== "dark";
    lightNow = light;
    const blend = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    const ink = new THREE.Color(light ? "#323842" : "#e7e9ee");
    const faint = new THREE.Color(light ? "#6d7584" : "#9aa0ab");
    const glowColor = new THREE.Color(light ? "#3a4350" : "#ffffff");
    nearLines.material.color.copy(light ? ink : glowColor);
    nearLines.material.blending = blend;
    farLines.material.color.copy(faint);
    farLines.material.blending = blend;
    nodeMaterial.color.copy(glowColor);
    nodeMaterial.blending = blend;
    markMaterial.color.copy(glowColor);
    markMaterial.blending = blend;
    hubMaterial.color.copy(glowColor);
    hubMaterial.blending = blend;
    ringMaterial.color.copy(light ? ink : glowColor);
    ringMaterial.blending = blend;
    for (const arc of arcs) {
      arc.material.color.copy(light ? ink : glowColor);
      arc.material.blending = blend;
      arc.material.needsUpdate = true;
      arc.pulseMaterial.color.copy(glowColor);
      arc.pulseMaterial.blending = blend;
      arc.pulseMaterial.needsUpdate = true;
    }
    nearLines.material.needsUpdate = true;
    farLines.material.needsUpdate = true;
    nodeMaterial.needsUpdate = true;
    markMaterial.needsUpdate = true;
    hubMaterial.needsUpdate = true;
    ringMaterial.needsUpdate = true;
  };
  applyTheme();
  const themeObserver = new MutationObserver(applyTheme);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  const resize = () => {
    const width = canvas.clientWidth || 1;
    const height = canvas.clientHeight || 1;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    const distance = (RADIUS * 2.05) / Math.tan((camera.fov * Math.PI) / 360);
    camera.position.set(0, 0.15, distance);
    camera.lookAt(0, 0, 0);
  };
  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  let frame = 0;
  let alive = true;
  const started = performance.now();

  const render = (now: number) => {
    if (!alive) return;
    frame = requestAnimationFrame(render);
    const elapsed = now - started;
    const progress = options.reducedMotion ? 1 : Math.min(1, elapsed / DURATION);
    const time = elapsed / 1000;
    const turn = smooth(progress / 0.72);
    const arrived = smooth((progress - 0.58) / 0.28);

    globe.rotation.set(
      0.34 * (1 - turn) + 0.12 * turn,
      (hubFacing + 1.15) * (1 - turn) + (hubFacing - 0.08) * turn,
      -0.05 * turn,
    );
    globe.scale.setScalar(0.94 + turn * 0.12);

    const amplitude = 0.09 * Math.min(1, progress / 0.4);
    for (const arc of arcs) {
      const start = 0.04 + arc.index * 0.028;
      const drawn = smooth((progress - start) / 0.28);
      if (progress < 1) {
        const positions = arc.geometry.attributes.position as THREE.BufferAttribute;
        for (let step = 0; step <= segmentCount; step += 1) {
          placeArc(arc, step / segmentCount, time, amplitude);
          positions.setXYZ(step, point.x, point.y, point.z);
        }
        positions.needsUpdate = true;
      }
      arc.geometry.setDrawRange(0, Math.max(2, Math.round(drawn * segmentCount) + 1));
      arc.material.opacity = 0.18 + drawn * 0.7;
      const travel = ((options.reducedMotion ? 0 : time * 0.32 + arc.phase) % 1) * drawn;
      placeArc(arc, travel, time, amplitude);
      const pulsePosition = arc.pulseGeometry.attributes.position as THREE.BufferAttribute;
      pulsePosition.setXYZ(0, point.x, point.y, point.z);
      pulsePosition.needsUpdate = true;
      arc.pulseMaterial.opacity = drawn > 0.98 ? 0.85 : 0;
    }

    nearLines.material.opacity = (lightNow ? 0.68 : 0.5) + 0.12 * turn;
    farLines.material.opacity = (lightNow ? 0.42 : 0.24) + 0.08 * turn;
    hubMaterial.opacity = 0.45 + arrived * 0.55;
    const wave = options.reducedMotion ? 0 : (time * 0.42) % 1;
    ring.scale.setScalar(1 + wave * 3.4 * (0.35 + 0.65 * arrived));
    ringMaterial.opacity = (1 - wave) * (0.12 + 0.5 * arrived);

    const marker = options.marker;
    if (marker) {
      globe.updateMatrixWorld();
      hubWorld.copy(hubAnchor).applyMatrix4(globe.matrixWorld);
      facingFrom.copy(camera.position).sub(hubWorld).normalize();
      facingNormal.copy(hubWorld).sub(globe.position).normalize();
      const facing = facingFrom.dot(facingNormal);
      const visible = facing > 0.12 && progress > 0.08;
      marker.style.opacity = visible ? String(Math.min(1, facing * 3)) : "0";
      if (visible) {
        hubNdc.copy(hubWorld).project(camera);
        marker.style.left = `${(hubNdc.x * 0.5 + 0.5) * canvas.clientWidth}px`;
        marker.style.top = `${(-hubNdc.y * 0.5 + 0.5) * canvas.clientHeight}px`;
      }
    }

    renderer.render(scene, camera);
  };
  frame = requestAnimationFrame(render);

  return () => {
    alive = false;
    cancelAnimationFrame(frame);
    themeObserver.disconnect();
    resizeObserver.disconnect();
    for (const item of disposables) item.dispose();
    renderer.dispose();
  };
}
