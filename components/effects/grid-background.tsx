"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

/**
 * Ultra-subtle animated grid. Pure CSS background-position animation
 * via transform (translateY) on a single absolutely-positioned div.
 * No SVG re-render, no canvas — cheapest possible GPU-accelerated grid.
 */
function GridBackgroundBase() {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-[-50%] opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          willChange: prefersReduced ? undefined : "transform",
        }}
        animate={prefersReduced ? undefined : { y: [0, 48] }}
        transition={
          prefersReduced
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "linear" }
        }
      />
    </div>
  );
}

export const GridBackground = memo(GridBackgroundBase);