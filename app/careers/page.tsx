import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CareersApply from "@/components/CareersApply";

export const metadata: Metadata = {
  title: "Careers — Internships, full-time, and contract roles",
  description:
    "Join KS Technology. We're hiring a Business Development Executive (BDE) intern for college students, plus a handful of full-time roles across engineering, SEO and marketing.",
};

const perks = [
  {
    title: "Direct mentorship",
    body: "You'll work alongside senior practitioners — not in a basement project. Weekly 1:1s with your manager from day one.",
    icon: MentorIcon,
  },
  {
    title: "Paid stipend",
    body: "All internships are paid. Compensation is benchmarked above market for the role and city you're in.",
    icon: WalletIcon,
  },
  {
    title: "Remote-friendly",
    body: "Work from your campus, your hostel, or our Bhopal office. Flexible hours around your academic calendar.",
    icon: GlobeIcon,
  },
  {
    title: "PPO pathway",
    body: "Top interns get pre-placement offers. ~60% of our recent interns converted to full-time engineers or BDEs.",
    icon: ArrowUpIcon,
  },
  {
    title: "Modern stack",
    body: "Real CRMs (HubSpot, Salesforce), real codebases (Next.js, TypeScript), and AI tools you'll actually use in your career.",
    icon: StackIcon,
  },
  {
    title: "Real responsibility",
    body: "We don't make coffee runs. You'll own a pipeline, ship a feature, or run a campaign in your first month.",
    icon: TargetIcon,
  },
];

const openings = [
  {
    href: "#bde-intern",
    title: "Business Development Executive (BDE) — Intern",
    location: "Bhopal / Remote",
    type: "Internship · 3–6 months · Paid",
    team: "Sales · Entry-level",
    audience: "College students & recent graduates",
    featured: true,
  },
  {
    href: "/contact",
    title: "Software Engineer — Full Stack",
    location: "Bhopal / Remote",
    type: "Full-time",
    team: "Engineering · Mid–Senior",
  },
  {
    href: "/contact",
    title: "SEO Strategist",
    location: "Bhopal / Remote",
    type: "Full-time",
    team: "SEO · Mid-level",
  },
  {
    href: "/contact",
    title: "Performance Marketer (Paid Ads)",
    location: "Bhopal / Remote",
    type: "Full-time",
    team: "Marketing · Mid–Senior",
  },
  {
    href: "/contact",
    title: "Product Designer",
    location: "Bhopal / Remote",
    type: "Full-time · Contract OK",
    team: "Design · Mid–Senior",
  },
];

const responsibilities = [
  "Run outbound prospecting on LinkedIn, email, and (occasionally) phone — 40–60 touchpoints per day.",
  "Qualify inbound leads from our marketing engine and book discovery calls for senior sales reps.",
  "Keep the CRM (HubSpot) honest — accurate stages, clean notes, no ghost deals.",
  "Run weekly market research: who is hiring, who just raised, who is opening a new region.",
  "Help draft proposals, decks, and follow-up sequences. Yes, you'll get to use AI tools for the boring parts.",
  "Sit in on real discovery and proposal calls. Take notes. Ask questions. Get better every week.",
];

const requirements = [
  "Currently pursuing a Bachelor's or Master's degree (any stream — we've hired engineers, commerce, arts).",
  "Strong written and spoken English. You'll be writing 30+ messages a day to founders and CMOs.",
  "Genuinely curious about technology, SaaS, and how businesses grow.",
  "Comfortable with rejection. 90% of cold outreach gets ignored — and that's a normal Tuesday.",
  "Available 20–30 hours per week for at least 3 months. Flexible around your academic calendar.",
  "A laptop, reliable internet, and a quiet place to take 30-min video calls.",
];

const niceToHaves = [
  "Past internship, sales-club, or e-cell experience.",
  "An active LinkedIn presence (it's the medium of B2B sales).",
  "Familiarity with HubSpot, Salesforce, Apollo, or any other CRM/SDR tool.",
  "You've built something — a college fest, a small business, an Instagram audience, an open-source project.",
  "You read business newsletters for fun (Stratechery, Lenny, First Round Review, etc.).",
];

const learn = [
  "B2B sales fundamentals — TAM/SAM/SOM, ICP, buying triggers, discovery frameworks (BANT, MEDDIC, GPCT).",
  "Mastery of LinkedIn outbound — profile, content, search, Sales Navigator, message sequencing.",
  "The modern sales tech stack — CRM hygiene, email warmup, deliverability, attribution.",
  "How to run a 30-minute discovery call without sounding like a script.",
  "Pipeline forecasting, win/loss analysis, and basic revenue operations.",
  "Direct mentorship from a Head of Growth and a Sales Director with 15+ years between them.",
];

const process = [
  { phase: "Apply", body: "Submit the form below. We read every application within 2 working days." },
  { phase: "30-min screen", body: "Video call with our talent partner. Background, motivation, basic English fluency." },
  { phase: "Case task", body: "A short take-home: research 5 ICP companies and draft cold outreach. ~3 hours of work, not a week." },
  { phase: "Final round", body: "60-min call with the Sales Director. Role-play, feedback, and your questions for us." },
  { phase: "Offer", body: "Decision in 7–10 calendar days. Stipend, start date, and laptop policy confirmed." },
];

export default function CareersPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Careers"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
        title={
          <>
            Build with people who{" "}
            <span className="text-gradient">give a damn.</span>
          </>
        }
        description="Small team. Big swings. Senior people at every level. If you want to do real work on real problems for real revenue — keep reading."
      />

      {/* Perks grid */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              Why KS Technology
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              What you get on day one.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 stagger">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="hover-lift relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md">
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-semibold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-600">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="openings" className="relative bg-slate-50/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              Open roles
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              We're hiring. <span className="text-gradient">Mostly seniors. One intern.</span>
            </h2>
            <p className="mt-4 text-ink-600">
              Most roles are senior+. Our one entry-level seat — the BDE intern below — is the
              hardest seat to win and the fastest path into our team.
            </p>
          </div>

          <ul className="mt-12 space-y-3">
            {openings.map((o) => (
              <li key={o.title}>
                <a
                  href={o.href}
                  className={`hover-lift group flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-soft transition-all duration-200 md:flex-row md:items-center md:justify-between ${
                    o.featured
                      ? "border-brand-300 ring-1 ring-brand-200"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-heading text-base font-semibold text-ink-900 md:text-lg">
                        {o.title}
                      </h3>
                      {o.featured && (
                        <span className="rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                          For students
                        </span>
                      )}
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-500">
                      <span>{o.team}</span>
                      <span className="text-ink-300">·</span>
                      <span>{o.location}</span>
                      <span className="text-ink-300">·</span>
                      <span>{o.type}</span>
                    </div>
                  </div>
                  <span className="inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-ink-800 transition-colors duration-200 group-hover:border-brand-400 group-hover:bg-brand-50 group-hover:text-brand-700">
                    View role
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BDE Intern detail */}
      <section id="bde-intern" className="relative bg-white py-24 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50/80 via-white to-brand-50/40 p-2 shadow-card">
            <div className="rounded-[22px] bg-white p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  For college students
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-ink-600">
                  Internship
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-ink-600">
                  Paid stipend
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-ink-600">
                  Bhopal / Remote
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-ink-600">
                  3–6 months
                </span>
              </div>

              <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-tight text-ink-900 md:text-5xl">
                Business Development Executive{" "}
                <span className="text-gradient">(BDE) Intern.</span>
              </h2>
              <p className="mt-5 max-w-3xl text-ink-700 md:text-lg">
                Your first job in B2B sales — the polite, well-paid version. You'll run outbound,
                qualify inbound, and sit in on real discovery calls. By the end of three months
                you'll be running discovery calls yourself.
              </p>

              {/* Quick facts */}
              <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 md:grid-cols-4 md:p-6">
                {[
                  { v: "20–30 hrs", l: "per week" },
                  { v: "3–6 months", l: "duration" },
                  { v: "₹15k–₹25k", l: "monthly stipend" },
                  { v: "~60%", l: "intern → PPO rate" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-heading text-lg font-semibold text-ink-900 md:text-xl">
                      {s.v}
                    </div>
                    <div className="mt-0.5 text-xs text-ink-500">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Two-column blocks */}
              <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
                <Block title="What you'll do" items={responsibilities} />
                <Block title="What you'll learn" items={learn} highlight />
              </div>

              <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
                <Block title="Who we're looking for" items={requirements} />
                <Block title="Nice to have" items={niceToHaves} muted />
              </div>

              {/* Hiring process */}
              <div className="mt-12">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-ink-900">
                  Hiring process
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  Designed to take ~10 days from apply to offer.
                </p>

                <ol className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-5">
                  {process.map((s, i) => (
                    <li
                      key={s.phase}
                      className="relative rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <div className="font-heading text-xl font-semibold text-gradient">
                        0{i + 1}
                      </div>
                      <div className="mt-2 font-heading text-sm font-semibold text-ink-900">
                        {s.phase}
                      </div>
                      <div className="mt-1 text-xs text-ink-600">{s.body}</div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Apply CTA */}
              <div className="mt-12 flex flex-col items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50/60 p-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-ink-900">
                    Ready to apply?
                  </h3>
                  <p className="mt-1 text-sm text-ink-600">
                    Use the short form below — takes 4 minutes. We read every application.
                  </p>
                </div>
                <a
                  href="#apply"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 px-5 py-3 text-sm font-semibold text-white shadow-cta transition-all duration-200 hover:from-brand-700 hover:to-brand-900"
                >
                  Apply for BDE Intern
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="relative bg-slate-50/60 py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              Application form
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              Apply for the BDE Intern role.
            </h2>
            <p className="mt-3 text-ink-600">
              Four minutes. No CV upload required (but you can link one).
            </p>
          </div>

          <div className="mt-10">
            <CareersApply />
          </div>

          <p className="mt-6 text-center text-xs text-ink-500">
            Prefer email? Send your CV + a short note to{" "}
            <Link href="/contact" className="cursor-pointer font-medium text-brand-700 hover:text-brand-900">
              hello.kstechnology@gmail.com
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

function Block({
  title,
  items,
  highlight,
  muted,
}: {
  title: string;
  items: string[];
  highlight?: boolean;
  muted?: boolean;
}) {
  return (
    <div>
      <h3
        className={`font-heading text-lg font-semibold tracking-tight ${
          highlight ? "text-gradient" : "text-ink-900"
        }`}
      >
        {title}
      </h3>
      <ul className={`mt-4 space-y-3 ${muted ? "opacity-90" : ""}`}>
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-sm text-ink-700">
            <span
              className={`mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                highlight ? "bg-brand-600" : "bg-brand-500"
              }`}
            />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MentorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function WalletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <circle cx="17" cy="15" r="1.2" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}
function ArrowUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}
function StackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="12 2 22 8 12 14 2 8 12 2" />
      <polyline points="2 16 12 22 22 16" />
      <polyline points="2 12 12 18 22 12" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
