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

    const images = document.querySelectorAll("img");

    images.forEach((img) => {
      img.decoding = "async";
      img.loading = "lazy";
    });

    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {
      video.preload = "metadata";
    });

    const sections =
      document.querySelectorAll("section");

    sections.forEach((section) => {
      const el = section as HTMLElement;

      el.style.contain = "layout paint style";

      el.style.contentVisibility = "auto";
    });

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