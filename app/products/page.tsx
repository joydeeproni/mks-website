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
  title: "Products & Services — MKS Exports",
  description:
    "Leather bags, belts, scarves, accessories, and custom manufacturing services — handcrafted in Kolkata under the Fair Trade banner.",
};

const CATEGORIES = [
  {
    title: "Bags",
    body: "Totes, slings, messengers, backpacks, weekenders, and briefcases — in full-grain, smooth, and vegetable-tanned leathers. Every bag is built for daily use and designed to carry your brand.",
    types: ["Hand Bags", "Tote Bags", "Sling Bags", "Messenger Bags", "Backpacks", "Weekenders"],
    imgKey: "leatherSatchels" as const,
  },
  {
    title: "Belts",
    body: "Saddle-stitched dress belts and casual straps in vegetable-tanned hides, with brass and steel hardware. Available in custom widths, finishes, and buckle options.",
    types: ["Dress Belts", "Casual Straps", "Braided Belts", "Reversible Belts"],
    imgKey: "artisanLeatherWork" as const,
  },
  {
    title: "Scarves & Textiles",
    body: "Soft-goods crafted in partnership with Indian textile artisans — hand-stitched kantha, block-printed cotton, and handloom silk. Each piece carries generations of craft tradition.",
    types: ["Scarves", "Shawls", "Kantha Textiles", "Block Prints"],
    imgKey: "kanthaTextiles" as const,
  },
  {
    title: "Accessories",
    body: "Wallets, cardholders, journals, pouches, and small leather goods — the perfect complement to your bag range, or a standalone capsule collection.",
    types: ["Wallets", "Cardholders", "Journals", "Pouches", "Key Fobs"],
    imgKey: "artisanInspecting" as const,
  },
];

const SERVICES = [
  {
    title: "White Label Manufacturing",
    body: "Your brand, our hands. We manufacture to your spec and ship under your label — from hangtags to dust bags, everything is yours.",
  },
  {
    title: "Custom Design & Development",
    body: "Bring a sketch, a photo, or just a description. Our design team turns concepts into production-ready samples in days.",
  },
  {
    title: "Sampling & Prototyping",
    body: "Test the leather, feel the stitching, and approve the standard before you commit to production. Samples typically ship within 5–7 working days.",
  },
  {
    title: "Materials Sourcing",
    body: "We source from heritage tanneries and certified suppliers — OEKO-TEX, LWG, and GRS certified. Every hide is documented end-to-end.",
  },
  {
    title: "Quality Control & Compliance",
    body: "Three-station QC on every piece. SEDEX audited, BSCI compliant, ISO 9001 quality systems. Your standards are our baseline.",
  },
  {
    title: "Logistics & Fulfilment",
    body: "Branded packaging, dust bags, hangtags, and direct-to-warehouse shipping. We handle everything from QC to your dock.",
  },
];

export default function ProductsPage() {
  return (
    <main className="flex-1 w-full">
      {/* Hero */}
      <Section className="relative isolate overflow-hidden text-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src={images.leatherSatchels.src}
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
            Products & Services
          </p>
          <Heading variant="display-lg" className="font-extralight">
            What we
            <span className="italic"> make.</span>
          </Heading>
          <p className="text-body-lg max-w-[680px] opacity-90">
            Leather bags, belts, scarves, accessories, and custom manufacturing
            — handcrafted in our Kolkata workshop and exported worldwide under
            the Fair Trade banner.
          </p>
        </Container>
      </Section>

      {/* Product Categories — mobile: horizontal image carousel per category */}
      <Section className="bg-ivory">
        <Container className="v-pad-lg flex flex-col gap-[clamp(48px,6vw,80px)]">
          {/* Mobile: all categories as a horizontal scrolling carousel */}
          <MobileCarousel speed={25}>
            {CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="shrink-0 w-[80vw] snap-start flex flex-col gap-4"
              >
                <div className="relative aspect-[5/4] rounded-[10px] overflow-hidden">
                  <Image
                    src={images[cat.imgKey].src}
                    alt={images[cat.imgKey].alt}
                    fill
                    sizes="80vw"
                    className="object-cover"
                  />
                </div>
                <Heading variant="h3" className="text-clay-700">
                  {cat.title}
                </Heading>
                <p className="text-[15px] leading-[1.5] text-clay-700/75">
                  {cat.body}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {cat.types.map((type) => (
                    <li key={type}>
                      <Button href="/contact" variant="pill" tone="dark" size="sm">
                        {type}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </MobileCarousel>

          {/* Desktop: alternating image + text layout */}
          <div className="hidden lg:flex flex-col gap-[clamp(64px,8vw,120px)]">
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.title}
                className="grid grid-cols-12 gap-[clamp(24px,3vw,48px)] items-center"
              >
                <div
                  className={`col-span-6 relative aspect-[5/4] rounded-[10px] overflow-hidden ${
                    i % 2 === 1 ? "order-2" : ""
                  }`}
                >
                  <Image
                    src={images[cat.imgKey].src}
                    alt={images[cat.imgKey].alt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className={`col-span-6 flex flex-col gap-[clamp(16px,2vw,28px)] ${
                    i % 2 === 1 ? "order-1" : ""
                  }`}
                >
                  <Heading variant="h2" className="text-clay-700">
                    {cat.title}
                  </Heading>
                  <p className="text-body text-clay-700/75 max-w-[520px]">
                    {cat.body}
                  </p>
                  <ul className="flex flex-wrap gap-3">
                    {cat.types.map((type) => (
                      <li key={type}>
                        <Button href="/contact" variant="pill" tone="dark" size="sm">
                          {type}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Materials */}
      <Section className="bg-clay-800 text-white">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="h2" className="lg:col-span-7">
              Premium
              <span className="italic"> materials.</span>
            </Heading>
            <p className="lg:col-span-5 text-body text-white/75 max-w-[480px]">
              Sourced from heritage tanneries and certified suppliers.
              Every hide is documented and traceable end-to-end.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[clamp(20px,2vw,32px)]">
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-[10px] overflow-hidden">
              <Image
                src={images.leatherMaterial.src}
                alt={images.leatherMaterial.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[clamp(20px,2vw,32px)] gap-y-[clamp(16px,2vw,24px)]">
                {[
                  { name: "Full Grain Leather", desc: "The finest, most durable grade. Natural markings preserved." },
                  { name: "Smooth Leather", desc: "Buffed and finished for a clean, uniform surface." },
                  { name: "Vegetable Tanned", desc: "Chrome-free, tanned with natural bark extracts." },
                  { name: "Shanti Leather", desc: "Our signature recycled leather — upcycled from offcuts." },
                  { name: "Embossed Hide", desc: "Custom textures and patterns pressed into the surface." },
                  { name: "Kantha Textiles", desc: "Hand-stitched running stitch on cotton — traditional Bengali craft." },
                ].map((mat) => (
                  <li
                    key={mat.name}
                    className="border-t border-white/15 pt-[clamp(12px,1.5vw,20px)]"
                  >
                    <p className="font-display text-[clamp(20px,1.8vw,28px)] text-white leading-[1.3]">
                      {mat.name}
                    </p>
                    <p className="text-[15px] leading-[1.55] text-white/65 mt-1">
                      {mat.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-ivory">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="h2" className="lg:col-span-7 text-clay-700">
              Our
              <span className="italic"> services.</span>
            </Heading>
            <p className="lg:col-span-5 text-body text-clay-700/75 max-w-[480px]">
              From concept to warehouse — we handle design, sampling,
              manufacturing, quality control, and shipping.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,2vw,32px)]">
            {SERVICES.map((s, i) => (
              <li
                key={s.title}
                className="border-t border-clay-700/15 pt-[clamp(20px,2vw,28px)] flex flex-col gap-[6px]"
              >
                <p className="text-[12px] tracking-[0.18em] uppercase opacity-65 font-bold text-clay-700">
                  {String(i + 1).padStart(2, "0")}
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
            <Button href="/contact" variant="solid" tone="dark">
              Start an order
            </Button>
            <Button href="/processes" variant="link" tone="dark">
              See our process →
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
