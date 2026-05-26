"use client";

import { Button } from "@/components/ui/Button";

/**
 * Footer brochure-request form. Submitting the email triggers a follow-up
 * (capabilities brochure delivered to the inbox). Wired as a no-op preventDefault
 * for now; hook into your email/CRM provider when ready.
 */
export function BrochureForm() {
  return (
    <form
      className="flex flex-col gap-3 w-full max-w-[420px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="sr-only" htmlFor="brochure-email">
        Work email
      </label>
      <input
        id="brochure-email"
        type="email"
        required
        placeholder="you@brand.com"
        className="bg-transparent border border-white/40 rounded-sm px-4 py-3.5 text-body text-white placeholder:text-white/40 focus:outline-none focus:border-white"
      />
      <Button type="submit" variant="solid" tone="light" className="self-start">
        Send Me the Brochure
      </Button>
    </form>
  );
}

// Legacy alias — kept so any older imports don't break.
export const NewsletterForm = BrochureForm;
