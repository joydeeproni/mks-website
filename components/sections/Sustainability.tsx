"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useT } from "@/components/LanguageProvider";

export function Sustainability() {
  const t = useT();
  const ITEMS = [
    { icon: IconShield, ...t.sustainability.fairlyPaid, href: "#wfto" },
    { icon: IconShield, ...t.sustainability.sedexCert, href: "#sedex" },
    { icon: IconHands, ...t.sustainability.noChildLabor, href: "#labor" },
    { icon: IconLeaf, ...t.sustainability.community, href: "#community" },
    { icon: IconLeaf, ...t.sustainability.vegTanned, href: "#sustainability" },
  ];

  return (
    <Section id="values" snap={false} className="bg-black text-white">
      <Container className="py-[clamp(64px,7.2vw,104px)]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
          {ITEMS.map((it, idx) => (
            <li
              key={idx}
              className="flex flex-col gap-3 sm:gap-4 sm:min-h-[226px] sm:justify-between pb-6 sm:pb-0 border-b border-white/10 sm:border-0 last:border-0 last:pb-0"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <it.icon />
                <p className="text-body text-white">{it.body}</p>
              </div>
              <Button
                href={it.href}
                variant="link"
                tone="light"
                className="self-start"
              >
                {it.link}
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 44 44" className="w-11 h-11" fill="none" aria-hidden="true">
      <path
        d="M22 4l14 5v11c0 8.7-5.6 16.4-14 19-8.4-2.6-14-10.3-14-19V9l14-5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 22l5 5 9-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHands() {
  return (
    <svg viewBox="0 0 44 44" className="w-11 h-11" fill="none" aria-hidden="true">
      <path
        d="M14 22V12a3 3 0 016 0v10M20 22V10a3 3 0 016 0v12M26 22V14a3 3 0 016 0v16c0 5.5-4.5 10-10 10s-10-4.5-10-10v-4l-4-4a2 2 0 010-3 2 2 0 013 0l3 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg viewBox="0 0 44 44" className="w-11 h-11" fill="none" aria-hidden="true">
      <path
        d="M36 8c0 14-8 24-22 28C12 22 22 12 36 8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 36L36 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
