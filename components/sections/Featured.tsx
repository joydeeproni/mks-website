import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export function Featured() {
  return (
    <section id="products" className="bg-cream pb-32 md:pb-40">
      <Container className="space-y-8">
        {/* Two large feature cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              key: "featuredBags" as const,
              title: "Bags",
              caption: "Totes, satchels, hobos — built for everyday weight",
            },
            {
              key: "featuredBackpacks" as const,
              title: "Backpacks",
              caption: "Riveted, reinforced and ready for the road",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href="#products"
              className="group relative block aspect-[5/4] overflow-hidden rounded-md bg-clay-900"
            >
              <Image
                src={images[card.key].src}
                alt={images[card.key].alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03] group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clay-900/70 via-clay-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <h3 className="serif-display text-display-sm text-ivory">
                  {card.title}
                </h3>
                <p className="mt-2 text-ivory/80">{card.caption}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-ivory link-underline">
                  Explore the line →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Three smaller feature tiles */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { key: "featuredJournal" as const, title: "Journals & Folios" },
            { key: "featuredWallet" as const, title: "Wallets & Cardholders" },
            { key: "featuredAccessories" as const, title: "Small Goods" },
          ].map((card) => (
            <Link
              key={card.title}
              href="#products"
              className="group relative block aspect-[4/3] overflow-hidden rounded-md bg-bone"
            >
              <Image
                src={images[card.key].src}
                alt={images[card.key].alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clay-900/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl text-ivory">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
