import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export function Story() {
  return (
    <section
      id="story"
      className="w-[1440px] bg-clay-600 text-white flex flex-col gap-[160px] items-start px-[80px] py-[120px]"
      data-node-id="4156:6580"
    >
      <div className="flex flex-col gap-[8px] justify-center w-[720px]">
        <h2 className="font-display font-normal text-[48px] leading-[1.2] w-[435px]">
          Our Story
        </h2>
        <p className="text-[20px] tracking-[-0.4px] leading-[30px] w-[775px]">
          MKS is a second-generation, women-led leather goods manufacturer
          based in Kolkata, India. We work with brands of all sizes — from
          independent designers to global retailers — delivering high-quality,
          ethically made leather products that are built to last and made to
          be proud of.
        </p>
      </div>

      <div className="relative h-[800px] w-full rounded-[9px] overflow-hidden">
        <Image
          src={images.storyFloor.src}
          alt={images.storyFloor.alt}
          fill
          sizes="1280px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 p-[24px]">
          <div className="flex gap-[48px] items-end w-full">
            <div className="flex flex-col gap-[29px] text-white flex-1">
              <p className="font-display font-normal text-[40px] leading-[44px] w-[797px]">
                &ldquo;Our mission is to create job opportunities for
                economically disadvantaged groups, helping them lead decent
                lives.&rdquo;
              </p>
              <p className="text-[16px] tracking-[-0.32px] leading-[30px]">
                Mithu Dam, Founder – MKS Exports
              </p>
            </div>
            <Link
              href="#story-more"
              className="bg-white border-2 border-white px-[24px] pt-[9px] pb-[8px] text-[16px] text-[#3c1b1b] tracking-[-0.16px] font-bold leading-[30px] whitespace-nowrap hover:bg-transparent hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
