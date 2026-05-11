"use client";

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-[12px] w-[384px]"
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
        className="bg-transparent border border-white/40 rounded-sm px-[16px] py-[14px] text-[16px] text-white placeholder:text-white/40 focus:outline-none focus:border-white"
      />
      <button
        type="submit"
        className="bg-white text-black px-[20px] py-[14px] text-[16px] font-bold tracking-[-0.16px] hover:bg-white/90"
      >
        Subscribe
      </button>
    </form>
  );
}
