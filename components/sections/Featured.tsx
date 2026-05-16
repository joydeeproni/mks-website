import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { images } from "@/lib/images";
import { Materials } from "@/components/sections/Materials";

const ROW1 = [
  { key: "featuredBags" as const, label: "Bags" },
  { key: "featuredAccessories" as const, label: "Accessories" },
];

const ROW2 = [
  { key: "featuredDresses" as const, label: "Dresses", bg: "" },
  { key: "featuredScarves" as const, label: "Scarves", bg: "bg-mist" },
  {
    key: "featuredShanti" as const,
    label: "Shanti Leather",
    bg: "bg-clay-500",
  },
];

export function Featured() {
  return (
    <Section id="products" className="bg-cream">
      <Container className="flex flex-col gap-[clamp(56px,10vw,160px)] v-pad-lg">
        <Materials />

        <div className="flex flex-col gap-[clamp(16px,2.5vw,32px)] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(16px,2.5vw,32px)]">
            {ROW1.map((t) => (
              <div
                key={t.label}
                className="relative aspect-[5/4] md:h-[clamp(420px,40vw,640px)] md:aspect-auto rounded-[9px] overflow-hidden flex flex-col items-center justify-center p-[24px]"
              >
                <Image
                  src={images[t.key].src}
                  alt={images[t.key].alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
                <p className="relative font-display font-medium text-h1 text-white text-center w-full">
                  {t.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2.5vw,32px)]">
            {ROW2.map((t) => (
              <div
                key={t.label}
                className={`relative aspect-[5/4] lg:aspect-auto lg:h-[400px] rounded-[9px] overflow-hidden flex flex-col items-center justify-center p-[24px] ${t.bg}`}
              >
                <Image
                  src={images[t.key].src}
                  alt={images[t.key].alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-black/25" />
                <p className="relative font-display font-medium text-h1 text-white text-center w-full">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
