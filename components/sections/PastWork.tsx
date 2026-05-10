import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export function PastWork() {
  return (
    <section id="brands" className="bg-ivory py-32 md:py-40">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow text-clay-700/60">Past Work</p>
            <h2 className="serif-display text-display-md mt-4">
              Quietly behind brands you already trust.
            </h2>
          </div>
          <p className="md:col-span-5 text-base leading-relaxed text-clay-700/75">
            We&rsquo;ve been the workshop behind beloved Fair Trade lines for
            over two decades. Two of the partnerships closest to our hearts:
          </p>
        </div>

        {/* Row 1: large image + small product card + testimonial */}
        <div className="mt-16 grid gap-8 md:grid-cols-12">
          <div className="relative md:col-span-6 aspect-[5/4] overflow-hidden rounded-md">
            <Image
              src={images.workServv.src}
              alt={images.workServv.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="md:col-span-3 bg-sand p-8 rounded-md flex flex-col justify-between">
            <div className="text-clay-700/60 text-xs font-semibold uppercase tracking-[0.2em]">
              Servv International
            </div>
            <div>
              <h3 className="serif-display text-2xl text-clay-700">
                Adhya Leather Tote for Servv
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-clay-700/75">
                We built this leather tote bag for SERRV International for their
                handbags collection.
              </p>
            </div>
          </div>

          <blockquote className="md:col-span-3 bg-clay-700 text-ivory p-8 rounded-md flex flex-col justify-between">
            <p className="serif-italic text-lg leading-relaxed">
              &ldquo;MKS is a valued long-term partner of SERRV&apos;s and are
              experts in what they do. They always provide excellent
              communication and deliver quality product that our customers
              love.&rdquo;
            </p>
            <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-ivory/65">
              SERRV · Sourcing Team
            </footer>
          </blockquote>
        </div>

        {/* Row 2: text-led card + large image */}
        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7 bg-cream p-10 md:p-14 rounded-md flex flex-col justify-between">
            <div className="text-clay-700/60 text-xs font-semibold uppercase tracking-[0.2em]">
              MadeFree®
            </div>
            <div>
              <h3 className="serif-display text-display-sm text-clay-700">
                Backpacks for MadeFree®
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-clay-700/75">
                We designed this stylish leather backpack line for MadeFree,
                showcasing both elegance and functionality — a quiet workhorse
                for everyday use.
              </p>
            </div>
          </div>
          <div className="relative md:col-span-5 aspect-[4/5] overflow-hidden rounded-md">
            <Image
              src={images.workMadeFree.src}
              alt={images.workMadeFree.alt}
              fill
              sizes="(min-width: 768px) 41vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
