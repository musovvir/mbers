"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./hero-globe.module.scss";

type HeroGlobeProps = {
  markerLabel: string;
  caption: string;
};

export function HeroGlobe({ markerLabel, caption }: HeroGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancel = () => {};
    let stopped = false;

    import("./scene").then(({ mountHeroGlobe }) => {
      if (stopped || !canvasRef.current) return;
      cancel = mountHeroGlobe(canvasRef.current, {
        reducedMotion,
        marker: markerRef.current,
      });
      setReady(true);
    });

    return () => {
      stopped = true;
      cancel();
    };
  }, []);

  return (
    <figure className={styles.wrap}>
      <canvas
        ref={canvasRef}
        className={ready ? styles.canvasReady : styles.canvas}
        aria-hidden="true"
      />
      <span ref={markerRef} className={styles.marker}>
        {markerLabel}
      </span>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
