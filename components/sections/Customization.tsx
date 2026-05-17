import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

const OPTIONS = [
  {
    title: "Embossing",
    body: "Deboss, blind, foil or hot-stamp your logo or pattern. We pull dies in-house for runs of 50+.",
  },
  {
    title: "Hardware",
    body: "Solid brass, nickel, antique copper. We can also colour-match or develop a custom mould.",
  },
  {
    title: "Linings",
    body: "Cotton twill, satin, suede or pigskin. Printed and dyed to your spec.",
  },
  {
    title: "Edge finish",
    body: "Hand-burnished, painted, or folded. Match the inside of the strap to the body.",
  },
  {
    title: "Hangtags",
    body: "Letterpress, screen-print or laser-cut. We coordinate with your packaging supplier.",
  },
  {
    title: "Stitching",
    body: "Saddle-stitch, machine-stitch or invisible. Thread colour matched from a 60-spool library.",
  },
];

export function Customization() {
  return (
    <Section className="bg-clay-800 text-white">
      <Container className="v-pad-lg flex flex-col gap-[clamp(48px,6vw,96px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[12px] tracking-[0.22em] uppercase opacity-70 font-bold mb-3">
              Customisation
            </p>
            <Heading variant="display-md" className="font-extralight">
              Make it yours,
              <br className="hidden sm:block" />
              <span className="italic"> down to the stitch.</span>
            </Heading>
          </div>
          <p className="lg:col-span-4 text-body-lg opacity-80 max-w-[460px]">
            Six configurable layers turn a standard silhouette into something
            unmistakeably yours. Spec sheets and CMTs available on request.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,2vw,32px)]">
          {OPTIONS.map((o, i) => (
            <li
              key={o.title}
              className="border-t border-white/15 pt-[clamp(20px,2vw,28px)] flex flex-col gap-[8px]"
            >
              <p className="text-[12px] tracking-[0.18em] uppercase opacity-60 font-bold">
                0{i + 1}
              </p>
              <h3 className="font-display text-h3 leading-[1.2]">{o.title}</h3>
              <p className="text-[15px] leading-[1.55] opacity-80 max-w-[360px]">
                {o.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-4 pt-[clamp(12px,1.5vw,24px)]">
          <Button href="#partner" variant="solid" tone="light">
            Request a CMT pack
          </Button>
          <Button href="/our-process" variant="link" tone="light">
            See the workshop →
          </Button>
        </div>
      </Container>
    </Section>
  );
}
