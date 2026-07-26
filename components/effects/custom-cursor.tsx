"use client";

import { useEffect, useRef, memo } from "react";
import { useMotionAllowed } from "@/hooks/use-reduced-motion-safe";

/**
 * Glowing cursor + trailing dot. Ref-based, rAF-driven — zero re-renders.
 * Desktop only. Automatically off on touch devices via useMotionAllowed.
 */
function CustomCursorBase() {
  const allowed = useMotionAllowed();
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!allowed) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    const tick = () => {
      glowPos.current.x += (pos.current.x - glowPos.current.x) * 0.15;
      glowPos.current.y += (pos.current.y - glowPos.current.y) * 0.15;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x - 16}px, ${glowPos.current.y - 16}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
      document.documentElement.style.cursor = "";
    };
  }, [allowed]);

  if (!allowed) return null;

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border border-white/30 will-change-transform"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-2 w-2 rounded-full bg-white will-change-transform"
        aria-hidden="true"
      />
    </>
  );
}

export const CustomCursor = memo(CustomCursorBase);