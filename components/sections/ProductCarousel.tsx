"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/ui/Section";

import { PRODUCT_TAXONOMY, slugify } from "@/lib/products";

const CATEGORIES = PRODUCT_TAXONOMY.map((c) => ({
  title: c.label,
  productsKey: c.key,
  items: c.items.map((i) => i.name),
}));

const VIDEOS = [
  "/videos/product-set-1.mp4",
  "/videos/product-set-2.mp4",
  "/videos/product-set-3.mp4",
];

export function ProductCarousel() {
  const [slide, setSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoARef = useRef<HTMLVideoElement | null>(null);
  const videoBRef = useRef<HTMLVideoElement | null>(null);
  const [activeLayer, setActiveLayer] = useState<"A" | "B">("A");

  const currentVideoSrc = VIDEOS[slide % VIDEOS.length];
  const nextVideoSrc = VIDEOS[(slide + 1) % VIDEOS.length];
  const aSrc = activeLayer === "A" ? currentVideoSrc : nextVideoSrc;
  const bSrc = activeLayer === "B" ? currentVideoSrc : nextVideoSrc;

  const advance = useCallback(() => {
    setSlide((s) => (s + 1) % CATEGORIES.length);
    setActiveLayer((l) => (l === "A" ? "B" : "A"));
    setProgress(0);
  }, []);

  useEffect(() => {
    const active = activeLayer === "A" ? videoARef.current : videoBRef.current;
    const idle = activeLayer === "A" ? videoBRef.current : videoARef.current;
    if (idle) idle.pause();
    if (active) {
      active.currentTime = 0;
      const playPromise = active.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }
  }, [activeLayer, slide]);

  useEffect(() => {
    const active = activeLayer === "A" ? videoARef.current : videoBRef.current;
    if (!active) return;
    const onTime = () => {
      if (active.duration > 0) {
        setProgress(active.currentTime / active.duration);
      }
    };
    active.addEventListener("timeupdate", onTime);
    return () => active.removeEventListener("timeupdate", onTime);
  }, [activeLayer, slide]);

  const category = CATEGORIES[slide];
  const items = useMemo(() => category.items, [category.items]);

  return (
    <Section fade={false} className="relative isolate overflow-hidden text-white min-h-dvh">
      <div aria-hidden className="absolute inset-0 -z-10">
        <video
          ref={videoARef}
          src={aSrc}
          muted
          playsInline
          preload="auto"
          onEnded={advance}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: activeLayer === "A" ? 1 : 0 }}
        />
        <video
          ref={videoBRef}
          src={bSrc}
          muted
          playsInline
          preload="auto"
          onEnded={advance}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: activeLayer === "B" ? 1 : 0 }}
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative min-h-dvh flex flex-col items-center justify-center px-6 sm:px-10 py-[clamp(80px,12vw,160px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-[820px]"
          >
            <h2 className="font-display font-light text-h2 mb-[clamp(28px,3vw,44px)]">
              {category.title}
            </h2>
            <p
              className="font-display text-[clamp(22px,2.4vw,34px)] leading-[1.32] text-white/55 capitalize"
              style={{ textAlign: "justify", textAlignLast: "center" }}
            >
              {items.map((item, i) => {
                const href = `/products?category=${category.productsKey}&q=${slugify(item)}`;
                return (
                  <span key={i}>
                    <Link
                      href={href}
                      className="transition-opacity duration-200 hover:text-white focus-visible:text-white outline-none"
                    >
                      {item}
                    </Link>
                    {i < items.length - 1 ? ", " : "."}
                  </span>
                );
              })}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[clamp(28px,4vw,48px)] w-[min(420px,60%)]">
          <div className="flex gap-[6px]">
            {CATEGORIES.map((_, i) => {
              const fill =
                i < slide ? 1 : i === slide ? Math.min(1, Math.max(0, progress)) : 0;
              return (
                <div
                  key={i}
                  className="flex-1 h-[2px] bg-white/25 overflow-hidden rounded-full"
                >
                  <div
                    className="h-full bg-white"
                    style={{
                      width: `${fill * 100}%`,
                      transition:
                        i === slide ? "width 120ms linear" : "width 240ms ease-out",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
