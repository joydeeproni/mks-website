import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "filled" | "outline" | "ghost" | "filled-dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-200 select-none";

const sizeStyles: Record<Size, string> = {
  md: "px-6 py-2 text-[15px]",
  lg: "px-7 py-3 text-base",
};

const variantStyles: Record<Variant, string> = {
  filled:
    "bg-ivory text-clay-700 border-2 border-ivory hover:bg-transparent hover:text-ivory",
  outline:
    "bg-transparent text-ivory border-2 border-ivory hover:bg-ivory hover:text-clay-700",
  ghost: "bg-transparent text-clay-700 hover:bg-clay-700 hover:text-ivory",
  "filled-dark":
    "bg-clay-700 text-ivory border-2 border-clay-700 hover:bg-transparent hover:text-clay-700",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type ButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "filled", size = "md", className, children } = props;
  const classes = cn(base, sizeStyles[size], variantStyles[variant], className);

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props as AnchorProps;
    void _v;
    void _s;
    void _c;
    void _ch;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  const {
    variant: _v,
    size: _s,
    className: _c,
    children: _ch,
    ...rest
  } = props as ButtonProps;
  void _v;
  void _s;
  void _c;
  void _ch;
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
