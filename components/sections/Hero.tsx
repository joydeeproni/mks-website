import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { images } from "@/lib/images";

/**
 * Hero — full-bleed image with centred copy.
 * Figma node 1:43 (1440×965 desktop). Layout per design context:
 *   header (logo + 5 nav + Get Quote) overlaid
 *   centred block: H1 (104) → body (20) → 2 buttons, 72px gap, max-w 954.
 */
export function Hero() {
  return (
    <Section fade={false} className="relative isolate overflow-hidden text-white">
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
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <SiteHeader tone="light" />

      <Container className="flex flex-col items-center justify-center text-center pt-[clamp(64px,9vw,120px)] pb-[clamp(96px,14vw,200px)]">
        <div className="flex flex-col gap-[clamp(40px,5vw,72px)] items-center max-w-[954px]">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-display text-h1 text-balance max-w-[898px]">
              Accessories Made Responsibly,
              <br className="hidden sm:block" />
              <span className="sm:inline"> For Global Brands</span>
            </h1>
            <p className="text-body max-w-[682px] mt-2">
              Premium leather bags, accessories, and handcrafted goods —
              manufactured in Kolkata, India, and exported worldwide under the
              Fair Trade banner.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <Button
              href="#partner"
              variant="solid"
              tone="light"
              className="w-full sm:w-auto"
            >
              Start An Order
            </Button>
            <Button
              href="#products"
              variant="outline"
              tone="light"
              className="w-full sm:w-auto"
            >
              View Capabilities
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
