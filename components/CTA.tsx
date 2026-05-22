"use client";

import { useState } from "react";

const services = [
  "Software / web app",
  "SEO & content",
  "Performance marketing",
  "Brand & design",
  "Data & analytics",
  "Not sure yet",
];

const budgets = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k+"];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50/70 py-24 md:py-32">
      {/* Aurora */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-50 blur-3xl">
        <div className="h-full w-full rounded-full bg-aurora-light animate-aurora-spin opacity-70" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-40" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Pitch */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_2px_rgba(14,165,233,0.5)]" />
              Let's talk
            </div>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight text-ink-900 md:text-5xl lg:text-6xl">
              <span className="text-gradient-soft">Tell us where you</span>
              <br />
              <span className="text-gradient">want to grow.</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-ink-600 md:text-lg">
              Drop a few details and a partner — not a sales rep — will get back
              within one business day with a candid view of what is possible.
            </p>

            <div className="mt-10 space-y-4">
              <ContactRow
                icon={<MailIcon />}
                label="Email us"
                value="hello.kstechnology@gmail.com"
              />
              <ContactRow
                icon={<PhoneIcon />}
                label="Call us"
                value="+91 *********"
              />
              <ContactRow
                icon={<PinIcon />}
                label="Offices"
                value="Bhopal, Madhya Pradesh · Remote"
              />
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              {[
                { v: "< 24h", l: "Response time" },
                { v: "30-day", l: "Off-ramp clause" },
                { v: "NDA-first", l: "Always" },
              ].map((b) => (
                <div key={b.l}>
                  <div className="font-heading text-xl font-semibold text-ink-900">
                    {b.v}
                  </div>
                  <div className="mt-1 text-xs text-ink-500">{b.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glow-ring rounded-3xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-card md:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-200/60 blur-3xl" />

              {submitted ? (
                <SuccessState onReset={() => setSubmitted(false)} />
              ) : (
                <div className="relative space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field id="name" label="Full name" placeholder="Ada Lovelace" autoComplete="name" required />
                    <Field id="company" label="Company" placeholder="Acme Corp" autoComplete="organization" />
                  </div>
                  <Field id="email" type="email" label="Work email" placeholder="ada@acme.com" autoComplete="email" required />

                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500">
                      What do you need help with?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <ChipInput key={s} name="service" label={s} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500">
                      Monthly budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <ChipInput key={b} name="budget" label={b} type="radio" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="A short note on goals, timeline, anything we should know…"
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 px-5 py-3.5 text-sm font-semibold text-white shadow-cta transition-all duration-200 hover:translate-y-[-1px] hover:from-brand-600 hover:to-brand-800"
                  >
                    Send message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>

                  <p className="text-center text-[11px] text-ink-500">
                    By submitting, you agree to our privacy policy. We never
                    share your details.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}

function ChipInput({
  label,
  name,
  type = "checkbox",
}: {
  label: string;
  name: string;
  type?: "checkbox" | "radio";
}) {
  const id = `${name}-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <label htmlFor={id} className="group cursor-pointer select-none">
      <input
        id={id}
        type={type}
        name={name}
        value={label}
        className="peer sr-only"
      />
      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs text-ink-700 transition-all duration-200 hover:border-brand-400 hover:bg-brand-50 peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-800 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-300">
        {label}
      </span>
    </label>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="relative flex flex-col items-center py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 ring-1 ring-white/40 shadow-cta">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-ink-900">
        Message received.
      </h3>
      <p className="mt-2 max-w-sm text-sm text-ink-600">
        A partner will personally respond within one business day. In the
        meantime, expect a calendar suggestion.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-ink-700 transition-colors duration-200 hover:bg-slate-50"
      >
        Send another
      </button>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-700">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-ink-500">
          {label}
        </div>
        <div className="text-sm font-semibold text-ink-900">{value}</div>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
