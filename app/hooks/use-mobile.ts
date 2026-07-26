"use client";

import { useEffect, useState } from "react";

/**
 * Detects mobile / low-power viewport so heavy visual effects
 * (aurora, particles, cursor, mouse-gradient) can be skipped entirely.
 * Uses matchMedia — no resize listener spam, no layout thrashing.
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const update = () => setIsMobile(mql.matches || coarsePointer.matches);
    update();

    mql.addEventListener("change", update);
    coarsePointer.addEventListener("change", update);
    return () => {
      mql.removeEventListener("change", update);
      coarsePointer.removeEventListener("change", update);
    };
  }, [breakpoint]);

  return isMobile;
}