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
  { key: "matNubuck", name: "Full Grain Leather" },
  { key: "matCanvas", name: "Full Grain Leather" },
];

export function Materials() {
  return (
    <div
      className="flex gap-[32px] items-start"
      data-node-id="4156:6592"
    >
      {MATERIALS.map((m, i) => (
        <div key={i} className="flex flex-col gap-[15px] w-[304px]">
          <div className="relative h-[304px] w-full overflow-hidden">
            <Image
              src={images[m.key].src}
              alt={images[m.key].alt}
              fill
              sizes="304px"
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-[22px] tracking-[-0.22px] leading-[27px] text-[#393212]">
            {m.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
