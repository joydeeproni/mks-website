import { cn } from "@/lib/cn";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type GridProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children?: ReactNode;
};

/**
 * 12-column responsive grid. Mobile 4-col, tablet 8-col, desktop 12-col.
 * Children opt into spans via Tailwind utilities, e.g.
 *   <div className="col-span-4 md:col-span-8 lg:col-span-6">
 */
export function Grid({
  as: Component = "div",
  className,
  children,
  ...props
}: GridProps) {
  return (
    <Component className={cn("grid-12", className)} {...props}>
      {children}
    </Component>
  );
}
