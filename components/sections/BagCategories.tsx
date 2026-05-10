import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

type Cat = {
  key:
    | "bagTote"
    | "bagBackpack"
    | "bagCrossbody"
    | "bagHobo"
    | "bagSling"
    | "bagWristlet";
  title: string;
  span: "wide" | "regular";
};

const ROW_1: Cat[] = [
  { key: "bagTote", title: "Tote Handbag", span: "wide" },
  { key: "bagBackpack", title: "Backpacks", span: "regular" },
  { key: "bagCrossbody", title: "Crossbody Bag", span: "regular" },
];
const ROW_2: Cat[] = [
  { key: "bagHobo", title: "Hobo Bag", span: "regular" },
  { key: "bagSling", title: "Sling Bag", span: "regular" },
  { key: "bagWristlet", title: "Wristlet Bag", span: "regular" },
];

function Tile({ cat, className = "" }: { cat: Cat; className?: string }) {
  return (
    <Link
      href="#"
      className={`group relative block overflow-hidden rounded-md aspect-[4/5] bg-bone ${className}`}
    >
      <Image
        src={images[cat.key].src}
        alt={images[cat.key].alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-clay-900/65 via-clay-900/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <h3 className="font-display text-2xl md:text-3xl text-ivory">
          {cat.title}
        </h3>
        <span className="mt-3 inline-block text-sm font-semibold tracking-tight text-ivory link-underline">
          Learn more →
        </span>
      </div>
    </Link>
  );
}

export function BagCategories() {
  return (
    <section className="bg-ivory pb-32 md:pb-40">
      <Container>
        <div className="grid gap-6 md:grid-cols-12 md:grid-rows-[auto_auto] md:gap-8">
          {/* Row 1: 6 / 3 / 3 */}
          <div className="md:col-span-6">
            <Tile cat={ROW_1[0]} />
          </div>
          <div className="md:col-span-3">
            <Tile cat={ROW_1[1]} />
          </div>
          <div className="md:col-span-3">
            <Tile cat={ROW_1[2]} />
          </div>
          {/* Row 2: 4 / 4 / 4 */}
          <div className="md:col-span-4">
            <Tile cat={ROW_2[0]} />
          </div>
          <div className="md:col-span-4">
            <Tile cat={ROW_2[1]} />
          </div>
          <div className="md:col-span-4">
            <Tile cat={ROW_2[2]} />
          </div>
        </div>
      </Container>
    </section>
  );
}
