import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const NAV = ["Values", "Story", "Brands", "Materials", "Products"];

export function Hero() {
  return (
    <section
      className="relative isolate w-[1440px] overflow-hidden"
      data-node-id="4156:6531"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={images.heroWorkshop.src}
          alt=""
          fill
          priority
          sizes="1440px"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Nav row */}
      <div
        className="flex items-center gap-[285px] px-[80px] py-[24px] w-[1440px]"
        data-node-id="4156:6533"
      >
        <Link
          href="/"
          aria-label="MKS — home"
          className="font-display text-[28px] font-medium tracking-[-0.02em] text-white leading-[61.193px] h-[61.193px] w-[80px]"
        >
          MKS
        </Link>
        <nav className="flex items-center gap-[71px] text-[16px] text-white tracking-[-0.16px] font-bold whitespace-nowrap">
          {NAV.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="leading-[30px]"
            >
              {item}
            </Link>
          ))}
        </nav>
        <Link
          href="#partner"
          className="text-[16px] text-white tracking-[-0.16px] font-bold leading-[30px] text-right whitespace-nowrap"
        >
          Get Quote
        </Link>
      </div>

      {/* Hero copy */}
      <div className="flex flex-col items-center justify-center overflow-clip pt-[120px] pb-[200px] px-[190px] w-full">
        <div className="flex flex-col gap-[72px] items-center">
          <div className="flex flex-col gap-[8px] items-center text-center text-white">
            <h1 className="font-display font-normal text-[104px] tracking-[-2.08px] leading-[1.1] whitespace-nowrap">
              <span className="block">Bags Made Responsibly</span>
              <span className="block">For Global Brands</span>
            </h1>
            <p className="text-[20px] tracking-[-0.4px] leading-[30px] w-[682px]">
              Premium leather bags, accessories, and handcrafted goods —
              manufactured in Kolkata, India, and exported worldwide under the
              Fair Trade banner.
            </p>
          </div>
          <div className="flex gap-[16px] items-center justify-center">
            <Link
              href="#products"
              className="border-2 border-white px-[24px] pt-[9px] pb-[8px] text-[16px] text-white tracking-[-0.16px] font-bold leading-[30px] hover:bg-white hover:text-[#3c1b1b] transition-colors"
            >
              Browse Our Work
            </Link>
            <Link
              href="#partner"
              className="bg-white border-2 border-white px-[24px] pt-[9px] pb-[8px] text-[16px] text-[#3c1b1b] tracking-[-0.16px] font-bold leading-[30px] hover:bg-transparent hover:text-white transition-colors"
            >
              Start An Order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
