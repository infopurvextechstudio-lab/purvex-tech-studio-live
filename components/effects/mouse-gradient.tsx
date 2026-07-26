"use client";

import { useEffect, useRef, memo } from "react";
import { useMotionAllowed } from "@/hooks/use-reduced-motion-safe";

/**
 * Radial light following cursor. Uses raw ref + rAF, NOT React state,
 * so mousemove never triggers a re-render. Desktop-only (guarded by
 * useMotionAllowed, which already excludes mobile/coarse-pointer).
 */
function MouseGradientBase() {
  const allowed = useMotionAllowed();
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!allowed) return;

    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.current.x - 300}px, ${current.current.y - 300}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [allowed]);

  if (!allowed) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full opacity-[0.06] blur-[100px] will-change-transform"
      style={{ background: "radial-gradient(circle, #ffffff, transparent 70%)" }}
      aria-hidden="true"
    />
  );
}

export const MouseGradient = memo(MouseGradientBase);