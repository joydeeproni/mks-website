"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useT } from "@/components/LanguageProvider";

type Tone = "light" | "dark";

export function SiteHeader({
  tone = "light",
  absolute = false,
}: {
  tone?: Tone;
  absolute?: boolean;
}) {
  const t = useT();
  const NAV = [
    { href: "/#values", label: t.nav.values },
    { href: "/#story", label: t.nav.story },
    { href: "/brands", label: t.nav.brands },
    { href: "/#materials", label: t.nav.materials },
    { href: "/#products", label: t.nav.products },
  ];
  const [open, setOpen] = useState(false);
  const textClass = tone === "light" ? "text-white" : "text-clay-700";
  const dividerClass = tone === "light" ? "border-white/10" : "border-clay-700/10";

  return (
    <header
      className={`${absolute ? "absolute inset-x-0 top-0 z-30" : "relative"} ${textClass}`}
    >
      <Container className="flex items-center justify-between py-[24px]">
        <Link href="/" aria-label="MKS — home" className="flex items-center">
          <Logo className="h-10 md:h-12 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-[clamp(28px,4vw,56px)] text-button font-bold">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="link-button">
              {item.label}
            </Link>
          ))}
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
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
            {open ? (
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M5 5l14 14M19 5L5 19"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div
          className={`lg:hidden absolute inset-x-0 top-[72px] z-20 ${tone === "light" ? "bg-black/85" : "bg-ivory"} backdrop-blur-md border-t ${dividerClass}`}
        >
          <Container className="flex flex-col py-6 gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-bold tracking-tight py-2 border-b ${dividerClass}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/#partner"
              variant="solid"
              tone={tone}
              className="mt-3 self-start"
            >
              {t.nav.getQuote}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
