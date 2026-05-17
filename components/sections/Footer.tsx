import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/sections/NewsletterForm";

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

const PAGES = [
  { label: "Home", href: "/" },
  { label: "What we make", href: "/#products" },
  { label: "Materials", href: "/#materials" },
  { label: "Our process", href: "/our-process" },
  { label: "Brands", href: "/brands" },
];

const FAMILIES = [
  { label: "Bags", href: "/#products" },
  { label: "Small leather goods", href: "/#products" },
  { label: "Soft accessories", href: "/#products" },
  { label: "Custom programs", href: "/#partner" },
];

export function Footer() {
  return (
    <Section as="footer" className="bg-black text-white">
      <Container className="pt-[clamp(64px,8vw,120px)] pb-[clamp(48px,6vw,80px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(40px,6vw,64px)]">
          {/* Need Help? */}
          <div className="flex flex-col gap-[clamp(28px,3vw,42px)]">
            <h3 className="text-[clamp(20px,2vw,24px)] tracking-[-0.48px] leading-[1.1]">
              Need Help?
            </h3>
            <ul className="flex flex-wrap gap-[12px]">
              {HELP.map((label) => (
                <li key={label}>
                  <Button
                    href="#"
                    variant="pill"
                    tone="light"
                    size="md"
                    className="font-normal"
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-[16px] text-[15px] leading-[24px] font-normal opacity-80 max-w-[420px]">
              <p>
                Visit us in Kolkata or schedule a live walkthrough of the
                workshop — we are happy to host.
              </p>
              <p>Mon – Fri · 9am to 6pm IST</p>
            </div>
          </div>

          {/* Pages + Families */}
          <div className="grid grid-cols-2 gap-[clamp(28px,4vw,64px)]">
            <div className="flex flex-col gap-[clamp(24px,2.5vw,37px)]">
              <h3 className="text-[clamp(20px,2vw,24px)] tracking-[-0.48px] leading-[1.1]">
                Pages
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {PAGES.map((p) => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className="text-[15px] md:text-[16px] leading-[24px] link-button"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[clamp(24px,2.5vw,37px)]">
              <h3 className="text-[clamp(20px,2vw,24px)] tracking-[-0.48px] leading-[1.1]">
                Families
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {FAMILIES.map((m) => (
                  <li key={m.label}>
                    <Link
                      href={m.href}
                      className="text-[15px] md:text-[16px] leading-[24px] link-button"
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-[clamp(20px,2.5vw,24px)]">
            <h3 className="text-[clamp(20px,2vw,24px)] tracking-[-0.48px] leading-[1.1]">
              Newsletter Signup
            </h3>
            <p className="text-[15px] md:text-[16px] leading-[24px] opacity-80 max-w-[420px]">
              Quarterly notes from the workshop — process essays, new
              materials and partner stories. No marketing fluff.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-[clamp(48px,6vw,80px)] pt-[clamp(20px,2vw,28px)] border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[14px] opacity-70">
            © {new Date().getFullYear()} MKS Exports, Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-[14px] opacity-70">
            <Link href="#" className="link-button">
              Privacy
            </Link>
            <Link href="#" className="link-button">
              Terms
            </Link>
            <span>English (US)</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
