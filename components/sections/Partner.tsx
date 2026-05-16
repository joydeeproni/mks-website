import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

const CARDS = [
  {
    title: "Get Quote",
    body:
      "Tell us what you need. We will come back with a clear, honest price — no hidden costs, no runaround.",
    cta: "Request quote",
    href: "#quote",
    span: "lg:col-span-2",
    style: { backgroundColor: "rgba(139,123,118,0.98)" },
  },
  {
    title: "Order Sample",
    body:
      "Not ready to commit? Order a sample first. Touch the leather, test the stitching, see the standard before you sign anything.",
    cta: "Order sample",
    href: "#sample",
    span: "",
    style: { backgroundColor: "rgba(59,34,26,0.98)" },
  },
  {
    title: "Talk To Us",
    body:
      "Sometimes you have a question that does not fit a form. Our team is real, responsive, and happy to talk.",
    cta: "Start a conversation",
    href: "#talk",
    span: "",
    style: { backgroundColor: "#455a11" },
  },
];

export function Partner() {
  return (
    <Section id="partner" className="bg-white">
      <Container className="flex flex-col items-center gap-[clamp(48px,8vw,120px)] v-pad-lg">
        <div className="flex flex-col gap-[clamp(8px,1vw,12px)] items-center text-center max-w-[820px]">
          <Heading variant="display-md" className="text-black">
            Ready to Partner
          </Heading>
          <p className="text-body-lg text-black/80">
            Three honest ways to start a conversation with our workshop.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2.5vw,32px)] w-full">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className={`rounded-[9px] p-[clamp(20px,2vw,24px)] flex flex-col justify-between text-white min-h-[280px] md:min-h-[360px] ${c.span}`}
              style={c.style}
            >
              <h3 className="font-bold text-h2 leading-[1.2]">{c.title}</h3>
              <div className="flex flex-col gap-[clamp(16px,2vw,24px)]">
                <p className="text-[14px] leading-[1.5] max-w-[353px]">
                  {c.body}
                </p>
                <Button
                  href={c.href}
                  variant="link"
                  tone="light"
                  className="self-start text-white"
                >
                  {c.cta} →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
