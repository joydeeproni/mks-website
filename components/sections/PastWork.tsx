import Image from "next/image";
import { images } from "@/lib/images";

const PastWorkBg =
  "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(102,102,102,0.4) 38%, transparent 100%), linear-gradient(90deg, rgb(147,153,133) 0%, rgb(147,153,133) 100%)";

export function PastWork() {
  return (
    <section
      id="brands"
      className="w-[1440px] flex flex-col gap-[160px] pt-[120px] px-[80px] pb-[120px]"
      style={{ backgroundImage: PastWorkBg }}
      data-node-id="4156:6735"
    >
      <div className="flex flex-col gap-[9px] justify-center text-white w-full">
        <h2 className="font-display font-normal text-[64px] tracking-[-1.28px] leading-[1.2] whitespace-nowrap">
          Past Work
        </h2>
        <p className="text-[20px] leading-[30px]">
          Two decades of quiet partnerships behind beloved Fair Trade brands.
        </p>
      </div>

      <div className="flex flex-col gap-[32px] w-full">
        {/* Row 1 */}
        <div className="flex gap-[32px] w-full">
          {/* Large hero image card */}
          <div className="relative w-[576px] h-[442px] rounded-[9px] overflow-hidden p-[24px] flex flex-col items-start justify-end">
            <Image
              src={images.workServv.src}
              alt={images.workServv.alt}
              fill
              sizes="576px"
              className="object-cover"
            />
          </div>

          {/* White card with logo + title + desc */}
          <div className="bg-white flex-1 h-[442px] rounded-[9px] p-[24px] flex flex-col justify-end gap-[48px]">
            <div className="h-[40px] w-[113px] flex items-center text-[#3c1b1b] font-display text-[22px] font-medium tracking-tight">
              SERRV
            </div>
            <div className="flex flex-1 items-end">
              <div className="flex flex-col gap-[29px] text-black w-full">
                <h3 className="font-display font-normal text-[40px] tracking-[-1.2px] leading-[56px]">
                  Adhya Leather Tote for Servv
                </h3>
                <p className="text-[18px] leading-[25px] font-light">
                  We built this leather tote bag for Servv International for
                  their handbags collection.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial card */}
          <div className="bg-black/20 flex-1 h-[442px] rounded-[9px] p-[24px] flex flex-col items-start justify-end">
            <p className="text-[24px] tracking-[-0.24px] leading-[1.3] text-white w-full">
              &ldquo;MKS is a valued long term partner of SERRV&apos;s and are
              experts in what they do. They always provide excellent
              communication and deliver quality product that our customers
              love.&rdquo;
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-[32px] w-full">
          {/* Indigo navy card */}
          <div className="bg-indigo-deep flex-1 h-[442px] rounded-[9px] p-[24px] flex flex-col justify-end gap-[48px]">
            <div className="h-[71px] w-[162px] flex items-center text-white font-display text-[28px] font-medium tracking-tight">
              MadeFree®
            </div>
            <div className="flex flex-1 items-end">
              <div className="flex flex-col gap-[29px] text-white w-full">
                <h3 className="font-display font-normal text-[40px] tracking-[-1.2px] leading-[56px]">
                  Backpacks for MadeFree®
                </h3>
                <p className="text-[18px] leading-[25px] font-light">
                  We designed this stylish leather tote for MadeFree&apos;s
                  handbag line, showcasing both elegance and functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Image card */}
          <div className="relative w-[536px] h-[442px] rounded-[9px] overflow-hidden p-[24px] flex flex-col items-start justify-end">
            <Image
              src={images.workMadeFreeImage.src}
              alt={images.workMadeFreeImage.alt}
              fill
              sizes="536px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
