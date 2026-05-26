import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "solid" | "outline" | "link" | "pill";
export type ButtonSize = "sm" | "md";
export type ButtonTone = "light" | "dark";

/* Canonical button spec per Figma:
 *   solid / outline: 16/700 Trade Gothic, lh 30, tracking -0.01em, px-9 py-3, 2px border
 *   link:            16/700, no border, no padding (text-only CTA)
 *   pill:            16/700, 1px border, rounded-full, px-7 py-2 (Footer help links) */
const base =
  "inline-flex items-center justify-center gap-2 " +
  "font-bold text-button " +
  "transition-colors duration-200 select-none whitespace-nowrap";

const blockSize: Record<ButtonSize, string> = {
  md: "px-9 py-3 border-2",
  sm: "px-6 py-2 border-2",
};

const pillSize: Record<ButtonSize, string> = {
  md: "px-7 py-2 border rounded-full",
  sm: "px-5 py-1.5 border rounded-full",
};

const variantStyles = (variant: ButtonVariant, tone: ButtonTone) => {
  if (variant === "pill") {
    return tone === "light"
      ? "border-white text-white hover:bg-white hover:text-black"
      : "border-clay-700 text-clay-700 hover:bg-clay-700 hover:text-white";
  }
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

function sizingFor(variant: ButtonVariant, size: ButtonSize) {
  if (variant === "pill") return pillSize[size];
  if (variant === "link") return "";
  return blockSize[size];
}

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
    sizingFor(variant, size),
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
  // Default to type="button" so a Button inside a <form> doesn't accidentally
  // submit. Consumers can pass type="submit" — it overrides via spread order.
  return (
    <button type="button" className={classes} {...btnRest}>
      {children}
    </button>
  );
}
