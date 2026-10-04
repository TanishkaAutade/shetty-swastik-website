"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  useMotionValue,
  animate,
  useInView,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  decimals?: number;
  className?: string;
  suffix?: string;
}

export function AnimatedNumber({
  value,
  duration = 1.5,
  decimals = 0,
  className,
  suffix = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();
  const motionValue = useMotionValue(0);

  const format = useCallback(
    (v: number) => {
      const formatted = new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(v);
      return `${formatted}${suffix}`;
    },
    [decimals, suffix]
  );

  const [displayValue, setDisplayValue] = useState(() =>
    prefersReduced ? format(value) : format(0)
  );

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplayValue(format(latest));
  });

  useEffect(() => {
    if (isInView && !prefersReduced) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [isInView, prefersReduced, motionValue, value, duration]);

  if (prefersReduced) {
    return <span className={className}>{format(value)}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

export default AnimatedNumber;
