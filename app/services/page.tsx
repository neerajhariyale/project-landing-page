import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services — Software, SEO & Marketing Consulting",
  description:
    "Six disciplines under one accountable team. Software engineering, SEO, performance marketing, brand design, data, and AI automation.",
};

const featured = [
  {
    href: "/services/software",
    title: "Software Engineering",
    blurb: "Production web apps, internal tools, and APIs — Next.js, TypeScript, modern cloud.",
    bullets: ["MVP to scale", "Cloud architecture", "AI features"],
    accent: "from-brand-500 to-brand-700",
  },
  {
    href: "/services/seo",
    title: "SEO Optimization",
    blurb: "Technical SEO, content strategy, and link building that move organic revenue.",
    bullets: ["Technical audits", "Content engine", "Authority building"],
    accent: "from-brand-600 to-brand-800",
  },
  {
    href: "/services/marketing",
    title: "Performance Marketing",
    blurb: "Paid acquisition that pays back. Creative testing and unit-economics scaling.",
    bullets: ["Google & Meta ads", "Creative ops", "MMM & attribution"],
    accent: "from-brand-400 to-brand-700",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        title={
          <>
            Six disciplines.{" "}
            <span className="text-gradient">One accountable team.</span>
          </>
        }
        description="We collapse software, search, and marketing into a single revenue-focused practice — so every shipped feature, page, and ad compounds into pipeline."
      />

      {/* Featured service deep-links */}
      <section className="relative bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {featured.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="hover-lift group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-soft"
              >
                <div
                  className={`pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-md`}
                  >
                    →
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-ink-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{f.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] text-ink-600"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Explore service
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Process />
      <CTA />
    </SiteShell>
  );
}
