"use client";

import { useEffect, useRef, memo } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/**
 * Animates a number using a spring MotionValue, written directly to
 * textContent via ref — avoids a React re-render on every frame.
 */
function CounterBase({ value, suffix = "", prefix = "", duration = 1.4, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`;
      }
    });
  }, [spring, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}

export const Counter = memo(CounterBase);