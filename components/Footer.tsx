"use client";

import Link from "next/link";
import Logo from "./Logo";

const sections = [
  {
    title: "Services",
    links: [
      { label: "Software engineering", href: "/services/software" },
      { label: "SEO optimization", href: "/services/seo" },
      { label: "Performance marketing", href: "/services/marketing" },
      { label: "Brand & design", href: "/services" },
      { label: "Data & analytics", href: "/services" },
      { label: "AI & automation", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Pricing", href: "/pricing" },
      { label: "Insights", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Playbooks", href: "/blog" },
      { label: "SEO audit (free)", href: "/contact" },
      { label: "Newsletter", href: "/blog" },
      { label: "BDE Internship", href: "/careers#bde-intern" },
      { label: "Trust & security", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-gradient-to-b from-white to-brand-50/40 pt-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
              <Logo className="h-10 w-10" />
              <span className="font-heading text-base font-semibold tracking-tight text-ink-900">
                KS Technology
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-ink-600">
              Innovate · Connect · Elevate. We build software, scale search, and
              run growth marketing for ambitious teams worldwide.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-md items-center gap-2 rounded-xl border border-slate-300 bg-white p-1.5 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-200"
            >
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email address"
                className="w-full bg-transparent px-3 py-2 text-sm text-ink-900 placeholder:text-ink-400 outline-none"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:from-brand-700 hover:to-brand-900"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-[11px] text-ink-500">
              One concise email per month. No spam, ever.
            </p>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-heading text-sm font-semibold text-ink-900">
                {s.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="cursor-pointer text-sm text-ink-600 transition-colors duration-200 hover:text-brand-700"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-8 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} KS Technology, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-ink-600">
            <Link href="/privacy" className="cursor-pointer hover:text-brand-700">
              Privacy
            </Link>
            <Link href="/terms" className="cursor-pointer hover:text-brand-700">
              Terms
            </Link>
            <Link href="/cookies" className="cursor-pointer hover:text-brand-700">
              Cookies
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <SocialIcon href="#" label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 3H3.55C3.25 3 3 3.25 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55c0-.3-.25-.55-.55-.55zM8.34 18.34H5.67V9.67h2.67v8.67zM7 8.49a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.85h-2.67v-4.21c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.24v4.28h-2.67V9.67h2.56v1.19h.03c.36-.68 1.23-1.39 2.54-1.39 2.71 0 3.21 1.78 3.21 4.1v4.77z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#" label="X / Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.05L4.6 22H1.34l8.04-9.18L1 2h7.02l4.85 6.42L18.244 2zm-1.2 18.04h1.86L7.06 3.87H5.06l11.984 16.17z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#" label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.7.11 2.5.33 1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="cursor-pointer rounded-lg border border-slate-300 bg-white p-2 text-ink-600 transition-colors duration-200 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
    >
      {children}
    </a>
  );
}
