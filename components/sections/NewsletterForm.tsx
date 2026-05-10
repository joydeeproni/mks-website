"use client";

export function NewsletterForm() {
  return (
    <form
      className="mt-6 flex flex-col sm:flex-row gap-3"
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
        className="flex-1 bg-transparent border border-ivory/25 rounded-sm px-4 py-3 text-sm placeholder:text-ivory/40 focus:outline-none focus:border-ivory"
      />
      <button
        type="submit"
        className="bg-ivory text-clay-900 px-5 py-3 text-sm font-semibold tracking-tight hover:bg-cream"
      >
        Subscribe
      </button>
    </form>
  );
}
