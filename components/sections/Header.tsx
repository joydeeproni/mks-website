import Link from "next/link";
import { Container } from "@/components/ui/Container";

const NAV = [
  { href: "#values", label: "Values" },
  { href: "#story", label: "Story" },
  { href: "#brands", label: "Brands" },
  { href: "#materials", label: "Materials" },
  { href: "#products", label: "Products" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-ivory">
      <Container className="flex items-center justify-between py-6">
        <Link
          href="/"
          aria-label="MKS — home"
          className="font-display text-2xl tracking-tight"
        >
          <span className="font-medium">MKS</span>
          <span className="opacity-60 text-base ml-2">/ Exports</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline opacity-90 hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#partner"
          className="text-sm font-semibold tracking-tight link-underline"
        >
          Get Quote →
        </Link>
      </Container>
    </header>
  );
}
