"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { useT } from "@/components/LanguageProvider";

export function Partner() {
  const t = useT();
  const CARDS = [
    { ...t.partner.getQuote, href: "#quote", bg: "bg-taupe" },
    { ...t.partner.talkToUs, href: "#talk", bg: "bg-clay-800" },
    { ...t.partner.orderSample, href: "#sample", bg: "bg-olive-500" },
  ];

  return (
    <Section id="partner" className="bg-white text-clay-900">
      <Container className="min-h-screen v-pad flex flex-col justify-center gap-[clamp(48px,6vw,80px)]">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-h2 text-black">
            {t.partner.heading}
          </h2>
          <p className="text-body text-black/75 max-w-[520px]">
            {t.partner.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {CARDS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className={`${c.bg} flex flex-col justify-end gap-7 p-6 text-white min-h-[360px] transition-opacity hover:opacity-90`}
            >
              <h3 className="font-sans text-h4 text-white">{c.title}</h3>
              <p className="text-body text-white">{c.body}</p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
