import Link from "next/link";
import { Container } from "@/components/ui/Container";

const CARDS = [
  {
    title: "Get a quote",
    body:
      "Tell us what you need. We’ll come back with a clear, honest price — no hidden costs, no runaround.",
    href: "#quote",
    cta: "Request quote",
    variant: "primary" as const,
  },
  {
    title: "Order a sample",
    body:
      "Not ready to commit? Order a sample first. Touch the leather, test the stitching, see the standard before you sign anything.",
    href: "#sample",
    cta: "Order sample",
    variant: "burgundy" as const,
  },
  {
    title: "Talk to us",
    body:
      "Sometimes you have a question that doesn’t fit a form. Our team is real, responsive and happy to talk.",
    href: "#talk",
    cta: "Start a conversation",
    variant: "olive" as const,
  },
];

const variantStyles = {
  primary: "bg-clay-600 text-ivory",
  burgundy: "bg-clay-500 text-ivory",
  olive: "bg-olive-500 text-ivory",
} as const;

export function Partner() {
  return (
    <section id="partner" className="bg-ivory pb-32 md:pb-40">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow text-clay-700/60">Ready to partner?</p>
          <h2 className="serif-display text-display-lg mt-5">
            Three simple ways to start.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-clay-700/75">
            Whether you&rsquo;re prototyping a single style or scaling a global
            line, we&rsquo;ll meet you where you are.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className={`relative flex flex-col justify-between rounded-md p-10 min-h-[420px] ${variantStyles[c.variant]}`}
            >
              <h3 className="serif-display text-display-sm">{c.title}</h3>
              <div>
                <p className="text-base leading-relaxed text-current/85">
                  {c.body}
                </p>
                <Link
                  href={c.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-tight link-underline"
                >
                  {c.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
