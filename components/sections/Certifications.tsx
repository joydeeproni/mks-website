import Image from "next/image";
import { images } from "@/lib/images";

export function Certifications() {
  return (
    <section
      className="w-[1440px] flex items-center justify-center gap-[64px] px-[80px] py-[120px] bg-ivory"
      data-node-id="4156:6574"
    >
      <div className="relative w-[159px] h-[159px] rounded-[8px] overflow-hidden">
        <Image
          src={images.certSedex1.src}
          alt={images.certSedex1.alt}
          fill
          sizes="159px"
          className="object-contain"
        />
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="relative w-[159px] h-[159px] rounded-[8px] overflow-hidden">
          <Image
            src={images.certSedex2.src}
            alt={images.certSedex2.alt}
            fill
            sizes="159px"
            className="object-cover"
          />
        </div>
        <p className="text-[20px] font-bold text-[#626262] leading-[30px] whitespace-nowrap w-[262px]">
          We are Sedex 5-pillar certified
        </p>
      </div>
    </section>
  );
}
