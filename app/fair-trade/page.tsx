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
  title: "Fair Trade & Values — MKS Exports",
  description:
    "The ten Fair Trade principles that guide everything we do at MKS — from fair wages and gender equity to environmental responsibility and cultural identity.",
};

const PRINCIPLES = [
  {
    n: "01",
    title: "Creating Opportunities for Disadvantaged Producers",
    body: "MKS was founded to help economically disadvantaged artisans access overseas markets. We provide regular employment, fair wages, and dignified working conditions to craftspeople who might otherwise be excluded from the global economy.",
    detail: "Our workforce includes women, physically challenged individuals, and artisans from marginalised communities in and around Kolkata.",
  },
  {
    n: "02",
    title: "Transparency & Accountability",
    body: "We maintain open books, honest pricing, and clear communication with every partner. Our production costs, margins, and worker wages are available for audit at any time.",
    detail: "SEDEX 5-pillar audited. WFTO Guaranteed Member since 2015. Annual social audits published to partners.",
  },
  {
    n: "03",
    title: "Capacity Building",
    body: "We invest in our artisans' skills through continuous training — from traditional saddle-stitching techniques to modern production methods. Senior craftspeople mentor juniors in a master-apprentice model.",
    detail: "New artisans train for at least six months before joining the production line. We also run literacy and financial planning workshops.",
  },
  {
    n: "04",
    title: "Promoting Fair Trade",
    body: "As a WFTO Guaranteed Member, we actively promote Fair Trade principles to our partners, suppliers, and the wider industry. Fair Trade is not a marketing label for us — it is the foundation of our business.",
    detail: "We participate in WFTO conferences, host factory tours for partners, and educate consumers about ethical sourcing.",
  },
  {
    n: "05",
    title: "Paying Promptly & Fairly",
    body: "Every artisan at MKS is paid above market rate, on time, every time. We do not withhold wages, deduct unfair penalties, or delay payment for any reason.",
    detail: "Wages are benchmarked annually against local living costs. Artisans also receive festival bonuses, healthcare support, and emergency loans.",
  },
  {
    n: "06",
    title: "Gender Equity",
    body: "MKS is a women-led company — founded and managed by women. We actively ensure equal pay, equal opportunity, and a safe, respectful workplace for all genders.",
    detail: "Over 60% of our workshop team are women. We provide maternity support, flexible hours for parents, and zero-tolerance policies on harassment.",
  },
  {
    n: "07",
    title: "No Child Labour, No Forced Labour",
    body: "MKS maintains a strict minimum age of 18 for employment. We have zero tolerance for child labour, forced labour, or any form of coerced work — in our workshop or our supply chain.",
    detail: "All workers present verified age documentation. Supply chain partners are audited for compliance. Any violation results in immediate termination of the relationship.",
  },
  {
    n: "08",
    title: "Ensuring Good Working Conditions",
    body: "Our workshop meets international safety and hygiene standards. Clean air, adequate lighting, safe equipment, and reasonable working hours are non-negotiable.",
    detail: "SEDEX audited for health and safety. Regular safety drills. Workers have access to clean drinking water, rest areas, and first aid at all times.",
  },
  {
    n: "09",
    title: "Respecting the Environment",
    body: "We use eco-friendly, certified sustainable materials. Vegetable-tanned leather, zero-waste patterning, and upcycled offcuts (Shanti Leather) are central to our practice.",
    detail: "Materials certified by OEKO-TEX, LWG, Control Union, and Global Recycled Standards. Waste leather is recycled into new products rather than sent to landfill.",
  },
  {
    n: "10",
    title: "Respecting Cultural Identity",
    body: "We preserve and promote traditional Indian crafts — kantha stitching, block printing, handloom weaving, and artisanal leather techniques that carry generations of cultural heritage.",
    detail: "Our products are designed in dialogue with artisan traditions, not in spite of them. We never ask our craftspeople to abandon their methods for speed.",
  },
];

export default function FairTradePage() {
  return (
    <main className="flex-1 w-full">
      {/* Hero */}
      <Section snap={false} className="relative isolate overflow-hidden text-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src={images.artisanBench.src}
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
            Fair Trade & Values
          </p>
          <Heading variant="display-lg" className="font-extralight">
            Ten principles,
            <span className="italic"> one promise.</span>
          </Heading>
          <p className="text-body-lg max-w-[680px] opacity-90">
            Fair Trade is not a badge we wear — it is the reason MKS exists. These
            ten principles, established by the World Fair Trade Organization, guide
            every decision we make on the workshop floor and in the boardroom.
          </p>
        </Container>
      </Section>

      {/* Certifications bar */}
      <Section snap={false} className="bg-olive-500 text-white">
        <Container className="py-[clamp(32px,4vw,56px)]">
          <div className="flex flex-wrap items-center justify-center gap-x-[clamp(32px,4vw,64px)] gap-y-4 text-center">
            {[
              { code: "WFTO", label: "Guaranteed Member" },
              { code: "SEDEX", label: "5-Pillar Audited" },
              { code: "BSCI", label: "Compliant Member" },
              { code: "ISO", label: "9001 Quality Systems" },
            ].map((cert) => (
              <div key={cert.code} className="flex flex-col gap-1">
                <p className="font-display text-h3 leading-[1]">{cert.code}</p>
                <p className="text-[12px] tracking-[0.14em] uppercase opacity-80 font-bold">
                  {cert.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The 10 Principles */}
      <Section snap={false} className="bg-ivory">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="h2" className="lg:col-span-7 text-clay-700">
              The ten Fair Trade
              <br />
              <span className="italic">principles.</span>
            </Heading>
            <p className="lg:col-span-5 text-body text-clay-700/75 max-w-[480px]">
              Defined by the World Fair Trade Organization. Practised daily
              at MKS. Audited independently every year.
            </p>
          </div>

          <div className="flex flex-col gap-[clamp(32px,4vw,56px)]">
            {PRINCIPLES.map((p) => (
              <div
                key={p.n}
                className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(16px,2vw,32px)] border-t border-clay-700/10 pt-[clamp(24px,3vw,40px)]"
              >
                <div className="lg:col-span-1">
                  <p className="text-[12px] tracking-[0.18em] uppercase opacity-45 font-bold text-clay-700">
                    {p.n}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-h3 leading-[1.2] text-clay-700">
                    {p.title}
                  </h3>
                </div>
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <p className="text-body text-clay-700/75">
                    {p.body}
                  </p>
                  <p className="text-[15px] leading-[1.55] text-clay-700/55 italic">
                    {p.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Commitment */}
      <Section snap={false} className="bg-clay-600 text-white">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(20px,2vw,32px)] lg:items-center">
            <div className="lg:col-span-6 flex flex-col gap-[clamp(20px,2.5vw,32px)]">
              <Heading variant="h2">
                Our commitment
                <br />
                <span className="italic">in practice.</span>
              </Heading>
              <div className="flex flex-col gap-5 text-body text-white/80 max-w-[520px]">
                <p>
                  These principles are not aspirational — they are operational.
                  Every artisan in our workshop can point to the Fair Trade board
                  on our factory wall and tell you what each principle means for
                  their daily work.
                </p>
                <p>
                  We are audited annually by independent bodies. Our SEDEX reports,
                  WFTO compliance records, and social impact assessments are
                  available to current and prospective partners on request.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Button href="/contact" variant="solid" tone="light">
                  Request our audit reports
                </Button>
                <Button href="/about" variant="link" tone="light">
                  Our story →
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6 relative aspect-[4/5] rounded-[10px] overflow-hidden">
              <Image
                src={images.artisanPortfolio.src}
                alt={images.artisanPortfolio.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
