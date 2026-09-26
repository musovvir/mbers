import styles from "./wire-globe.module.scss";

const MERIDIANS = [0, 30, 60, 90, 120, 150];
const LATITUDES = [-60, -30, 0, 30, 60];
const DOTS = [
  { lat: 24, lon: 18 },
  { lat: -14, lon: 100 },
  { lat: 44, lon: 170 },
  { lat: -34, lon: 240 },
  { lat: 8, lon: 310 },
];

function latitudeTransform(deg: number) {
  const rad = (deg * Math.PI) / 180;
  const y = -Math.sin(rad);
  const scale = Math.cos(rad);

  return `translateY(calc(${y.toFixed(4)} * 1em)) rotateX(90deg) scale(${scale.toFixed(4)})`;
}

function dotTransform(lat: number, lon: number) {
  const rad = (lat * Math.PI) / 180;
  const y = -Math.sin(rad);
  const z = Math.cos(rad);

  return `rotateY(${lon}deg) translateY(calc(${y.toFixed(4)} * 1em)) translateZ(calc(${z.toFixed(4)} * 1em))`;
}

export function WireGlobe() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.scene}>
        <div className={styles.tilt}>
          <div className={styles.spin}>
            {MERIDIANS.map((deg) => (
              <span key={`m-${deg}`} className={styles.ring} style={{ transform: `rotateY(${deg}deg)` }} />
            ))}
            {LATITUDES.map((deg) => (
              <span key={`l-${deg}`} className={styles.ring} style={{ transform: latitudeTransform(deg) }} />
            ))}
            {DOTS.map((dot) => (
              <span
                key={`d-${dot.lat}-${dot.lon}`}
                className={styles.dot}
                style={{ transform: dotTransform(dot.lat, dot.lon) }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
