import { Hero } from "@/components/sections/Hero";
import { Certifications } from "@/components/sections/Certifications";
import { Capabilities } from "@/components/sections/Capabilities";
import { Materials } from "@/components/sections/Materials";
import { Customization } from "@/components/sections/Customization";
import { WorkshopTeaser } from "@/components/sections/WorkshopTeaser";
import { BrandsTeaser } from "@/components/sections/BrandsTeaser";
import { Partner } from "@/components/sections/Partner";
import { ValueProps } from "@/components/sections/ValueProps";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <Certifications />
      <Capabilities />

      {/* Materials section gets its own quiet block */}
      <Section id="materials" className="bg-cream">
        <Container className="v-pad-lg flex flex-col gap-[clamp(40px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
            <Heading variant="display-md" className="lg:col-span-7 text-clay-700">
              Material library
            </Heading>
            <p className="lg:col-span-5 text-body-lg text-clay-700/75 max-w-[460px]">
              Every project begins with the right hide or weave. Specify with
              confidence — we stock a curated, responsibly sourced library.
            </p>
          </div>
          <Materials />
        </Container>
      </Section>

      <Customization />
      <WorkshopTeaser />
      <BrandsTeaser />
      <Partner />
      <ValueProps />
      <Footer />
    </main>
  );
}
