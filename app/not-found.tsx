import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-clay-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/photos/404-bag.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-clay-900 via-clay-900/60 to-clay-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-[clamp(20px,4vw,40px)] gap-[clamp(16px,2vw,28px)]">
        <p className="font-sans font-bold text-[12px] tracking-[0.22em] uppercase text-white/40">
          404
        </p>
        <h1 className="font-display text-[clamp(36px,5.5vw,80px)] leading-[1.1] tracking-[-0.02em] text-white max-w-[720px]">
          Website wasn&apos;t stitched
          <span className="italic"> properly.</span>
        </h1>
        <p className="text-[clamp(16px,1.4vw,20px)] leading-[1.5] text-white/50 max-w-[440px]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button href="/" variant="solid" tone="light">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" tone="light">
            Contact us
          </Button>
        </div>
      </div>
    </main>
  );
}
