import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

const POINTS = [
  {
    title: "Vegetable-tanned leather",
    body:
      "We exclusively use leathers processed with organic tannins — mimosa, quebracho and chestnut. No harsh chemicals, no heavy metals, just the Earth's natural palette.",
  },
  {
    title: "Living-wage guarantee",
    body:
      "Every artisan is paid 2.5x the regional average. We believe craftsmanship cannot thrive under pressure; it requires security, dignity and space.",
  },
  {
    title: "Zero-waste patterning",
    body:
      "Our off-cuts are never discarded. Small leather goods and keychains are born from the remaining hide, ensuring respect for the entire animal.",
  },
];

export function Sustainability() {
  return (
    <section className="bg-cream py-32 md:py-40">
      <Container>
        <div className="grid gap-16 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="eyebrow text-olive-700/70">Sustainability &amp; Fair Trade</p>
            <h2 className="serif-display text-display-md mt-4 text-olive-700">
              The right way is the only way we know.
            </h2>
            <ul className="mt-12 space-y-10">
              {POINTS.map((p) => (
                <li key={p.title}>
                  <h3 className="flex items-center gap-3 text-base font-semibold tracking-tight text-olive-700">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-olive-500 text-ivory text-xs">
                      ✓
                    </span>
                    {p.title}
                  </h3>
                  <p className="mt-3 pl-10 text-sm leading-relaxed text-clay-700/75">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7 relative">
            <div className="relative aspect-[6/5] overflow-hidden rounded-md">
              <Image
                src={images.sustainability.src}
                alt={images.sustainability.alt}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -left-4 -bottom-12 md:-left-12 bg-mist text-olive-700 p-7 rounded-md shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] w-[240px]">
              <div className="serif-display text-5xl tracking-tight">100%</div>
              <div className="mt-1 text-sm tracking-tight text-olive-700/85">
                Biodegradable process
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
