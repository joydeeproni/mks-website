"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useT } from "@/components/LanguageProvider";
import { images, type ImageKey } from "@/lib/images";

type Tone = "light" | "dark";

const PRODUCT_CATEGORIES: { href: string; label: string; img: ImageKey }[] = [
  { href: "/products?category=small-accessories", label: "Small Accessories", img: "sgWallet" },
  { href: "/products?category=bags", label: "Bags", img: "bagTote" },
  { href: "/products?category=lifestyle-goods", label: "Lifestyle Goods", img: "sgBeltStrap" },
  { href: "/products?category=ethnic-goods", label: "Ethnic Goods", img: "leatherSatchels" },
  { href: "/products?category=apparel", label: "Apparel", img: "kanthaTextiles" },
  { href: "/products?category=scarves", label: "Scarves & Stoles", img: "softScarf" },
  { href: "/products?category=home-textiles", label: "Home Textiles", img: "softShawl" },
];

export function SiteHeader({
  tone = "light",
  absolute = false,
}: {
  tone?: Tone;
  absolute?: boolean;
}) {
  const t = useT();
  const NAV: { href: string; label: string }[] = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/processes", label: "Processes" },
    { href: "/fair-trade", label: "Fair Trade" },
    { href: "/brands", label: t.nav.brands },
    { href: "/contact", label: "Contact" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMegaSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  // Dismiss overlays on Escape
  useEffect(() => {
    if (!mobileOpen && !megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMegaOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, megaOpen]);

  // Lock body scroll while either overlay is open
  useEffect(() => {
    if (mobileOpen || megaOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen, megaOpen]);

  const effectiveTone: Tone = megaOpen ? "dark" : tone;
  const textClass = effectiveTone === "light" ? "text-white" : "text-clay-700";
  const dividerClass = tone === "light" ? "border-white/10" : "border-clay-700/10";

  return (
    <>
      <header
        className={`${absolute ? "absolute inset-x-0 top-0 z-50" : "relative z-50"} ${megaOpen ? "bg-ivory" : ""} ${textClass} transition-colors duration-200`}
      >
        <Container className="flex items-center justify-between py-[24px]">
          <Link href="/" aria-label="MKS — home" className="flex items-center">
            <Logo className="h-10 md:h-12 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-[clamp(28px,4vw,56px)] text-button font-bold">
            {NAV.map((item) =>
              item.href === "/products" ? (
                <div
                  key={item.href}
                  onMouseEnter={openMega}
                  onMouseLeave={closeMegaSoon}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className="link-button"
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                  >
                    {item.label}
                  </Link>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="link-button">
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="hidden lg:block">
            <Button href="/#partner" variant="link" tone={tone} size="md">
              {t.nav.getQuote}
            </Button>
          </div>
          <button
            type="button"
            className="lg:hidden p-2 -mr-2"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          </button>
        </Container>
      </header>

      {/* Desktop mega menu — fullscreen overlay below the header */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            key="mega"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onMouseEnter={openMega}
            onMouseLeave={closeMegaSoon}
            className="hidden lg:block fixed inset-0 z-40 bg-ivory text-clay-700"
          >
            <div className="h-full overflow-y-auto pt-[clamp(88px,9vw,120px)] pb-[clamp(40px,5vw,80px)]">
              <Container className="flex flex-col gap-[clamp(20px,2.4vw,32px)]">
                <div className="flex items-baseline justify-between gap-6">
                  <p className="micro-label text-clay-700/50">All Products</p>
                  <Link
                    href="/products"
                    onClick={() => setMegaOpen(false)}
                    className="text-button font-bold text-clay-700/70 hover:text-clay-700 underline underline-offset-4"
                  >
                    Browse everything →
                  </Link>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[clamp(12px,1.4vw,20px)]"
                >
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setMegaOpen(false)}
                      className="group relative aspect-[4/5] overflow-hidden rounded-[10px] bg-bone"
                    >
                      <Image
                        src={images[cat.img].src}
                        alt={images[cat.img].alt}
                        fill
                        sizes="(min-width: 1280px) 20vw, (min-width: 768px) 30vw, 45vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                      <p className="absolute left-5 right-5 bottom-5 font-display text-h3 text-white leading-[1.1]">
                        {cat.label}
                      </p>
                    </Link>
                  ))}
                </motion.div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-50 bg-ivory text-clay-700 overflow-y-auto"
          >
            <Container className="flex items-center justify-between py-[24px]">
              <Link
                href="/"
                aria-label="MKS — home"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <Logo className="h-10 md:h-12 w-auto" />
              </Link>
              <button
                type="button"
                className="p-2 -mr-2"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M5 5l14 14M19 5L5 19"
                  />
                </svg>
              </button>
            </Container>

            <Container className="flex flex-col pt-[clamp(16px,3vw,32px)] pb-[clamp(40px,8vw,80px)]">
              <ul className="flex flex-col">
                {NAV.map((item) =>
                  item.href === "/products" ? (
                    <li key={item.href} className={`border-b ${dividerClass.replace("border-white/10", "border-clay-700/10")}`}>
                      <button
                        type="button"
                        onClick={() => setProductsExpanded((v) => !v)}
                        aria-expanded={productsExpanded}
                        className="flex items-center justify-between w-full py-4 text-[clamp(28px,7vw,40px)] font-display font-light tracking-tight"
                      >
                        <span>Products</span>
                        <span aria-hidden className="text-2xl">
                          {productsExpanded ? "−" : "+"}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {productsExpanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-1 flex flex-col">
                              {PRODUCT_CATEGORIES.map((cat) => (
                                <Link
                                  key={cat.href}
                                  href={cat.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="py-2 text-[clamp(16px,4vw,20px)] font-bold text-clay-700/75 hover:text-clay-700"
                                >
                                  {cat.label}
                                </Link>
                              ))}
                              <Link
                                href="/products"
                                onClick={() => setMobileOpen(false)}
                                className="py-2 mt-1 text-[clamp(14px,3.6vw,16px)] font-bold text-clay-700/55 underline underline-offset-4"
                              >
                                View all products →
                              </Link>
                            </div>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={item.href} className="border-b border-clay-700/10">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-4 text-[clamp(28px,7vw,40px)] font-display font-light tracking-tight"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>

              <Button
                href="/#partner"
                variant="solid"
                tone="dark"
                className="mt-[clamp(24px,4vw,40px)] self-start"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.getQuote}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
