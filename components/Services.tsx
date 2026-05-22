import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Software Engineering",
    description:
      "Production-grade web apps, internal tools, and APIs. Built with Next.js, TypeScript, and modern cloud infra.",
    points: ["Web & mobile apps", "API & backend systems", "Cloud architecture"],
    icon: CodeIcon,
    accent: "from-brand-500 to-brand-700",
  },
  {
    title: "SEO Optimization",
    description:
      "Technical SEO, content strategy, and link building that actually move organic revenue — not vanity rankings.",
    points: ["Technical audits", "Content & on-page", "Authority building"],
    icon: SearchIcon,
    accent: "from-brand-400 to-brand-600",
  },
  {
    title: "Performance Marketing",
    description:
      "Paid acquisition that pays back. Full-funnel attribution, creative testing, and unit-economics driven scaling.",
    points: ["Google & Meta ads", "Creative testing", "MMM & attribution"],
    icon: ChartIcon,
    accent: "from-brand-600 to-brand-800",
  },
  {
    title: "Brand & Web Design",
    description:
      "Identity systems, marketing sites, and product UIs designed to look premium and convert harder.",
    points: ["Brand systems", "Marketing sites", "Product UX/UI"],
    icon: SparkIcon,
    accent: "from-brand-300 to-brand-500",
  },
  {
    title: "Data & Analytics",
    description:
      "Modern data stack, server-side tracking, and dashboards that surface revenue levers — not noise.",
    points: ["GA4 & GTM setup", "Server-side tracking", "Looker dashboards"],
    icon: DataIcon,
    accent: "from-brand-500 to-brand-700",
  },
  {
    title: "AI & Automation",
    description:
      "Bring AI into ops, support, and growth — workflows that pay for themselves in the first quarter.",
    points: ["LLM workflows", "RAG & chatbots", "Ops automation"],
    icon: AiIcon,
    accent: "from-brand-400 to-brand-700",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 dot-radial opacity-40 mask-fade-b" />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              One partner for{" "}
              <span className="text-gradient">software, search, and growth.</span>
            </>
          }
          description="We collapse the gap between engineering and marketing so every shipped feature, page, and ad compounds into revenue."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 stagger">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="hover-lift group relative cursor-default overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                {/* Top-corner gradient blob on hover */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
                />

                <div
                  className={`relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-md ring-1 ring-white/30`}
                >
                  <Icon />
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {s.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-slate-200 pt-5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-ink-700"
                    >
                      <CheckBadge />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CheckBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="flex-shrink-0 text-brand-600">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeOpacity="0.35" />
      <path d="M7 12.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 5-6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5" />
      <path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  );
}
