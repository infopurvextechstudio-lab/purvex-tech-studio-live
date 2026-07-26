"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Fast fade + blur + scale between route changes. Wrap {children} in
 * app/template.tsx (NOT layout.tsx — template re-mounts per route,
 * which is required for exit animations to fire).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: "blur(4px)", scale: 0.99 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        exit={{ opacity: 0, filter: "blur(4px)", scale: 0.99 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}