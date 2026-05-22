import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "KS Technology rebuilt our marketing engine in a quarter. Organic traffic 3x, paid CAC cut in half, and the product team can finally ship in peace.",
    author: "Priya Subramanian",
    role: "CMO, Northstar Cloud",
    initials: "PS",
    accent: "from-brand-500 to-brand-700",
  },
  {
    quote:
      "They are the only agency I've worked with that argues for revenue, not retainers. Our paid spend efficiency went up the same week they took it over.",
    author: "Marcus Webb",
    role: "Founder, Verdant Goods",
    initials: "MW",
    accent: "from-brand-400 to-brand-600",
  },
  {
    quote:
      "Felt like hiring a senior engineering team and a senior growth team for the cost of two roles. We shipped our flagship app in 11 weeks.",
    author: "Aisha Khalid",
    role: "VP Product, Cobalt Finance",
    initials: "AK",
    accent: "from-brand-600 to-brand-800",
  },
  {
    quote:
      "Easily the best technical SEO work I have seen. They actually understand how our stack works before changing a single thing.",
    author: "Daniel Reyes",
    role: "Head of Growth, Helios",
    initials: "DR",
    accent: "from-brand-500 to-brand-800",
  },
  {
    quote:
      "Weekly outcomes, ruthless prioritization, and a Slack channel that genuinely feels like part of our team.",
    author: "Hana Sato",
    role: "COO, Lumen Health",
    initials: "HS",
    accent: "from-brand-300 to-brand-500",
  },
  {
    quote:
      "They built our internal ops platform and the dashboard our CFO checks every morning. Quiet competence is rare.",
    author: "Oliver Brandt",
    role: "CEO, Foundry",
    initials: "OB",
    accent: "from-brand-500 to-brand-700",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="What clients say"
          title={
            <>
              Loved by{" "}
              <span className="text-gradient">founders, CMOs and CTOs.</span>
            </>
          }
          description="No vanity logos. Direct quotes from the people we work with weekly."
        />

        <div className="mt-14 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid stagger">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="hover-lift relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <QuoteIcon />
              <blockquote className="relative mt-3 text-[15px] leading-relaxed text-ink-800">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} font-heading text-sm font-semibold text-white ring-1 ring-white/40`}
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">
                    {t.author}
                  </div>
                  <div className="text-xs text-ink-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-brand-200"
      aria-hidden
    >
      <path d="M7 7h4v4H8v3H4v-4c0-1.7 1.3-3 3-3zm10 0h4v4h-3v3h-4v-4c0-1.7 1.3-3 3-3z" />
    </svg>
  );
}
