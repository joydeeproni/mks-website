import { cn } from "@/lib/cn";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children?: ReactNode;
};

/**
 * Centered content container, max 1440px wide with fluid horizontal padding
 * (20px → 80px depending on viewport). Used inside full-bleed Section blocks.
 */
export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component className={cn("shell", className)} {...props}>
      {children}
    </Component>
  );
}
