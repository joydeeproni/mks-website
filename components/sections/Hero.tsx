import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <Section className="relative isolate overflow-hidden text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={images.heroWorkshop.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <SiteHeader tone="light" />

      <Container className="flex flex-col items-center justify-center text-center pt-[clamp(64px,9vw,120px)] pb-[clamp(96px,14vw,200px)]">
        <div className="flex flex-col gap-[clamp(40px,5vw,72px)] items-center max-w-[960px]">
          <div className="flex flex-col gap-[clamp(16px,1.4vw,24px)] items-center">
            <p className="text-[12px] tracking-[0.22em] uppercase opacity-80 font-bold">
              Manufacturing partner · Kolkata, India
            </p>
            <Heading variant="display-xl" className="text-balance">
              Bags, leather goods, and
              <br className="hidden sm:block" />
              <span className="block">soft accessories — built for your brand.</span>
            </Heading>
            <p className="text-body-lg tracking-[-0.4px] max-w-[720px] mt-3">
              From a single tote to a full seasonal line. Choose the material,
              the silhouette, the hardware — we&apos;ll handle the rest,
              ethically and under the Fair Trade banner.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center w-full sm:w-auto">
            <Button
              href="#products"
              variant="outline"
              tone="light"
              className="w-full sm:w-auto"
            >
              See what we make
            </Button>
            <Button
              href="#partner"
              variant="solid"
              tone="light"
              className="w-full sm:w-auto"
            >
              Start an order
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
