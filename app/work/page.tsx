import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import LogoMarquee from "@/components/LogoMarquee";

export const metadata: Metadata = {
  title: "Work — Selected client outcomes",
  description:
    "A selection of products we have shipped and growth programs we have run for SaaS, e-commerce, fintech, and healthcare brands.",
};

const cases = [
  {
    tag: "SaaS · B2B",
    title: "Northstar Cloud",
    subtitle: "Doubled qualified pipeline in two quarters",
    services: ["Software", "SEO", "Marketing"],
    metric: "+214%",
    metricLabel: "qualified demos / mo",
    blurb: "Rebuilt the marketing site, shipped a self-serve onboarding flow, and stood up an SEO engine that compounds.",
    accent: "from-brand-500 to-brand-800",
  },
  {
    tag: "E-commerce · DTC",
    title: "Verdant Goods",
    subtitle: "Re-platformed Shopify, halved blended CAC",
    services: ["Software", "Marketing"],
    metric: "−42%",
    metricLabel: "blended CAC",
    blurb: "Built a custom Shopify storefront with sub-second load times and scaled paid acquisition while keeping payback under 4 months.",
    accent: "from-brand-400 to-brand-700",
  },
  {
    tag: "Fintech · Mobile",
    title: "Cobalt Finance",
    subtitle: "0→1 trading app to 1M downloads in 90 days",
    services: ["Software", "Marketing", "Brand"],
    metric: "1.2M",
    metricLabel: "downloads in 90 days",
    blurb: "Shipped a retail trading app from scratch in 11 weeks and ran the launch campaign that put it on the App Store top charts.",
    accent: "from-brand-600 to-brand-900",
  },
  {
    tag: "SaaS · DevTools",
    title: "Helios",
    subtitle: "Built the SEO engine that took them to category leader",
    services: ["SEO", "Content"],
    metric: "+318%",
    metricLabel: "organic sessions (YoY)",
    blurb: "Technical SEO foundation plus a 60-piece content cluster on Kubernetes observability — now their #1 inbound channel.",
    accent: "from-brand-500 to-brand-700",
  },
  {
    tag: "Healthcare · B2C",
    title: "Lumen Health",
    subtitle: "From clinic to digital-first care brand",
    services: ["Brand", "Software", "SEO"],
    metric: "4.2×",
    metricLabel: "patient acquisitions / mo",
    blurb: "Brand refresh, a patient portal built in 8 weeks, and an SEO program that ranks for high-intent local terms.",
    accent: "from-brand-400 to-brand-600",
  },
  {
    tag: "Operations · Internal",
    title: "Foundry",
    subtitle: "Internal ops platform replacing 14 spreadsheets",
    services: ["Software", "Data"],
    metric: "−68%",
    metricLabel: "ops headcount per $1M revenue",
    blurb: "Custom ERP-lite replacing a tangle of spreadsheets and email — finance close went from 12 days to 3.",
    accent: "from-brand-600 to-brand-800",
  },
];

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Selected work"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
        ]}
        title={
          <>
            Outcomes, not{" "}
            <span className="text-gradient">deliverables.</span>
          </>
        }
        description="A few of the partners we have helped go from interesting product to inevitable business. Every project is measured on the revenue it returned, not the deliverables it shipped."
      />

      {/* Filter row (visual only) */}
      <section className="relative bg-white py-2">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Software", "SEO", "Marketing", "Brand", "Data"].map((f, i) => (
              <span
                key={f}
                className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                  i === 0
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-200 bg-white text-ink-600 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 stagger">
            {cases.map((c) => (
              <article
                key={c.title}
                className="hover-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-95`} />
                  <div className="absolute inset-0 bg-grid-dense opacity-15 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white backdrop-blur">
                    {c.tag}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <div className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
                        {c.title}
                      </div>
                      <div className="mt-1 text-sm text-white/85">{c.subtitle}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-heading text-2xl font-semibold leading-none tracking-tight text-white md:text-3xl">
                        {c.metric}
                      </div>
                      <div className="mt-0.5 text-[10px] uppercase tracking-wider text-white/85">
                        {c.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5">
                    {c.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-[11px] font-medium text-brand-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{c.blurb}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-900"
                  >
                    Request case study
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />
      <CTA />
    </SiteShell>
  );
}
