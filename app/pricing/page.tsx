import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing — Transparent engagement models",
  description:
    "Sprint, Growth, and Enterprise engagement models. Transparent pricing, 30-day off-ramp, no surprise invoices.",
};

const features = [
  {
    section: "Team",
    rows: [
      { label: "Senior consultants", sprint: "1", growth: "4–6 pod", enterprise: "Custom" },
      { label: "Dedicated PM", sprint: "Shared", growth: "Yes", enterprise: "Yes" },
      { label: "Tech Lead", sprint: "—", growth: "Yes", enterprise: "Yes" },
      { label: "Executive sponsor", sprint: "—", growth: "—", enterprise: "Yes" },
    ],
  },
  {
    section: "Delivery",
    rows: [
      { label: "Sprint length", sprint: "2 weeks", growth: "2 weeks", enterprise: "2 weeks" },
      { label: "Weekly demo + report", sprint: "Yes", growth: "Yes", enterprise: "Yes" },
      { label: "Live OKR dashboard", sprint: "—", growth: "Yes", enterprise: "Yes" },
      { label: "Quarterly strategic review", sprint: "—", growth: "Yes", enterprise: "Yes" },
      { label: "On-site availability", sprint: "—", growth: "1/qtr", enterprise: "Monthly" },
    ],
  },
  {
    section: "Support",
    rows: [
      { label: "Response time", sprint: "< 24h", growth: "< 4h", enterprise: "< 1h (SLA)" },
      { label: "Slack channel", sprint: "Yes", growth: "Yes", enterprise: "Yes" },
      { label: "Security & compliance", sprint: "—", growth: "Standard", enterprise: "SOC 2 ready" },
      { label: "30-day off-ramp", sprint: "Yes", growth: "Yes", enterprise: "Yes" },
    ],
  },
];

const faqs = [
  { q: "Do I have to commit for a year?", a: "No. All plans run month-to-month with a 30-day off-ramp clause. Most clients stay 12–24 months because the work compounds, not because they're locked in." },
  { q: "What's actually included in the price?", a: "Everything in the team and delivery rows — design, engineering, content, ads management, dashboards. Ad spend, third-party tools, and content production beyond the included volume are pass-through at cost." },
  { q: "Can I upgrade or downgrade mid-engagement?", a: "Yes, with 30 days' notice. We sometimes scale up for a launch and scale back during steady-state. It's expected." },
  { q: "Why is the Sprint plan single-discipline?", a: "Most short engagements are an audit, a launch, or a critical fix — and they're best served by a single senior expert. Multi-discipline work needs a pod, which is the Growth plan." },
  { q: "Do you offer equity-aligned or success-based pricing?", a: "Sometimes, for the right venture-backed companies. Talk to us — it's a conversation, not a checkbox." },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Pricing"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
        title={
          <>
            Transparent pricing.{" "}
            <span className="text-gradient">No surprise invoices.</span>
          </>
        }
        description="Three engagement shapes. All month-to-month. All with a 30-day off-ramp. Pick the one that fits your stage — change it whenever your needs change."
      />

      <Pricing />

      {/* Comparison table */}
      <section className="relative bg-slate-50/60 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              Compare plans
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              The full feature breakdown.
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 text-left">
                  <th className="w-[34%] px-6 py-4 font-heading text-sm font-semibold text-ink-900">
                    Feature
                  </th>
                  <th className="px-4 py-4 font-heading text-sm font-semibold text-ink-900">
                    Sprint
                  </th>
                  <th className="bg-brand-50/70 px-4 py-4 font-heading text-sm font-semibold text-brand-800">
                    Growth
                  </th>
                  <th className="px-4 py-4 font-heading text-sm font-semibold text-ink-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {features.map((g) => (
                  <>
                    <tr key={`h-${g.section}`} className="bg-slate-50/50">
                      <td colSpan={4} className="px-6 py-2.5 text-xs uppercase tracking-wider text-ink-500">
                        {g.section}
                      </td>
                    </tr>
                    {g.rows.map((r) => (
                      <tr key={`${g.section}-${r.label}`}>
                        <td className="px-6 py-3.5 text-ink-700">{r.label}</td>
                        <td className="px-4 py-3.5 text-ink-700">{r.sprint}</td>
                        <td className="bg-brand-50/40 px-4 py-3.5 font-medium text-brand-900">
                          {r.growth}
                        </td>
                        <td className="px-4 py-3.5 text-ink-700">{r.enterprise}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              FAQ
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              Things people ask before signing.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-soft">
            {faqs.map((f, i) => (
              <details key={i} className="group cursor-pointer p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-heading text-base font-semibold text-ink-900">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-ink-600 transition-transform duration-200 group-open:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-ink-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </SiteShell>
  );
}
