import { type ImageKey } from "@/lib/images";

export type CategoryItem = {
  /** Optional image key — currently unused as variants render as CSS swatch tiles for visual consistency. */
  imgKey?: ImageKey;
  name: string;
  material?: string;
  /** Override tile leather tone. Defaults rotate through a small palette. */
  tone?: number;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  materials: string[];
  items: CategoryItem[];
  bg?: "ivory" | "cream" | "bone" | "sand";
};

const bgClass = {
  ivory: "bg-ivory",
  cream: "bg-cream",
  bone: "bg-bone",
  sand: "bg-sand",
} as const;

/**
 * Rotating leather-tone palette used for variant tiles. Each entry is a
 * trio (highlight / base / shadow) used to build a soft radial gradient.
 */
const PALETTE: { hi: string; base: string; sh: string }[] = [
  { hi: "#a3613d", base: "#7a3e22", sh: "#3a1a0a" }, // tan
  { hi: "#c58e69", base: "#a36c46", sh: "#5a3a25" }, // caramel
  { hi: "#8a3b2a", base: "#5a2418", sh: "#1f0c07" }, // burgundy
  { hi: "#b6957a", base: "#9b7a5f", sh: "#604a37" }, // nubuck
  { hi: "#d6cba8", base: "#b9ad8a", sh: "#7c714f" }, // canvas
  { hi: "#5d605b", base: "#3f423f", sh: "#1c1d1c" }, // ink
];

function VariantTile({
  name,
  material,
  toneIdx,
}: {
  name: string;
  material?: string;
  toneIdx: number;
}) {
  const tone = PALETTE[toneIdx % PALETTE.length];
  const gradient = `radial-gradient(110% 100% at 25% 18%, ${tone.hi} 0%, ${tone.base} 50%, ${tone.sh} 100%)`;
  return (
    <div className="group flex flex-col gap-[10px]">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[clamp(4px,0.5vw,8px)] grain"
        style={{ backgroundImage: gradient }}
        aria-hidden="true"
      >
        {/* SVG noise overlay for grain feel */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
            backgroundSize: "160px 160px",
          }}
        />
        {/* Highlight line */}
        <div className="absolute inset-x-6 top-6 h-px bg-white/15" />
        {/* Bottom-left product label overlay */}
        <div className="absolute inset-x-4 bottom-4 flex flex-col gap-[2px] text-white">
          <p className="text-[13px] font-bold tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
            {name}
          </p>
          {material && (
            <p className="text-[11px] tracking-[0.04em] opacity-80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
              {material}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Editorial category showcase used to highlight one product family
 * (Bags, Small Leather Goods, Soft Accessories, etc.).
 */
export function CategoryShowcase({
  eyebrow,
  title,
  intro,
  materials,
  items,
  bg = "ivory",
}: Props) {
  return (
    <div className={`${bgClass[bg]} rounded-[clamp(8px,1vw,16px)]`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(24px,3vw,48px)] p-[clamp(24px,3vw,56px)]">
        <div className="lg:col-span-4 flex flex-col gap-[clamp(12px,1.4vw,20px)]">
          <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-clay-700/65">
            {eyebrow}
          </p>
          <h3 className="font-display text-h1 text-clay-700 tracking-[-0.02em] leading-[1.1]">
            {title}
          </h3>
          <p className="text-[15px] leading-[1.55] text-clay-700/75 max-w-[420px]">
            {intro}
          </p>
          <ul className="flex flex-wrap gap-[8px] pt-[8px]">
            {materials.map((m) => (
              <li
                key={m}
                className="text-[11px] tracking-[0.12em] uppercase font-bold text-clay-700/70 border border-clay-700/15 rounded-full px-[10px] py-[5px]"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>

        <ul className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-[clamp(12px,1.5vw,20px)]">
          {items.map((item, i) => (
            <li key={`${item.name}-${i}`}>
              <VariantTile
                name={item.name}
                material={item.material}
                toneIdx={item.tone ?? i}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
