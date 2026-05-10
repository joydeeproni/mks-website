import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

const PROCESS = [
  "Manual Pattern Cutting",
  "Edge Hand-Burnishing",
  "Saddle-Stitched by Hand",
  "Hand-Set Hardware",
];

export function Artisanal() {
  return (
    <section className="bg-ivory py-32 md:py-40">
      <Container>
        {/* Headline + subhead, intentionally asymmetric */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="md:col-span-7 serif-display text-display-lg">
            Honoring the
            <br />
            <span className="serif-italic">Artisanal Path.</span>
          </h2>
          <p className="md:col-span-5 md:pb-3 text-base leading-relaxed text-clay-700/75">
            Our process is a slow dialogue between master and material. We do
            not manufacture — we cultivate objects that carry the soul of their
            makers.
          </p>
        </div>

        {/* Asymmetric image spread + overlapping card */}
        <div className="relative mt-20 grid gap-8 md:grid-cols-12">
          <div className="relative md:col-span-8 aspect-[16/10] overflow-hidden rounded-md">
            <Image
              src={images.artisanHands.src}
              alt={images.artisanHands.alt}
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="md:col-span-4 flex flex-col">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md md:-mt-32">
              <Image
                src={images.leatherMacro.src}
                alt={images.leatherMacro.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-clay-700/55 italic">
              Macro detail · vegetable-tanned upper
            </p>
          </div>

          {/* Overlapping title card */}
          <div className="md:col-span-7 md:col-start-5 md:-mt-44 relative z-10">
            <div className="bg-cream p-8 md:p-12 rounded-md shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]">
              <h3 className="serif-display text-3xl md:text-4xl text-clay-700">
                The Art of the Hand
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-clay-700/80">
                Each piece begins with selection — only the finest hides from
                heritage tanneries. Our saddle-stitching technique, a method
                nearly lost to industrialization, ensures a seam that never
                unravels.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {PROCESS.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-sm text-clay-700"
                  >
                    <span className="block h-px w-8 bg-clay-700/40" />
                    <span className="font-medium tracking-tight">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
