"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useT } from "@/components/LanguageProvider";
import { images } from "@/lib/images";

const LEATHER_IMAGES = [
  images.leatherMacro,
  images.customHardware,
  images.customStitch,
  images.sustainability,
  images.customEmboss,
];

/* Number of strip copies in the DOM. 4 copies give enough overlap that the
   wrap-around is never visible regardless of viewport width or scroll speed. */
const REPEATS = 4;

/**
 * Your vision, our work — Figma 1:87, but the original 5-card scroll-snap
 * carousel is replaced with a full-bleed infinite marquee. The strip drifts
 * left slowly by default; the user's scroll velocity accelerates it (and
 * flips its direction when they scroll up). When scroll quiets, it eases
 * back to the gentle baseline drift.
 */
export function Materials() {
  const t = useT();
  return (
    <Section id="materials" className="bg-cream text-clay-700">
      <Container className="pt-[clamp(64px,11vw,160px)]">
        <SectionHeader
          heading={
            <>
              {t.materials.lead}{" "}
              <span className="italic">{t.materials.italic}</span>,
              <br />
              {t.materials.tail}
            </>
          }
          body={t.materials.body}
        />
      </Container>

      {/* Full-bleed marquee — escapes the Container's max-width. */}
      <div className="w-full overflow-hidden py-[clamp(56px,8vw,120px)]">
        <MarqueeStrip />
      </div>
    </Section>
  );
}

function MarqueeStrip() {
  const t = useT();
  const leathers = [
    { label: t.materials.fullGrain, img: LEATHER_IMAGES[0] },
    { label: t.materials.smooth, img: LEATHER_IMAGES[1] },
    { label: t.materials.shanti, img: LEATHER_IMAGES[2] },
    { label: t.materials.vegTanned, img: LEATHER_IMAGES[3] },
    { label: t.materials.embossed, img: LEATHER_IMAGES[4] },
  ];
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  /* Smooth the raw page-scroll velocity into a usable signal. */
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  /* Convert px/s into a 0-5 multiplier. clamp:false lets very fast scrolls
     push beyond 5× (rare). */
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /* The strip is REPEATS copies wide; one copy = 100/REPEATS % of the strip.
     translateX wraps continuously inside that window — the duplicate copies
     fill in the seam so the loop is invisible. */
  const wrapMin = -100 / REPEATS;
  const x = useTransform(baseX, (v) => `${wrap(wrapMin, 0, v)}%`);

  /* Default leftward drift. -2 %/s of the strip ≈ one card every ~5s. Subtle. */
  const baseVelocity = -2;
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /* Flip direction with scroll direction so the marquee feels coupled. */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    /* Add scroll-velocity boost on top of the base drift. */
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.ul
      style={{ x }}
      className="flex gap-8 lg:gap-12 w-max will-change-transform"
    >
      {Array.from({ length: REPEATS }).flatMap((_, copy) =>
        leathers.map((m, i) => (
          <li
            key={`${copy}-${i}`}
            className="shrink-0 w-[clamp(280px,28vw,420px)] flex flex-col gap-4"
          >
            <div className="relative aspect-[336/304] w-full overflow-hidden">
              <Image
                src={m.img.src}
                alt={m.img.alt}
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover"
              />
            </div>
            <p className="font-sans font-bold text-body text-olive-700">
              {m.label}
            </p>
          </li>
        ))
      )}
    </motion.ul>
  );
}
