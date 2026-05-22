"use client";

import { motion, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = MotionProps & {
  children: ReactNode;
  className?: string;
  /** Delay before the fade starts (seconds). Used for staggered children. */
  delay?: number;
  /** Translate-y distance (px) the element travels while fading in. */
  y?: number;
};

/**
 * Subtle in-view fade. Triggers once when the element enters the viewport
 * (30% visibility). Default: opacity 0→1, y 24→0, 700ms, easeOut.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
