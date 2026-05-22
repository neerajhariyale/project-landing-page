"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-slate-200 bg-white/95 backdrop-blur-xl shadow-soft"
            : "border-slate-200/70 bg-white/80 backdrop-blur-md"
        }`}
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 cursor-pointer group"
          aria-label="KS Technology — home"
        >
          <Logo className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />
          <span className="font-heading text-[15px] font-semibold tracking-tight text-ink-900">
            KS Technology
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                  isActive(l.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-600 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden sm:inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:from-brand-700 hover:to-brand-900 hover:shadow-cta"
          >
            Book a call
            <ArrowIcon />
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden cursor-pointer rounded-lg border border-slate-200 bg-white p-2 text-ink-800 hover:bg-slate-50"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-x-4 top-[80px] z-40 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-card backdrop-blur-xl md:hidden"
          role="dialog"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block cursor-pointer rounded-lg px-3 py-3 text-sm ${
                    isActive(l.href)
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-1 p-1">
              <Link
                href="/contact"
                className="block cursor-pointer rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 px-3 py-3 text-center text-sm font-semibold text-white"
              >
                Book a call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
