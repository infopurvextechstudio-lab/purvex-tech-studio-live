"use client";

import { useReducedMotion } from "framer-motion";

export function useMotionAllowed() {
  const prefersReducedMotion = useReducedMotion();

  if (typeof window === "undefined") {
    return false;
  }

  return !prefersReducedMotion && window.innerWidth >= 768;
}