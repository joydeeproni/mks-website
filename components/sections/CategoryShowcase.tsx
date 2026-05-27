"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { useT } from "@/components/LanguageProvider";
import { images } from "@/lib/images";

type Tile = { label: string; img: { src: string; alt: string }; tone: "cream" | "clay" };
type Category = { key: string; label: string; description: string; tiles: Tile[] };

export function CategoryShowcase() {
  const t = useT();
  const CATEGORIES: Category[] = [
    {
      key: "bags",
      label: t.categories.bags.label,
      description: t.categories.bags.description,
      tiles: [
        { label: t.categories.tiles.handBags, img: images.bagHobo, tone: "cream" },
        { label: t.categories.tiles.toteBags, img: images.bagTote, tone: "clay" },
        { label: t.categories.tiles.slingBags, img: images.bagSling, tone: "cream" },
        { label: t.categories.tiles.messengerBags, img: images.bagBriefcase, tone: "clay" },
        { label: t.categories.tiles.backpacks, img: images.bagBackpack, tone: "cream" },
        { label: t.categories.tiles.weekenders, img: images.bagWeekender, tone: "clay" },
      ],
    },
    {
      key: "belts",
      label: t.categories.belts.label,
      description: t.categories.belts.description,
      tiles: [
        { label: t.categories.tiles.dressBelts, img: images.sgBeltStrap, tone: "cream" },
        { label: t.categories.tiles.casualStraps, img: images.customStitch, tone: "clay" },
      ],
    },
    {
      key: "scarves",
      label: t.categories.scarves.label,
      description: t.categories.scarves.description,
      tiles: [{ label: t.categories.tiles.scarves, img: images.softScarf, tone: "cream" }],
    },
    {
      key: "accessories",
      label: t.categories.accessories.label,
      description: t.categories.accessories.description,
      tiles: [
        { label: t.categories.tiles.wallets, img: images.sgWallet, tone: "cream" },
        { label: t.categories.tiles.journals, img: images.sgJournal, tone: "clay" },
      ],
    },
    {
      key: "misc",
      label: t.categories.misc.label,
      description: t.categories.misc.description,
      tiles: [],
    },
  ];

  const [activeKey, setActiveKey] = useState("bags");
  const active = CATEGORIES.find((c) => c.key === activeKey) ?? CATEGORIES[0];
  const inactive = CATEGORIES.filter((c) => c.key !== activeKey);

  return (
    <Section id="products" className="bg-cream text-clay-800">
      <Container className="v-pad min-h-screen flex">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[clamp(48px,11vw,155px)] items-stretch w-full">
          <nav className="w-full lg:w-[337px] shrink-0 flex flex-col justify-between gap-12">
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
                {t.categories.learnMore}
              </Button>
            </div>

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

          <div className="flex-1 w-full self-stretch">
            {/* Mobile: horizontal carousel */}
            <MobileCarousel>
              {active.tiles.map((tile) => (
                <div
                  key={tile.label}
                  className={`relative aspect-[336/400] w-[75vw] shrink-0 snap-start flex items-center justify-center p-6 overflow-hidden ${
                    tile.tone === "clay" ? "bg-clay-500" : "bg-mist"
                  }`}
                >
                  <Image
                    src={tile.img.src}
                    alt={tile.img.alt}
                    fill
                    sizes="75vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                  <h3 className="relative font-display text-h3 text-white text-center">
                    {tile.label}
                  </h3>
                </div>
              ))}
            </MobileCarousel>

            {/* Desktop: animated grid */}
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
                className="hidden lg:grid grid-cols-2 gap-8"
              >
                {active.tiles.map((tile) => (
                  <motion.div
                    key={tile.label}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative aspect-[336/400] flex items-center justify-center p-6 overflow-hidden ${
                      tile.tone === "clay" ? "bg-clay-500" : "bg-mist"
                    }`}
                  >
                    <Image
                      src={tile.img.src}
                      alt={tile.img.alt}
                      fill
                      sizes="336px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                    <h3 className="relative font-display text-h3 text-white text-center">
                      {tile.label}
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
