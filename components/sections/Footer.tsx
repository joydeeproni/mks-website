import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { BrochureForm } from "@/components/sections/NewsletterForm";

/**
 * Footer — bg black, 3-column grid.
 *   1. Partner Resources — B2B-relevant pill links (Capabilities, MOQ, sampling, white label…)
 *   2. Products + Materials — two stacked link lists
 *   3. Get Brochure Sample — heading + body + email form
 * Big brand mark sits above the bottom row (copyright + language).
 * Footer fades in subtly as it scrolls into view (Section default).
 */
const PARTNER_RESOURCES = [
  "Our Capabilities",
  "Production Process",
  "Materials Library",
  "MOQ & Lead Times",
  "White Label",
  "Custom Design",
  "Request a Sample",
  "Certifications",
];

const PRODUCTS = ["Bags", "Belts", "Scarves", "Accessories", "Misc."];

const MATERIALS = [
  "Full Grain",
  "Smooth Leather",
  "Shanti Leather",
  "Veg Tanned",
  "Embossed",
];

export function Footer() {
  return (
    <Section as="footer" snap={false} className="bg-black text-white">
      <Container className="pt-[clamp(56px,8.3vw,120px)] pb-[clamp(40px,4vw,64px)] flex flex-col gap-[clamp(48px,5.5vw,80px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(40px,4.4vw,64px)]">
          {/* Partner Resources */}
          <div className="flex flex-col gap-[clamp(28px,3vw,42px)]">
            <h3 className="font-sans font-bold text-body text-white">
              Partner Resources
            </h3>
            <ul className="flex flex-wrap gap-3">
              {PARTNER_RESOURCES.map((label) => (
                <li key={label}>
                  <Button href="#" variant="pill" tone="light">
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 text-caption text-white/85 max-w-[420px]">
              <p>
                Visit us in Kolkata or schedule a live walkthrough of the
                workshop — we&apos;re happy to host.
              </p>
              <p>Mon – Fri · 9am to 6pm IST</p>
            </div>
          </div>

          {/* Products + Materials */}
          <div className="grid grid-cols-2 gap-[clamp(28px,4vw,64px)]">
            <FooterColumn title="Products" items={PRODUCTS} />
            <FooterColumn title="Materials" items={MATERIALS} />
          </div>

          {/* Get Brochure Sample */}
          <div className="flex flex-col gap-[clamp(24px,3vw,48px)]">
            <h3 className="font-sans font-bold text-body text-white">
              Get Brochure Sample
            </h3>
            <p className="text-caption text-white/85 max-w-[420px]">
              See what we make. Drop your email and we&apos;ll send our
              capabilities brochure — full product range, materials, MOQs,
              lead times, and past partner work — in minutes.
            </p>
            <BrochureForm />
          </div>
        </div>

        {/* Big brand mark */}
        <div className="flex justify-center md:justify-end">
          <Logo className="h-32 md:h-44 lg:h-52 w-auto text-white" />
        </div>

        {/* Bottom row — copyright + language */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-[clamp(20px,2vw,28px)] border-t border-white/10">
          <p className="text-body text-fog">
            © {new Date().getFullYear()} MKS Exports, Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-body text-white">
            <span>English</span>
            <span className="block w-[18px] h-[18px] bg-fog" aria-hidden />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-[clamp(20px,2.6vw,37px)]">
      <h3 className="font-sans font-bold text-body text-white">{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((label) => (
          <li key={label}>
            <Link href="#" className="text-body text-white link-button">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
