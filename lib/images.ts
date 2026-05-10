// Curated Unsplash photo references for the MKS landing page.
// Replace with brand-owned photography when available — alts and aspect
// ratios are tuned for the current set.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroWorkshop: {
    src: u("photo-1559563458-527698bf5295", 2400),
    alt: "Hands shaping a leather panel on a workshop bench",
  },
  storyFloor: {
    src: u("photo-1590736969955-71cc94901144", 2000),
    alt: "Inside the MKS workshop in Kolkata, with rolls of leather and stitched panels",
  },
  // Material grid (5 leather swatches)
  matFullGrain: {
    src: u("photo-1568252542512-9fe8fe9c87bb"),
    alt: "Full grain leather hide swatch",
  },
  matSmooth: {
    src: u("photo-1542838132-92c53300491e"),
    alt: "Smooth leather swatch",
  },
  matShanti: {
    src: u("photo-1493106641515-6b5631de4bb9"),
    alt: "Shanti vegetable-tanned leather",
  },
  matNubuck: {
    src: u("photo-1604176354204-9268737828e4"),
    alt: "Nubuck leather swatch",
  },
  matCanvas: {
    src: u("photo-1581417478175-a9ef18f210c2"),
    alt: "Heavyweight canvas swatch",
  },
  // Featured (Bags + Backpacks tiles)
  featuredBags: {
    src: u("photo-1591561954557-26941169b49e", 1800),
    alt: "Tan leather tote bag composition",
  },
  featuredBackpacks: {
    src: u("photo-1581605405669-fcdf81165afa", 1800),
    alt: "Burgundy leather backpack on a stool",
  },
  featuredJournal: {
    src: u("photo-1544816155-12df9643f363", 1200),
    alt: "Leather-bound journal beside a candle",
  },
  featuredWallet: {
    src: u("photo-1620975014077-2f06b16f3e93", 1200),
    alt: "Bifold wallet on a wooden surface",
  },
  featuredAccessories: {
    src: u("photo-1620910155396-5c5e1e72f86d", 1200),
    alt: "Stack of leather accessories",
  },
  // Artisanal section
  artisanHands: {
    src: u("photo-1539109136881-3be0616acf4b", 2000),
    alt: "Artisan hand-stitching premium leather",
  },
  leatherMacro: {
    src: u("photo-1604176354204-9268737828e4", 1000),
    alt: "Macro view of leather grain",
  },
  // Bag categories
  bagTote: {
    src: u("photo-1591561954557-26941169b49e"),
    alt: "Tote handbag",
  },
  bagBackpack: {
    src: u("photo-1622560480605-d83c853bc5c3"),
    alt: "Leather backpack",
  },
  bagCrossbody: {
    src: u("photo-1559563458-527698bf5295"),
    alt: "Crossbody bag",
  },
  bagHobo: {
    src: u("photo-1601370690183-1c7796ecec61"),
    alt: "Hobo bag",
  },
  bagSling: {
    src: u("photo-1606522754091-a3bbf9ad4cb3"),
    alt: "Sling bag",
  },
  bagWristlet: {
    src: u("photo-1614179924047-e1ab49a0a0cf"),
    alt: "Wristlet bag",
  },
  // Sustainability
  sustainability: {
    src: u("photo-1542219550-37153d387c27", 1600),
    alt: "Natural materials and vegetable-tanned leather",
  },
  // Past work
  workServv: {
    src: u("photo-1591561954557-26941169b49e", 1600),
    alt: "Tote bag built for SERRV International",
  },
  workMadeFree: {
    src: u("photo-1581605405669-fcdf81165afa", 1800),
    alt: "Backpacks built for MadeFree",
  },
} as const;

export type ImageKey = keyof typeof images;
