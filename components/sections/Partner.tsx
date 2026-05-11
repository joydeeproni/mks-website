const CARDS = [
  {
    title: "Get Quote",
    body:
      "Tell us what you need. We will come back with a clear, honest price — no hidden costs, no runaround.",
    width: "w-[576px]",
    style: { backgroundColor: "rgba(139,123,118,0.98)" },
  },
  {
    title: "Order Sample",
    body:
      "Not ready to commit? Order a sample first. Touch the leather, test the stitching, see the standard before you sign anything.",
    width: "flex-1",
    style: { backgroundColor: "rgba(59,34,26,0.98)" },
  },
  {
    title: "Talk To Us",
    body:
      "Sometimes you have a question that does not fit a form. Our team is real, responsive, and happy to talk.",
    width: "flex-1",
    style: { backgroundColor: "#455a11" },
  },
];

export function Partner() {
  return (
    <section
      id="partner"
      className="w-[1440px] bg-white flex flex-col gap-[120px] items-center justify-center px-[80px] py-[120px] min-h-[594px]"
      data-node-id="4156:6771"
    >
      <div className="flex flex-col gap-[9px] items-center justify-center text-black w-full">
        <h2 className="font-display font-normal text-[64px] tracking-[-1.28px] leading-[1.2] whitespace-nowrap">
          Ready to Partner
        </h2>
        <p className="text-[20px] leading-[30px] text-center">
          Three honest ways to start a conversation with our workshop.
        </p>
      </div>
      <div className="flex gap-[32px] w-full">
        {CARDS.map((c, idx) => (
          <div
            key={c.title}
            className={`${c.width} h-[360px] rounded-[9px] p-[24px] flex flex-col items-start text-white ${idx === 0 ? "" : "justify-end"}`}
            style={c.style}
          >
            <div className="flex flex-col gap-[29px] h-full w-full">
              <p
                className={`font-bold text-[40px] leading-[56px] flex-1 ${idx === 0 ? "" : "w-[272px]"}`}
              >
                {c.title}
              </p>
              <p
                className={`text-[14px] leading-[21px] ${idx === 0 ? "w-[353px]" : "w-[272px]"}`}
              >
                {c.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
