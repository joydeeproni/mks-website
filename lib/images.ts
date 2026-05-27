// Image library for the MKS landing page.
// Workshop / process photos are real shots from the MKS workshop in Kolkata,
// served from /public/photos/. Finished-product imagery (bags, small leather
// goods, soft accessories) is still Unsplash placeholder until real product
// photography is available.

const local = (filename: string) => `/photos/${filename}`;
const stock = (filename: string) => `/photos/stock/${filename}`;
const mat = (filename: string) => `/photos/materials/${filename}`;

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // ===== Workshop / atmospheric =====
  heroWorkshop: {
    src: local("DSCF3637.jpg"),
    alt: "MKS workshop sewing floor, Kolkata",
  },
  storyFloor: {
    src: local("DSCF3653.jpg"),
    alt: "Inside the MKS workshop in Kolkata",
  },
  mksFounder: {
    src: local("mks-founder.jpg"),
    alt: "Mithu Dam, MKS founder, at an early craft fair stall — textiles, scarves and small leather goods on display.",
  },
  artisanHands: {
    src: local("DSCF3691.jpg"),
    alt: "Artisan hand-stitching premium leather",
  },
  leatherMacro: {
    src: local("DSCF3589.jpg"),
    alt: "Folded full-grain leather hides",
  },

  // ===== Process tiles — Our Processes and Practices =====
  processLeatherSelection: {
    src: local("DSCF3597.jpg"),
    alt: "Selecting full-grain leather hides",
  },
  processEdgeFinishing: {
    src: local("DSCF3711.jpg"),
    alt: "Hand-finishing the edge of a leather piece",
  },
  processHandStitching: {
    src: local("DSCF3686.jpg"),
    alt: "Saddle-stitching a leather seam by hand",
  },
  processWorkshopWall: {
    src: local("DSCF3753.jpg"),
    alt: "Workshop interior — quality check station",
  },
  processTheBench: {
    src: local("DSCF3470.jpg"),
    alt: "Pattern cutting at the workbench",
  },
  processArtisanFocus: {
    src: local("DSCF3553.jpg"),
    alt: "Artisan finishing dyed leather pieces",
  },

  // ===== Customization / material details (Materials carousel) =====
  customStitch: {
    src: local("DSCF3697.jpg"),
    alt: "Stitching detail on a leather panel",
  },
  customHardware: {
    src: local("DSCF3613.jpg"),
    alt: "Smooth tan leather hide",
  },
  customEmboss: {
    src: local("DSCF3705.jpg"),
    alt: "Embossed hide detail",
  },

  // ===== Sustainability =====
  sustainability: {
    src: local("DSCF3593.jpg"),
    alt: "Vegetable-tanned leather, natural finish",
  },

  // ===== Additional workshop / team / product shots =====
  artisanLeatherWork: {
    src: local("DSCF3500.jpg"),
    alt: "Artisan hand-finishing a leather portfolio",
  },
  artisanInspecting: {
    src: local("DSCF3520.jpg"),
    alt: "Woman artisan inspecting a leather bag",
  },
  artisanPortfolio: {
    src: local("DSCF3540.jpg"),
    alt: "Woman artisan working on leather portfolio",
  },
  colorfulBags: {
    src: local("DSCF3560.jpg"),
    alt: "Colorful printed bags being packed for export",
  },
  leatherMaterial: {
    src: local("DSCF3580.jpg"),
    alt: "Suede and full-grain leather hides",
  },
  kanthaTextiles: {
    src: local("DSCF3600.jpg"),
    alt: "Stack of hand-stitched kantha textiles",
  },
  leatherSatchels: {
    src: local("DSCF3620.jpg"),
    alt: "Stacked leather satchels with patterned lining",
  },
  artisanBench: {
    src: local("DSCF3640.jpg"),
    alt: "Artisan preparing leather pieces at workstation",
  },
  workshopAtmosphere: {
    src: local("DSCF3660.jpg"),
    alt: "Artisan at the workshop bench",
  },
  sewingMachine: {
    src: local("DSCF3700.jpg"),
    alt: "Artisan at the sewing machine",
  },
  leatherCutting: {
    src: local("DSCF3720.jpg"),
    alt: "Precision leather cutting by hand",
  },
  patternCutting: {
    src: local("DSCF3740.jpg"),
    alt: "Pattern cutting on the workbench",
  },
  workshopEntry: {
    src: local("DSCF3459.jpg"),
    alt: "MKS workshop entrance",
  },
  artisanDetail: {
    src: local("DSCF3480.jpg"),
    alt: "Artisan working on a leather piece",
  },
  productDetail: {
    src: local("DSCF3610.jpg"),
    alt: "Leather product close-up detail",
  },
  finishedBags: {
    src: local("DSCF3630.jpg"),
    alt: "Finished leather bags ready for quality check",
  },
  artisanConcentration: {
    src: local("DSCF3670.jpg"),
    alt: "Artisan in deep concentration at the bench",
  },
  machineStitching: {
    src: local("DSCF3730.jpg"),
    alt: "Machine stitching a leather panel",
  },
  workshopOverview: {
    src: local("DSCF3762.jpg"),
    alt: "The MKS workshop floor",
  },
  teamPhoto: {
    src: local("IMG_6839.jpg"),
    alt: "The MKS team at the workshop",
  },

  // ===== Material textures =====
  matFullGrain: { src: mat("full-grain.jpg"), alt: "Full grain leather texture" },
  matSmooth: { src: mat("smooth.jpg"), alt: "Smooth leather texture" },
  matVegTanned: { src: mat("veg-tanned.jpg"), alt: "Vegetable tanned leather texture" },
  matEmbossed: { src: mat("embossed.jpg"), alt: "Smooth tan leather" },
  matKantha: { src: mat("kantha.jpg"), alt: "Knitted textile texture" },
  matCanvas: { src: mat("canvas.jpg"), alt: "Canvas weave texture" },
  matCotton: { src: mat("cotton.jpg"), alt: "Cotton corduroy texture" },
  matShearling: { src: mat("shearling.jpg"), alt: "Shearling wool texture" },

  // ===== Additional stock product shots (used on /products grid) =====
  stockMessenger: { src: stock("085367CK10_front_wm_1.webp"), alt: "Leather messenger bag" },
  stockLaptop: { src: stock("078391CKT3_front_wm_1.webp"), alt: "Leather laptop bag" },
  stockBelt1: { src: stock("086704CK89_front_wm_1.webp"), alt: "Leather belt bag" },
  stockBelt2: { src: stock("085741CK89_front_wm_1.webp"), alt: "Leather belt bag" },
  stockBelt3: { src: stock("087968CC55_front_wm_1.webp"), alt: "Leather accessory" },
  stockShoulder1: { src: stock("086958CK18_front_wm_1.webp"), alt: "Leather shoulder bag" },
  stockShoulder2: { src: stock("086958CKT3_front_wm_1.webp"), alt: "Leather shoulder bag" },
  stockClutch1: { src: stock("084948CP0G_front_wm_1.webp"), alt: "Ring handle clutch" },
  stockClutch2: { src: stock("085760CKAE_front_wm_1.webp"), alt: "Leather clutch" },
  stockClutch3: { src: stock("085871CKAE_front_wm_1.webp"), alt: "Leather clutch" },
  stockPouch: { src: stock("087987CKH0_front_wm_1.webp"), alt: "Leather pouch" },
  stockMini: { src: stock("085408CKAB_front_wm_1.webp"), alt: "Mini leather bag" },
  stockTote2: { src: stock("084929CK6T_front_wm_1.webp"), alt: "Leather tote" },
  stockBrief2: { src: stock("088004CK37_front_wm_1.webp"), alt: "Leather briefcase" },
  stockCross2: { src: stock("086342CK18_front_wm_1.webp"), alt: "Leather crossbody" },
  stockSatchel: { src: stock("086415CKV8_front_wm_1.webp"), alt: "Leather satchel" },
  stockBag1: { src: stock("086915CK55_front_wm_1.webp"), alt: "Leather bag" },
  stockBag2: { src: stock("087032CPAB_front_wm_1.webp"), alt: "Leather bag" },
  stockBag3: { src: stock("087076CKAF_front_wm_1.webp"), alt: "Leather bag" },
  stockBag4: { src: stock("086934CKAD_front_wm_1.webp"), alt: "Leather bag" },
  stockBag5: { src: stock("088004CK89_front_wm_1.webp"), alt: "Leather bag" },

  // ===== Finished products — stock photography =====
  // Bags
  bagTote: { src: stock("063022CKAB_front_wm_1.webp"), alt: "Canvas tote with leather straps" },
  bagBackpack: { src: stock("083582CKAA_worn_1.webp"), alt: "Canvas and leather backpack" },
  bagCrossbody: { src: stock("070510CK18_worn_1.webp"), alt: "Leather crossbody bag" },
  bagHobo: { src: stock("085336CKAT_front_wm_1.webp"), alt: "Leather hobo bag" },
  bagSling: { src: stock("084847CK18_front_wm_1.webp"), alt: "Leather sling bag" },
  bagWristlet: { src: stock("084948CK89_front_wm_1.webp"), alt: "Ring handle evening bag" },
  bagWeekender: { src: stock("076567CKV8_front_wm_1.jpeg"), alt: "Leather weekender bag" },
  bagBriefcase: { src: stock("074409CK37_front_wm_1.webp"), alt: "Leather briefcase" },

  // Small leather goods
  sgWallet: { src: stock("084109CKV8_front_wm_1.webp"), alt: "Leather satchel" },
  sgCardholder: { src: stock("085367CKD2_front_wm_1.jpeg"), alt: "Leather crossbody with buckle" },
  sgJournal: { src: stock("086342CK10_front_wm_1.webp"), alt: "Leather portfolio" },
  sgKeyFob: { src: stock("085408CKAN_front_wm_1.webp"), alt: "Small leather crossbody" },
  sgPouch: { src: stock("084658CK10_front_wm_1.webp"), alt: "Leather crossbody with clasp" },
  sgBeltStrap: { src: stock("086339CK37_front_wm_1.webp"), alt: "Leather belt strap bag" },

  // Soft / fabric accessories
  softScarf: { src: stock("084623CKAF_front_wm_1.webp"), alt: "Canvas shoulder bag" },
  softShawl: { src: stock("086288CKAA_front_wm_1.webp"), alt: "Leather backpack" },
  softHat: { src: stock("087145CKAA_front_wm_1.webp"), alt: "Leather bag" },
  softGloves: { src: stock("086934CKAC_front_wm_1.webp"), alt: "Leather bag" },
  softTote: { src: stock("084929CK28_front_wm_1.webp"), alt: "Leather shoulder tote" },
  softBandana: { src: stock("085961CKAB_front_wm_1.webp"), alt: "Leather bag" },

  // Past work (used by /brands)
  workServv: {
    src: stock("086915CK18_front_wm_1.webp"),
    alt: "Leather bag for SERRV International",
  },
  workMadeFreeImage: {
    src: stock("087026CK37_front_wm_1.webp"),
    alt: "Leather goods for MadeFree",
  },
  workFairAnita: {
    src: stock("087032CKAE_front_wm_1.webp"),
    alt: "Leather goods for Fair Anita",
  },
  workTenThousand: {
    src: stock("088914CK37_front_wm_1.webp"),
    alt: "Leather goods for Ten Thousand Villages",
  },
} as const;

export type ImageKey = keyof typeof images;
