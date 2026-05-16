import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
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
    <div className="py-[clamp(16px,2vw,32px)] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-center">
        <div className="flex flex-col gap-[24px]">
          <Heading variant="display-sm" className="text-white">
            <span className="block">Sustainability &amp;</span>
            <span className="block">Fair Trade</span>
          </Heading>
          <div className="flex flex-col gap-[clamp(28px,3.5vw,48px)] pt-[16px]">
            {POINTS.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-[12px] text-white"
              >
                <div className="flex gap-[12px] items-center">
                  <Check />
                  <h3 className="text-[14px] font-bold tracking-[1.4px] uppercase leading-[20px]">
                    {p.title}
                  </h3>
                </div>
                <p className="pl-[32px] text-body leading-[1.6]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[6/5] lg:h-[512px] lg:aspect-auto overflow-hidden bg-bone rounded-[6px]">
            <Image
              src={images.sustainability.src}
              alt={images.sustainability.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bg-stat p-[clamp(24px,2.6vw,40px)] flex flex-col gap-[3px] w-[clamp(180px,17vw,240px)] -bottom-6 -left-4 md:-bottom-10 md:-left-10">
            <p className="font-display font-extralight text-h2 leading-[1] text-ivory">
              100%
            </p>
            <p className="text-[11px] tracking-[1.1px] uppercase leading-[16.5px] text-ivory opacity-80">
              Biodegradable Process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
