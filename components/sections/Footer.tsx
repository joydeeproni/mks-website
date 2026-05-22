import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/sections/NewsletterForm";

/**
 * Footer — Figma 1:254.
 * Section bg black. 3-column grid:
 *   1. Need Help? — heading + 8 pill buttons (1px white border, rounded-30) + body.
 *   2. Products + Materials — two stacked link lists.
 *   3. Newsletter Signup — heading + body + Input Field.
 * Bottom row: copyright (#ccc) + language switcher.
 * Mobile: columns stack.
 */
const HELP = [
  "Help Center",
  "Order Status",
  "Size & Fit Guide",
  "Returns & Exchanges",
  "DIY Care & Repair",
  "Trade In. Get Credit.",
  "Login",
  "Accessibility Statement",
];

const PRODUCTS = ["Bags", "Belts", "Scarves", "Accessories", "Misc."];

const MATERIALS = [
  "Full Grain",
  "Smooth Leather",
  "Shanti Leather",
  "Veg Tanned",
  "Embossed",
];

export function Footer() {
  return (
    <Section as="footer" snap={false} fade={false} className="bg-black text-white">
      <Container className="pt-[clamp(56px,8.3vw,120px)] pb-[clamp(48px,6vw,80px)] flex flex-col gap-[clamp(64px,7vw,96px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(40px,4.4vw,64px)]">
          {/* Need Help? */}
          <div className="flex flex-col gap-[clamp(28px,3vw,42px)]">
            <h3 className="font-sans font-bold text-body text-white">
              Need Help?
            </h3>
            <ul className="flex flex-wrap gap-3">
              {HELP.map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center border border-white rounded-full px-7 py-2 text-button font-bold text-white hover:bg-white hover:text-black transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 text-caption text-white max-w-[420px]">
              <p>
                Visit us in Kolkata or schedule a live walkthrough of the
                workshop — we are happy to host.
              </p>
              <p>Mon – Fri · 9am to 6pm IST</p>
            </div>
          </div>

          {/* Products + Materials */}
          <div className="grid grid-cols-2 gap-[clamp(28px,4vw,64px)]">
            <FooterColumn title="Products" items={PRODUCTS} />
            <FooterColumn title="Materials" items={MATERIALS} />
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-[clamp(24px,3vw,48px)]">
            <h3 className="font-sans font-bold text-body text-white">
              Newsletter Signup
            </h3>
            <p className="text-caption text-white max-w-[420px]">
              Quarterly notes from the workshop — process essays, new
              materials and partner stories. No marketing fluff.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-body text-fog">
            © {new Date().getFullYear()} MKS, Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-body text-white">
            <span>English</span>
            <span className="block w-[18px] h-[18px] bg-fog" aria-hidden />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-[clamp(20px,2.6vw,37px)]">
      <h3 className="font-sans font-bold text-body text-white">{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((label) => (
          <li key={label}>
            <Link
              href="#"
              className="text-body text-white link-button"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
