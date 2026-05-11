const ITEMS = [
  { icon: "shield", label: "Fairly paid artisans, aligned with WFTO.", cta: "View Ironclad Guarantee" },
  { icon: "leaf", label: "Family owned and women led business", cta: "Explore Our Footprint" },
  { icon: "percent", label: "100% locally sourced materials", cta: "Visit About" },
  { icon: "people", label: "No child labor, forced work or discrimination", cta: "Visit Worn Wear" },
  { icon: "globe", label: "A vision towards community and rehabilitation", cta: "Read Our Commitment" },
];

const Icon = ({ name }: { name: string }) => {
  const common = "w-[44px] h-[44px] stroke-[1.5] text-white";
  switch (name) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 6v6c0 5 3.4 7.6 8 9 4.6-1.4 8-4 8-9V6l-8-3Z" />
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 19c4-3 9-3 14-9 0 8-6 14-14 14V19Z" />
          <path stroke="currentColor" strokeLinecap="round" d="M5 19c0-4 3-8 9-9" />
        </svg>
      );
    case "percent":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path stroke="currentColor" strokeLinecap="round" d="m6 18 12-12" />
          <circle cx="7.5" cy="7.5" r="2.5" stroke="currentColor" />
          <circle cx="16.5" cy="16.5" r="2.5" stroke="currentColor" />
        </svg>
      );
    case "people":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="9" cy="9" r="3.5" stroke="currentColor" />
          <circle cx="17" cy="11" r="2.5" stroke="currentColor" />
          <path stroke="currentColor" strokeLinecap="round" d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
          <path stroke="currentColor" strokeLinecap="round" d="M16 17c1.5-1 3-1.5 5-1.5" />
        </svg>
      );
    case "globe":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <path stroke="currentColor" d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      );
  }
};

export function ValueProps() {
  return (
    <section
      className="w-[1440px] bg-black flex flex-col px-[72px] py-[104px]"
      data-node-id="4156:6794"
    >
      <div className="flex items-start justify-center w-full">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex-1 flex flex-col items-start h-[226.49px] px-[8px]"
          >
            <Icon name={item.icon} />
            <div className="flex flex-col pt-[16px] pb-[32px] w-full">
              <p className="text-[32px] leading-[35.2px] text-white">
                {item.label}
              </p>
            </div>
            <p className="text-[14px] font-bold leading-[24.5px] text-white whitespace-nowrap">
              {item.cta}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
