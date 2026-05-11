// Curated Unsplash photo references for the MKS landing page.
// Replace with brand-owned photography when available — alts and aspect
// ratios are tuned per slot.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Hero & story
  heroWorkshop: {
    src: u("photo-1559563458-527698bf5295", 2400),
    alt: "",
  },
  storyFloor: {
    src: u("photo-1590736969955-71cc94901144", 2000),
    alt: "Inside the MKS workshop in Kolkata",
  },

  // Materials grid (5 leather swatches)
  matFullGrain: { src: u("photo-1568252542512-9fe8fe9c87bb"), alt: "Full grain leather" },
  matSmooth: { src: u("photo-1542838132-92c53300491e"), alt: "Smooth leather" },
  matShanti: { src: u("photo-1493106641515-6b5631de4bb9"), alt: "Shanti leather" },
  matNubuck: { src: u("photo-1604176354204-9268737828e4"), alt: "Nubuck" },
  matCanvas: { src: u("photo-1581417478175-a9ef18f210c2"), alt: "Canvas" },

  // Featured grid — categories MKS produces
  featuredBags: { src: u("photo-1591561954557-26941169b49e", 1800), alt: "Bags" },
  featuredAccessories: { src: u("photo-1620910155396-5c5e1e72f86d", 1800), alt: "Accessories" },
  featuredDresses: { src: u("photo-1487700160041-babef9c3cb55", 1200), alt: "Dresses" },
  featuredScarves: { src: u("photo-1611652022419-a9419f74343d", 1200), alt: "Scarves" },
  featuredShanti: { src: u("photo-1604176354204-9268737828e4", 1200), alt: "Shanti leather" },

  // Artisanal
  artisanHands: { src: u("photo-1539109136881-3be0616acf4b", 2000), alt: "Artisan hands stitching" },
  leatherMacro: { src: u("photo-1604176354204-9268737828e4", 1000), alt: "Macro leather texture" },

  // Bag categories (text-only cards in Figma, but we'll fill with photos)
  bagTote: { src: u("photo-1591561954557-26941169b49e", 1400), alt: "Tote handbag" },
  bagBackpack: { src: u("photo-1622560480605-d83c853bc5c3"), alt: "Backpack" },
  bagCrossbody: { src: u("photo-1559563458-527698bf5295"), alt: "Crossbody bag" },
  bagHobo: { src: u("photo-1601370690183-1c7796ecec61"), alt: "Hobo bag" },
  bagSling: { src: u("photo-1606522754091-a3bbf9ad4cb3"), alt: "Sling bag" },
  bagWristlet: { src: u("photo-1614179924047-e1ab49a0a0cf"), alt: "Wristlet bag" },

  // Sustainability
  sustainability: { src: u("photo-1542219550-37153d387c27", 1600), alt: "Natural materials" },

  // Past work
  workServv: { src: u("photo-1591561954557-26941169b49e", 1600), alt: "Tote bag for SERRV" },
  workMadeFreeImage: { src: u("photo-1581605405669-fcdf81165afa", 1800), alt: "Backpacks for MadeFree" },

  // Cert squares
  certSedex1: { src: u("photo-1521791136064-7986c2920216", 400), alt: "Sedex certification" },
  certSedex2: { src: u("photo-1556761175-5973dc0f32e7", 400), alt: "Sedex audit" },
} as const;

export type ImageKey = keyof typeof images;
