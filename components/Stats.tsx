const stats = [
  { value: "120+", label: "Products shipped", sub: "Across SaaS, fintech, and e‑commerce" },
  { value: "$240M", label: "Client revenue influenced", sub: "Tracked across our active engagements" },
  { value: "62%", label: "Avg. organic growth", sub: "In the first 12 months of SEO work" },
  { value: "4.9★", label: "Clutch & G2 rating", sub: "From 80+ verified client reviews" },
];

export default function Stats() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-50 p-8 shadow-soft md:p-12">
          {/* Aurora ribbons */}
          <div className="pointer-events-none absolute -top-32 -left-20 h-64 w-64 rounded-full bg-brand-300/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-brand-200/70 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-grid-dense opacity-25 mask-fade-b" />

          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4 stagger">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-heading text-4xl font-semibold tracking-tight text-gradient md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-ink-900">
                  {s.label}
                </div>
                <div className="mt-1 text-xs text-ink-500">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
