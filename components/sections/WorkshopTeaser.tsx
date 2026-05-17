import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function WorkshopTeaser() {
  return (
    <Section className="bg-ivory">
      <Container className="v-pad-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(24px,3vw,48px)] items-center">
          <div className="lg:col-span-6 relative aspect-[4/5] lg:aspect-auto lg:h-[560px] overflow-hidden rounded-[clamp(8px,1vw,12px)] bg-bone">
            <Image
              src={images.artisanHands.src}
              alt={images.artisanHands.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:pl-[clamp(0px,3vw,48px)] flex flex-col gap-[clamp(16px,2vw,28px)]">
            <p className="text-[12px] tracking-[0.22em] uppercase font-bold text-clay-700/65">
              Inside the workshop
            </p>
            <Heading variant="display-md" className="text-clay-700">
              A slow dialogue
              <br />
              <span className="italic">between master and material.</span>
            </Heading>
            <p className="text-body-lg text-clay-700/75 max-w-[520px]">
              We don&apos;t manufacture — we cultivate objects that carry the
              soul of their makers. See how each piece moves through pattern
              cutting, saddle-stitching and hand-burnishing, in a workshop
              that pays artisans 2.5× the regional average.
            </p>
            <ul className="flex flex-col gap-[10px] pt-2 max-w-[420px]">
              {[
                "Saddle-stitched seams that never unravel",
                "Vegetable-tanned hides from heritage tanneries",
                "Sedex 5-pillar audited · WFTO-aligned",
              ].map((line) => (
                <li
                  key={line}
                  className="flex gap-[10px] items-start text-[15px] text-clay-700"
                >
                  <span className="mt-2 block h-px w-6 bg-clay-700/40" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="pt-[12px]">
              <Button href="/our-process" variant="outline" tone="dark">
                See our process
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
