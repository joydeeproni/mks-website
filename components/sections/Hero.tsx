"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { images } from "@/lib/images";

const NAV = ["Values", "Story", "Brands", "Materials", "Products"];

export function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <Section className="relative isolate overflow-hidden text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={images.heroWorkshop.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Nav */}
      <Container className="flex items-center justify-between py-[24px]">
        <Link
          href="/"
          aria-label="MKS — home"
          className="font-display text-[clamp(22px,2vw,28px)] font-medium tracking-tight"
        >
          MKS
        </Link>
        <nav className="hidden lg:flex items-center gap-[clamp(28px,4vw,71px)] text-[16px] font-bold tracking-[-0.16px]">
          {NAV.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="link-underline"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="#partner" variant="link" tone="light" size="md">
            Get Quote
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

      {/* Mobile menu drawer */}
      {open && (
        <div className="lg:hidden absolute inset-x-0 top-[72px] z-20 bg-black/80 backdrop-blur-md">
          <Container className="flex flex-col py-6 gap-4">
            {NAV.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-bold tracking-tight py-2 border-b border-white/10"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button
              href="#partner"
              variant="solid"
              tone="light"
              className="mt-3 self-start"
            >
              Get Quote
            </Button>
          </Container>
        </div>
      )}

      {/* Hero copy */}
      <Container className="flex flex-col items-center justify-center text-center pt-[clamp(64px,9vw,120px)] pb-[clamp(96px,14vw,200px)]">
        <div className="flex flex-col gap-[clamp(40px,5vw,72px)] items-center max-w-[920px]">
          <div className="flex flex-col gap-[clamp(12px,1vw,16px)] items-center">
            <Heading variant="display-xl" className="text-balance">
              Bags Made Responsibly
              <br className="hidden sm:block" />
              <span className="block">For Global Brands</span>
            </Heading>
            <p className="text-body-lg tracking-[-0.4px] max-w-[682px]">
              Premium leather bags, accessories, and handcrafted goods —
              manufactured in Kolkata, India, and exported worldwide under the
              Fair Trade banner.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center w-full sm:w-auto">
            <Button
              href="#products"
              variant="outline"
              tone="light"
              className="w-full sm:w-auto"
            >
              Browse Our Work
            </Button>
            <Button
              href="#partner"
              variant="solid"
              tone="light"
              className="w-full sm:w-auto"
            >
              Start An Order
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
