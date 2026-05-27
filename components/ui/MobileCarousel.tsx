"use client";

import { useRef, useEffect, useCallback, type ReactNode } from "react";

type MobileCarouselProps = {
  children: ReactNode;
  /** CSS class for the scrolling container (mobile only) */
  className?: string;
  /** Pixels per second for auto-scroll. Default 30. */
  speed?: number;
};

/**
 * Horizontal auto-scrolling carousel — mobile only (hidden on lg+).
 * Scrolls slowly by default; user can swipe/drag to override, and auto-scroll
 * resumes after 3 seconds of inactivity. On desktop the children render
 * normally via the parent layout — this component should be paired with a
 * `hidden lg:grid` sibling for the desktop view.
 */
export function MobileCarousel({
  children,
  className = "",
  speed = 30,
}: MobileCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);
  const rafId = useRef(0);
  const lastTime = useRef(0);

  const tick = useCallback(
    (time: number) => {
      const el = scrollRef.current;
      if (el) {
        if (time > pausedUntil.current) {
          const dt = lastTime.current ? (time - lastTime.current) / 1000 : 0;
          el.scrollLeft += speed * dt;
          // Loop: when reaching end, jump back to start
          if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
            el.scrollLeft = 0;
          }
        }
        lastTime.current = time;
      }
      rafId.current = requestAnimationFrame(tick);
    },
    [speed]
  );

  useEffect(() => {
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [tick]);

  const pause = () => {
    pausedUntil.current = performance.now() + 3000;
  };

  return (
    <div
      ref={scrollRef}
      className={`lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-[var(--shell-pad)] px-[var(--shell-pad)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${className}`}
      onTouchStart={pause}
      onTouchEnd={pause}
    >
      {children}
    </div>
  );
}
