"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Top scroll progress bar. useScroll + useSpring are already optimized
 * by Framer Motion (scrollY listener is passive, updates via transform).
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}