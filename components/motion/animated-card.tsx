"use client";

import { memo, type ReactNode } from "react";
import { motion } from "framer-motion";
import { SPRING } from "@/lib/motion-config";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Hover lift + soft glow + slight rotate. All transform/opacity —
 * no box-shadow animation on every frame (shadow set via CSS class,
 * only opacity of a glow layer is animated).
 */
function AnimatedCardBase({ children, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      className={`group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 will-change-transform ${className}`}
      whileHover={{ y: -6, rotate: -0.4, scale: 1.01 }}
      transition={SPRING}
    >
      {/* Glow layer — opacity-only animation, cheap */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-cyan-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-shadow duration-300 group-hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.35)]" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export const AnimatedCard = memo(AnimatedCardBase);