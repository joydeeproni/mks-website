import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * Ready to Partner? — Figma 1:188.
 * Section bg white. H2 heading + body subhead, left-aligned.
 * Below: 3 cards in a row (taupe, clay-800, olive-500) with 40/56 Trade Gothic
 * title and 20/30 body. Cards have justify-end for vertical alignment.
 * Mobile: cards stack.
 */
const CARDS = [
  {
    title: "Get Quote",
    body:
      "Tell us what you need. We will come back with a clear, honest price — no hidden costs, no runaround.",
    href: "#quote",
    bg: "bg-taupe",
  },
  {
    title: "Talk To Us",
    body:
      "Not ready to commit? Order a sample first. Touch the leather, test the stitching, see the standard before you sign anything.",
    href: "#talk",
    bg: "bg-clay-800",
  },
  {
    title: "Order Sample",
    body:
      "If you have a unique question, our friendly team is here and ready to chat!",
    href: "#sample",
    bg: "bg-olive-500",
  },
] as const;

export function Partner() {
  return (
    <Section id="partner" className="bg-white text-clay-900">
      <Container className="min-h-screen v-pad flex flex-col justify-center gap-[clamp(48px,6vw,80px)]">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-h2 text-black">Ready to Partner?</h2>
          <p className="text-body text-black/75 max-w-[520px]">
            Three honest ways to begin — from a fast quote to a sample
            in your hands, in days, not weeks.
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
