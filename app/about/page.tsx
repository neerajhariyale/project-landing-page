import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import LogoMarquee from "@/components/LogoMarquee";

export const metadata: Metadata = {
  title: "About — Innovate · Connect · Elevate",
  description:
    "KS Technology is a global consulting partner blending software, SEO, and marketing under one accountable team.",
};

const values = [
  {
    title: "Innovate",
    description:
      "We build with what's next — not last decade's stack. AI is woven into product, ops, and growth from day one.",
    accent: "from-brand-500 to-brand-700",
  },
  {
    title: "Connect",
    description:
      "Software, SEO, and marketing under one roof. No agency ping-pong. Decisions are shared, accountability is shared.",
    accent: "from-brand-600 to-brand-800",
  },
  {
    title: "Elevate",
    description:
      "Outcomes over outputs. Our scorecard is your scorecard — pipeline, payback, NPS, and stock-price reality.",
    accent: "from-brand-400 to-brand-700",
  },
];

const team = [
  { name: "Kavin Sharma", role: "Founder & CEO", initials: "KS", accent: "from-brand-600 to-brand-800" },
  { name: "Priya Subramanian", role: "VP Engineering", initials: "PS", accent: "from-brand-500 to-brand-700" },
  { name: "Daniel Reyes", role: "Head of SEO", initials: "DR", accent: "from-brand-400 to-brand-600" },
  { name: "Hana Sato", role: "Head of Growth", initials: "HS", accent: "from-brand-500 to-brand-800" },
  { name: "Marcus Webb", role: "Principal Designer", initials: "MW", accent: "from-brand-300 to-brand-500" },
  { name: "Aisha Khalid", role: "Head of Data", initials: "AK", accent: "from-brand-600 to-brand-900" },
  { name: "Oliver Brandt", role: "Engagement Director", initials: "OB", accent: "from-brand-500 to-brand-700" },
  { name: "Jin Park", role: "Staff Engineer", initials: "JP", accent: "from-brand-400 to-brand-700" },
];

const milestones = [
  { year: "2018", title: "Founded in Bhopal", body: "Started as a two-person engineering shop in Madhya Pradesh, building MVPs for early-stage founders." },
  { year: "2020", title: "Added SEO & content practice", body: "Realised great software dies without distribution — built a search engine that compounds." },
  { year: "2022", title: "Went fully remote", body: "Adopted a remote-first model and began serving Series A–C SaaS and DTC teams across India, the US, and Europe." },
  { year: "2024", title: "Crossed $240M client revenue influenced", body: "Across 120+ shipped products and active growth programs." },
  { year: "2026", title: "AI-native delivery model", body: "Rebuilt every internal workflow around LLMs — speed and quality both up; team size flat." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About KS Technology"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
        title={
          <>
            One partner.{" "}
            <span className="text-gradient">Software, search, and growth.</span>
          </>
        }
        description="We were tired of watching brilliant products fail because their software, SEO, and marketing lived in three siloed agencies. So we built one team that does all three — and we hold ourselves to the same revenue number you do."
      />

      {/* Stats strip */}
      <section className="relative pb-20 pt-4">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-soft md:grid-cols-4">
            {[
              { v: "2018", l: "Founded" },
              { v: "60+", l: "Engineers, designers, marketers" },
              { v: "Bhopal", l: "HQ · Remote-first worldwide" },
              { v: "$240M", l: "Client revenue influenced" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-heading text-3xl font-semibold tracking-tight text-gradient md:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 text-sm text-ink-600">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-700">Our story</div>
              <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-ink-900 md:text-4xl">
                Built by operators who got tired of agency hand-offs.
              </h2>
            </div>
            <div className="space-y-5 text-ink-700 lg:col-span-7">
              <p>
                KS Technology started in 2018 with a simple frustration: the
                companies we admired were spending money in three places — an
                engineering agency, an SEO consultancy, and a paid ads team —
                and none of those three were accountable for whether the
                business actually grew.
              </p>
              <p>
                So we built a single team that owns the whole loop. Engineers
                who care about Lighthouse and Core Web Vitals because it lifts
                organic. SEO strategists who can read the codebase. Marketers
                who design landing pages with the same engineers who'll ship
                them by Friday.
              </p>
              <p>
                Six years and 120+ shipped products later, we are still small
                enough that you'll know everyone working on your account by
                name — and large enough to run multi-year programs without
                missing a sprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-slate-50/60 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              Values
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-5xl">
              Innovate. <span className="text-gradient">Connect.</span> Elevate.
            </h2>
            <p className="mt-4 text-ink-600">
              Three words on the logo. Three rules we run the business by.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 stagger">
            {values.map((v) => (
              <div
                key={v.title}
                className="hover-lift relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-soft"
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${v.accent} opacity-15 blur-2xl`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.accent} font-heading text-lg font-semibold text-white shadow-md ring-1 ring-white/30`}
                  >
                    {v.title.charAt(0)}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-ink-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-ink-600">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              Milestones
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              Eight years, one direction.
            </h2>
          </div>

          <ol className="relative mt-14 space-y-10 border-l-2 border-slate-200 pl-8">
            {milestones.map((m, i) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[42px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-500 bg-white">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-heading text-xl font-semibold text-gradient">
                    {m.year}
                  </span>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-ink-900">
                    {m.title}
                  </h3>
                </div>
                <p className="mt-2 text-ink-600">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="relative bg-slate-50/60 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              Team
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-5xl">
              The people on your account.
            </h2>
            <p className="mt-4 text-ink-600">
              No bait-and-switch with junior staff. The senior practitioners
              you meet in pitch are the ones who do the work.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 stagger">
            {team.map((m) => (
              <div
                key={m.name}
                className="hover-lift flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${m.accent} font-heading text-lg font-semibold text-white ring-2 ring-white shadow-md`}
                  aria-hidden
                >
                  {m.initials}
                </div>
                <div className="mt-4 font-heading text-base font-semibold text-ink-900">
                  {m.name}
                </div>
                <div className="mt-1 text-xs text-ink-500">{m.role}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition-colors duration-200 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
            >
              We're hiring →
            </Link>
          </div>
        </div>
      </section>

      <LogoMarquee />
      <CTA />
    </SiteShell>
  );
}
