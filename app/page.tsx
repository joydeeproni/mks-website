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
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <Certifications />
      <Story />
      <Featured />
      {/* Artisanal + Bag Categories + Sustainability share #39241d bg per Figma */}
      <Section className="bg-clay-800 text-white">
        <Container className="flex flex-col gap-[clamp(64px,10vw,160px)] v-pad-lg">
          <Artisanal />
          <BagCategories />
          <Sustainability />
        </Container>
      </Section>
      <PastWork />
      <Partner />
      <ValueProps />
      <Footer />
    </main>
  );
}
