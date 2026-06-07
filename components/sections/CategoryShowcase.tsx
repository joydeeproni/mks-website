"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { useT } from "@/components/LanguageProvider";
import { images } from "@/lib/images";
import { PRODUCT_TAXONOMY, slugify, type CategoryKey } from "@/lib/products";

type Tile = {
  label: string;
  img: { src: string; alt: string };
  tone: "cream" | "clay";
  href: string;
};

const DESCRIPTIONS: Record<CategoryKey, string> = {
  bags:
    "Totes, crossbodies, laptop bags, travel duffels — handcrafted leather carry-everything pieces built for daily use, season after season.",
  accessories:
    "Wallets, belts, cardholders and the small-leather essentials that round out a brand's everyday line.",
  scarves:
    "Silk, cotton, linen, wool and kantha-embroidered wraps — woven, screen-printed, block-printed and hand-painted in our atelier.",
  lifestyle:
    "Journal covers, mats, trays, coasters and home textiles — quiet objects that bring craft to the everyday.",
};

export function CategoryShowcase() {
  const t = useT();
  const CATEGORIES = PRODUCT_TAXONOMY.map((c) => ({
    key: c.key,
    label: c.label,
    description: DESCRIPTIONS[c.key],
    href: `/products?category=${c.key}`,
    tiles: c.items.map((item, i) => ({
      label: item.name,
      img: images[item.img],
      tone: (i % 2 === 0 ? "cream" : "clay") as Tile["tone"],
      href: `/products?category=${c.key}&q=${slugify(item.name)}`,
    })),
  }));

  const [activeKey, setActiveKey] = useState<CategoryKey>(CATEGORIES[0].key);
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
                href={active.href}
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
                <Link
                  key={tile.label}
                  href={tile.href}
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
                </Link>
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
                  >
                    <Link
                      href={tile.href}
                      className={`group relative aspect-[336/400] flex items-center justify-center p-6 overflow-hidden block ${
                        tile.tone === "clay" ? "bg-clay-500" : "bg-mist"
                      }`}
                    >
                      <Image
                        src={tile.img.src}
                        alt={tile.img.alt}
                        fill
                        sizes="336px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/25" />
                      <h3 className="relative font-display text-h3 text-white text-center">
                        {tile.label}
                      </h3>
                    </Link>
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
