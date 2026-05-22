import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * Sustainability / values strip — Figma 1:206.
 * Section bg black. 5 columns: 44px icon + 20/30 body + 16/700 link CTA.
 * Each column min-h 226. Wraps 5→2 on tablet, 2→1 on mobile.
 */
const ITEMS = [
  {
    icon: IconShield,
    body: "Fairly paid artisans, aligned with WFTO.",
    link: "View Ironclad Guarantee",
    href: "#wfto",
  },
  {
    icon: IconShield,
    body: "Sedex 5-pillar certified facility.",
    link: "View Audit Summary",
    href: "#sedex",
  },
  {
    icon: IconHands,
    body: "No child labor, forced work or discrimination",
    link: "Visit Worn Wear",
    href: "#labor",
  },
  {
    icon: IconLeaf,
    body: "A vision towards community and rehabilitation",
    link: "Read Our Commitment",
    href: "#community",
  },
  {
    icon: IconLeaf,
    body: "Vegetable-tanned leather, zero-waste patterning",
    link: "Read Our Commitment",
    href: "#sustainability",
  },
];

export function Sustainability() {
  return (
    <Section id="values" snap={false} className="bg-black text-white">
      <Container className="py-[clamp(64px,7.2vw,104px)]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
          {ITEMS.map((it, idx) => (
            <li
              key={idx}
              className="flex flex-col gap-4 min-h-[226px] justify-between"
            >
              <div className="flex flex-col gap-4">
                <it.icon />
                <p className="text-body text-white">{it.body}</p>
              </div>
              <a
                href={it.href}
                className="font-bold text-button text-white link-button self-start"
              >
                {it.link}
              </a>
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
