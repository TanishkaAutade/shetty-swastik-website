"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const hiddenVariant = { opacity: 0, y: 30 };
const visibleVariant = { opacity: 1, y: 0 };

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const prefersReduced = useReducedMotion();

  // Respect prefers-reduced-motion — render children with no animation
  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={hiddenVariant}
      whileInView={visibleVariant}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
