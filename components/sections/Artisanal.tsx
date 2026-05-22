import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

/**
 * Honoring the Artisanal Path — Figma 1:141.
 * Section bg clay-800. 6+6 asymmetric heading (Artisanal italic).
 * Below: 12-col grid — large image spans 1–8 (h-533), a smaller textured
 * image spans 9–12 (h-400), and an Overlapping Title Card bridges them
 * (bottom-right of the large image, white bg, 450 wide).
 */
export function Artisanal() {
  return (
    <Section className="bg-clay-800 text-white">
      <Container className="v-pad flex flex-col gap-[clamp(64px,11vw,160px)]">
        <SectionHeader
          tone="light"
          heading={
            <>
              Honoring the
              <br />
              <span className="italic">Artisanal</span> Path
            </>
          }
          body="Our process is a slow dialogue between master and material. We do not manufacture; we cultivate objects that carry the soul of their makers."
        />

        <div className="relative w-full">
          {/* Desktop layout: asymmetric image spread */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
            {/* Large image — cols 1-8, h-533 */}
            <div className="col-span-8 relative h-[533px] overflow-hidden bg-bone">
              <Image
                src={images.artisanHands.src}
                alt={images.artisanHands.alt}
                fill
                sizes="66vw"
                className="object-cover"
              />
            </div>
            {/* Small texture — cols 9-12, h-400, vertically offset */}
            <div className="col-span-4 relative h-[400px] mt-[42px] overflow-hidden bg-sand">
              <Image
                src={images.leatherMacro.src}
                alt={images.leatherMacro.alt}
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
            {/* Overlapping Title Card — positioned at the seam */}
            <div className="col-start-7 col-span-5 -mt-[260px] z-10">
              <ArtisanCard />
            </div>
          </div>

          {/* Mobile/tablet layout: stacked */}
          <div className="lg:hidden flex flex-col gap-6">
            <div className="relative aspect-[16/10] overflow-hidden bg-bone">
              <Image
                src={images.artisanHands.src}
                alt={images.artisanHands.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <ArtisanCard />
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src={images.leatherMacro.src}
                alt={images.leatherMacro.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ArtisanCard() {
  return (
    <div className="bg-white text-clay-800 p-[clamp(28px,3vw,48px)] flex flex-col gap-6 max-w-[450px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <h3 className="font-sans font-normal text-h4 text-clay-800 max-w-[260px]">
        The Art of the Hand
      </h3>
      <p className="text-body text-graphite">
        Each piece begins with selection—only the finest hides from heritage
        tanneries. Our saddle-stitching technique, a method nearly lost to
        industrialization, ensures a seam that never unravels.
      </p>
      <Button href="/our-process" variant="link" tone="dark" className="self-start">
        Read More
      </Button>
    </div>
  );
}
