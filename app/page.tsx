import { Hero } from "@/components/sections/Hero";
import { Certifications } from "@/components/sections/Certifications";
import { Story } from "@/components/sections/Story";
import { Featured } from "@/components/sections/Featured";
import { Artisanal } from "@/components/sections/Artisanal";
import { BagCategories } from "@/components/sections/BagCategories";
import { Sustainability } from "@/components/sections/Sustainability";
import { PastWork } from "@/components/sections/PastWork";
import { Partner } from "@/components/sections/Partner";
import { ValueProps } from "@/components/sections/ValueProps";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex-1 w-[1440px] mx-auto">
      <Hero />
      <Certifications />
      <Story />
      <Featured />
      {/* Artisanal + BagCategories + Sustainability share #39241d bg per Figma */}
      <section
        className="w-[1440px] bg-clay-800 flex flex-col gap-[160px] items-start px-[80px] py-[120px]"
        data-node-id="4156:6621"
      >
        <Artisanal />
        <BagCategories />
        <Sustainability />
      </section>
      <PastWork />
      <Partner />
      <ValueProps />
      <Footer />
    </main>
  );
}
