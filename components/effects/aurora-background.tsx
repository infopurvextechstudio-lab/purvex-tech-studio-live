"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useMotionAllowed } from "@/hooks/use-reduced-motion-safe";

/**
 * Soft moving aurora blobs behind hero. Blurred, low opacity, slow (24s+).
 * Only 2 blobs — each is a single blurred div, transform-animated only.
 * Fully skipped on mobile / reduced-motion to protect INP & battery.
 */
function AuroraBackgroundBase() {
  const allowed = useMotionAllowed();

  if (!allowed) {
    // Cheap static fallback — no blur animation, no layout cost
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 20%, #6d28d9 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-1/4 -left-1/4 h-[60vh] w-[60vh] rounded-full opacity-[0.12] blur-[110px]"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[55vh] w-[55vh] rounded-full opacity-[0.10] blur-[110px]"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
        animate={{ x: [0, -50, 20, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export const AuroraBackground = memo(AuroraBackgroundBase);