import type { Variants, Transition } from "framer-motion";

// Central spring/ease config — reuse everywhere for consistency
export const SPRING: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.6,
};

export const SOFT_SPRING: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const; // expo-out, "expensive" feel

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

export const wordStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

export const wordItem: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE_PREMIUM },
  },
};