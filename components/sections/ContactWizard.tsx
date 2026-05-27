"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "motion/react";

type FormData = {
  productTypes: string[];
  brandName: string;
  brandWebsite: string;
  brandDescription: string;
  quantity: string;
  timeline: string;
  budgetRange: string;
  additionalDetails: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactCountry: string;
};

const PRODUCT_OPTIONS = [
  "Bags",
  "Belts",
  "Scarves & Textiles",
  "Wallets & Small Leather Goods",
  "Journals & Notebooks",
  "Custom / Other",
];

const QUANTITY_OPTIONS = [
  "50–100 pieces (small batch)",
  "100–500 pieces",
  "500–2,000 pieces",
  "2,000+ pieces",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–2 months",
  "Within 3–6 months",
  "No rush — just exploring",
];

const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000–$15,000",
  "$15,000–$50,000",
  "$50,000+",
  "Let's discuss",
];

const STEPS = [
  { label: "Products", n: 1 },
  { label: "Your Brand", n: 2 },
  { label: "Requirements", n: 3 },
  { label: "Contact", n: 4 },
];

export function ContactWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    productTypes: [],
    brandName: "",
    brandWebsite: "",
    brandDescription: "",
    quantity: "",
    timeline: "",
    budgetRange: "",
    additionalDetails: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    contactCountry: "",
  });

  const update = (field: keyof FormData, value: string | string[]) =>
    setForm((f) => ({ ...f, [field]: value }));

  const toggleProduct = (product: string) => {
    const current = form.productTypes;
    update(
      "productTypes",
      current.includes(product)
        ? current.filter((p) => p !== product)
        : [...current, product]
    );
  };

  const canAdvance = () => {
    if (step === 1) return form.productTypes.length > 0;
    if (step === 2) return form.brandName.trim().length > 0;
    if (step === 3) return form.quantity.length > 0;
    if (step === 4)
      return form.contactName.trim().length > 0 && form.contactEmail.trim().length > 0;
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-[clamp(40px,5vw,80px)] text-center">
        <div className="w-16 h-16 rounded-full bg-olive-500 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none">
            <path
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-h3 text-clay-700">
          Thank you, {form.contactName}.
        </h3>
        <p className="text-body text-clay-700/75 max-w-[480px]">
          We&apos;ve received your enquiry and will get back to you within 24
          hours. If it&apos;s urgent, call us at{" "}
          <span className="font-bold text-clay-700">+91 98300 30794</span>.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full bg-transparent border border-clay-700/20 rounded-[6px] px-4 py-3 text-body text-clay-700 placeholder:text-clay-700/40 focus:outline-none focus:border-clay-700/50 transition-colors";

  return (
    <div className="flex flex-col gap-[clamp(32px,4vw,48px)]">
      {/* Progress bar */}
      <div className="flex items-center gap-2">
        {STEPS.map((s) => (
          <button
            key={s.n}
            type="button"
            onClick={() => s.n < step && setStep(s.n)}
            className="flex-1 flex flex-col gap-2 group"
          >
            <div
              className={`h-1 rounded-full transition-colors duration-300 ${
                s.n <= step ? "bg-clay-700" : "bg-clay-700/15"
              }`}
            />
            <span
              className={`text-[12px] tracking-[0.1em] uppercase font-bold transition-colors ${
                s.n <= step ? "text-clay-700" : "text-clay-700/35"
              }`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-6"
        >
          {step === 1 && (
            <>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-h3 text-clay-700">
                  What are you looking for?
                </h3>
                <p className="text-body text-clay-700/65">
                  Select all product categories that interest you.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PRODUCT_OPTIONS.map((product) => (
                  <button
                    key={product}
                    type="button"
                    onClick={() => toggleProduct(product)}
                    className={`px-5 py-4 rounded-[8px] border text-left text-button font-bold transition-all duration-200 ${
                      form.productTypes.includes(product)
                        ? "border-clay-700 bg-clay-700 text-white"
                        : "border-clay-700/20 text-clay-700 hover:border-clay-700/40"
                    }`}
                  >
                    {product}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-h3 text-clay-700">
                  Tell us about your brand.
                </h3>
                <p className="text-body text-clay-700/65">
                  Help us understand your brand so we can tailor our response.
                </p>
              </div>
              <div className="flex flex-col gap-4 max-w-[560px]">
                <input
                  type="text"
                  placeholder="Brand / company name *"
                  value={form.brandName}
                  onChange={(e) => update("brandName", e.target.value)}
                  className={inputBase}
                />
                <input
                  type="url"
                  placeholder="Website (optional)"
                  value={form.brandWebsite}
                  onChange={(e) => update("brandWebsite", e.target.value)}
                  className={inputBase}
                />
                <textarea
                  placeholder="Tell us a bit about your brand and what you're building..."
                  value={form.brandDescription}
                  onChange={(e) => update("brandDescription", e.target.value)}
                  rows={4}
                  className={inputBase + " resize-none"}
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-h3 text-clay-700">
                  Quantities & timeline.
                </h3>
                <p className="text-body text-clay-700/65">
                  Give us an idea of your scale and timeline.
                </p>
              </div>
              <div className="flex flex-col gap-6 max-w-[560px]">
                <fieldset className="flex flex-col gap-3">
                  <legend className="text-[12px] tracking-[0.1em] uppercase font-bold text-clay-700/55 mb-2">
                    Estimated quantity *
                  </legend>
                  {QUANTITY_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 px-4 py-3 rounded-[6px] border cursor-pointer transition-all ${
                        form.quantity === opt
                          ? "border-clay-700 bg-clay-700/5"
                          : "border-clay-700/15 hover:border-clay-700/30"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          form.quantity === opt
                            ? "border-clay-700"
                            : "border-clay-700/30"
                        }`}
                      >
                        {form.quantity === opt && (
                          <div className="w-2.5 h-2.5 rounded-full bg-clay-700" />
                        )}
                      </div>
                      <span className="text-body text-clay-700">{opt}</span>
                    </label>
                  ))}
                </fieldset>
                <fieldset className="flex flex-col gap-3">
                  <legend className="text-[12px] tracking-[0.1em] uppercase font-bold text-clay-700/55 mb-2">
                    Timeline
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {TIMELINE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => update("timeline", opt)}
                        className={`px-4 py-2 rounded-full border text-[15px] font-bold transition-all ${
                          form.timeline === opt
                            ? "border-clay-700 bg-clay-700 text-white"
                            : "border-clay-700/20 text-clay-700 hover:border-clay-700/40"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="flex flex-col gap-3">
                  <legend className="text-[12px] tracking-[0.1em] uppercase font-bold text-clay-700/55 mb-2">
                    Budget range
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => update("budgetRange", opt)}
                        className={`px-4 py-2 rounded-full border text-[15px] font-bold transition-all ${
                          form.budgetRange === opt
                            ? "border-clay-700 bg-clay-700 text-white"
                            : "border-clay-700/20 text-clay-700 hover:border-clay-700/40"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <textarea
                  placeholder="Anything else we should know? (materials, design references, special requirements...)"
                  value={form.additionalDetails}
                  onChange={(e) => update("additionalDetails", e.target.value)}
                  rows={3}
                  className={inputBase + " resize-none"}
                />
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-h3 text-clay-700">
                  How can we reach you?
                </h3>
                <p className="text-body text-clay-700/65">
                  We&apos;ll respond within 24 hours.
                </p>
              </div>
              <div className="flex flex-col gap-4 max-w-[560px]">
                <input
                  type="text"
                  placeholder="Your name *"
                  value={form.contactName}
                  onChange={(e) => update("contactName", e.target.value)}
                  className={inputBase}
                />
                <input
                  type="email"
                  placeholder="Email address *"
                  value={form.contactEmail}
                  onChange={(e) => update("contactEmail", e.target.value)}
                  className={inputBase}
                />
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  value={form.contactPhone}
                  onChange={(e) => update("contactPhone", e.target.value)}
                  className={inputBase}
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={form.contactCountry}
                  onChange={(e) => update("contactCountry", e.target.value)}
                  className={inputBase}
                />
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="text-button font-bold text-clay-700/65 hover:text-clay-700 transition-colors"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}
        {step < 4 ? (
          <Button
            variant="solid"
            tone="dark"
            onClick={() => canAdvance() && setStep((s) => s + 1)}
            className={!canAdvance() ? "opacity-40 pointer-events-none" : ""}
          >
            Continue →
          </Button>
        ) : (
          <Button
            variant="solid"
            tone="dark"
            onClick={() => canAdvance() && handleSubmit()}
            className={!canAdvance() ? "opacity-40 pointer-events-none" : ""}
          >
            Send enquiry
          </Button>
        )}
      </div>
    </div>
  );
}
