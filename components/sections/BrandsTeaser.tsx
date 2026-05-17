import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

const BRANDS = [
  { name: "SERRV", note: "27 years · totes, satchels" },
  { name: "MadeFree", note: "Backpack line, since 2019" },
  { name: "Fair Anita", note: "Soft goods" },
  { name: "10K Villages", note: "Scarves, bandanas" },
  { name: "Equita", note: "Wallet collection" },
  { name: "Mata Traders", note: "Limited drops" },
];

export function BrandsTeaser() {
  return (
    <Section className="bg-cream">
      <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[12px] tracking-[0.22em] uppercase font-bold text-clay-700/65 mb-3">
              Quietly behind brands you trust
            </p>
            <Heading variant="display-md" className="text-clay-700">
              Brands we craft for
            </Heading>
          </div>
          <p className="lg:col-span-4 text-body-lg text-clay-700/75 max-w-[460px]">
            Two decades of long, low-key partnerships. A small selection — full
            roster and case studies on the Brands page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(16px,2vw,24px)]">
          <div className="md:col-span-7 relative aspect-[5/4] md:h-[480px] md:aspect-auto rounded-[12px] overflow-hidden">
            <Image
              src={images.workServv.src}
              alt={images.workServv.alt}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="md:col-span-5 grid grid-cols-2 gap-[clamp(8px,1vw,12px)]">
            {BRANDS.map((b) => (
              <li
                key={b.name}
                className="bg-white rounded-[8px] p-[clamp(16px,1.5vw,20px)] flex flex-col justify-between min-h-[110px] md:min-h-[150px]"
              >
                <p className="font-display text-[clamp(20px,1.8vw,26px)] text-clay-700 leading-tight">
                  {b.name}
                </p>
                <p className="text-[12px] text-clay-700/60 mt-2">{b.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Button href="/brands" variant="outline" tone="dark">
            See all brands
          </Button>
        </div>
      </Container>
    </Section>
  );
}
