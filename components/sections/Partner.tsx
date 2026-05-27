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
      <Container className="md:min-h-screen v-pad flex flex-col justify-center gap-[clamp(32px,6vw,80px)]">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-h2 text-black">
            {t.partner.heading}
          </h2>
          <p className="text-body text-black/75 max-w-[520px]">
            {t.partner.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
          {CARDS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className={`${c.bg} flex flex-row md:flex-col items-center md:items-start md:justify-end gap-4 md:gap-7 p-5 md:p-6 text-white min-h-0 md:min-h-[360px] transition-opacity hover:opacity-90`}
            >
              <div className="flex-1 flex flex-col gap-1 md:gap-3">
                <h3 className="font-sans text-[clamp(18px,2vw,28px)] md:text-h4 text-white font-bold">
                  {c.title}
                </h3>
                <p className="text-[14px] md:text-body text-white/85 md:text-white leading-[1.4]">
                  {c.body}
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 shrink-0 md:hidden text-white/70"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h14m-6-6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
