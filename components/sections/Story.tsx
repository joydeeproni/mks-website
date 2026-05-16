import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function Story() {
  return (
    <Section id="story" className="bg-clay-600 text-white">
      <Container className="flex flex-col gap-[clamp(56px,10vw,160px)] v-pad-lg">
        <div className="flex flex-col gap-[clamp(6px,0.6vw,8px)] max-w-[820px]">
          <Heading variant="h1">Our Story</Heading>
          <p className="text-body-lg tracking-[-0.4px] max-w-[775px]">
            MKS is a second-generation, women-led leather goods manufacturer
            based in Kolkata, India. We work with brands of all sizes — from
            independent designers to global retailers — delivering high-quality,
            ethically made leather products that are built to last and made to
            be proud of.
          </p>
        </div>

        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:h-[800px] lg:aspect-auto rounded-[9px] overflow-hidden">
          <Image
            src={images.storyFloor.src}
            alt={images.storyFloor.alt}
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-x-0 bottom-0 p-[clamp(16px,2.5vw,32px)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-[48px] lg:items-end">
              <div className="flex flex-col gap-[clamp(16px,2vw,29px)] flex-1">
                <p className="font-display font-normal text-quote tracking-tight max-w-[800px]">
                  &ldquo;Our mission is to create job opportunities for
                  economically disadvantaged groups, helping them lead decent
                  lives.&rdquo;
                </p>
                <p className="text-[14px] md:text-[16px] tracking-[-0.32px] leading-[26px]">
                  Mithu Dam, Founder – MKS Exports
                </p>
              </div>
              <Button
                href="#story-more"
                variant="solid"
                tone="light"
                className="self-start lg:self-end shrink-0"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
