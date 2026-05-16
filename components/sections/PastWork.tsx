import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { images } from "@/lib/images";

const PastWorkBg =
  "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(60,60,60,0.5) 38%, rgba(147,153,133,0.4) 100%), linear-gradient(90deg, rgb(147,153,133) 0%, rgb(147,153,133) 100%)";

export function PastWork() {
  return (
    <Section
      id="brands"
      className="text-white"
      style={{ backgroundImage: PastWorkBg }}
    >
      <Container className="flex flex-col gap-[clamp(56px,10vw,160px)] v-pad-lg">
        <div className="flex flex-col gap-[clamp(8px,1vw,12px)] max-w-[820px]">
          <Heading variant="display-md">Past Work</Heading>
          <p className="text-body-lg">
            Two decades of quiet partnerships behind beloved Fair Trade brands.
          </p>
        </div>

        <div className="flex flex-col gap-[clamp(16px,2.5vw,32px)] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr] gap-[clamp(16px,2.5vw,32px)]">
            <div className="relative aspect-[5/4] md:h-[442px] md:aspect-auto rounded-[9px] overflow-hidden">
              <Image
                src={images.workServv.src}
                alt={images.workServv.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="bg-white md:h-[442px] rounded-[9px] p-[clamp(20px,2vw,24px)] flex flex-col justify-end gap-[clamp(24px,3vw,48px)]">
              <div className="font-display text-[clamp(18px,1.7vw,24px)] font-medium text-clay-700">
                SERRV
              </div>
              <div className="flex flex-col gap-[clamp(16px,2vw,29px)] text-black">
                <h3 className="font-display font-normal text-h2 tracking-[-0.02em]">
                  Adhya Leather Tote for Servv
                </h3>
                <p className="text-[clamp(15px,1.3vw,18px)] leading-[1.45] font-normal">
                  We built this leather tote bag for Servv International for
                  their handbags collection.
                </p>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm md:h-[442px] rounded-[9px] p-[clamp(20px,2vw,24px)] flex flex-col justify-end md:col-span-2 lg:col-span-1">
              <p className="font-display italic text-[clamp(18px,1.7vw,24px)] tracking-[-0.24px] leading-[1.4] text-white">
                &ldquo;MKS is a valued long term partner of SERRV&apos;s and are
                experts in what they do. They always provide excellent
                communication and deliver quality product that our customers
                love.&rdquo;
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_0.7fr] gap-[clamp(16px,2.5vw,32px)]">
            <div className="bg-indigo-deep md:h-[442px] rounded-[9px] p-[clamp(20px,2vw,24px)] flex flex-col justify-end gap-[clamp(24px,3vw,48px)]">
              <div className="font-display text-[clamp(20px,2vw,28px)] font-medium text-white">
                MadeFree®
              </div>
              <div className="flex flex-col gap-[clamp(16px,2vw,29px)] text-white">
                <h3 className="font-display font-normal text-h2 tracking-[-0.02em]">
                  Backpacks for MadeFree®
                </h3>
                <p className="text-[clamp(15px,1.3vw,18px)] leading-[1.45]">
                  We designed this stylish leather tote for MadeFree&apos;s
                  handbag line, showcasing both elegance and functionality.
                </p>
              </div>
            </div>

            <div className="relative aspect-[5/4] md:h-[442px] md:aspect-auto rounded-[9px] overflow-hidden">
              <Image
                src={images.workMadeFreeImage.src}
                alt={images.workMadeFreeImage.alt}
                fill
                sizes="(min-width: 1024px) 37vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
