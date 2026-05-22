import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";

const LEATHERS = [
  { label: "Full Grain Leather", img: images.leatherMacro },
  { label: "Smooth Leather", img: images.customHardware },
  { label: "Shanti Leather", img: images.customStitch },
  { label: "Vegetable Tanned", img: images.sustainability },
  { label: "Embossed Hide", img: images.customEmboss },
];

/**
 * Your vision, our work — Figma 1:87.
 * Section bg cream. 6+6 asymmetric heading. Below: horizontal row of 5
 * material cards (336w × 304 image + 20/700 label). Overflows the 1196 grid
 * on purpose at desktop — scroll-snap on mobile.
 */
export function Materials() {
  return (
    <Section id="materials" className="bg-cream text-clay-700">
      <Container className="v-pad flex flex-col gap-[clamp(64px,11vw,160px)]">
        <SectionHeader
          heading={
            <>
              Your <span className="italic">vision</span>,<br />
              our work
            </>
          }
          body="Premium materials sourced from heritage tanneries and trusted partners. Specify with confidence — every hide is documented end-to-end."
        />

        {/* Horizontal scroll on mobile/tablet, free-flow row on desktop */}
        <div className="-mx-[var(--shell-pad)] overflow-x-auto">
          <ul className="flex gap-8 px-[var(--shell-pad)] snap-x snap-mandatory">
            {LEATHERS.map((m) => (
              <li
                key={m.label}
                className="shrink-0 w-[clamp(240px,28vw,336px)] flex flex-col gap-4 snap-start"
              >
                <div className="relative aspect-[336/304] w-full overflow-hidden">
                  <Image
                    src={m.img.src}
                    alt={m.img.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 336px"
                    className="object-cover"
                  />
                </div>
                <p className="font-sans font-bold text-body text-olive-700">
                  {m.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
