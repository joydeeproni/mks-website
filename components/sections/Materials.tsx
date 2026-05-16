import Image from "next/image";
import { images } from "@/lib/images";

type MatKey =
  | "matFullGrain"
  | "matSmooth"
  | "matShanti"
  | "matNubuck"
  | "matCanvas";

const MATERIALS: { key: MatKey; name: string }[] = [
  { key: "matFullGrain", name: "Full Grain Leather" },
  { key: "matSmooth", name: "Smooth Leather" },
  { key: "matShanti", name: "Shanti Leather" },
  { key: "matNubuck", name: "Nubuck" },
  { key: "matCanvas", name: "Recycled Canvas" },
];

export function Materials() {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[clamp(16px,2.5vw,32px)] w-full">
      {MATERIALS.map((m) => (
        <li key={m.name} className="flex flex-col gap-[clamp(10px,1vw,15px)]">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={images[m.key].src}
              alt={images[m.key].alt}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-[clamp(16px,1.6vw,22px)] tracking-[-0.22px] leading-[1.25] text-[#393212]">
            {m.name}
          </h3>
        </li>
      ))}
    </ul>
  );
}
