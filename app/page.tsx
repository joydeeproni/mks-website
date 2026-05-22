import { Hero } from "@/components/sections/Hero";
import { Certifications } from "@/components/sections/Certifications";
import { Story } from "@/components/sections/Story";
import { Materials } from "@/components/sections/Materials";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { Artisanal } from "@/components/sections/Artisanal";
import { WorkshopTeaser } from "@/components/sections/WorkshopTeaser";
import { Partner } from "@/components/sections/Partner";
import { Sustainability } from "@/components/sections/Sustainability";
import { Footer } from "@/components/sections/Footer";

/**
 * MKS landing page — sections composed in Figma order (file YMcjZDwEk3...):
 *   1. Hero (1:43) — full-bleed image, centred H1 + CTAs
 *   2. Certifications (1:69) — Sedex / WFTO logos
 *   3. Story (1:75) — Family run, women led + workshop quote
 *   4. Materials (1:87) — Your vision, our work · leather carousel
 *   5. CategoryShowcase (1:100) — Bags / Belts / Scarves nav + image grid
 *   6. Artisanal (1:141) — Honoring the Artisanal Path
 *   7. WorkshopTeaser (1:162) — Our Processes and Practices
 *   8. Partner (1:188) — Ready to Partner? · 3-card CTA
 *   9. Sustainability (1:206) — 5-column values strip
 *  10. Footer (1:254)
 */
export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <Certifications />
      <Story />
      <Materials />
      <CategoryShowcase />
      <Artisanal />
      <WorkshopTeaser />
      <Partner />
      <Sustainability />
      <Footer />
    </main>
  );
}
