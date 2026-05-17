import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Story } from "@/components/sections/Story";
import { Artisanal } from "@/components/sections/Artisanal";
import { Sustainability } from "@/components/sections/Sustainability";
import { Partner } from "@/components/sections/Partner";
import { ValueProps } from "@/components/sections/ValueProps";
import { Footer } from "@/components/sections/Footer";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Process — Inside the MKS Workshop",
  description:
    "How MKS makes its leather goods — pattern cutting, saddle-stitching, vegetable tanning, and Fair Trade practice inside our Kolkata workshop.",
};

const STEPS = [
  {
    n: "01",
    title: "Selection",
    body: "Hides are graded by hand at heritage tanneries before they ever reach the workshop.",
  },
  {
    n: "02",
    title: "Pattern cutting",
    body: "Patterns are nested by a master cutter — yield matters as much as accuracy.",
  },
  {
    n: "03",
    title: "Skiving & prep",
    body: "Edges are skived to the right taper. Linings, foams and reinforcements are bonded.",
  },
  {
    n: "04",
    title: "Stitching",
    body: "Saddle-stitched by hand or French-seamed by machine, depending on the line.",
  },
  {
    n: "05",
    title: "Edge finish",
    body: "Burnished by hand, painted, or folded. Up to five passes for a glassy finish.",
  },
  {
    n: "06",
    title: "QC & pack",
    body: "Three-station QC. Branded packaging, dust bag, hangtag — ready for your warehouse.",
  },
];

export default function OurProcessPage() {
  return (
    <main className="flex-1 w-full">
      <Section className="relative isolate overflow-hidden text-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src={images.storyFloor.src}
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
        <Container className="pt-[clamp(64px,8vw,120px)] pb-[clamp(80px,10vw,160px)] flex flex-col gap-[clamp(20px,2vw,32px)] max-w-[920px]">
          <p className="text-[12px] tracking-[0.22em] uppercase opacity-80 font-bold">
            Our process
          </p>
          <Heading variant="display-lg" className="font-extralight">
            Inside the
            <span className="italic"> Workshop.</span>
          </Heading>
          <p className="text-body-lg max-w-[680px] opacity-90">
            A second-generation, women-led leather workshop in Kolkata. We make
            slowly — and we make right — under the Fair Trade banner.
          </p>
        </Container>
      </Section>

      <Story />

      {/* Artisanal + sustainability share the dark clay-800 panel */}
      <Section className="bg-clay-800 text-white">
        <Container className="flex flex-col gap-[clamp(64px,10vw,160px)] v-pad-lg">
          <Artisanal />
          <Sustainability />
        </Container>
      </Section>

      {/* Six-step process explainer */}
      <Section className="bg-ivory">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="display-md" className="lg:col-span-7 text-clay-700">
              Six steps,
              <br />
              <span className="italic">every piece.</span>
            </Heading>
            <p className="lg:col-span-5 text-body-lg text-clay-700/75 max-w-[480px]">
              Every order moves through the same six stations, supervised by a
              line lead who has held the role for at least seven years.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,2vw,32px)]">
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="border-t border-clay-700/15 pt-[clamp(20px,2vw,28px)] flex flex-col gap-[6px]"
              >
                <p className="text-[12px] tracking-[0.18em] uppercase opacity-65 font-bold text-clay-700">
                  {s.n}
                </p>
                <h3 className="font-display text-h3 leading-[1.2] text-clay-700">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-clay-700/75 max-w-[360px]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Button href="/#partner" variant="solid" tone="dark">
              Start an order
            </Button>
            <Button href="/" variant="link" tone="dark">
              ← Back to home
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
