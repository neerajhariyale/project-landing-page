import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Insights — Playbooks for software, SEO & growth",
  description:
    "Field notes from running software, SEO, and marketing engagements for ambitious teams. Practical playbooks, not motivational fluff.",
};

const featured = {
  category: "Playbook",
  title: "The compounding-revenue playbook: how to turn a marketing site into a growth flywheel",
  excerpt:
    "A 9-step engineering + SEO + paid playbook we run for every new client — and the metrics it consistently moves in the first 90 days.",
  author: "Kavin Sharma",
  read: "12 min read",
  date: "Apr 18, 2026",
  accent: "from-brand-500 to-brand-800",
};

const posts = [
  {
    category: "SEO",
    title: "Programmatic SEO done right (and the way most teams ruin it)",
    excerpt: "The architecture and content quality bar that separates programmatic pages that rank from the ones Google ignores.",
    author: "Daniel Reyes",
    read: "9 min read",
    date: "Apr 10, 2026",
    accent: "from-brand-400 to-brand-600",
  },
  {
    category: "Engineering",
    title: "Shipping AI features without a six-month detour",
    excerpt: "Practical patterns for adding LLM-powered features that ship in days and survive in production.",
    author: "Priya Subramanian",
    read: "11 min read",
    date: "Apr 02, 2026",
    accent: "from-brand-600 to-brand-800",
  },
  {
    category: "Marketing",
    title: "The CAC payback model your CFO actually wants to see",
    excerpt: "A simple, defensible model that ties paid spend to contribution margin and survives a board meeting.",
    author: "Hana Sato",
    read: "7 min read",
    date: "Mar 24, 2026",
    accent: "from-brand-500 to-brand-700",
  },
  {
    category: "Engineering",
    title: "Next.js performance: the 10 things we always fix first",
    excerpt: "Practical wins that take an audited Next.js codebase from 70 → 95+ Lighthouse without a rewrite.",
    author: "Jin Park",
    read: "8 min read",
    date: "Mar 14, 2026",
    accent: "from-brand-400 to-brand-700",
  },
  {
    category: "SEO",
    title: "Why we stopped guest-posting and what we do instead",
    excerpt: "A field report on the post-2024 link-building landscape and the digital PR motion that's working for us.",
    author: "Daniel Reyes",
    read: "6 min read",
    date: "Mar 03, 2026",
    accent: "from-brand-500 to-brand-700",
  },
  {
    category: "Design",
    title: "Designing marketing sites that pass the 5-second test",
    excerpt: "A short heuristic for above-the-fold design that converts cold traffic from paid social.",
    author: "Marcus Webb",
    read: "5 min read",
    date: "Feb 22, 2026",
    accent: "from-brand-300 to-brand-500",
  },
];

const categories = ["All", "Engineering", "SEO", "Marketing", "Design", "Playbook"];

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Insights"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/blog" },
        ]}
        title={
          <>
            Field notes for teams that{" "}
            <span className="text-gradient">build and ship.</span>
          </>
        }
        description="Practical playbooks from running engineering, SEO, and marketing engagements. No motivational fluff — just things that worked, things that didn't, and why."
      />

      {/* Featured */}
      <section className="relative bg-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <article className="hover-lift relative grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card lg:grid-cols-2">
            <div className={`relative aspect-[16/10] overflow-hidden lg:aspect-auto`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${featured.accent}`} />
              <div className="absolute inset-0 bg-grid-dense opacity-15 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                Featured · {featured.category}
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-700">
                {featured.category}
              </div>
              <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-ink-900 md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-ink-600">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-ink-500">
                <span className="font-semibold text-ink-700">{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.read}</span>
              </div>
              <Link
                href="/blog"
                className="mt-7 inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 px-5 py-3 text-sm font-semibold text-white shadow-cta transition-all duration-200 hover:from-brand-700 hover:to-brand-900"
              >
                Read playbook
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Categories */}
      <section className="relative bg-white pt-12 pb-2">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                  i === 0
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-200 bg-white text-ink-600 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="relative bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 stagger">
            {posts.map((p) => (
              <article
                key={p.title}
                className="hover-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                  <div className="absolute inset-0 bg-grid-dense opacity-15 mix-blend-overlay" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white backdrop-blur">
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-xs">
                    <div className="text-ink-500">
                      <span className="font-medium text-ink-700">{p.author}</span>{" "}
                      · {p.date}
                    </div>
                    <span className="text-ink-500">{p.read}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="relative bg-slate-50/70 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
            Newsletter
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            One short email a month. <span className="text-gradient">Worth reading.</span>
          </h2>
          <p className="mt-3 text-ink-600">
            New playbooks, lessons, and the occasional teardown — straight to your inbox.
          </p>
          <form
            action="#"
            className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-xl border border-slate-300 bg-white p-1.5 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-200"
          >
            <input
              type="email"
              placeholder="you@company.com"
              aria-label="Email address"
              className="w-full bg-transparent px-3 py-2 text-sm text-ink-900 placeholder:text-ink-400 outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 px-4 py-2 text-xs font-semibold text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <CTA />
    </SiteShell>
  );
}
