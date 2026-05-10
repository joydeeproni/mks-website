# MKS Exports — Landing Page

Marketing site for **MKS Exports**, a second-generation, women-led leather
goods manufacturer based in Kolkata, India. The site introduces the workshop,
its materials and process, past collaborations, and the ways global brands
can partner with MKS for fair-trade-aligned leather production.

Built from a Figma design system: [MKS-Export — The Workshop](https://www.figma.com/design/EFJpnfHn6ohI4m81a4jzWY/MKS-Export?node-id=4156-6530).

## Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **TypeScript** (strict)
- **Tailwind CSS v4** with a custom `@theme` design-token layer
- **next/font** loading Newsreader (display serif) and Inter (sans)
- **next/image** for asset optimisation

## Design system

All tokens live in [`app/globals.css`](app/globals.css) under `@theme`:

| Token group | Tokens |
| --- | --- |
| Surfaces | `ivory`, `cream`, `sand`, `bone`, `mist` |
| Brand (clay) | `clay-50` … `clay-900` (deep brown red) |
| Earth | `olive-100`, `olive-500`, `olive-700` |
| Neutrals | `ink`, `graphite`, `stone`, `pebble`, `fog`, `paper` |
| Type | `font-display` (Newsreader), `font-sans` (Inter) |
| Type ramp | `text-display-sm` … `text-display-xl` (fluid clamps) |
| Layout | `--container-shell` 1440px, `.shell` utility |

Primitives live in [`components/ui`](components/ui):

- `Container` — page shell wrapper
- `Button` — filled / outline / ghost / filled-dark variants, polymorphic
  `<button>` ↔ `<Link>`
- `Eyebrow` — small uppercased label with leading rule

## Page structure

Sections are composed in [`app/page.tsx`](app/page.tsx) and live in
[`components/sections/`](components/sections):

1. `Header` — transparent overlay nav over the hero
2. `Hero` — "Bags Made Responsibly for Global Brands" + dual CTA + stat strip
3. `Certifications` — Sedex, WFTO, BSCI, ZDHC, ISO 9001
4. `Story` — founder quote on a deep clay-600 surface
5. `Materials` — 5-up leather library grid
6. `Featured` — Bags / Backpacks / Small goods composition
7. `Artisanal` — "Honoring the Artisanal Path" with overlapping title card
8. `BagCategories` — 6-tile asymmetric category grid
9. `Sustainability` — three pillars + floating 100% biodegradable stat
10. `PastWork` — SERRV testimonial + MadeFree partnership
11. `Partner` — Get Quote / Order Sample / Talk to Us cards
12. `ValueProps` — 5-icon trust strip
13. `Footer` — 12-col layout with newsletter form

## Local development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm run lint
```

## Imagery

The first pass uses curated [Unsplash](https://unsplash.com) photographs
referenced in [`lib/images.ts`](lib/images.ts). Swap these for brand-owned
photography by replacing the `images` map — alt text and aspect ratios are
already tuned per slot.

## License

© MKS Exports. All rights reserved.
