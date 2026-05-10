import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-clay-900 text-ivory">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={images.heroWorkshop.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-clay-900/60 via-clay-900/45 to-clay-900/80" />
      </div>

      <Container className="relative flex min-h-[860px] flex-col justify-end pt-40 pb-32">
        <div className="max-w-4xl">
          <p className="eyebrow opacity-80 mb-6">
            <span className="inline-block h-px w-10 bg-current align-middle mr-3" />
            Kolkata · Est. 1998
          </p>
          <h1 className="serif-display text-display-xl">
            Bags Made Responsibly
            <br />
            <span className="serif-italic text-current/95">
              For Global Brands.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/85">
            Premium leather bags, accessories and handcrafted goods —
            manufactured in Kolkata, India and exported worldwide under the Fair
            Trade banner.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#products" variant="outline">
              Browse our work
            </Button>
            <Button href="#partner" variant="filled">
              Start an order
            </Button>
          </div>
        </div>

        <dl className="mt-24 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ivory/15 pt-8 max-w-3xl md:grid-cols-4">
          {[
            ["27", "Years of practice"],
            ["120+", "Skilled artisans"],
            ["Sedex", "5-pillar audited"],
            ["WFTO", "Aligned partner"],
          ].map(([num, label]) => (
            <div key={label}>
              <dt className="serif-display text-3xl">{num}</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/65">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
