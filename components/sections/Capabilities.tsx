import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import {
  CategoryShowcase,
  type CategoryItem,
} from "@/components/sections/CategoryShowcase";

const BAGS: CategoryItem[] = [
  { imgKey: "bagTote", name: "Tote Handbag", material: "Full grain · 2.0mm" },
  { imgKey: "bagBackpack", name: "Backpack", material: "Smooth leather" },
  { imgKey: "bagCrossbody", name: "Crossbody", material: "Shanti leather" },
  { imgKey: "bagHobo", name: "Hobo", material: "Vegetable tanned" },
  { imgKey: "bagWeekender", name: "Weekender", material: "Full grain · 2.2mm" },
  { imgKey: "bagBriefcase", name: "Briefcase", material: "Smooth · structured" },
];

const SMALL_LEATHER: CategoryItem[] = [
  { imgKey: "sgWallet", name: "Bifold Wallet", material: "Full grain" },
  { imgKey: "sgCardholder", name: "Cardholder", material: "Shanti · slim" },
  { imgKey: "sgJournal", name: "Journal cover", material: "Veg tan" },
  { imgKey: "sgKeyFob", name: "Key fob", material: "Smooth" },
  { imgKey: "sgPouch", name: "Zip Pouch", material: "Pebble grain" },
  { imgKey: "sgBeltStrap", name: "Belt strap", material: "Full grain" },
];

const SOFT: CategoryItem[] = [
  { imgKey: "softScarf", name: "Modal Scarf", material: "Block-printed" },
  { imgKey: "softShawl", name: "Wool Shawl", material: "Hand-woven" },
  { imgKey: "softTote", name: "Canvas Tote", material: "Heavy 12oz" },
  { imgKey: "softHat", name: "Felt Hat", material: "Pressed wool" },
  { imgKey: "softBandana", name: "Bandana", material: "Cotton voile" },
  { imgKey: "softGloves", name: "Gloves", material: "Wool-lined leather" },
];

export function Capabilities() {
  return (
    <Section id="products" className="bg-ivory">
      <Container className="flex flex-col gap-[clamp(48px,6vw,96px)] v-pad-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
          <Heading variant="display-md" className="lg:col-span-8 text-clay-700">
            What we make
          </Heading>
          <p className="lg:col-span-4 text-body-lg text-clay-700/75 max-w-[460px]">
            Four product families, dozens of variants, fully customisable in
            your choice of material, hardware, lining and finish.
          </p>
        </div>

        <div className="flex flex-col gap-[clamp(20px,2.5vw,40px)]">
          <CategoryShowcase
            eyebrow="01 · Family"
            title="Bags"
            intro="From everyday totes to structured briefcases. Choose the silhouette and we’ll engineer the hardware, lining and stitching to match your brand."
            materials={["Full grain", "Smooth", "Shanti", "Veg tan", "Nubuck", "Canvas"]}
            items={BAGS}
            bg="cream"
          />
          <CategoryShowcase
            eyebrow="02 · Family"
            title="Small Leather Goods"
            intro="Wallets, cardholders, key fobs and journal covers — the pocket-sized objects that carry the most of your brand."
            materials={["Full grain", "Smooth", "Shanti", "Veg tan", "Pebble grain"]}
            items={SMALL_LEATHER}
            bg="sand"
          />
          <CategoryShowcase
            eyebrow="03 · Family"
            title="Soft Accessories"
            intro="Scarves, shawls, bandanas, gloves and canvas totes. Block-printed, embroidered or hand-woven by partner workshops in West Bengal."
            materials={["Cotton voile", "Modal", "Wool", "Linen", "GRS canvas"]}
            items={SOFT}
            bg="bone"
          />
        </div>
      </Container>
    </Section>
  );
}
