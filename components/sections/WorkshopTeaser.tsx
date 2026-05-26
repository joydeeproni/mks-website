"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Section } from "@/components/ui/Section";
import { images } from "@/lib/images";

/**
 * Our Processes and Practices — Figma 1:162 + custom horizontal parallax.
 *
 * Desktop (lg+):
 *   - A 350vh-tall track drives `useScroll`. While the user scrolls through it,
 *     a sticky h-screen stage stays pinned in view.
 *   - Tiles are arranged in a wide horizontal ribbon and translate left
 *     together — only 2-3 large tiles are visible at any moment.
 *   - Each tile also gets a small per-tile x/y offset that breaks the rigid
 *     ribbon and gives a layered, parallax-depth feel.
 *   - The title stays centered, then drifts/fades out at the end.
 *
 * Mobile (<lg): static 2-col grid.
 */
const TILES = [
  { label: "Leather Selection", img: images.processLeatherSelection, w: 420, h: 560, depth: 0.55 },
  { label: "Edge Finishing", img: images.processEdgeFinishing, w: 380, h: 460, depth: 1.0 },
  { label: "Hand Stitching", img: images.processHandStitching, w: 480, h: 620, depth: 0.4 },
  { label: "Workshop Wall", img: images.processWorkshopWall, w: 400, h: 500, depth: 1.2 },
  { label: "The Bench", img: images.processTheBench, w: 360, h: 440, depth: 0.7 },
  { label: "Artisan Focus", img: images.processArtisanFocus, w: 440, h: 540, depth: 0.9 },
];

/* Tile container width (vw). 35vw → ~2.5 tiles visible across a 1440 viewport. */
const TILE_W_VW = 35;
const GAP_VW = 10;
const FIRST_TILE_OFFSET_VW = 18; // left padding before tile 0

export function WorkshopTeaser() {
  return (
    <Section
      snap={false}
      fade={false}
      className="bg-clay-800 text-white snap-start"
    >
      <ProcessesParallax />

      {/* Mobile/tablet fallback */}
      <div className="lg:hidden min-h-screen v-pad px-[var(--shell-pad)] flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="font-display text-h2 text-white text-center">
            Slow craft,
            <br />
            <span className="italic">built to last</span>
          </h2>
          <p className="text-body text-white/85 text-center max-w-[440px]">
            Each piece moves through six pairs of hands — the same patient
            sequence we&apos;ve practised in Kolkata for two generations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {TILES.map((t) => (
            <figure key={t.label} className="flex flex-col gap-3">
              <div
                className="relative w-full overflow-hidden rounded-[2px] bg-clay-900"
                style={{ aspectRatio: `${t.w}/${t.h}` }}
              >
                <Image
                  src={t.img.src}
                  alt={t.img.alt}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-caption text-white">{t.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProcessesParallax() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  /* Total ribbon width:
     FIRST_TILE_OFFSET_VW + 6 tiles + 5 gaps + tail padding
     = 18 + 6×35 + 5×10 + 30 = 308vw.
     Translate the whole ribbon by ~-280vw so even the last tile clears the viewport. */
  const ribbonX = useTransform(scrollYProgress, [0, 1], ["0vw", "-280vw"]);

  return (
    <div
      ref={trackRef}
      className="hidden lg:block relative w-full"
      style={{ minHeight: "350vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Title sits above the ribbon, pinned centre, fades out at the end. */}
        <ParallaxTitle progress={scrollYProgress} />

        {/* Horizontal ribbon of tiles */}
        <motion.div
          style={{ x: ribbonX, paddingLeft: `${FIRST_TILE_OFFSET_VW}vw` }}
          className="absolute inset-y-0 left-0 flex items-center will-change-transform"
        >
          {TILES.map((t, i) => (
            <ParallaxTile
              key={t.label}
              tile={t}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ParallaxTitle({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.55, 0.8], [1, 1, 0]);
  const x = useTransform(progress, [0, 0.55, 1], ["0%", "0%", "-30%"]);
  return (
    <motion.div
      style={{ opacity, x }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 px-6 will-change-transform pointer-events-none flex flex-col gap-5 items-center"
    >
      <h2 className="font-display text-h2 text-white text-center whitespace-nowrap drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
        Slow craft,
        <br />
        <span className="italic">built to last</span>
      </h2>
      <p className="text-body text-white/85 text-center max-w-[440px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
        Each piece moves through six pairs of hands — the same patient
        sequence we&apos;ve practised in Kolkata for two generations.
      </p>
    </motion.div>
  );
}

type Tile = (typeof TILES)[number];

function ParallaxTile({
  tile,
  index,
  progress,
}: {
  tile: Tile;
  index: number;
  progress: MotionValue<number>;
}) {
  /* Per-tile parallax: each tile gets a small extra x offset based on its depth.
     Higher depth = faster movement (foreground), smaller depth = slower (background).
     This breaks the rigid ribbon into layered depths.

     Tiles also drift vertically by a small amount — alternating up/down based on
     index — and tilt slightly into / out of frame for a floating-magazine feel. */
  const extraX = useTransform(
    progress,
    [0, 1],
    ["0vw", `${-25 * (tile.depth - 0.7)}vw`]
  );
  const y = useTransform(
    progress,
    [0, 1],
    ["0px", `${(index % 2 === 0 ? -1 : 1) * (20 + tile.depth * 15)}px`]
  );
  const scale = useTransform(progress, [0, 0.5, 1], [1, 1.02, 0.96]);

  /* Vertical anchor: alternate top / middle / bottom so the ribbon feels less
     like a strict horizontal row. */
  const verticalAnchor =
    index % 3 === 0 ? "self-start mt-[12vh]" :
    index % 3 === 1 ? "self-end mb-[12vh]" :
    "self-center";

  return (
    <motion.figure
      style={{
        x: extraX,
        y,
        scale,
        width: `clamp(280px, ${TILE_W_VW}vw, ${tile.w}px)`,
        marginRight: index < TILES.length - 1 ? `${GAP_VW}vw` : 0,
      }}
      className={`shrink-0 flex flex-col gap-4 will-change-transform ${verticalAnchor}`}
    >
      <div
        className="relative w-full overflow-hidden rounded-[2px] bg-clay-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        style={{ aspectRatio: `${tile.w}/${tile.h}` }}
      >
        <Image
          src={tile.img.src}
          alt={tile.img.alt}
          fill
          sizes="40vw"
          className="object-cover"
        />
      </div>
      <figcaption className="text-caption text-white/85">{tile.label}</figcaption>
    </motion.figure>
  );
}
