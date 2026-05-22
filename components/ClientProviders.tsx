"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * App-level motion config. Forces animations on regardless of OS
 * prefers-reduced-motion — the design explicitly relies on scroll-driven
 * parallax + section fade-ins.
 */
export function ClientProviders({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
