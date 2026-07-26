"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useMotionAllowed } from "@/hooks/use-reduced-motion-safe";

const PARTICLE_COUNT = 25;

function FloatingParticlesBase() {
  const allowed = useMotionAllowed();

  // Generated once per mount — never recalculated on re-render
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2,
        duration: 12 + Math.random() * 10,
        delay: Math.random() * 6,
      })),
    []
  );

  if (!allowed) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/40 will-change-transform"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export const FloatingParticles = memo(FloatingParticlesBase);