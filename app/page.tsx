import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Certifications } from "@/components/sections/Certifications";
import { Story } from "@/components/sections/Story";
import { Materials } from "@/components/sections/Materials";
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
    <main className="flex-1">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Certifications />
      <Story />
      <Materials />
      <Featured />
      <Artisanal />
      <BagCategories />
      <Sustainability />
      <PastWork />
      <Partner />
      <ValueProps />
      <Footer />
    </main>
  );
}
