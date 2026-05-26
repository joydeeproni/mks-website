"use client";

import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-3 w-full max-w-[420px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@studio.com"
        className="bg-transparent border border-white/40 rounded-sm px-4 py-3.5 text-body text-white placeholder:text-white/40 focus:outline-none focus:border-white"
      />
      <Button type="submit" variant="solid" tone="light" className="self-start">
        Subscribe
      </Button>
    </form>
  );
}
