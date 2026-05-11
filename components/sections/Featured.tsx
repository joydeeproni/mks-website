import Image from "next/image";
import { images } from "@/lib/images";
import { Materials } from "@/components/sections/Materials";

export function Featured() {
  return (
    <section
      id="products"
      className="w-[1440px] bg-cream flex flex-col gap-[160px] items-start px-[80px] py-[120px]"
      data-node-id="4156:6591"
    >
      {/* Materials row */}
      <Materials />

      {/* Featured product tiles */}
      <div className="flex flex-col gap-[32px] w-full">
        {/* Row 1: two large tiles 624 × 640 */}
        <div className="flex gap-[32px] w-full">
          {[
            { key: "featuredBags" as const, label: "Bags" },
            { key: "featuredAccessories" as const, label: "Accessories" },
          ].map((t) => (
            <div
              key={t.label}
              className="relative flex-1 h-[640px] rounded-[9px] overflow-hidden flex flex-col items-center justify-center p-[24px]"
            >
              <Image
                src={images[t.key].src}
                alt={images[t.key].alt}
                fill
                sizes="624px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <p className="relative font-display font-medium text-[48px] leading-[1.2] text-white tracking-[-0.96px] text-center w-full">
                {t.label}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: three tiles 405 × 400 */}
        <div className="flex gap-[32px] w-full">
          {[
            { key: "featuredDresses" as const, label: "Dresses", bg: "" },
            { key: "featuredScarves" as const, label: "Scarves", bg: "bg-mist" },
            { key: "featuredShanti" as const, label: "Shanti Leather", bg: "bg-clay-500" },
          ].map((t) => (
            <div
              key={t.label}
              className={`relative flex-1 h-[400px] rounded-[9px] overflow-hidden flex flex-col items-center justify-center p-[24px] ${t.bg}`}
            >
              <Image
                src={images[t.key].src}
                alt={images[t.key].alt}
                fill
                sizes="405px"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/25" />
              <p className="relative font-display font-medium text-[48px] leading-[1.2] text-white tracking-[-0.96px] text-center w-full">
                {t.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
