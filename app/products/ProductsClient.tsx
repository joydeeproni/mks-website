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
import { images } from "@/lib/images";
import {
  PRODUCT_TAXONOMY,
  VALID_CATEGORY_KEYS,
  slugify,
  type CategoryKey,
  type Material,
} from "@/lib/products";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Category = "all" | CategoryKey;

type Product = {
  name: string;
  slug: string;
  category: CategoryKey;
  materials: Material[];
  img: import("@/lib/images").ImageKey;
};

const PRODUCTS: Product[] = PRODUCT_TAXONOMY.flatMap((c) =>
  c.items.map((item) => ({
    name: item.name,
    slug: slugify(item.name),
    category: c.key,
    materials: item.materials,
    img: item.img,
  })),
);

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  ...PRODUCT_TAXONOMY.map((c) => ({ key: c.key, label: c.label })),
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

function parseCategoryParam(raw: string | null): Category {
  if (!raw) return "all";
  if (raw === "all") return "all";
  return (VALID_CATEGORY_KEYS as string[]).includes(raw) ? (raw as Category) : "all";
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
      <Section className="bg-ivory" snap={false} fade={false}>
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
      <Section className="bg-sand lg:hidden" snap={false} fade={false}>
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
