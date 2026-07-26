"use client";

import { useReducedMotion } from "framer-motion";
import { useIsMobile } from "./use-mobile";

/**
 * Single source of truth: "should I render decorative motion at all?"
 * Combines OS-level reduced-motion preference + mobile detection.
 * Any heavy/ambient effect (grid, aurora, particles, cursor, mouse-gradient)
 * must check this before mounting.
 */
export function useMotionAllowed() {
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();
  return !prefersReduced && !isMobile;
}