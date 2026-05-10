import { Container } from "@/components/ui/Container";

const CERTS = [
  { code: "SEDEX", label: "5-pillar audited" },
  { code: "WFTO", label: "Aligned partner" },
  { code: "BSCI", label: "Compliant" },
  { code: "ZDHC", label: "Chemical-safe" },
  { code: "ISO 9001", label: "Quality systems" },
];

export function Certifications() {
  return (
    <section className="bg-ivory border-y border-clay-700/8 py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-between">
          <p className="eyebrow text-clay-700/70">
            Trusted, audited &amp; certified
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {CERTS.map((c) => (
              <li
                key={c.code}
                className="flex items-baseline gap-2 text-clay-700"
              >
                <span className="font-display text-xl font-medium tracking-tight">
                  {c.code}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-clay-700/60">
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
