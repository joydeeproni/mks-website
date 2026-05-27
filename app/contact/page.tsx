import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { ContactWizard } from "@/components/sections/ContactWizard";
import { Footer } from "@/components/sections/Footer";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact — MKS Exports",
  description:
    "Get in touch with MKS Exports. Tell us what you need and we'll come back with a clear, honest price — no hidden costs.",
};

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "info@mks-export.com",
    href: "mailto:info@mks-export.com",
  },
  {
    label: "Phone",
    value: "+91 98300 30794",
    href: "tel:+919830030794",
  },
  {
    label: "Marketing",
    value: "archi@mks-export.com",
    href: "mailto:archi@mks-export.com",
  },
  {
    label: "Export Queries",
    value: "online@mks-export.com",
    href: "mailto:online@mks-export.com",
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1 w-full">
      {/* Hero */}
      <Section className="relative isolate overflow-hidden text-white" snap={false}>
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src={images.artisanConcentration.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <SiteHeader tone="light" />
        <Container className="pt-[clamp(64px,8vw,120px)] pb-[clamp(80px,10vw,160px)] flex flex-col gap-[clamp(20px,2vw,32px)] max-w-[920px]">
          <p className="text-[12px] tracking-[0.22em] uppercase opacity-80 font-bold">
            Contact
          </p>
          <Heading variant="display-lg" className="font-extralight">
            Let&apos;s make
            <span className="italic"> something.</span>
          </Heading>
          <p className="text-body-lg max-w-[680px] opacity-90">
            Tell us what you need and we&apos;ll come back with a clear, honest
            price — no hidden costs, no runaround. Typical response time: 24
            hours.
          </p>
        </Container>
      </Section>

      {/* Wizard Form */}
      <Section snap={false} className="bg-ivory">
        <Container className="v-pad-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(40px,5vw,80px)]">
            <div className="lg:col-span-8">
              <ContactWizard />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-[clamp(32px,4vw,48px)]">
              {/* Direct contact */}
              <div className="flex flex-col gap-5">
                <h3 className="font-sans font-bold text-body text-clay-700">
                  Prefer to reach out directly?
                </h3>
                <ul className="flex flex-col gap-4">
                  {CONTACT_METHODS.map((method) => (
                    <li key={method.label} className="flex flex-col gap-0.5">
                      <p className="text-[12px] tracking-[0.1em] uppercase font-bold text-clay-700/45">
                        {method.label}
                      </p>
                      <a
                        href={method.href}
                        className="text-body text-clay-700 link-button font-bold"
                      >
                        {method.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-3 border-t border-clay-700/10 pt-[clamp(20px,2.5vw,32px)]">
                <h3 className="font-sans font-bold text-body text-clay-700">
                  Visit the workshop
                </h3>
                <address className="not-italic text-body text-clay-700/65 flex flex-col gap-1">
                  <span>314 Barakhola, Mukundapur</span>
                  <span>Kolkata 700 099</span>
                  <span>West Bengal, India</span>
                </address>
                <p className="text-[15px] text-clay-700/55">
                  Mon – Fri · 9:00am to 6:00pm IST
                </p>
                <p className="text-[15px] text-clay-700/55">
                  Factory tours available by appointment — we&apos;re happy to host.
                </p>
              </div>

              {/* Quick links */}
              <div className="flex flex-col gap-3 border-t border-clay-700/10 pt-[clamp(20px,2.5vw,32px)]">
                <h3 className="font-sans font-bold text-body text-clay-700">
                  Quick links
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Products & Services", href: "/products" },
                    { label: "Our Processes", href: "/processes" },
                    { label: "Fair Trade & Values", href: "/fair-trade" },
                    { label: "About MKS", href: "/about" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-body text-clay-700/65 link-button"
                      >
                        {link.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
