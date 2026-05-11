import Image from "next/image";
import { images } from "@/lib/images";

const POINTS = [
  {
    title: "Vegetable Tanned Leather",
    body:
      "We exclusively use vegetable-tanned leathers processed with organic tannins—mimosa, quebracho, and chestnut. No harsh chemicals, no heavy metals, just the Earth’s natural palette.",
  },
  {
    title: "Living Wage Guarantee",
    body:
      "Every artisan is paid 2.5x the regional average. We believe craftsmanship cannot thrive under pressure; it requires security, dignity, and space.",
  },
  {
    title: "Zero-Waste Patterning",
    body:
      "Our off-cuts are never discarded. Small leather goods and keycaps are born from the remaining hide, ensuring respect for the entire animal.",
  },
];

const Check = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className="w-[16px] h-[16px] flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M5 10.5l3.5 3 6.5-7"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Sustainability() {
  return (
    <div
      className="overflow-clip py-[32px] w-full"
      data-node-id="4156:6698"
    >
      <div
        className="grid grid-cols-2 grid-rows-[650.5px] gap-x-[96px] gap-y-[96px] w-full"
        data-node-id="4156:6699"
      >
        {/* Left: heading + 3 points */}
        <div className="col-start-1 row-start-1 self-center flex flex-col gap-[24px] w-[512px]">
          <h2 className="font-display font-normal text-[60px] leading-[76px] text-white w-full">
            <span className="block">Sustainability &amp;</span>
            <span className="block">Fair Trade</span>
          </h2>
          <div className="flex flex-col gap-[48px] pt-[16px] w-full">
            {POINTS.map((p) => (
              <div key={p.title} className="flex flex-col gap-[16px] w-full">
                <div className="flex gap-[12px] items-center w-full text-white">
                  <Check />
                  <h3 className="text-[14px] font-bold tracking-[1.4px] uppercase leading-[20px]">
                    {p.title}
                  </h3>
                </div>
                <div className="pl-[32px] w-full">
                  <p className="text-[16px] leading-[26px] text-white">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image with floating stat */}
        <div className="col-start-2 row-start-1 self-center relative">
          <div className="bg-bone w-full h-[512px] overflow-hidden relative">
            <Image
              src={images.sustainability.src}
              alt={images.sustainability.alt}
              fill
              sizes="592px"
              className="object-cover"
            />
          </div>
          <div
            className="absolute bg-stat p-[40px] flex flex-col gap-[3px] w-[239.44px]"
            style={{ bottom: "-40px", left: "-40px" }}
          >
            <p className="font-display font-extralight text-[48px] leading-[48px] text-ivory w-[120.88px]">
              100%
            </p>
            <p className="text-[11px] tracking-[1.1px] uppercase leading-[16.5px] text-ivory opacity-80 w-[159.44px]">
              Biodegradable Process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
