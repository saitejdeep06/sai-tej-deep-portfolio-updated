"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 0.65,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: reduced ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 0.7,
              delay,
              ease: "easeOut",
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className = "",
  amount = 5,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={
        reduced
          ? undefined
          : {
              y: -amount,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function ScaleHover({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={
        reduced
          ? undefined
          : {
              scale: 1.015,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}