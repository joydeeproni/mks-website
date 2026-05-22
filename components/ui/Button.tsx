import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "solid" | "outline" | "link";
export type ButtonSize = "sm" | "md";
export type ButtonTone = "light" | "dark";

/* Figma button spec: 16/700 Trade Gothic, lh 30, tracking -0.01em, px-36 py-12,
   2px border. Solid = white bg + clay-700 text. Outline = transparent + matching border. */
const base =
  "inline-flex items-center justify-center gap-2 " +
  "font-bold text-button " +
  "transition-colors duration-200 select-none whitespace-nowrap";

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-9 py-3 border-2", // px-36 py-12 = px-9 py-3 in Tailwind (1=4px)
  sm: "px-6 py-2 border-2",
};

const variantStyles = (variant: ButtonVariant, tone: ButtonTone) => {
  if (variant === "solid") {
    return tone === "light"
      ? "bg-white border-white text-clay-700 hover:bg-transparent hover:text-white"
      : "bg-clay-700 border-clay-700 text-white hover:bg-transparent hover:text-clay-700";
  }
  if (variant === "outline") {
    return tone === "light"
      ? "border-white text-white hover:bg-white hover:text-clay-700"
      : "border-clay-700 text-clay-700 hover:bg-clay-700 hover:text-white";
  }
  // link
  return tone === "light"
    ? "text-white link-button border-0 px-0 py-0"
    : "text-clay-700 link-button border-0 px-0 py-0";
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = "solid", size = "md", tone = "light", className } = props;
  const classes = cn(
    base,
    sizeStyles[size],
    variantStyles(variant, tone),
    className
  );

  if ("href" in props && props.href) {
    const { children, href, ...rest } = props as AnchorProps;
    const { variant: _v, size: _s, tone: _t, className: _c, ...anchorRest } =
      rest;
    void _v;
    void _s;
    void _t;
    void _c;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }
  const { children, ...rest } = props as NativeButtonProps;
  const { variant: _v, size: _s, tone: _t, className: _c, ...btnRest } = rest;
  void _v;
  void _s;
  void _t;
  void _c;
  return (
    <button type="button" className={classes} {...btnRest}>
      {children}
    </button>
  );
}
