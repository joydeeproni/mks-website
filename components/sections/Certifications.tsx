"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

export function Certifications() {
  const t = useT();
  const CERTS = [
    { code: "SEDEX", subtitle: t.certifications.sedex },
    { code: "WFTO", subtitle: t.certifications.wfto },
    { code: "BSCI", subtitle: t.certifications.bsci },
    { code: "ISO", subtitle: t.certifications.iso },
  ];

  return (
    <Section snap={false} className="bg-ivory border-y border-clay-700/8">
      <Container className="flex flex-col items-center gap-[clamp(20px,3vw,48px)] py-[clamp(56px,8vw,120px)]">
        <p className="text-[11px] tracking-[0.2em] uppercase text-clay-700/55 font-bold">
          {t.certifications.eyebrow}
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-[clamp(16px,2.5vw,40px)] w-full max-w-[1040px]">
          {CERTS.map((c) => (
            <li
              key={c.code}
              className="flex flex-col items-center justify-center gap-[6px] py-[clamp(20px,2.5vw,32px)] px-3 border border-clay-700/10 rounded-[6px]"
            >
              <p className="font-display text-[clamp(28px,3vw,42px)] leading-none text-clay-700 tracking-tight">
                {c.code}
              </p>
              <p className="text-[12px] uppercase tracking-[0.15em] text-clay-700/60 text-center">
                {c.subtitle}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
