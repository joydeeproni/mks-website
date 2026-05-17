// Curated Unsplash photos for the MKS landing page. Each entry has been
// chosen to stay within the brand's leather / workshop / soft-goods world.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Hero & workshop
  heroWorkshop: {
    src: u("photo-1559563458-527698bf5295", 2400),
    alt: "",
  },
  storyFloor: {
    src: u("photo-1622560480605-d83c853bc5c3", 2000),
    alt: "Inside the MKS workshop in Kolkata",
  },

  // Artisanal
  artisanHands: {
    src: u("photo-1452860606245-08befc0ff44b", 2000),
    alt: "Artisan hands stitching premium leather",
  },
  leatherMacro: {
    src: u("photo-1620966408969-b2a2bb1e9cd3", 1000),
    alt: "Macro leather texture",
  },

  // Bags — varied product photos
  bagTote: { src: u("photo-1584917865442-de89df76afd3", 1400), alt: "Leather tote" },
  bagBackpack: { src: u("photo-1553062407-98eeb64c6a62"), alt: "Leather backpack" },
  bagCrossbody: { src: u("photo-1591348122449-02525d70379b"), alt: "Crossbody bag" },
  bagHobo: { src: u("photo-1590874103328-eac38a683ce7"), alt: "Hobo bag" },
  bagSling: { src: u("photo-1606522754091-a3bbf9ad4cb3"), alt: "Sling bag" },
  bagWristlet: { src: u("photo-1548036328-c9fa89d128fa"), alt: "Wristlet" },
  bagWeekender: { src: u("photo-1547949003-9792a18a2601"), alt: "Weekender duffel" },
  bagBriefcase: { src: u("photo-1582539509458-3b1e1c3c2c95"), alt: "Briefcase" },

  // Small leather goods
  sgWallet: { src: u("photo-1627123424574-724758594e93"), alt: "Bifold wallet" },
  sgCardholder: { src: u("photo-1620975014077-2f06b16f3e93"), alt: "Cardholder" },
  sgJournal: { src: u("photo-1544816155-12df9643f363"), alt: "Leather journal" },
  sgKeyFob: { src: u("photo-1619266465172-02a857c3556d"), alt: "Key fob" },
  sgPouch: { src: u("photo-1591348122449-02525d70379b"), alt: "Zip pouch" },
  sgBeltStrap: { src: u("photo-1624222247344-550fb60583dc"), alt: "Belt strap" },

  // Soft / fabric accessories
  softScarf: { src: u("photo-1601925260368-ae2f83cf8b7f", 1400), alt: "Scarf" },
  softShawl: { src: u("photo-1611652022419-a9419f74343d"), alt: "Shawl" },
  softHat: { src: u("photo-1483985988355-763728e1935b"), alt: "Felt hat" },
  softGloves: { src: u("photo-1606107557195-0e29a4b5b4aa"), alt: "Gloves" },
  softTote: { src: u("photo-1582510003544-4d00b7f74220"), alt: "Canvas tote" },
  softBandana: { src: u("photo-1599643477877-530eb83abc8e"), alt: "Bandana" },

  // Customization / details
  customStitch: { src: u("photo-1473496169904-658ba7c44d8a"), alt: "Stitching detail" },
  customHardware: { src: u("photo-1620966408969-b2a2bb1e9cd3"), alt: "Hardware detail" },
  customEmboss: { src: u("photo-1606107557195-0e29a4b5b4aa"), alt: "Embossing detail" },

  // Sustainability
  sustainability: {
    src: u("photo-1604176354204-9268737828e4", 1600),
    alt: "Natural vegetable-tanned leather",
  },

  // Past work
  workServv: {
    src: u("photo-1590874103328-eac38a683ce7", 1600),
    alt: "Tote bag for SERRV International",
  },
  workMadeFreeImage: {
    src: u("photo-1553062407-98eeb64c6a62", 1800),
    alt: "Backpacks for MadeFree",
  },
  workFairAnita: {
    src: u("photo-1606107557195-0e29a4b5b4aa", 1400),
    alt: "Soft goods for Fair Anita",
  },
  workTenThousand: {
    src: u("photo-1601925260368-ae2f83cf8b7f", 1400),
    alt: "Scarves for Ten Thousand Villages",
  },
} as const;

export type ImageKey = keyof typeof images;
