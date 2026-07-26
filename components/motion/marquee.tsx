"use client";

import { memo, type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // seconds for one full loop
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Pure CSS marquee (no JS animation loop). Duplicates content once for
 * seamless infinite loop. Cheapest possible way to animate logos/testimonials.
 */
function MarqueeBase({ children, speed = 30, pauseOnHover = true, className = "" }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}>
      <div
        className={`flex w-max gap-8 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        <div className="flex shrink-0 items-center gap-8">{children}</div>
        <div className="flex shrink-0 items-center gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export const Marquee = memo(MarqueeBase);