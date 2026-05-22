import SectionHeading from "./SectionHeading";

const cases = [
  {
    tag: "SaaS · B2B",
    title: "Northstar Cloud",
    blurb:
      "Rebuilt the marketing site and SEO engine. Doubled qualified pipeline within two quarters.",
    metric: "+214%",
    metricLabel: "qualified demos / mo",
    accent: "from-brand-500 to-brand-800",
    chart: "saas",
  },
  {
    tag: "E‑commerce · DTC",
    title: "Verdant Goods",
    blurb:
      "Re-platformed Shopify storefront, scaled paid acquisition while improving CAC payback.",
    metric: "−42%",
    metricLabel: "blended CAC",
    accent: "from-brand-400 to-brand-700",
    chart: "ecom",
  },
  {
    tag: "Fintech · Mobile",
    title: "Cobalt Finance",
    blurb:
      "Shipped a 0→1 retail trading app and ran a launch campaign that hit 1M downloads in 90 days.",
    metric: "1.2M",
    metricLabel: "downloads in 90 days",
    accent: "from-brand-600 to-brand-900",
    chart: "fintech",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative bg-slate-50/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Outcomes, not{" "}
              <span className="text-gradient">deliverables.</span>
            </>
          }
          description="A few of the partners we have helped go from interesting product to inevitable business."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 stagger">
          {cases.map((c) => (
            <article
              key={c.title}
              className="hover-lift group relative cursor-default overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
            >
              {/* Cover */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-95`}
                />
                <div className="absolute inset-0 bg-grid-dense opacity-15 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <CaseChart variant={c.chart as "saas" | "ecom" | "fintech"} />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white backdrop-blur">
                  {c.tag}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="font-heading text-2xl font-semibold tracking-tight text-white">
                      {c.title}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-2xl font-semibold leading-none tracking-tight text-white">
                      {c.metric}
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-white/85">
                      {c.metricLabel}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-relaxed text-ink-600">{c.blurb}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-900"
                >
                  Read case study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseChart({ variant }: { variant: "saas" | "ecom" | "fintech" }) {
  if (variant === "saas") {
    return (
      <svg viewBox="0 0 320 180" className="absolute inset-x-6 top-12 h-2/3 w-[calc(100%-3rem)]" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="saas-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path d="M0,140 C40,130 70,120 100,100 C140,70 170,80 200,60 C230,40 270,20 320,10" fill="none" stroke="url(#saas-line)" strokeWidth="3" strokeLinecap="round" />
        <path d="M0,150 C40,148 70,140 100,135 C140,128 170,120 200,108 C230,98 270,86 320,80" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>
    );
  }
  if (variant === "ecom") {
    return (
      <svg viewBox="0 0 320 180" className="absolute inset-x-6 top-14 h-2/3 w-[calc(100%-3rem)]" preserveAspectRatio="none" aria-hidden>
        {[20, 60, 100, 140, 180, 220, 260, 300].map((x, i) => (
          <rect key={x} x={x} y={120 - (i % 4) * 18 - 10} width="22" height={(i % 4) * 18 + 30} rx="3" fill="rgba(255,255,255,0.9)" opacity={0.55 + (i % 4) * 0.15} />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 180" className="absolute inset-x-6 top-12 h-2/3 w-[calc(100%-3rem)]" preserveAspectRatio="none" aria-hidden>
      <circle cx="160" cy="90" r="60" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
      <circle cx="160" cy="90" r="60" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="220 380" strokeLinecap="round" transform="rotate(-90 160 90)" />
      <text x="160" y="86" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="700" fontFamily="Space Grotesk, sans-serif">58%</text>
      <text x="160" y="106" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="10">D30 retention</text>
    </svg>
  );
}
