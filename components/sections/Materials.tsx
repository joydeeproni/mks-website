// Material library rendered as CSS leather-tone swatches. Each swatch
// uses a layered gradient + soft noise overlay to feel like a sample card
// without depending on stock photography.

type MatTone = {
  name: string;
  base: string;
  highlight: string;
  shadow: string;
  note: string;
};

const MATERIALS: MatTone[] = [
  {
    name: "Full Grain Leather",
    base: "#7a3e22",
    highlight: "#a3613d",
    shadow: "#3a1a0a",
    note: "Aniline-finished · 1.8–2.2mm",
  },
  {
    name: "Smooth Leather",
    base: "#a36c46",
    highlight: "#c58e69",
    shadow: "#5a3a25",
    note: "Polished surface · 1.0–1.4mm",
  },
  {
    name: "Shanti Leather",
    base: "#5a2418",
    highlight: "#8a3b2a",
    shadow: "#1f0c07",
    note: "Vegetable tanned · matte hand",
  },
  {
    name: "Nubuck",
    base: "#9b7a5f",
    highlight: "#b6957a",
    shadow: "#604a37",
    note: "Buffed grain · velvety hand",
  },
  {
    name: "Recycled Canvas",
    base: "#b9ad8a",
    highlight: "#d6cba8",
    shadow: "#7c714f",
    note: "12oz cotton · GRS certified",
  },
];

function Swatch({ tone }: { tone: MatTone }) {
  const gradient = `radial-gradient(120% 100% at 20% 15%, ${tone.highlight} 0%, ${tone.base} 45%, ${tone.shadow} 100%)`;
  return (
    <div
      className="relative aspect-square w-full overflow-hidden rounded-[2px]"
      style={{ backgroundImage: gradient }}
      aria-hidden="true"
    >
      {/* Subtle grain overlay using SVG noise */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          backgroundSize: "160px 160px",
        }}
      />
      {/* Soft highlight line */}
      <div className="absolute inset-x-6 top-6 h-px bg-white/10" />
    </div>
  );
}

export function Materials() {
  return (
    <ul
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[clamp(16px,2.5vw,32px)] w-full"
      role="list"
    >
      {MATERIALS.map((m) => (
        <li key={m.name} className="flex flex-col gap-[clamp(10px,1vw,15px)]">
          <Swatch tone={m} />
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-[clamp(16px,1.6vw,22px)] tracking-[-0.22px] leading-[1.25] text-[#393212]">
              {m.name}
            </h3>
            <p className="text-[13px] leading-[18px] text-[#393212]/65">
              {m.note}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
