import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function Story() {
  return (
    <section
      id="story"
      className="bg-clay-600 text-ivory py-32 md:py-40"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow opacity-70">Our Story</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="serif-display text-display-md max-w-3xl">
              A second-generation, women-led manufacturer rooted in Kolkata.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/80">
              MKS works with brands of every size — from independent designers
              to global retailers — delivering high-quality, ethically made
              leather products that are built to last and made to be proud of.
            </p>
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-md min-h-[640px]">
          <Image
            src={images.storyFloor.src}
            alt={images.storyFloor.alt}
            fill
            sizes="(min-width: 1100px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-clay-900/70 via-clay-900/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <blockquote className="max-w-3xl">
                <p className="serif-display text-display-sm text-ivory">
                  &ldquo;Our mission is to create job opportunities for
                  economically disadvantaged groups, helping them lead decent
                  lives.&rdquo;
                </p>
                <footer className="mt-6 text-sm uppercase tracking-[0.2em] text-ivory/70">
                  Mithu Dam · Founder, MKS Exports
                </footer>
              </blockquote>
              <Button href="#story-more" variant="filled" className="shrink-0">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
