"use client";

import { Button } from "@/components/ui/Button";
import { useT } from "@/components/LanguageProvider";

export function BrochureForm() {
  const t = useT();
  return (
    <form
      className="flex flex-col gap-3 w-full max-w-[420px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="sr-only" htmlFor="brochure-email">
        {t.footer.brochurePlaceholder}
      </label>
      <input
        id="brochure-email"
        type="email"
        required
        placeholder={t.footer.brochurePlaceholder}
        className="bg-transparent border border-white/40 rounded-sm px-4 py-3.5 text-body text-white placeholder:text-white/40 focus:outline-none focus:border-white"
      />
      <Button type="submit" variant="solid" tone="light" className="self-start">
        {t.footer.brochureSubmit}
      </Button>
    </form>
  );
}

export const NewsletterForm = BrochureForm;
