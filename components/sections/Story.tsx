"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useT } from "@/components/LanguageProvider";
import { images } from "@/lib/images";

export function Story() {
  const t = useT();
  return (
    <Section id="story" className="bg-clay-600 text-white">
      <Container className="v-pad flex flex-col gap-[clamp(64px,11vw,160px)]">
        <SectionHeader
          tone="light"
          heading={
            <>
              {t.story.line1}
              <br />
              <span className="italic">{t.story.italic}</span> {t.story.line2}
            </>
          }
          body={t.story.body}
          cta={
            <Button
              href="/about"
              variant="solid"
              tone="light"
              className="self-start"
            >
              {t.story.learnMore}
            </Button>
          }
        />

        <div className="relative h-[clamp(360px,55vw,800px)] w-full overflow-hidden">
          <Image
            src={images.mksFounder.src}
            alt={images.mksFounder.alt}
            fill
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex flex-col justify-end p-[clamp(20px,2.5vw,40px)] text-white gap-4">
            <blockquote className="font-display italic text-quote font-light max-w-[min(671px,90%)]">
              &ldquo;{t.story.quote}&rdquo;
            </blockquote>
            <cite className="text-body not-italic">{t.story.attribution}</cite>
          </div>
        </div>
      </Container>
    </Section>
  );
}
