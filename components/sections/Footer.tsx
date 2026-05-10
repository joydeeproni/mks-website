import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/sections/NewsletterForm";

const HELP = [
  ["Help Centre", "#"],
  ["Order Status", "#"],
  ["Size & Fit Guide", "#"],
  ["Returns & Exchanges", "#"],
  ["Care & Repair", "#"],
  ["Trade-In Programme", "#"],
  ["Login", "#"],
  ["Accessibility Statement", "#"],
];

const PRODUCTS = [
  ["Tote Handbag", "#"],
  ["Backpacks", "#"],
  ["Crossbody", "#"],
  ["Hobo Bag", "#"],
  ["Sling Bag", "#"],
  ["Wristlet", "#"],
];

const MATERIALS = [
  ["Full Grain Leather", "#"],
  ["Smooth Leather", "#"],
  ["Shanti Leather", "#"],
  ["Nubuck", "#"],
  ["Recycled Canvas", "#"],
];

export function Footer() {
  return (
    <footer className="bg-clay-900 text-ivory pt-24 pb-10">
      <Container>
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="font-display text-2xl">Need help?</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {HELP.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-ivory/80 hover:text-ivory link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory/65">
              Visit us in Kolkata or schedule a live walkthrough of the
              workshop. We&rsquo;re happy to host.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display text-base uppercase tracking-[0.2em] text-ivory/85">
              Products
            </h3>
            <ul className="mt-6 space-y-3">
              {PRODUCTS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-ivory/80 hover:text-ivory link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display text-base uppercase tracking-[0.2em] text-ivory/85">
              Materials
            </h3>
            <ul className="mt-6 space-y-3">
              {MATERIALS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-ivory/80 hover:text-ivory link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display text-2xl">Newsletter</h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">
              Quarterly notes from the workshop — process essays, new
              materials, partner stories. No marketing fluff.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-ivory/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/55">
            © {new Date().getFullYear()} MKS Exports, Inc. · All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-ivory/65">
            <Link href="#" className="link-underline">
              Privacy
            </Link>
            <Link href="#" className="link-underline">
              Terms
            </Link>
            <Link href="#" className="link-underline">
              Cookies
            </Link>
            <span className="ml-2 inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-olive-500" />
              English (US)
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
