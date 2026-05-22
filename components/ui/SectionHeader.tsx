import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  heading: ReactNode;
  body?: ReactNode;
  cta?: ReactNode;
  tone?: "light" | "dark";
  align?: "end" | "start";
  className?: string;
};

/**
 * Asymmetric section header: heading on left 6 cols, body+CTA on right 6 cols.
 * Mobile stacks both into full width. Matches the 6+6 pattern in
 * Figma sections 1:75, 1:87, 1:141.
 */
export function SectionHeader({
  heading,
  body,
  cta,
  tone = "dark",
  align = "end",
  className,
}: SectionHeaderProps) {
  const text = tone === "light" ? "text-white" : "text-clay-700";
  return (
    <div
      className={cn(
        "grid-12",
        align === "end" ? "lg:items-end" : "lg:items-start",
        className
      )}
    >
      <h2
        className={cn(
          "col-span-4 md:col-span-8 lg:col-span-6",
          "font-display text-h2",
          text
        )}
      >
        {heading}
      </h2>
      {(body || cta) && (
        <div
          className={cn(
            "col-span-4 md:col-span-8 lg:col-span-6",
            "flex flex-col gap-6",
            text
          )}
        >
          {body && <p className="text-body">{body}</p>}
          {cta}
        </div>
      )}
    </div>
  );
}
