"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { useT } from "@/components/LanguageProvider";
import { images } from "@/lib/images";

export function Artisanal() {
  const t = useT();
  return (
    <Section className="bg-clay-800 text-white mt-[clamp(48px,8vw,120px)]" fade={false}>
      <Container className="v-pad-lg flex flex-col gap-[clamp(64px,11vw,160px)]">
        {/* 1. Heading fades in first */}
        <FadeIn>
          <SectionHeader
            tone="light"
            heading={
              <>
                {t.artisanal.line1}
                <br />
                <span className="italic">{t.artisanal.italic}</span>{" "}
                {t.artisanal.line2}
              </>
            }
            body={t.artisanal.body}
          />
        </FadeIn>

        <div className="relative w-full">
          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
            {/* 2. Artisan image fades in second */}
            <FadeIn delay={0.15} className="col-span-8 relative h-[533px] overflow-hidden bg-bone">
              <Image
                src={images.artisanHands.src}
                alt={images.artisanHands.alt}
                fill
                sizes="66vw"
                className="object-cover"
              />
            </FadeIn>
            {/* Small leather macro image */}
            <FadeIn delay={0.25} className="col-span-4 relative h-[400px] mt-[42px] overflow-hidden bg-sand">
              <Image
                src={images.leatherMacro.src}
                alt={images.leatherMacro.alt}
                fill
                sizes="33vw"
                className="object-cover"
              />
            </FadeIn>
            {/* 3. Card fades in last */}
            <FadeIn delay={0.35} className="col-start-7 col-span-5 -mt-[260px] z-10">
              <ArtisanCard />
            </FadeIn>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex flex-col gap-6">
            <FadeIn>
              <div className="relative aspect-[16/10] overflow-hidden bg-bone">
                <Image
                  src={images.artisanHands.src}
                  alt={images.artisanHands.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ArtisanCard />
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={images.leatherMacro.src}
                  alt={images.leatherMacro.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ArtisanCard() {
  const t = useT();
  return (
    <div className="bg-white text-clay-800 p-[clamp(28px,3vw,48px)] flex flex-col gap-6 max-w-[450px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <h3 className="font-sans font-normal text-h4 text-clay-800 max-w-[260px]">
        {t.artisanal.cardTitle}
      </h3>
      <p className="text-body text-graphite">{t.artisanal.cardBody}</p>
      <Button href="/our-process" variant="link" tone="dark" className="self-start">
        {t.artisanal.readMore}
      </Button>
    </div>
  );
}
