"use client";

import { useLayoutEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import styles from "./stages-scheme.module.scss";

type Stage = {
  title: string;
  text: string;
};

type ToolLink = {
  href: "/seo" | "/ai-seo";
  label: string;
};

type StagesSchemeProps = {
  stages: Stage[];
  toolLinks?: ToolLink[];
};

export function StagesScheme({ stages, toolLinks = [] }: StagesSchemeProps) {
  const schemeRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const scheme = schemeRef.current;
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!scheme || !path || !svg) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(scheme.querySelectorAll<HTMLElement>("[data-reveal]"));

    reveals.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index, 6) * 90}ms`;
    });

    if (reducedMotion) {
      reveals.forEach((el) => el.classList.add(styles.visible));
      return;
    }

    let pathLength = 0;
    let ticking = false;

    const buildPath = () => {
      const dots = Array.from(scheme.querySelectorAll<HTMLElement>("[data-stage-dot]")).filter(
        (dot) => dot.getClientRects().length > 0,
      );
      if (dots.length < 2) {
        path.setAttribute("d", "");
        pathLength = 0;
        return;
      }

      const schemeRect = scheme.getBoundingClientRect();
      const centerX = svg.getBoundingClientRect().width / 2 || 32;
      const ys = dots.map((dot) => {
        const rect = dot.getBoundingClientRect();
        return rect.top + rect.height / 2 - schemeRect.top;
      });

      let d = `M ${centerX} ${ys[0]}`;
      for (let i = 1; i < ys.length; i += 1) {
        const y0 = ys[i - 1];
        const y1 = ys[i];
        const bulge = i % 2 === 1 ? 26 : -26;
        const c1y = y0 + (y1 - y0) * 0.3;
        const c2y = y0 + (y1 - y0) * 0.7;
        d += ` C ${centerX + bulge} ${c1y}, ${centerX + bulge} ${c2y}, ${centerX} ${y1}`;
      }

      path.setAttribute("d", d);
      svg.setAttribute("height", String(ys[ys.length - 1] + 40));
      pathLength = path.getTotalLength();
      path.style.strokeDasharray = String(pathLength);
      path.style.strokeDashoffset = String(pathLength);
    };

    const update = () => {
      ticking = false;
      const rect = scheme.getBoundingClientRect();
      const referenceLine = window.innerHeight * 0.75;

      if (pathLength > 0) {
        const passed = referenceLine - rect.top;
        const pct = Math.max(0, Math.min(1, rect.height > 0 ? passed / rect.height : 0));
        path.style.strokeDashoffset = String(pathLength * (1 - pct));
      }

      for (const el of reveals) {
        if (el.classList.contains(styles.visible)) continue;
        if (getComputedStyle(el).display === "none") continue;
        const box = el.getBoundingClientRect();
        if (box.top < window.innerHeight * 0.9 && box.bottom > window.innerHeight * 0.08) {
          el.classList.add(styles.visible);
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const rebuild = () => {
      buildPath();
      update();
    };

    window.addEventListener("resize", rebuild);
    window.addEventListener("scroll", onScroll, { passive: true });
    rebuild();
    const timer = window.setTimeout(rebuild, 400);

    return () => {
      window.removeEventListener("resize", rebuild);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={schemeRef} className={styles.scheme}>
      <svg ref={svgRef} className={styles.wave} width="64" aria-hidden="true">
        <path ref={pathRef} className={styles.wavePath} fill="none" strokeWidth="2" />
      </svg>

      {stages.map((stage, index) => {
        const number = String(index + 1).padStart(2, "0");
        const onStart = index % 2 === 0;
        const links = index === 4 ? toolLinks : [];
        const body = (alignStart: boolean) => (
          <>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
            {links.length > 0 ? (
              <div className={`${styles.tags} ${alignStart ? styles.tagsStart : ""}`}>
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className={styles.tag}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </>
        );

        return (
          <div key={stage.title} className={styles.block}>
            <div className={styles.mobile} data-reveal>
              <span className={styles.dot} data-stage-dot>
                {number}
              </span>
              <div className={styles.copy}>{body(false)}</div>
            </div>

            <div className={styles.desktop}>
              {onStart ? (
                <>
                  <div className={`${styles.panel} ${styles.fromStart}`} data-reveal>
                    {body(true)}
                  </div>
                  <div className={styles.dotCell}>
                    <span className={styles.dot} data-stage-dot>
                      {number}
                    </span>
                  </div>
                  <div className={styles.spacer} />
                </>
              ) : (
                <>
                  <div className={styles.spacer} />
                  <div className={styles.dotCell}>
                    <span className={styles.dot} data-stage-dot>
                      {number}
                    </span>
                  </div>
                  <div className={`${styles.panel} ${styles.fromEnd}`} data-reveal>
                    {body(false)}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
