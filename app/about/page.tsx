import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us — MKS Exports",
  description:
    "The story of MKS — a second-generation, women-led Fair Trade leather goods manufacturer founded in 1994 in Kolkata, India.",
};

/* ── Data ─────────────────────────────────────────────────────────────── */

const STATS = [
  { value: "1994", label: "Founded" },
  { value: "30+", label: "Years of craft" },
  { value: "Kolkata", label: "India" },
  { value: "WFTO", label: "Guaranteed member" },
];

const PRESS = [
  {
    pub: "SEDEX",
    headline: "5-Pillar Ethical Audit — Compliant",
    detail: "Labour standards, health & safety, environment, business ethics, supply chain",
  },
  {
    pub: "WFTO",
    headline: "Guaranteed Fair Trade Organisation",
    detail: "Highest level of Fair Trade certification since 2015",
  },
  {
    pub: "ISO 9001",
    headline: "Quality Management Systems",
    detail: "Internationally recognised quality control framework",
  },
  {
    pub: "BSCI",
    headline: "Business Social Compliance Initiative",
    detail: "Supply chain social performance monitoring",
  },
];

const STORY_SECTIONS = [
  {
    n: "01",
    title: "The Beginning",
    body: "In November 1994, Mithu Dam registered Madhya Kalikata Shilpangan — MKS — as a society in Kolkata. The mission was singular: help local cottage and small-scale industries access overseas markets while paying artisans fairly. It was a small operation — a handful of craftspeople, a rented space, and a conviction that Fair Trade could change lives.",
  },
  {
    n: "02",
    title: "Growth & Recognition",
    body: "By 1997 MKS became a WFTO member. In 2006 we established our own manufacturing facility, and by 2008 we had purchased our own building — a permanent home for the workshop and the growing team. In 2015, we achieved Guaranteed WFTO Member status, the highest level of Fair Trade certification available.",
  },
  {
    n: "03",
    title: "The Mission Today",
    body: "Three decades on, the mission has not changed. We still exist to create job opportunities for economically disadvantaged sections of society, to preserve and promote traditional Indian crafts, and to empower women and physically challenged individuals through regular, dignified employment. We now partner with brands across Europe, North America, and beyond.",
  },
];

const TEAM = [
  { name: "Mithu Dam", role: "Founder & Managing Director" },
  { name: "Ashish Ghosh", role: "Textile Manager" },
  { name: "Aparna Das", role: "Leather Products Manager" },
  { name: "Ananta Goswami", role: "Accounts Manager" },
  { name: "Subhendu Chakraborty", role: "Export Manager" },
  { name: "Arnab Dhar", role: "Shanti Product Manager" },
  { name: "Archi Dam", role: "Marketing Executive" },
];

const TESTIMONIALS = [
  {
    quote:
      "MKS has been a like-minded partner from the very first beginning — a grass-roots and pioneer organisation dedicated to Fair Trade.",
    org: "El Puente",
    country: "Germany",
  },
  {
    quote:
      "Our partnership is much more than professional — with daily communication and weekly problem-solving calls, we've built something lasting.",
    org: "Equo Mercato",
    country: "Italy",
  },
  {
    quote:
      "They are like family. After over ten years collaborating on hundreds of leather, silk, and canvas products, their care, attention to detail and helpfulness never wavers.",
    org: "NV London Calcutta",
    country: "UK",
  },
  {
    quote:
      "MKS is a valued long term partner. They always provide excellent communication and deliver quality product that our customers love.",
    org: "SERRV International",
    country: "USA",
  },
];

const VISION_ITEMS = [
  "Establishing a larger leather goods facility meeting WFTO standards",
  "Building an ISO-compliant, environment-friendly factory",
  "Creating a rehabilitation centre for disadvantaged populations",
  "Providing vocational training and support services",
  "Using eco-friendly, certified sustainable materials (OEKO-TEX, LWG, GRS)",
  "Upcycling and recycling waste materials to reduce our carbon footprint",
];

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="flex-1 w-full">
      {/* ───── Hero: full-bleed black, big serif heading ───── */}
      <Section className="bg-clay-900 text-white">
        <SiteHeader tone="light" />
        <Container className="pt-[clamp(48px,6vw,96px)] pb-[clamp(80px,12vw,180px)] flex flex-col gap-[clamp(24px,3vw,40px)]">
          <p className="text-[12px] tracking-[0.22em] uppercase opacity-60 font-bold">
            About MKS Exports
          </p>
          <h1 className="font-display text-h1 leading-[1.05] tracking-[-0.02em] max-w-[960px]">
            Preserving the{" "}
            <span className="text-sage italic">artisanal tradition</span> of
            Indian leather craft — one Fair Trade partnership at a time.
          </h1>
          <p className="text-body text-white/70 max-w-[640px]">
            MKS is a second-generation, women-led leather goods manufacturer
            based in Kolkata, India. What started as a small society to help
            local artisans has grown into a certified export house trusted by
            brands across three continents.
          </p>
        </Container>
      </Section>

      {/* ───── Stats + Certifications bar (Paraform-style) ───── */}
      <Section snap={false} className="bg-sand text-clay-700">
        <Container className="py-[clamp(48px,6vw,80px)] flex flex-col gap-[clamp(48px,5vw,72px)]">
          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(24px,3vw,40px)]">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <p className="font-display text-[clamp(36px,4vw,64px)] leading-[1] tracking-[-0.02em] text-clay-900">
                  {s.value}
                </p>
                <p className="text-[13px] tracking-[0.08em] uppercase font-bold text-clay-700/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Certification cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRESS.map((p) => (
              <div
                key={p.pub}
                className="border border-clay-700/10 rounded-[10px] p-[clamp(16px,2vw,24px)] flex flex-col gap-3 bg-ivory hover:border-clay-700/25 transition-colors"
              >
                <p className="text-[12px] tracking-[0.14em] uppercase font-bold text-olive-500">
                  {p.pub}
                </p>
                <p className="font-sans font-bold text-[15px] text-clay-900 leading-[1.35]">
                  {p.headline}
                </p>
                <p className="text-[13px] leading-[1.5] text-clay-700/55">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───── Origin Story: numbered sections (Paraform 01/02 pattern) ───── */}
      <Section className="bg-ivory text-clay-700">
        <Container className="v-pad-lg flex flex-col gap-[clamp(64px,8vw,120px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(24px,3vw,48px)]">
            {/* Left: heading + founder image */}
            <div className="lg:col-span-5 flex flex-col gap-[clamp(24px,3vw,40px)]">
              <Heading variant="h2" className="text-clay-900">
                Where it all
                <br />
                <span className="italic">began.</span>
              </Heading>
              <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden">
                <Image
                  src={images.mksFounder.src}
                  alt={images.mksFounder.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <blockquote className="flex flex-col gap-2">
                <p className="font-display italic text-[clamp(18px,1.6vw,24px)] leading-[1.35] text-clay-700">
                  &ldquo;Our mission is to create job opportunities for
                  economically disadvantaged groups, helping them lead decent
                  lives.&rdquo;
                </p>
                <cite className="not-italic text-[12px] tracking-[0.14em] uppercase font-bold text-clay-700/45">
                  Mithu Dam, Founder
                </cite>
              </blockquote>
            </div>

            {/* Right: numbered narrative sections */}
            <div className="lg:col-span-7 flex flex-col gap-[clamp(40px,5vw,72px)] lg:pt-2">
              {STORY_SECTIONS.map((s) => (
                <div
                  key={s.n}
                  className="flex flex-col gap-[clamp(12px,1.5vw,20px)] border-t border-clay-700/10 pt-[clamp(20px,2.5vw,32px)]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[13px] tracking-[0.14em] font-bold text-olive-500">
                      {s.n}
                    </span>
                    <h3 className="font-display text-h3 text-clay-900 leading-[1.15]">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-body text-clay-700/70 max-w-[560px] lg:pl-[calc(13px+1rem)]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ───── Full-bleed image break ───── */}
      <Section snap={false} className="relative h-[50vh] lg:h-[65vh]">
        <Image
          src={images.storyFloor.src}
          alt={images.storyFloor.alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
        />
      </Section>

      {/* ───── Vision: dark section ───── */}
      <Section className="bg-clay-900 text-white">
        <Container className="v-pad-lg flex flex-col gap-[clamp(48px,6vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(20px,3vw,48px)]">
            <div className="lg:col-span-5 flex flex-col gap-[clamp(16px,2vw,28px)]">
              <Heading variant="h2">
                Our vision for
                <br />
                <span className="text-sage italic">the future.</span>
              </Heading>
              <p className="text-body text-white/60 max-w-[440px]">
                Fair Trade is not a label for us — it is the reason we exist.
                Every decision points toward the same horizon.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ol className="flex flex-col">
                {VISION_ITEMS.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-t border-white/10 py-[clamp(16px,2vw,24px)]"
                  >
                    <span className="text-[13px] tracking-[0.14em] font-bold text-sage/70 pt-[2px] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-body text-white/80">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───── Team grid ───── */}
      <Section className="bg-ivory text-clay-700">
        <Container className="v-pad-lg flex flex-col gap-[clamp(48px,6vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="h2" className="lg:col-span-7 text-clay-900">
              The people
              <span className="italic"> behind the craft.</span>
            </Heading>
            <p className="lg:col-span-5 text-body text-clay-700/60 max-w-[440px]">
              A tight-knit leadership team, many of whom have been with MKS for
              over a decade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(24px,3vw,40px)]">
            {/* Team photo panel — Paraform image-carousel style */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden col-span-2">
                <Image
                  src={images.teamPhoto.src}
                  alt={images.teamPhoto.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden">
                <Image
                  src={images.artisanPortfolio.src}
                  alt={images.artisanPortfolio.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden">
                <Image
                  src={images.artisanBench.src}
                  alt={images.artisanBench.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Team roster */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[clamp(24px,3vw,40px)]">
                {TEAM.map((person) => (
                  <li
                    key={person.name}
                    className="border-t border-clay-700/10 py-[clamp(16px,2vw,24px)] flex flex-col gap-1"
                  >
                    <p className="font-display text-[clamp(22px,2vw,32px)] text-clay-900 leading-[1.15]">
                      {person.name}
                    </p>
                    <p className="text-[12px] tracking-[0.14em] uppercase font-bold text-clay-700/45">
                      {person.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───── Testimonials: dark editorial block ───── */}
      <Section className="bg-clay-800 text-white">
        <Container className="v-pad-lg flex flex-col gap-[clamp(48px,6vw,80px)]">
          <Heading variant="h2">
            What our partners
            <br />
            <span className="italic">say about us.</span>
          </Heading>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-[clamp(32px,4vw,64px)] gap-y-[clamp(32px,3vw,48px)]">
            {TESTIMONIALS.map((t, i) => (
              <li
                key={i}
                className="border-t border-white/15 pt-[clamp(24px,3vw,40px)] flex flex-col gap-[clamp(16px,2vw,28px)]"
              >
                <p className="font-display italic text-[clamp(18px,1.6vw,26px)] leading-[1.4] tracking-[-0.01em] text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-[12px] tracking-[0.14em] uppercase font-bold text-white/50">
                    {t.org}
                  </p>
                  <span className="w-1 h-1 rounded-full bg-white/25" />
                  <p className="text-[12px] tracking-[0.14em] uppercase font-bold text-white/35">
                    {t.country}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ───── CTA: Paraform-style careers/contact block ───── */}
      <Section className="bg-black text-white">
        <Container className="v-pad-lg flex flex-col items-center text-center gap-[clamp(24px,3vw,40px)]">
          <h2 className="font-display text-[clamp(36px,5vw,80px)] leading-[1.1] tracking-[-0.02em] max-w-[800px]">
            Ready to make something{" "}
            <span className="text-sage italic">together?</span>
          </h2>
          <p className="text-body text-white/55 max-w-[520px]">
            Whether you&apos;re a brand looking for a manufacturing partner or
            just curious about what we do — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" variant="solid" tone="light">
              Get in touch
            </Button>
            <Button href="/products" variant="outline" tone="light">
              See our products
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
