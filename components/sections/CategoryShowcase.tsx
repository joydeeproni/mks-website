"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

type Category = {
  key: string;
  label: string;
  description: string;
  tiles: { label: string; img: { src: string; alt: string }; tone: "cream" | "clay" }[];
};

const CATEGORIES: Category[] = [
  {
    key: "bags",
    label: "Bags",
    description:
      "Handcrafted leather totes, slings, messengers, and more — built for daily use, designed for your brand.",
    tiles: [
      { label: "Hand Bags", img: images.bagHobo, tone: "cream" },
      { label: "Tote Bags", img: images.bagTote, tone: "clay" },
      { label: "Sling Bags", img: images.bagSling, tone: "cream" },
      { label: "Messenger Bags", img: images.bagBriefcase, tone: "clay" },
      { label: "Backpacks", img: images.bagBackpack, tone: "cream" },
      { label: "Weekenders", img: images.bagWeekender, tone: "clay" },
    ],
  },
  {
    key: "belts",
    label: "Belts",
    description:
      "Saddle-stitched belts in vegetable-tanned hides, brass and steel hardware.",
    tiles: [
      { label: "Dress Belts", img: images.sgBeltStrap, tone: "cream" },
      { label: "Casual Straps", img: images.customStitch, tone: "clay" },
    ],
  },
  {
    key: "scarves",
    label: "Scarves",
    description: "Soft-goods crafted in partnership with Indian textile artisans.",
    tiles: [{ label: "Scarves", img: images.softScarf, tone: "cream" }],
  },
  {
    key: "accessories",
    label: "Accessories",
    description: "Wallets, cardholders, journals, and small leather goods.",
    tiles: [
      { label: "Wallets", img: images.sgWallet, tone: "cream" },
      { label: "Journals", img: images.sgJournal, tone: "clay" },
    ],
  },
  {
    key: "misc",
    label: "Misc.",
    description: "Specialty items, prototypes, and seasonal pieces.",
    tiles: [],
  },
];

/**
 * Category showcase — Figma 1:100.
 * Left column: active category at top (label + description + Learn More),
 * inactive categories pinned at the bottom of the column via flex justify-between.
 * Right column: 2-col image grid of the active category's tiles.
 */
export function CategoryShowcase() {
  const [activeKey, setActiveKey] = useState("bags");
  const active = CATEGORIES.find((c) => c.key === activeKey) ?? CATEGORIES[0];
  const inactive = CATEGORIES.filter((c) => c.key !== activeKey);

  return (
    <Section id="products" className="bg-cream text-clay-800">
      <Container className="v-pad min-h-screen flex">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[clamp(48px,11vw,155px)] items-stretch w-full">
          {/* Left column: active at top, inactive list pinned at bottom */}
          <nav className="w-full lg:w-[337px] shrink-0 flex flex-col justify-between gap-12">
            {/* Active category — top */}
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-h4 text-clay-800 font-bold">
                {active.label}
              </h3>
              <p className="text-body text-black">{active.description}</p>
              <Button
                href={`#${active.key}`}
                variant="link"
                tone="dark"
                className="self-start text-black"
              >
                Learn More
              </Button>
            </div>

            {/* Inactive categories — bottom */}
            <ul className="flex flex-col gap-6 lg:gap-8">
              {inactive.map((c) => (
                <li key={c.key}>
                  <button
                    type="button"
                    onClick={() => setActiveKey(c.key)}
                    className="font-sans text-h4 text-left text-clay-800/45 hover:text-clay-800/80 transition-colors w-full"
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right tile grid — fades + staggers when active category changes */}
          <div className="flex-1 w-full self-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                {active.tiles.map((t) => (
                  <motion.div
                    key={t.label}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative aspect-[336/400] flex items-center justify-center p-6 overflow-hidden ${
                      t.tone === "clay" ? "bg-clay-500" : "bg-mist"
                    }`}
                  >
                    <Image
                      src={t.img.src}
                      alt={t.img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 336px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                    <h3 className="relative font-display text-h3 text-white text-center">
                      {t.label}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
