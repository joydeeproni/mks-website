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
  width,
}: {
  imgKey: Key;
  title: string;
  width: string;
}) {
  return (
    <div
      className={`relative h-[442px] ${width} rounded-[9px] overflow-hidden p-[24px] flex flex-col items-start justify-end`}
    >
      <Image
        src={images[imgKey].src}
        alt={images[imgKey].alt}
        fill
        sizes={width === "w-[576px]" ? "576px" : "405px"}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative flex flex-col gap-[29px] text-white w-full">
        <h3 className="font-display font-medium text-[40px] leading-[56px]">
          {title}
        </h3>
        <Link
          href="#"
          className="text-[16px] font-bold tracking-[-0.16px] leading-[30px]"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export function BagCategories() {
  return (
    <div
      className="flex flex-col gap-[32px] w-full"
      data-node-id="4156:6659"
    >
      <div className="flex gap-[32px] w-full">
        <Tile imgKey="bagTote" title="Tote Handbag" width="w-[576px]" />
        <Tile imgKey="bagBackpack" title="Backpacks" width="flex-1" />
        <Tile imgKey="bagCrossbody" title="Crossbody Bag" width="flex-1" />
      </div>
      <div className="flex gap-[32px] w-full">
        <Tile imgKey="bagHobo" title="Hobo Bag" width="flex-1" />
        <Tile imgKey="bagSling" title="Sling Bag" width="flex-1" />
        <Tile imgKey="bagWristlet" title="Wristlet Bag" width="flex-1" />
      </div>
    </div>
  );
}
