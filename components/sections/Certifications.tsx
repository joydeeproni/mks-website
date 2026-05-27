"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function Certifications() {
  return (
    <Section snap={false} className="bg-ivory">
      <Container className="flex flex-col items-center gap-[clamp(32px,4vw,56px)] py-[clamp(56px,8vw,120px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(24px,3vw,48px)] w-full max-w-[720px]">
          {/* Sedex */}
          <div className="flex flex-col items-center gap-[clamp(16px,2vw,24px)] py-[clamp(28px,3.5vw,44px)] px-6">
            <Image
              src="/photos/sedex-logo.png"
              alt="Sedex logo"
              width={80}
              height={80}
              className="w-[clamp(60px,7vw,80px)] h-auto"
            />
            <div className="flex flex-col items-center gap-1">
              <p className="font-display text-[clamp(20px,1.8vw,26px)] leading-[1.2] text-clay-700">
                Sedex Certified
              </p>
              <p className="text-[12px] uppercase tracking-[0.15em] text-clay-700/50 text-center">
                Ethical supply chain audited
              </p>
            </div>
          </div>

          {/* Fair Trade */}
          <div className="flex flex-col items-center gap-[clamp(16px,2vw,24px)] py-[clamp(28px,3.5vw,44px)] px-6">
            <Image
              src="/photos/fairtrade-logo.png"
              alt="Fairtrade logo"
              width={80}
              height={80}
              className="w-[clamp(60px,7vw,80px)] h-auto"
            />
            <div className="flex flex-col items-center gap-1">
              <p className="font-display text-[clamp(20px,1.8vw,26px)] leading-[1.2] text-clay-700">
                Fair Trade Company
              </p>
              <p className="text-[12px] uppercase tracking-[0.15em] text-clay-700/50 text-center">
                Fair wages, dignified work
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
