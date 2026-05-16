import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { images } from "@/lib/images";

export function Artisanal() {
  return (
    <div className="flex flex-col gap-[clamp(56px,10vw,160px)] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-end gap-6 max-w-[1120px]">
        <Heading variant="display-lg" className="lg:col-span-7 font-extralight">
          Honoring the
          <br />
          <span className="italic">Artisanal Path</span>
        </Heading>
        <p className="lg:col-span-5 lg:pb-[16px] text-[clamp(16px,1.4vw,18px)] leading-[1.55] max-w-[400px]">
          Our process is a slow dialogue between master and material. We do not
          manufacture; we cultivate objects that carry the soul of their
          makers.
        </p>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-[clamp(16px,2.5vw,32px)] w-full">
        <div className="lg:col-span-8 relative aspect-[16/10] lg:h-[533px] lg:aspect-auto overflow-hidden bg-bone rounded-[6px]">
          <Image
            src={images.artisanHands.src}
            alt={images.artisanHands.alt}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-4 flex flex-col gap-3 lg:px-[48px] lg:py-[42px]">
          <div className="relative aspect-[4/5] lg:h-[400px] lg:aspect-auto overflow-hidden bg-sand rounded-[6px]">
            <Image
              src={images.leatherMacro.src}
              alt={images.leatherMacro.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="micro-label text-stone text-right">
            Reference: Heritage Tooling v.2
          </p>
        </div>

        {/* Overlapping title card (desktop only) */}
        <div
          className="hidden lg:block lg:col-span-7 lg:col-start-5 relative z-10"
          style={{ marginTop: "-120px" }}
        >
          <CardContent />
        </div>

        {/* Stacked card for mobile/tablet */}
        <div className="block lg:hidden">
          <CardContent />
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="bg-white p-[clamp(24px,3vw,48px)] flex flex-col gap-[24px] w-full max-w-[460px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
      <h3 className="font-display font-normal text-h3 text-ink">
        The Art of the Hand
      </h3>
      <p className="text-body leading-[1.6] text-graphite">
        Each piece begins with selection—only the finest hides from heritage
        tanneries. Our saddle-stitching technique, a method nearly lost to
        industrialization, ensures a seam that never unravels.
      </p>
      <div className="flex flex-col gap-[12px] pt-[8px] w-full">
        {[
          ["01", "Manual Pattern Cutting"],
          ["02", "Edge Hand-Burnishing"],
        ].map(([num, label]) => (
          <div key={num} className="flex gap-[16px] items-center w-full">
            <span className="micro-step text-stone">{num}</span>
            <span className="block w-[32px] h-px bg-pebble" />
            <span className="text-[14px] leading-[20px] text-ink">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
