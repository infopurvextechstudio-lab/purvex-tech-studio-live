"use client";

import { memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMotionAllowed } from "@/hooks/use-reduced-motion-safe";

/**
 * Vercel/Linear-style glowing vertical lines with scroll parallax.
 * Uses useTransform (no re-renders) mapped directly to a transform style.
 */
function BackgroundLinesBase() {
  const allowed = useMotionAllowed();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  if (!allowed) {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px)] [background-size:120px_100%]"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px)] [background-size:120px_100%]"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(115deg,#fff_1px,transparent_1px)] [background-size:180px_180%]"
      />
    </div>
  );
}

export const BackgroundLines = memo(BackgroundLinesBase);