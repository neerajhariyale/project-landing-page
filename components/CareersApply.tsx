"use client";

import { useState } from "react";

const years = ["1st year", "2nd year", "3rd year", "4th year", "Final year", "Recently graduated"];
const availability = ["20 hrs/week", "25 hrs/week", "30 hrs/week", "Full-time (40 hrs)"];

export default function CareersApply() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-card">
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-brand-100/80 blur-3xl" />
        <div className="relative flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 ring-1 ring-white/40 shadow-cta">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-ink-900">
            Application received.
          </h3>
          <p className="mt-2 max-w-sm text-sm text-ink-600">
            We read every application within 2 working days. You will hear from
            our talent partner by email — check your spam folder just in case.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-ink-700 transition-colors duration-200 hover:bg-slate-50"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-card md:p-8"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-200/50 blur-3xl" />

      <div className="relative space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="fullName" label="Full name" placeholder="Ada Lovelace" autoComplete="name" required />
          <Field id="email" type="email" label="Email" placeholder="ada@college.edu" autoComplete="email" required />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="phone" type="tel" label="Phone (WhatsApp ok)" placeholder="+91 98765 43210" autoComplete="tel" />
          <Field id="city" label="City" placeholder="Bhopal" autoComplete="address-level2" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="college" label="College / University" placeholder="IIT Bombay, NMIMS, Christ University…" />
          <Field id="degree" label="Degree & stream" placeholder="B.Tech CSE, BBA Marketing, BA Economics…" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500">
              Year of study
            </label>
            <div className="flex flex-wrap gap-2">
              {years.map((y) => (
                <ChipInput key={y} name="year" label={y} type="radio" />
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500">
              Weekly availability
            </label>
            <div className="flex flex-wrap gap-2">
              {availability.map((a) => (
                <ChipInput key={a} name="availability" label={a} type="radio" />
              ))}
            </div>
          </div>
        </div>

        <Field
          id="linkedin"
          type="url"
          label="LinkedIn profile (optional)"
          placeholder="https://www.linkedin.com/in/yourname"
        />

        <Field
          id="resume"
          type="url"
          label="Resume link (optional — Google Drive / Notion)"
          placeholder="https://drive.google.com/…"
        />

        <div>
          <label
            htmlFor="why"
            className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500"
          >
            Why do you want this internship?{" "}
            <span className="text-ink-400 normal-case tracking-normal">
              (2–4 sentences — be specific)
            </span>
          </label>
          <textarea
            id="why"
            name="why"
            rows={4}
            required
            placeholder="What attracted you to KS Technology? What do you want to learn? What have you already tried in sales / outreach / building things?"
            className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <label className="flex cursor-pointer items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm text-ink-700">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 cursor-pointer rounded border-slate-300 text-brand-600 focus:ring-brand-300"
          />
          <span>
            I'm currently enrolled in college / recently graduated and I'm
            available for at least 3 months. I have read the role description.
          </span>
        </label>

        <button
          type="submit"
          className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 px-5 py-3.5 text-sm font-semibold text-white shadow-cta transition-all duration-200 hover:translate-y-[-1px] hover:from-brand-700 hover:to-brand-900"
        >
          Submit application
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <p className="text-center text-[11px] text-ink-500">
          We respond within 2 working days. Your data is used only for hiring —
          never shared, sold, or used for marketing.
        </p>
      </div>
    </form>
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
