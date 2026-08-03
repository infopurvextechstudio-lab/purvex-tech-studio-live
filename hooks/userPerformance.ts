"use client";

import { useEffect } from "react";

import {
  optimizeEverything,
  isMobile,
  isSlowConnection,
  prefersReducedMotion,
} from "@/lib/performance";

export default function usePerformance() {
  useEffect(() => {
    optimizeEverything();

    const root = document.documentElement;

    if (isMobile()) {
      root.classList.add("mobile-device");
    }

    if (isSlowConnection()) {
      root.classList.add("slow-network");
    }

    if (prefersReducedMotion()) {
      root.classList.add("reduce-motion");
    }

    

    

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "section-visible"
            );
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}