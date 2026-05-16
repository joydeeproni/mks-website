import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { images } from "@/lib/images";

export function Certifications() {
  return (
    <Section className="bg-ivory">
      <Container className="flex flex-col sm:flex-row items-center justify-center gap-[clamp(24px,4vw,64px)] py-[clamp(56px,8vw,120px)]">
        <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[159px] lg:h-[159px] rounded-[8px] overflow-hidden flex-shrink-0">
          <Image
            src={images.certSedex1.src}
            alt={images.certSedex1.alt}
            fill
            sizes="(min-width: 1024px) 159px, 140px"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-[16px]">
          <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[159px] lg:h-[159px] rounded-[8px] overflow-hidden flex-shrink-0">
            <Image
              src={images.certSedex2.src}
              alt={images.certSedex2.alt}
              fill
              sizes="(min-width: 1024px) 159px, 140px"
              className="object-cover"
            />
          </div>
          <p className="text-[18px] md:text-[20px] font-bold text-[#626262] leading-[30px] text-center sm:text-left max-w-[262px]">
            We are Sedex 5-pillar certified
          </p>
        </div>
      </Container>
    </Section>
  );
}
