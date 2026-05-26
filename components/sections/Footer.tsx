"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { BrochureForm } from "@/components/sections/NewsletterForm";
import { LanguageSelector } from "@/components/sections/LanguageSelector";
import { useT } from "@/components/LanguageProvider";

/**
 * Footer — bg black, 3-column grid. Strings come from useT(); the language
 * selector at the bottom switches the entire site.
 */
export function Footer() {
  const t = useT();

  const resources = [
    t.footer.resources.capabilities,
    t.footer.resources.productionProcess,
    t.footer.resources.materialsLibrary,
    t.footer.resources.moqLeadTimes,
    t.footer.resources.whiteLabel,
    t.footer.resources.customDesign,
    t.footer.resources.requestSample,
    t.footer.resources.certifications,
  ];

  const products = [
    t.footer.productItems.bags,
    t.footer.productItems.belts,
    t.footer.productItems.scarves,
    t.footer.productItems.accessories,
    t.footer.productItems.misc,
  ];

  const materials = [
    t.footer.materialItems.fullGrain,
    t.footer.materialItems.smooth,
    t.footer.materialItems.shanti,
    t.footer.materialItems.vegTanned,
    t.footer.materialItems.embossed,
  ];

  return (
    <Section as="footer" snap={false} className="bg-black text-white">
      <Container className="pt-[clamp(56px,8.3vw,120px)] pb-[clamp(40px,4vw,64px)] flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(40px,4.4vw,64px)]">
          {/* Partner Resources */}
          <div className="flex flex-col gap-[clamp(28px,3vw,42px)]">
            <h3 className="font-sans font-bold text-body text-white">
              {t.footer.partnerResources}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {resources.map((label) => (
                <li key={label}>
                  <Button href="#" variant="pill" tone="light">
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 text-caption text-white/85 max-w-[420px]">
              <p>{t.footer.contactVisit}</p>
              <p>{t.footer.contactHours}</p>
            </div>
          </div>

          {/* Products + Materials */}
          <div className="grid grid-cols-2 gap-[clamp(28px,4vw,64px)]">
            <FooterColumn title={t.footer.products} items={products} />
            <FooterColumn title={t.footer.materials} items={materials} />
          </div>

          {/* Get Brochure Sample */}
          <div className="flex flex-col gap-[clamp(24px,3vw,48px)]">
            <h3 className="font-sans font-bold text-body text-white">
              {t.footer.brochureHeading}
            </h3>
            <p className="text-caption text-white/85 max-w-[420px]">
              {t.footer.brochureBody}
            </p>
            <BrochureForm />
          </div>
        </div>

        {/* Big brand mark */}
        <div className="flex justify-center md:justify-end">
          <Logo className="h-32 md:h-44 lg:h-52 w-auto text-white" />
        </div>

        {/* Bottom row — copyright + language selector */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-[clamp(20px,2vw,28px)] border-t border-white/10">
          <p className="text-body text-fog">
            {t.footer.copyright.replace(
              "{{year}}",
              String(new Date().getFullYear())
            )}
          </p>
          <LanguageSelector />
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
