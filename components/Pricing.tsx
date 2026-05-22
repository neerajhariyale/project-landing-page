import SectionHeading from "./SectionHeading";

const plans = [
  {
    name: "Sprint",
    tagline: "Best for early validation",
    price: "$8k",
    cadence: "starting / month",
    description: "A focused engagement to ship one outcome — a launch, an audit, or a critical fix.",
    cta: "Start a sprint",
    features: [
      "1 senior consultant",
      "2-week sprints",
      "Weekly demo + report",
      "Slack channel access",
      "Single discipline focus",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "Most teams start here",
    price: "$22k",
    cadence: "starting / month",
    description: "Embedded team across software, SEO, and growth — your outsourced product + growth org.",
    cta: "Book a strategy call",
    features: [
      "Cross-functional pod (4–6)",
      "Dedicated PM + Tech Lead",
      "Live OKR dashboard",
      "Quarterly strategic review",
      "Priority response < 4h",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    tagline: "Built around your roadmap",
    price: "Custom",
    cadence: "tailored engagement",
    description: "For complex programs, multi-quarter roadmaps, and enterprise governance requirements.",
    cta: "Talk to a partner",
    features: [
      "Custom team composition",
      "On-site availability",
      "Security & compliance support",
      "SLA-backed delivery",
      "Executive sponsor",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-40" />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Engagement models"
          title={
            <>
              Transparent pricing.{" "}
              <span className="text-gradient">No surprise invoices.</span>
            </>
          }
          description="Pick the engagement that fits your stage. Upgrade, scale down, or pause — without renegotiating contracts."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-200 ${
                p.highlight
                  ? "border-transparent bg-gradient-to-b from-brand-50 to-white shadow-glow"
                  : "border-slate-200 bg-white shadow-soft hover:shadow-card"
              }`}
            >
              {p.highlight && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl glow-ring" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-md">
                    Most popular
                  </div>
                </>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-ink-900">
                  {p.name}
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-ink-500">
                  {p.tagline}
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-heading text-5xl font-semibold tracking-tight text-ink-900">
                  {p.price}
                </span>
                <span className="text-sm text-ink-500">{p.cadence}</span>
              </div>

              <p className="mt-3 text-sm text-ink-600">{p.description}</p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-slate-200 pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <CheckIcon highlight={p.highlight} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  p.highlight
                    ? "bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-cta hover:from-brand-600 hover:to-brand-800"
                    : "border border-slate-300 bg-white text-ink-800 hover:border-brand-400 hover:bg-brand-50"
                }`}
              >
                {p.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-500">
          All engagements include weekly reporting, transparent pricing, and a
          30-day off-ramp. No hidden retainers.
        </p>
      </div>
    </section>
  );
}

function CheckIcon({ highlight }: { highlight?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`mt-0.5 flex-shrink-0 ${highlight ? "text-brand-600" : "text-brand-500"}`}
    >
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeOpacity={highlight ? "0.65" : "0.35"} />
      <path
        d="M7 12.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
