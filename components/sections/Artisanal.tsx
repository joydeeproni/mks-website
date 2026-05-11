import Image from "next/image";
import { images } from "@/lib/images";

export function Artisanal() {
  return (
    <div className="flex flex-col gap-[160px] w-full">
      {/* Asymmetric title row */}
      <div
        className="flex items-end w-[1120px]"
        data-node-id="4156:6622"
      >
        <div className="w-[633.33px]">
          <h2 className="font-display text-[96px] leading-[96px] text-white font-extralight">
            <span className="block">Honoring the</span>
            <span className="block italic">Artisanal Path</span>
          </h2>
        </div>
        <div className="flex-1 pb-[16px]">
          <p className="text-[18px] leading-[29.25px] text-white w-[392px]">
            Our process is a slow dialogue between master and material. We do
            not manufacture; we cultivate objects that carry the soul of their
            makers.
          </p>
        </div>
      </div>

      {/* Art of the Hand asymmetric spread */}
      <div
        className="grid grid-cols-12 grid-rows-[533.33px] w-full"
        data-node-id="4156:6631"
      >
        {/* Right small image with caption */}
        <div className="col-start-9 col-span-4 flex flex-col gap-[31px] items-start justify-center px-[48px] py-[42.41px] row-start-1 self-start">
          <div className="bg-sand w-full h-[400px] overflow-hidden relative">
            <Image
              src={images.leatherMacro.src}
              alt={images.leatherMacro.alt}
              fill
              sizes="330px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-end w-full">
            <p className="micro-label text-stone w-[215.3px] text-right">
              Reference: Heritage Tooling v.2
            </p>
          </div>
        </div>

        {/* Left main image with overlapping card */}
        <div className="col-start-1 col-span-8 row-start-1 self-start relative">
          <div className="bg-bone overflow-hidden relative h-[533.33px] w-full">
            <Image
              src={images.artisanHands.src}
              alt={images.artisanHands.alt}
              fill
              sizes="853px"
              className="object-cover"
            />
          </div>
          <div
            className="absolute bg-white p-[48px] flex flex-col gap-[24px] w-[450px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
            style={{ bottom: "-80px", right: "-80px" }}
          >
            <h3 className="font-display font-normal text-[30px] leading-[36px] text-ink">
              The Art of the Hand
            </h3>
            <p className="text-[16px] leading-[26px] text-graphite">
              Each piece begins with selection—only the finest hides from
              heritage tanneries. Our saddle-stitching technique, a method
              nearly lost to industrialization, ensures a seam that never
              unravels.
            </p>
            <div className="flex flex-col gap-[16px] pt-[8px] w-full">
              {[
                ["01", "Manual Pattern Cutting"],
                ["02", "Edge Hand-Burnishing"],
              ].map(([num, label]) => (
                <div key={num} className="flex gap-[16px] items-center w-full">
                  <span className="micro-step text-stone">{num}</span>
                  <span className="block w-[32px] h-px bg-pebble" />
                  <span className="text-[14px] leading-[20px] text-ink">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
