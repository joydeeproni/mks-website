import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { PastWork } from "@/components/sections/PastWork";
import { Partner } from "@/components/sections/Partner";
import { ValueProps } from "@/components/sections/ValueProps";
import { Footer } from "@/components/sections/Footer";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Brands We Craft For — MKS Exports",
  description:
    "A two-decade roster of Fair Trade brand partnerships — SERRV, MadeFree, Fair Anita, Ten Thousand Villages and more.",
};

const ROSTER = [
  {
    name: "SERRV International",
    years: "1998 — present",
    category: "Bags · totes · accessories",
    imgKey: "workServv" as const,
  },
  {
    name: "MadeFree®",
    years: "2019 — present",
    category: "Backpack line",
    imgKey: "workMadeFreeImage" as const,
  },
  {
    name: "Fair Anita",
    years: "2016 — present",
    category: "Soft goods · pouches",
    imgKey: "workFairAnita" as const,
  },
  {
    name: "Ten Thousand Villages",
    years: "2004 — present",
    category: "Scarves · bandanas",
    imgKey: "workTenThousand" as const,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "MKS is a valued long term partner of SERRV’s and are experts in what they do. They always provide excellent communication and deliver quality product that our customers love.",
    name: "Sourcing Team",
    org: "SERRV International",
  },
  {
    quote:
      "Working with MKS reset my expectations of what a factory partnership can feel like. Calls are answered. Samples are honest. Deadlines stick.",
    name: "Designer",
    org: "MadeFree®",
  },
];

export default function BrandsPage() {
  return (
    <main className="flex-1 w-full">
      <Section className="relative isolate overflow-hidden text-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src={images.workServv.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 35%" }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <SiteHeader tone="light" />
        <Container className="pt-[clamp(64px,8vw,120px)] pb-[clamp(80px,10vw,160px)] flex flex-col gap-[clamp(20px,2vw,32px)] max-w-[920px]">
          <p className="text-[12px] tracking-[0.22em] uppercase opacity-80 font-bold">
            Brands
          </p>
          <Heading variant="display-lg" className="font-extralight">
            Quietly behind
            <span className="italic"> brands you trust.</span>
          </Heading>
          <p className="text-body-lg max-w-[680px] opacity-90">
            Two decades of long, low-key partnerships with Fair Trade
            wholesalers and direct-to-consumer brands. Below is a small
            sample of the roster — full names available under NDA.
          </p>
        </Container>
      </Section>

      {/* Roster grid */}
      <Section className="bg-ivory">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="display-md" className="lg:col-span-7 text-clay-700">
              Current partners
            </Heading>
            <p className="lg:col-span-5 text-body-lg text-clay-700/75 max-w-[480px]">
              A curated cross-section — most of these partnerships are five
              years or longer.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,2vw,32px)]">
            {ROSTER.map((p) => (
              <li
                key={p.name}
                className="group flex flex-col gap-[clamp(12px,1.4vw,20px)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden rounded-[10px] bg-bone">
                  <Image
                    src={images[p.imgKey].src}
                    alt={images[p.imgKey].alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[12px] tracking-[0.18em] uppercase font-bold text-clay-700/55">
                    {p.years} · {p.category}
                  </p>
                  <h3 className="font-display text-h2 text-clay-700 tracking-[-0.02em] leading-[1.15]">
                    {p.name}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Existing detailed case studies */}
      <PastWork />

      {/* Testimonials */}
      <Section className="bg-clay-800 text-white">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <Heading variant="display-md" className="font-extralight">
            What partners
            <br />
            <span className="italic">say about us.</span>
          </Heading>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(20px,2vw,40px)]">
            {TESTIMONIALS.map((t, i) => (
              <li
                key={i}
                className="border-t border-white/20 pt-[clamp(24px,2.5vw,40px)] flex flex-col gap-[clamp(16px,2vw,28px)]"
              >
                <p className="font-display italic text-[clamp(20px,1.8vw,28px)] leading-[1.4] tracking-[-0.01em]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[12px] tracking-[0.18em] uppercase opacity-70 font-bold">
                  {t.name} · {t.org}
                </p>
              </li>
            ))}
          </ul>
          <div className="pt-3">
            <Button href="/#partner" variant="solid" tone="light">
              Become a partner
            </Button>
          </div>
        </Container>
      </Section>

      <Partner />
      <ValueProps />
      <Footer />
    </main>
  );
}
