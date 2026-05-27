import { cn } from "@/lib/cn";
import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children?: ReactNode;
  /** When true (default), section is min-h-screen + scroll-snap-aligned. */
  snap?: boolean;
  /** When true (default), children fade in on enter. Disable for above-the-fold sections. */
  fade?: boolean;
};

/**
 * Full-bleed section. Snaps to viewport height by default and fades children
 * in when they enter the viewport.
 *   <Section snap={false} fade={false}>...</Section>  // opt out
 */
export function Section({
  as: Component = "section",
  className,
  children,
  snap = false,
  fade = true,
  ...props
}: SectionProps) {
  const snapClass = snap ? "min-h-screen snap-start" : undefined;
  return (
    <Component className={cn("section", snapClass, className)} {...props}>
      {fade ? <FadeIn>{children}</FadeIn> : children}
    </Component>
  );
}
