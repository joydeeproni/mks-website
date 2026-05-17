import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "solid" | "outline" | "pill" | "link";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonTone = "light" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 font-bold tracking-[-0.16px] " +
  "transition-colors duration-200 select-none whitespace-nowrap";

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-[18px] pt-[7px] pb-[6px] text-[14px] leading-[24px]",
  md: "px-[24px] pt-[9px] pb-[8px] text-[16px] leading-[30px]",
  lg: "px-[28px] pt-[11px] pb-[10px] text-[17px] leading-[32px]",
};

const pillSize: Record<ButtonSize, string> = {
  sm: "px-[22px] py-[7px] text-[14px] leading-[18px] rounded-full font-normal",
  md: "px-[29px] pt-[9.25px] pb-[9.95px] text-[16px] leading-[19.2px] rounded-full font-normal",
  lg: "px-[32px] pt-[11px] pb-[12px] text-[17px] leading-[20px] rounded-full font-normal",
};

const variantStyles = (variant: ButtonVariant, tone: ButtonTone) => {
  if (variant === "pill") {
    return tone === "light"
      ? "border border-white text-white hover:bg-white hover:text-black"
      : "border border-black text-black hover:bg-black hover:text-white";
  }
  if (variant === "solid") {
    return tone === "light"
      ? "bg-white border-2 border-white text-clay-700 hover:bg-transparent hover:text-white"
      : "bg-clay-700 border-2 border-clay-700 text-white hover:bg-transparent hover:text-clay-700";
  }
  if (variant === "outline") {
    return tone === "light"
      ? "border-2 border-white text-white hover:bg-white hover:text-clay-700"
      : "border-2 border-clay-700 text-clay-700 hover:bg-clay-700 hover:text-white";
  }
  // link
  return tone === "light"
    ? "text-white link-button"
    : "text-clay-700 link-button";
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
  const sizing = variant === "pill" ? pillSize[size] : sizeStyles[size];
  const classes = cn(base, sizing, variantStyles(variant, tone), className);

  if ("href" in props && props.href) {
    const {
      variant: _v,
      size: _s,
      tone: _t,
      className: _c,
      children,
      href,
      ...rest
    } = props as AnchorProps;
    void _v;
    void _s;
    void _t;
    void _c;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  const {
    variant: _v,
    size: _s,
    tone: _t,
    className: _c,
    children,
    ...rest
  } = props as NativeButtonProps;
  void _v;
  void _s;
  void _t;
  void _c;
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
