import { cn } from "@/lib/cn";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type Variant =
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "h1"
  | "h2"
  | "h3"
  | "h4";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: ElementType;
  variant?: Variant;
  serif?: boolean;
  children?: ReactNode;
};

const variantStyles: Record<Variant, string> = {
  "display-xl": "text-display-xl",
  "display-lg": "text-display-lg",
  "display-md": "text-display-md",
  "display-sm": "text-display-sm",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
};

/**
 * Display & heading typography primitive. Defaults to the Newsreader
 * serif family used across the design.
 */
export function Heading({
  as,
  variant = "h2",
  serif = true,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component =
    as ||
    (variant === "display-xl" || variant === "display-lg" || variant === "h1"
      ? "h1"
      : variant.startsWith("h")
        ? (variant as ElementType)
        : "h2");
  return (
    <Component
      className={cn(
        variantStyles[variant],
        serif ? "font-display font-normal" : "font-sans font-bold",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
