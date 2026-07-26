"use client";

import { useRef, memo, type ReactNode, type ButtonHTMLAttributes } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMotionAllowed } from "@/hooks/use-reduced-motion-safe";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  strength?: number;
}

/**
 * Premium magnetic hover + shine sweep. Motion values (not state) drive
 * the transform, so no React re-render happens on mousemove.
 */
function MagneticButtonBase({
  children,
  strength = 0.25,
  className = "",
  ...props
}: MagneticButtonProps) {
  const allowed = useMotionAllowed();
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!allowed || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className={`group relative overflow-hidden rounded-full px-6 py-3 font-medium will-change-transform ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* shine sweep */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
    </motion.button>
  );
}

export const MagneticButton = memo(MagneticButtonBase);