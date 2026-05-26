"use client";

import { MotionConfig } from "motion/react";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/LanguageProvider";

/**
 * App-level client providers.
 *
 * 1. ReactLenis — momentum/drag-feel scroll. `lerp` is the interpolation
 *    amount per frame: lower = smoother & laggier, higher = snappier.
 *    0.08 sits in the "premium, weighty" range.
 * 2. MotionConfig — forces animations on regardless of OS prefers-reduced-
 *    motion; the design relies on the section fades + parallax + marquee.
 * 3. LanguageProvider — locale state (EN/IT/DE/FR) + dictionary for useT().
 */
export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      }}
    >
      <MotionConfig reducedMotion="never">
        <LanguageProvider>{children}</LanguageProvider>
      </MotionConfig>
    </ReactLenis>
  );
}
