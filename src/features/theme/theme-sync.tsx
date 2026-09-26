"use client";

import { useLayoutEffect } from "react";

function storedTheme() {
  try {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function applyStoredTheme() {
  const theme = storedTheme();
  const root = document.documentElement;

  if (root.getAttribute("data-theme") !== theme) {
    root.setAttribute("data-theme", theme);
  }
}

export function ThemeSync() {
  useLayoutEffect(() => {
    applyStoredTheme();

    const observer = new MutationObserver(applyStoredTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
