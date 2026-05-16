import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

type Key =
  | "bagTote"
  | "bagBackpack"
  | "bagCrossbody"
  | "bagHobo"
  | "bagSling"
  | "bagWristlet";

function Tile({
  imgKey,
  title,
  className = "",
}: {
  imgKey: Key;
  title: string;
  className?: string;
}) {
  return (
    <article
      className={`relative aspect-[4/5] sm:aspect-[5/6] md:aspect-auto md:h-[442px] rounded-[9px] overflow-hidden p-[24px] flex flex-col items-start justify-end ${className}`}
    >
      <Image
        src={images[imgKey].src}
        alt={images[imgKey].alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative flex flex-col gap-[16px] text-white w-full">
        <h3 className="font-display font-medium text-h2 leading-[1.2]">
          {title}
        </h3>
        <Link
          href="#"
          className="link-underline text-[15px] font-bold tracking-[-0.16px] leading-[24px] self-start"
        >
          Learn More →
        </Link>
      </div>
    </article>
  );
}

export function BagCategories() {
  return (
    <div className="flex flex-col gap-[clamp(16px,2.5vw,32px)] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr] gap-[clamp(16px,2.5vw,32px)] w-full">
        <Tile imgKey="bagTote" title="Tote Handbag" />
        <Tile imgKey="bagBackpack" title="Backpacks" />
        <Tile
          imgKey="bagCrossbody"
          title="Crossbody Bag"
          className="md:col-span-2 lg:col-span-1"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2.5vw,32px)] w-full">
        <Tile imgKey="bagHobo" title="Hobo Bag" />
        <Tile imgKey="bagSling" title="Sling Bag" />
        <Tile imgKey="bagWristlet" title="Wristlet Bag" />
      </div>
    </div>
  );
}
