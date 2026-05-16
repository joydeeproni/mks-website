import { cn } from "@/lib/cn";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children?: ReactNode;
};

/**
 * Full-bleed section. Background colours fill the entire viewport;
 * use a Container child to centre and pad content.
 */
export function Section({
  as: Component = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component className={cn("section", className)} {...props}>
      {children}
    </Component>
  );
}
