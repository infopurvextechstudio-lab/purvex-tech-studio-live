"use client";

import { memo, type ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-config";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

/**
 * Wraps any section. Reveals once (viewport={{ once: true }}) — no repeated
 * layout/paint cost on re-scroll. Use `stagger` to fade in children in turn.
 */
function SectionRevealBase({
  children,
  className,
  stagger = false,
  delay = 0,
}: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger ? staggerContainer : fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export const SectionReveal = memo(SectionRevealBase);

// Use inside a stagger=true SectionReveal for children
export const RevealItem = memo(function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
});