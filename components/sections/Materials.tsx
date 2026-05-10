import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

const MATERIALS = [
  { key: "matFullGrain" as const, name: "Full Grain Leather", note: "Heritage tanneries · 1.8–2.2mm" },
  { key: "matSmooth" as const, name: "Smooth Leather", note: "Polished surface · 1.0–1.4mm" },
  { key: "matShanti" as const, name: "Shanti Leather", note: "Vegetable tanned · matte finish" },
  { key: "matNubuck" as const, name: "Nubuck", note: "Soft buffed grain · velvety hand" },
  { key: "matCanvas" as const, name: "Recycled Canvas", note: "12oz cotton · GRS certified" },
];

export function Materials() {
  return (
    <section id="materials" className="bg-cream py-32 md:py-40">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow text-olive-700/70">Materials</p>
            <h2 className="serif-display text-display-md mt-4 text-olive-700">
              The library we keep — every hide, every weave.
            </h2>
          </div>
          <p className="md:col-span-5 text-base leading-relaxed text-clay-700/80">
            Every project begins with the right material. We stock — and
            responsibly source — a curated library so you can specify with
            confidence.
          </p>
        </div>

        <ul
          className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          role="list"
        >
          {MATERIALS.map((m) => (
            <li key={m.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bone">
                <Image
                  src={images[m.key].src}
                  alt={images[m.key].alt}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-5 font-display text-xl text-olive-700">
                {m.name}
              </h3>
              <p className="mt-1 text-sm text-clay-700/65">{m.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
