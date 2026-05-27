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

const MILESTONES = [
  { year: "1994", event: "Founded as Madhya Kalikata Shilpangan (MKS) — a society under the West Bengal Societies Registration Act, to help cottage industries access overseas markets." },
  { year: "1997", event: "Became a World Fair Trade Organization (WFTO) member, committing to fair wages, transparency, and ethical production." },
  { year: "2006", event: "Established our own manufacturing facility in Kolkata, bringing all leather goods production in-house." },
  { year: "2008", event: "Purchased and relocated to our own building — a permanent home for the workshop and the team." },
  { year: "2014", event: "Became a Limited company, formalizing our structure for long-term growth while keeping our values intact." },
  { year: "2015", event: "Achieved Guaranteed WFTO Member status — the highest level of Fair Trade certification." },
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
    org: "El Puente, Germany",
  },
  {
    quote:
      "Our partnership is much more than professional — with daily communication and weekly problem-solving calls, we've built something lasting.",
    org: "Equo Mercato, Italy",
  },
  {
    quote:
      "They are like family. After over ten years collaborating on hundreds of leather, silk, and canvas products, their care, attention to detail and helpfulness never wavers.",
    org: "NV London Calcutta, UK",
  },
  {
    quote:
      "MKS is a valued long term partner. They always provide excellent communication and deliver quality product that our customers love.",
    org: "SERRV International, USA",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 w-full">
      {/* Hero */}
      <Section className="relative isolate overflow-hidden text-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src={images.artisanPortfolio.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <SiteHeader tone="light" />
        <Container className="pt-[clamp(64px,8vw,120px)] pb-[clamp(80px,10vw,160px)] flex flex-col gap-[clamp(20px,2vw,32px)] max-w-[920px]">
          <p className="text-[12px] tracking-[0.22em] uppercase opacity-80 font-bold">
            About Us
          </p>
          <Heading variant="display-lg" className="font-extralight">
            Two generations of
            <span className="italic"> honest craft.</span>
          </Heading>
          <p className="text-body-lg max-w-[680px] opacity-90">
            MKS is a second-generation, women-led leather goods manufacturer
            based in Kolkata, India. What started as a small society to help
            local artisans has grown into a Fair Trade certified export house
            trusted by brands across three continents.
          </p>
        </Container>
      </Section>

      {/* Origin Story */}
      <Section className="bg-ivory">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(20px,2vw,32px)]">
            <div className="lg:col-span-6 flex flex-col gap-[clamp(20px,2.5vw,32px)]">
              <Heading variant="h2" className="text-clay-700">
                Where it all
                <br />
                <span className="italic">began.</span>
              </Heading>
              <div className="flex flex-col gap-5 text-body text-clay-700/75 max-w-[520px]">
                <p>
                  In November 1994, Mithu Dam registered Madhya Kalikata
                  Shilpangan — MKS — as a society in Kolkata. The mission was
                  simple: help local cottage and small-scale industries access
                  overseas markets while paying artisans fairly.
                </p>
                <p>
                  Three decades later, MKS has grown into a full-scale
                  manufacturing facility with its own building, a permanent team
                  of skilled artisans, and partnerships with Fair Trade
                  wholesalers and direct-to-consumer brands across Europe, North
                  America, and beyond.
                </p>
                <p>
                  The mission has not changed. We still exist to create job
                  opportunities for economically disadvantaged sections of
                  society, to preserve and promote traditional Indian crafts, and
                  to empower women and physically challenged individuals through
                  regular, dignified employment.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden">
                <Image
                  src={images.mksFounder.src}
                  alt={images.mksFounder.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <p className="font-display italic text-h4 text-clay-700">
                  &ldquo;Our mission is to create job opportunities for
                  economically disadvantaged groups, helping them lead decent
                  lives.&rdquo;
                </p>
                <p className="text-[12px] tracking-[0.18em] uppercase font-bold text-clay-700/55 mt-2">
                  Mithu Dam, Founder
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section className="bg-clay-800 text-white">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="h2" className="lg:col-span-7">
              Three decades,
              <br />
              <span className="italic">one purpose.</span>
            </Heading>
            <p className="lg:col-span-5 text-body text-white/75 max-w-[480px]">
              From a registered society to a WFTO-guaranteed manufacturer — every
              step has been in service of Fair Trade and the artisans who make it
              real.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,2vw,32px)]">
            {MILESTONES.map((m) => (
              <li
                key={m.year}
                className="border-t border-white/20 pt-[clamp(20px,2vw,28px)] flex flex-col gap-[6px]"
              >
                <p className="text-[12px] tracking-[0.18em] uppercase opacity-65 font-bold">
                  {m.year}
                </p>
                <p className="text-[15px] leading-[1.55] text-white/80 max-w-[360px]">
                  {m.event}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Vision */}
      <Section className="bg-cream">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(20px,2vw,32px)]">
            <div className="lg:col-span-6 flex flex-col gap-[clamp(20px,2.5vw,32px)]">
              <Heading variant="h2" className="text-clay-700">
                Our vision for
                <br />
                <span className="italic">the future.</span>
              </Heading>
              <div className="flex flex-col gap-5 text-body text-clay-700/75 max-w-[520px]">
                <p>
                  Fair Trade is not a label for us — it is the reason we exist.
                  Our vision is to ensure fair wages to artisans and fair pricing
                  for Indian handicraft producers, while building something that
                  outlasts any one generation.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <ul className="flex flex-col gap-[clamp(16px,2vw,24px)]">
                {[
                  "Establishing a larger leather goods facility meeting WFTO standards",
                  "Building an ISO-compliant, environment-friendly factory",
                  "Creating a rehabilitation centre for disadvantaged populations",
                  "Providing vocational training and support services",
                  "Using eco-friendly, certified sustainable materials (OEKO-TEX, LWG, GRS)",
                  "Upcycling and recycling waste materials to reduce our carbon footprint",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-t border-clay-700/10 pt-[clamp(12px,1.5vw,20px)] text-body text-clay-700/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section className="bg-ivory">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="h2" className="lg:col-span-7 text-clay-700">
              The people
              <span className="italic"> behind the craft.</span>
            </Heading>
            <p className="lg:col-span-5 text-body text-clay-700/75 max-w-[480px]">
              A tight-knit leadership team, many of whom have been with MKS for
              over a decade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[clamp(20px,2vw,32px)]">
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-[10px] overflow-hidden">
              <Image
                src={images.teamPhoto.src}
                alt={images.teamPhoto.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[clamp(20px,2vw,32px)] gap-y-[clamp(16px,2vw,24px)]">
                {TEAM.map((person) => (
                  <li
                    key={person.name}
                    className="border-t border-clay-700/10 pt-[clamp(12px,1.5vw,20px)]"
                  >
                    <p className="font-display text-h4 text-clay-700 leading-[1.2]">
                      {person.name}
                    </p>
                    <p className="text-[12px] tracking-[0.18em] uppercase font-bold text-clay-700/55 mt-1">
                      {person.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-clay-600 text-white">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <Heading variant="h2">
            What our partners
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
                  {t.org}
                </p>
              </li>
            ))}
          </ul>
          <div className="pt-3">
            <Button href="/contact" variant="solid" tone="light">
              Get in touch
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
