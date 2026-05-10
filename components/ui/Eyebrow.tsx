import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function Eyebrow({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2 text-current/70",
        className
      )}
      {...props}
    >
      <span className="block h-px w-6 bg-current opacity-50" />
      {children}
    </span>
  );
}
