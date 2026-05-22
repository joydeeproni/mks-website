import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

/**
 * Family run, women led — Figma 1:75.
 * Section bg clay-600. 6+6 asymmetric heading. Below: 800px-tall image with
 * a Hardcover Light Italic pull-quote + attribution overlaid at the bottom.
 */
export function Story() {
  return (
    <Section id="story" className="bg-clay-600 text-white">
      <Container className="v-pad flex flex-col gap-[clamp(64px,11vw,160px)]">
        <SectionHeader
          tone="light"
          heading={
            <>
              Family run
              <br />
              <span className="italic">women</span> led
            </>
          }
          body="MKS is a second-generation, women-led leather goods manufacturer based in Kolkata, India. We work with brands of all sizes — from independent designers to global retailers."
          cta={
            <Button href="/about" variant="solid" tone="light" className="self-start">
              Learn More
            </Button>
          }
        />

        <div className="relative h-[clamp(360px,55vw,800px)] w-full overflow-hidden">
          <Image
            src={images.storyFloor.src}
            alt={images.storyFloor.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-[clamp(20px,2.5vw,40px)] text-white gap-4">
            <blockquote className="font-display italic text-quote font-light max-w-[min(671px,90%)]">
              &ldquo;Our mission is to create job opportunities for economically
              disadvantaged groups, helping them lead decent lives.&rdquo;
            </blockquote>
            <cite className="text-body not-italic">
              Mithu Dam, Founder – MKS Exports
            </cite>
          </div>
        </div>
      </Container>
    </Section>
  );
}
