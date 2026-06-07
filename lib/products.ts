import type { ImageKey } from "@/lib/images";

export type Material =
  | "all"
  | "full-grain"
  | "smooth"
  | "veg-tanned"
  | "shanti"
  | "embossed"
  | "kantha";

export type CategoryKey = "bags" | "accessories" | "scarves" | "lifestyle";

export type ProductItem = {
  name: string;
  img: ImageKey;
  materials: Material[];
};

export type Category = {
  key: CategoryKey;
  label: string;
  /** Used as the megamenu card image and the carousel header thumbnail */
  heroImg: ImageKey;
  items: ProductItem[];
};

export const PRODUCT_TAXONOMY: Category[] = [
  {
    key: "bags",
    label: "Bags",
    heroImg: "bagTote",
    items: [
      { name: "Tote Bags", img: "bagTote", materials: ["full-grain", "smooth"] },
      { name: "Crossbody Bags", img: "bagCrossbody", materials: ["smooth", "full-grain"] },
      { name: "Sling Bags", img: "bagSling", materials: ["smooth", "veg-tanned"] },
      { name: "Fashion Bags", img: "stockClutch1", materials: ["smooth", "embossed"] },
      { name: "Backpacks", img: "bagBackpack", materials: ["full-grain", "veg-tanned"] },
      { name: "Messenger Bags", img: "stockMessenger", materials: ["full-grain", "veg-tanned"] },
      { name: "Laptop Bags", img: "stockLaptop", materials: ["smooth", "veg-tanned"] },
      { name: "Travel Bags", img: "bagWeekender", materials: ["full-grain", "veg-tanned"] },
    ],
  },
  {
    key: "accessories",
    label: "Accessories",
    heroImg: "sgWallet",
    items: [
      { name: "Men's Wallets", img: "sgWallet", materials: ["full-grain", "smooth"] },
      { name: "Women's Wallets", img: "sgPouch", materials: ["smooth", "embossed"] },
      { name: "Card Holders", img: "sgCardholder", materials: ["smooth", "veg-tanned"] },
      { name: "Coin Pouches", img: "stockPouch", materials: ["smooth"] },
      { name: "Belts", img: "sgBeltStrap", materials: ["full-grain", "veg-tanned"] },
      { name: "Keychains", img: "sgKeyFob", materials: ["veg-tanned"] },
      { name: "Travel Organizers", img: "stockBag2", materials: ["smooth", "veg-tanned"] },
      { name: "Toiletry Bags", img: "stockBag1", materials: ["smooth"] },
      { name: "Wristbands", img: "stockBelt3", materials: ["veg-tanned", "embossed"] },
    ],
  },
  {
    key: "scarves",
    label: "Scarves, Stoles & Shawls",
    heroImg: "softScarf",
    items: [
      { name: "Pure Silk", img: "softScarf", materials: [] },
      { name: "Pure Cotton", img: "softScarf", materials: [] },
      { name: "Linen", img: "softScarf", materials: [] },
      { name: "Modal", img: "softShawl", materials: [] },
      { name: "Bamboo", img: "softScarf", materials: [] },
      { name: "Wool", img: "softShawl", materials: [] },
      { name: "Alternative Fabrics", img: "softShawl", materials: [] },
      { name: "Screen Printed", img: "softBandana", materials: [] },
      { name: "Hand-painted", img: "softShawl", materials: [] },
      { name: "Block Design", img: "softBandana", materials: [] },
      { name: "Kantha Design", img: "kanthaTextiles", materials: ["kantha"] },
    ],
  },
  {
    key: "lifestyle",
    label: "Lifestyle & Home",
    heroImg: "sgJournal",
    items: [
      { name: "Journal Cover", img: "sgJournal", materials: ["full-grain", "veg-tanned"] },
      { name: "Mats", img: "kanthaTextiles", materials: ["kantha"] },
      { name: "Coasters", img: "stockBelt3", materials: ["veg-tanned"] },
      { name: "Trays", img: "leatherSatchels", materials: ["veg-tanned"] },
      { name: "Kitchen Utensils", img: "kanthaTextiles", materials: [] },
      { name: "Home Textile", img: "kanthaTextiles", materials: ["kantha"] },
    ],
  },
];

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const VALID_CATEGORY_KEYS: CategoryKey[] = PRODUCT_TAXONOMY.map(
  (c) => c.key,
);
