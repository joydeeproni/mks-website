"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { images, type ImageKey } from "@/lib/images";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Category =
  | "all"
  | "small-accessories"
  | "bags"
  | "lifestyle-goods"
  | "ethnic-goods"
  | "apparel"
  | "scarves"
  | "home-textiles";

type Material =
  | "all"
  | "full-grain"
  | "smooth"
  | "veg-tanned"
  | "shanti"
  | "embossed"
  | "kantha";

type Product = {
  name: string;
  slug: string;
  category: Category;
  materials: Material[];
  img: ImageKey;
  subtypes?: string;
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type Seed = {
  name: string;
  img: ImageKey;
  materials: Material[];
  subtypes?: string;
};

const SEEDS: Record<Exclude<Category, "all">, Seed[]> = {
  "small-accessories": [
    { name: "Wallets", img: "sgWallet", materials: ["full-grain", "smooth", "veg-tanned"], subtypes: "Bi-fold, tri-fold, card holders, travel wallets, passport covers" },
    { name: "Coin Purses", img: "sgPouch", materials: ["smooth", "embossed"] },
    { name: "Key Pouches", img: "sgKeyFob", materials: ["smooth", "veg-tanned"] },
    { name: "Key Fobs", img: "sgKeyFob", materials: ["veg-tanned"] },
    { name: "Cardholders", img: "sgCardholder", materials: ["smooth", "veg-tanned"] },
    { name: "Business Card Holders", img: "sgCardholder", materials: ["smooth", "full-grain"] },
    { name: "Luggage Tags", img: "stockBelt3", materials: ["veg-tanned"] },
    { name: "AirPod/Earbud Cases", img: "sgKeyFob", materials: ["smooth"] },
    { name: "Glasses Cases", img: "stockPouch", materials: ["smooth", "veg-tanned"] },
    { name: "Watch Rolls", img: "sgWallet", materials: ["full-grain", "smooth"] },
    { name: "Pen Sleeves", img: "sgKeyFob", materials: ["smooth"] },
    { name: "Cable Organisers", img: "stockPouch", materials: ["smooth"] },
    { name: "Money Clips", img: "sgCardholder", materials: ["smooth"] },
    { name: "Badge Holders", img: "stockBelt3", materials: ["veg-tanned"] },
    { name: "Cheque Book Covers", img: "sgJournal", materials: ["full-grain", "smooth"] },
  ],
  bags: [
    { name: "Tote Bags", img: "bagTote", materials: ["full-grain", "smooth"] },
    { name: "Shoulder Bags", img: "stockShoulder1", materials: ["full-grain", "smooth"] },
    { name: "Crossbody Bags", img: "bagCrossbody", materials: ["smooth", "full-grain"] },
    { name: "Satchels", img: "stockSatchel", materials: ["full-grain", "veg-tanned"] },
    { name: "Bucket Bags", img: "stockBag1", materials: ["smooth", "veg-tanned"] },
    { name: "Clutches", img: "stockClutch1", materials: ["smooth", "embossed"] },
    { name: "Hobo Bags", img: "bagHobo", materials: ["full-grain", "smooth"] },
    { name: "Sling Bags", img: "bagSling", materials: ["smooth", "veg-tanned"] },
    { name: "Backpacks", img: "bagBackpack", materials: ["full-grain", "veg-tanned"], subtypes: "Mini, laptop, travel" },
    { name: "Duffels", img: "bagWeekender", materials: ["full-grain", "veg-tanned"] },
    { name: "Weekenders", img: "stockBag2", materials: ["full-grain", "veg-tanned"] },
    { name: "Briefcases", img: "bagBriefcase", materials: ["full-grain", "smooth"] },
    { name: "Messenger Bags", img: "stockMessenger", materials: ["full-grain", "veg-tanned"] },
    { name: "Belt Bags / Fanny Packs", img: "stockBelt1", materials: ["smooth", "full-grain"] },
    { name: "Laptop Sleeves and Folios", img: "stockLaptop", materials: ["smooth", "veg-tanned"] },
    { name: "iPad Cases", img: "stockLaptop", materials: ["smooth"] },
    { name: "Document Holders", img: "sgJournal", materials: ["veg-tanned", "full-grain"] },
    { name: "Drawstring Pouches", img: "stockPouch", materials: ["smooth"] },
    { name: "Shopping Totes", img: "softTote", materials: ["full-grain"] },
  ],
  "lifestyle-goods": [
    { name: "Belts", img: "sgBeltStrap", materials: ["full-grain", "veg-tanned"], subtypes: "Women's, men's, reversible, woven" },
    { name: "Gloves", img: "softGloves", materials: ["smooth"] },
    { name: "Bracelets", img: "stockBelt2", materials: ["veg-tanned"] },
    { name: "Cuffs", img: "stockBelt3", materials: ["veg-tanned", "embossed"] },
    { name: "Hair Accessories", img: "sgKeyFob", materials: ["smooth"] },
    { name: "Dog Collars and Leashes", img: "stockBelt2", materials: ["full-grain", "veg-tanned"] },
    { name: "Journal/Notebook Covers", img: "sgJournal", materials: ["full-grain", "veg-tanned"] },
    { name: "Diary Covers", img: "sgJournal", materials: ["veg-tanned"] },
    { name: "Photo Album Covers", img: "sgJournal", materials: ["full-grain"] },
    { name: "Jewellery Rolls", img: "stockPouch", materials: ["smooth"] },
    { name: "Makeup Pouches", img: "sgPouch", materials: ["smooth"] },
    { name: "Toiletry Bags", img: "stockPouch", materials: ["smooth", "veg-tanned"] },
  ],
  "ethnic-goods": [
    { name: "Money Boxes", img: "stockBag1", materials: ["embossed"], subtypes: "Figural designs — car, animal, building, vehicle shapes" },
    { name: "Embossed Coin Purses", img: "sgPouch", materials: ["embossed"] },
    { name: "Painted Wallets", img: "sgWallet", materials: ["smooth", "embossed"] },
    { name: "Decorative Key Chains", img: "sgKeyFob", materials: ["embossed"] },
    { name: "Ethnic-Style Belts", img: "sgBeltStrap", materials: ["embossed", "veg-tanned"] },
    { name: "Handpainted Leather Notebook Covers", img: "sgJournal", materials: ["veg-tanned"] },
    { name: "Leather Bookmarks", img: "stockBelt3", materials: ["veg-tanned"] },
    { name: "Leather Coasters", img: "stockBelt3", materials: ["veg-tanned"] },
    { name: "Leather Wall Hangings", img: "leatherSatchels", materials: ["veg-tanned", "embossed"] },
    { name: "Festival/Novelty Gift Items", img: "stockBag2", materials: ["embossed"] },
  ],
  apparel: [
    { name: "Sundresses", img: "kanthaTextiles", materials: [] },
    { name: "Shift Dresses", img: "kanthaTextiles", materials: [] },
    { name: "Wrap Dresses", img: "kanthaTextiles", materials: [] },
    { name: "Kaftans", img: "kanthaTextiles", materials: [] },
    { name: "Tunics", img: "softShawl", materials: [] },
    { name: "Blouses", img: "softShawl", materials: [] },
    { name: "Palazzo Trousers", img: "kanthaTextiles", materials: [] },
    { name: "Wide-Leg Trousers", img: "kanthaTextiles", materials: [] },
    { name: "Jumpsuits", img: "kanthaTextiles", materials: [] },
    { name: "Co-ord Sets", img: "softBandana", materials: [], subtypes: "Top + trouser, top + skirt" },
    { name: "Kimono Jackets", img: "softShawl", materials: [] },
    { name: "Dressing Gowns", img: "softShawl", materials: [] },
    { name: "Kurta-Style Tops", img: "softBandana", materials: [] },
    { name: "Nightwear", img: "softBandana", materials: [] },
    { name: "Kidswear in Matching Prints", img: "kanthaTextiles", materials: [] },
  ],
  scarves: [
    { name: "Silk Scarves", img: "softScarf", materials: [], subtypes: "Mulberry, tussar, matka, dupion" },
    { name: "Cotton Stoles", img: "softScarf", materials: [], subtypes: "Organic and non-organic" },
    { name: "Wool/Wool-Blend Stoles and Shawls", img: "softShawl", materials: [] },
    { name: "Linen Stoles", img: "softScarf", materials: [] },
    { name: "Viscose Scarves", img: "softScarf", materials: [] },
    { name: "Bamboo-Fibre Scarves", img: "softScarf", materials: [] },
    { name: "Kantha-Embroidered Scarves", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Blended Scarves", img: "softShawl", materials: [] },
    { name: "Men's Mufflers", img: "softBandana", materials: [] },
    { name: "Square Neckerchiefs", img: "softBandana", materials: [] },
    { name: "Oversized Wraps", img: "softShawl", materials: [] },
    { name: "Sarongs/Pareos", img: "softScarf", materials: [] },
    { name: "Pocket Squares", img: "softBandana", materials: [] },
  ],
  "home-textiles": [
    { name: "Kantha Throws and Quilts", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Cushion Covers", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Table Runners", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Napkins", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Placemats", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Tea Towels", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Bedcovers", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Curtains", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Throw Blankets", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Tote Bag Liners", img: "kanthaTextiles", materials: ["kantha"] },
    { name: "Fabric Gift Wraps", img: "kanthaTextiles", materials: ["kantha"], subtypes: "Furoshiki-style" },
  ],
};

const PRODUCTS: Product[] = (Object.entries(SEEDS) as [Exclude<Category, "all">, Seed[]][]).flatMap(
  ([category, items]) =>
    items.map((s) => ({
      name: s.name,
      slug: slugify(s.name),
      category,
      materials: s.materials,
      img: s.img,
      subtypes: s.subtypes,
    })),
);

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "small-accessories", label: "Small Accessories" },
  { key: "bags", label: "Bags" },
  { key: "lifestyle-goods", label: "Lifestyle Goods" },
  { key: "ethnic-goods", label: "Ethnic Goods" },
  { key: "apparel", label: "Apparel" },
  { key: "scarves", label: "Scarves & Stoles" },
  { key: "home-textiles", label: "Home Textiles" },
];

const MATERIALS: { key: Material; label: string }[] = [
  { key: "all", label: "All Materials" },
  { key: "full-grain", label: "Full Grain" },
  { key: "smooth", label: "Smooth Leather" },
  { key: "veg-tanned", label: "Vegetable Tanned" },
  { key: "shanti", label: "Shanti Leather" },
  { key: "embossed", label: "Embossed Hide" },
  { key: "kantha", label: "Kantha Textiles" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const VALID_CATEGORIES: Category[] = CATEGORIES.map((c) => c.key);

function parseCategoryParam(raw: string | null): Category {
  if (!raw) return "all";
  return VALID_CATEGORIES.includes(raw as Category) ? (raw as Category) : "all";
}

export function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = parseCategoryParam(searchParams.get("category"));
  const initialQuery = searchParams.get("q");
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
  const [activeMaterial, setActiveMaterial] = useState<Material>("all");
  const [activeSlug, setActiveSlug] = useState<string | null>(initialQuery);
  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (activeMaterial !== "all" && !p.materials.includes(activeMaterial))
        return false;
      if (activeSlug && p.slug !== activeSlug) return false;
      return true;
    });
  }, [activeCategory, activeMaterial, activeSlug]);

  return (
    <main className="flex-1 w-full">
      {/* Hero */}
      <Section className="relative isolate overflow-hidden bg-clay-800 text-white" snap={false} fade={false}>
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src={images.colorfulBags.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <SiteHeader tone="light" />
        <Container className="pt-[clamp(48px,6vw,80px)] pb-[clamp(64px,8vw,120px)] flex flex-col gap-[clamp(16px,2vw,28px)] max-w-[920px]">
          <p className="micro-label opacity-80">Products</p>
          <Heading variant="display-lg" className="font-extralight">
            What we<span className="italic"> make.</span>
          </Heading>
          <p className="text-body-lg max-w-[640px] opacity-90">
            Leather bags, belts, scarves, and accessories — handcrafted in our
            Kolkata workshop. Bring your design, we&apos;ll make it happen.
          </p>
        </Container>
      </Section>

      {/* Product listing */}
      <Section className="bg-ivory" snap={false}>
        <div className="w-full px-[clamp(20px,4vw,40px)] v-pad flex flex-col lg:flex-row gap-[clamp(32px,4vw,64px)]">
          {/* ============ LEFT: Product grid ============ */}
          <div className="flex-1 min-w-0 flex flex-col gap-[clamp(24px,3vw,40px)]">
            {/* Filter bar */}
            <div className="flex flex-col gap-[clamp(16px,2vw,24px)] pb-[clamp(20px,2.5vw,32px)] border-b border-clay-700/15">
              {/* Category tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {CATEGORIES.map((cat) => (
                  <Button
                    key={cat.key}
                    variant="pill"
                    tone="dark"
                    size="sm"
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setActiveSlug(null);
                    }}
                    className={
                      activeCategory === cat.key
                        ? "bg-clay-700 text-white border-clay-700"
                        : ""
                    }
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>

              {/* Material filters */}
              <div className="flex flex-wrap items-center gap-1.5">
                {MATERIALS.map((mat) => (
                  <button
                    key={mat.key}
                    type="button"
                    onClick={() => setActiveMaterial(mat.key)}
                    className={`px-4 py-1.5 text-[12px] font-bold tracking-[0.06em] uppercase transition-colors duration-200 rounded-full border ${
                      activeMaterial === mat.key
                        ? "bg-clay-700 text-white border-clay-700"
                        : "bg-transparent text-clay-700/60 border-clay-700/20 hover:border-clay-700 hover:text-clay-700"
                    }`}
                  >
                    {mat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count + active item-level filter chip */}
            <div className="flex flex-wrap items-center gap-3">
              <p className="micro-label text-clay-700/50">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
              </p>
              {activeSlug && (
                <button
                  type="button"
                  onClick={() => setActiveSlug(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-clay-700 text-white px-3 py-1 text-[12px] font-bold tracking-[0.06em] uppercase hover:opacity-80 transition-opacity"
                >
                  {activeSlug.replace(/-/g, " ")}
                  <span aria-hidden>×</span>
                </button>
              )}
            </div>

            {/* Product grid */}
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                <motion.div
                  key={`${activeCategory}-${activeMaterial}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-[clamp(16px,2.2vw,32px)] gap-y-[clamp(32px,4vw,56px)]"
                >
                  {filtered.map((product, i) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex flex-col"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-[10px] bg-bone">
                        <Image
                          src={images[product.img].src}
                          alt={images[product.img].alt}
                          fill
                          sizes="(min-width: 1280px) 20vw, (min-width: 640px) 30vw, 45vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="mt-[clamp(10px,1.2vw,16px)] flex flex-col gap-1">
                        <p className="font-display text-[clamp(16px,1.4vw,20px)] leading-[1.3] text-clay-700">
                          {product.name}
                        </p>
                        {product.subtypes && (
                          <p className="text-[13px] leading-[1.4] text-clay-700/55">
                            {product.subtypes}
                          </p>
                        )}
                        {product.materials.length > 0 && (
                          <p className="text-[13px] leading-[1.4] text-clay-700/50 capitalize">
                            {product.materials.join(" · ")}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-[clamp(48px,6vw,80px)] text-center"
                >
                  <p className="text-body text-clay-700/60">
                    No products match your current filters.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("all");
                      setActiveMaterial("all");
                      setActiveSlug(null);
                    }}
                    className="mt-4 text-button font-bold text-clay-700 underline underline-offset-4 hover:opacity-65 transition-opacity"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============ RIGHT: Sidebar ============ */}
          <aside className="hidden lg:flex flex-col w-[clamp(280px,22vw,380px)] shrink-0">
            <div className="sticky top-[clamp(24px,3vw,40px)] flex flex-col gap-[clamp(24px,3vw,40px)]">
              {/* Brand text */}
              <div className="flex flex-col gap-[clamp(12px,1.5vw,20px)] pb-[clamp(24px,3vw,40px)] border-b border-clay-700/15">
                <p className="micro-label text-clay-700/50">MKS Products</p>
                <p className="text-body text-clay-700/75 max-w-[360px]">
                  From totes and messengers to wallets, journals, and scarves — MKS
                  manufactures the full range. Every product is handcrafted in our
                  Kolkata workshop under the Fair Trade banner.
                </p>
                <p className="text-body text-clay-700/75 max-w-[360px]">
                  Bring us your design — any material, any style. We handle
                  sampling, production, and direct-to-warehouse shipping.
                </p>
              </div>

              {/* Workshop video */}
              <div className="flex flex-col gap-[clamp(10px,1.2vw,16px)]">
                <p className="micro-label text-clay-700/50">Our Workshop</p>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] bg-bone">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/mks-videoreel.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* CTA */}
              <Button href="/contact" variant="solid" tone="dark">
                Start a project →
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {/* Mobile-only sidebar content */}
      <Section className="bg-sand lg:hidden" snap={false}>
        <Container className="v-pad flex flex-col gap-[clamp(24px,3vw,40px)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(24px,3vw,40px)] items-start">
            <div className="md:col-span-5 flex flex-col gap-[clamp(16px,2vw,28px)]">
              <p className="micro-label text-clay-700/50">MKS Products</p>
              <Heading variant="h3" className="text-clay-700">
                Your design,{" "}
                <span className="italic">our hands.</span>
              </Heading>
              <p className="text-body text-clay-700/75">
                From totes and messengers to wallets, journals, and scarves — MKS
                manufactures the full range. Bring us your design — any material,
                any style.
              </p>
              <Button href="/contact" variant="solid" tone="dark" className="self-start">
                Start a project →
              </Button>
            </div>
            <div className="md:col-span-7 relative aspect-video overflow-hidden rounded-[10px] bg-bone">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/mks-videoreel.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
