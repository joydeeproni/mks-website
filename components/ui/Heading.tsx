import { cn } from "@/lib/cn";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "display-sm";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: ElementType;
  variant?: Variant;
  serif?: boolean;
  children?: ReactNode;
};

const variantStyles: Record<Variant, string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  // Legacy aliases (used by /brands and /our-process) — mapped to new ramp.
  "display-xl": "text-h1",
  "display-lg": "text-h1",
  "display-md": "text-h2",
  "display-sm": "text-h3",
};

/**
 * Display & heading typography primitive. Maps directly to the Figma
 * Hardcover (h1–h3) + Trade Gothic (h4) type ramp.
 */
export function Heading({
  as,
  variant = "h2",
  serif = true,
  className,
  children,
  ...props
}: HeadingProps) {
  const tagFromVariant: ElementType =
    variant === "h1" || variant === "display-xl" || variant === "display-lg"
      ? "h1"
      : variant === "h2" || variant === "display-md"
        ? "h2"
        : variant === "h3" || variant === "display-sm"
          ? "h3"
          : "h4";
  const Component = as || tagFromVariant;
  return (
    <Component
      className={cn(
        variantStyles[variant],
        serif && variant !== "h4"
          ? "font-display font-normal"
          : "font-sans font-bold",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
