import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { Footer } from "@/components/sections/Footer";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Processes — MKS Exports",
  description:
    "How MKS makes its leather goods — from hide selection to final QC. Six stations, six pairs of hands, two generations of practice.",
};

const STEPS = [
  {
    n: "01",
    title: "Hide Selection",
    body: "Every piece begins at the tannery. Our team grades hides by hand — checking grain, thickness, and colour consistency. Only the top tier makes it to the workshop. We source exclusively from OEKO-TEX, LWG, and GRS certified suppliers.",
    imgKey: "leatherMaterial" as const,
  },
  {
    n: "02",
    title: "Pattern Cutting",
    body: "A master cutter nests patterns to maximise yield — waste matters as much as accuracy. Patterns are developed in-house or from client specs, cut on our precision boards, and verified against the approved sample.",
    imgKey: "patternCutting" as const,
  },
  {
    n: "03",
    title: "Skiving & Preparation",
    body: "Edges are skived to the right taper for a clean fold. Linings, foams, and reinforcements are bonded. Every component is prepped and staged before it moves to the stitch line.",
    imgKey: "leatherCutting" as const,
  },
  {
    n: "04",
    title: "Stitching & Assembly",
    body: "Saddle-stitched by hand or French-seamed by machine, depending on the product line. Our artisans use a technique nearly lost to industrialisation — a seam that never unravels. Hardware is fitted and tested at this stage.",
    imgKey: "sewingMachine" as const,
  },
  {
    n: "05",
    title: "Edge Finishing",
    body: "Edges are burnished by hand, painted, or folded — up to five passes for a glassy finish. This is where craft meets patience. A single bag can take an hour just for edge work.",
    imgKey: "processEdgeFinishing" as const,
  },
  {
    n: "06",
    title: "Quality Control & Packing",
    body: "Three-station QC: structural integrity, cosmetic inspection, and hardware function. Branded packaging, dust bags, hangtags — everything is packed and ready for your warehouse.",
    imgKey: "processWorkshopWall" as const,
  },
];

const PRINCIPLES = [
  {
    title: "Slow Craft",
    body: "Each piece moves through six pairs of hands — the same patient sequence we've practised for two generations. We do not cut corners.",
  },
  {
    title: "Fair Wages",
    body: "Every artisan is paid above market rate, in line with WFTO guidelines. No child labour, no forced work, no discrimination.",
  },
  {
    title: "Zero-Waste Patterning",
    body: "Our master cutters nest patterns to minimise leather waste. Offcuts are collected and recycled into Shanti Leather products.",
  },
  {
    title: "Traceable Supply Chain",
    body: "Every hide is documented from tannery to finished good. We source only from certified suppliers (OEKO-TEX, LWG, GRS).",
  },
  {
    title: "Continuous Training",
    body: "Artisans train for at least six months before joining the production line. Senior craftspeople mentor juniors in a master-apprentice model.",
  },
];

export default function ProcessesPage() {
  return (
    <main className="flex-1 w-full">
      {/* Hero */}
      <Section snap={false} className="relative isolate overflow-hidden text-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src={images.workshopAtmosphere.src}
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
            Our Processes
          </p>
          <Heading variant="display-lg" className="font-extralight">
            Six stations,
            <span className="italic"> every piece.</span>
          </Heading>
          <p className="text-body-lg max-w-[680px] opacity-90">
            Each order moves through the same six stages, supervised by a line
            lead who has held the role for at least seven years. No shortcuts.
            No substitutions.
          </p>
        </Container>
      </Section>

      {/* Detailed Steps */}
      <Section snap={false} className="bg-ivory">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          {/* Mobile: horizontal carousel of step cards */}
          <MobileCarousel speed={20}>
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="shrink-0 w-[80vw] snap-start flex flex-col gap-3"
              >
                <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden">
                  <Image
                    src={images[step.imgKey].src}
                    alt={images[step.imgKey].alt}
                    fill
                    sizes="80vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-[12px] tracking-[0.18em] uppercase opacity-55 font-bold text-clay-700">
                  Step {step.n}
                </p>
                <h3 className="font-display text-h3 text-clay-700">{step.title}</h3>
                <p className="text-[15px] leading-[1.5] text-clay-700/75">
                  {step.body}
                </p>
              </div>
            ))}
          </MobileCarousel>

          {/* Desktop: alternating image + text layout */}
          <div className="hidden lg:flex flex-col gap-[clamp(64px,8vw,120px)]">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className="grid grid-cols-12 gap-[clamp(24px,3vw,48px)] items-center"
              >
                <div
                  className={`col-span-5 relative aspect-[4/3] rounded-[10px] overflow-hidden ${
                    i % 2 === 1 ? "order-2" : ""
                  }`}
                >
                  <Image
                    src={images[step.imgKey].src}
                    alt={images[step.imgKey].alt}
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className={`col-span-7 flex flex-col gap-[clamp(12px,1.5vw,20px)] ${
                    i % 2 === 1 ? "order-1" : ""
                  }`}
                >
                  <p className="text-[12px] tracking-[0.18em] uppercase opacity-55 font-bold text-clay-700">
                    Step {step.n}
                  </p>
                  <Heading variant="h2" className="text-clay-700">
                    {step.title}
                  </Heading>
                  <p className="text-body text-clay-700/75 max-w-[560px]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Production Principles */}
      <Section snap={false} className="bg-clay-800 text-white">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="h2" className="lg:col-span-7">
              How we
              <span className="italic"> work.</span>
            </Heading>
            <p className="lg:col-span-5 text-body text-white/75 max-w-[480px]">
              The principles behind the process — what guides every
              decision on the workshop floor.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,2vw,32px)]">
            {PRINCIPLES.map((p) => (
              <li
                key={p.title}
                className="border-t border-white/15 pt-[clamp(20px,2vw,28px)] flex flex-col gap-[6px]"
              >
                <h3 className="font-display text-h3 leading-[1.2]">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-white/70 max-w-[360px]">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Lead Times & MOQ */}
      <Section snap={false} className="bg-cream">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="h2" className="lg:col-span-7 text-clay-700">
              Lead times
              <span className="italic"> & MOQs.</span>
            </Heading>
            <p className="lg:col-span-5 text-body text-clay-700/75 max-w-[480px]">
              Honest timelines — we tell you what to expect and we stick to it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(20px,2vw,32px)]">
            {[
              { label: "Sample turnaround", value: "5–7 days" },
              { label: "Production lead time", value: "4–8 weeks" },
              { label: "Minimum order quantity", value: "50 pieces" },
              { label: "Shipping", value: "FOB Kolkata" },
            ].map((item) => (
              <div
                key={item.label}
                className="border-t border-clay-700/15 pt-[clamp(20px,2vw,28px)] flex flex-col gap-2"
              >
                <p className="text-[12px] tracking-[0.18em] uppercase opacity-55 font-bold text-clay-700">
                  {item.label}
                </p>
                <p className="font-display text-h3 text-clay-700">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Button href="/contact" variant="solid" tone="dark">
              Start an order
            </Button>
            <Button href="/products" variant="link" tone="dark">
              See our products →
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
