import Link from "next/link";
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

const PRODUCTS = ["Tote Handbag", "Backpacks", "Crossbody", "Hobo", "Sling"];
const MATERIALS = [
  "Full Grain Leather",
  "Smooth Leather",
  "Shanti Leather",
  "Nubuck",
  "Recycled Canvas",
];

export function Footer() {
  return (
    <footer
      className="w-[1440px] bg-black flex flex-col items-center justify-center px-[80px] pb-[120px]"
      data-node-id="4156:6849"
    >
      <div
        className="flex flex-wrap items-start pt-[119.25px] h-[741.9px] w-full"
        data-node-id="4156:6850"
      >
        <div className="flex-1 flex gap-[64px] h-[622.65px] items-start">
          {/* Need Help? */}
          <div className="flex-1 flex flex-wrap h-full items-start">
            <div className="flex flex-col gap-[42px] min-w-[389.34px] w-full">
              <h3 className="text-[24px] tracking-[-0.48px] leading-[26.4px] text-white whitespace-nowrap">
                Need Help?
              </h3>
              <div className="flex flex-col gap-[20px] w-full">
                <div className="flex flex-wrap gap-[12px] w-full">
                  {HELP.map((label) => (
                    <Link key={label} href="#" className="pill-link">
                      {label}
                    </Link>
                  ))}
                </div>
                <p className="text-[16px] leading-[24px] text-white w-[399px] font-light">
                  Sit dolore velit irure incididunt incididunt ea occaecat qui
                  do minim consectetur minim sunt commodo.
                </p>
                <p className="text-[16px] leading-[24px] text-white w-[399px] font-light">
                  Sit dolore velit irure incididunt incididunt
                </p>
              </div>
            </div>
          </div>

          {/* Products + Materials columns */}
          <div className="flex-1 flex gap-[64px] h-full text-white">
            <div className="flex flex-col gap-[37px] w-[95px]">
              <h3 className="text-[24px] tracking-[-0.48px] leading-[26.4px]">
                Products
              </h3>
              <div className="flex flex-col gap-[12px]">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p}
                    href="#"
                    className="text-[16px] leading-[24px] font-light hover:underline"
                  >
                    {p}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[37px] w-[110px]">
              <h3 className="text-[24px] tracking-[-0.48px] leading-[26.4px]">
                Materials
              </h3>
              <div className="flex flex-col gap-[12px]">
                {MATERIALS.map((m) => (
                  <Link
                    key={m}
                    href="#"
                    className="text-[16px] leading-[24px] font-light hover:underline"
                  >
                    {m}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1 flex flex-col gap-[24px] h-full text-white">
            <h3 className="text-[24px] tracking-[-0.48px] leading-[26.4px]">
              Newsletter Signup
            </h3>
            <p className="text-[16px] leading-[24px] font-light w-[399px]">
              Sit dolore velit irure incididunt incididunt ea occaecat qui do
              minim consectetur minim sunt commodo.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between pt-[8px] text-white">
        <p className="text-[14px] leading-[14px] opacity-70">
          © {new Date().getFullYear()} MKS, Inc. All Rights Reserved.
        </p>
        <span className="text-[14px] opacity-70">English (US)</span>
      </div>
    </footer>
  );
}
