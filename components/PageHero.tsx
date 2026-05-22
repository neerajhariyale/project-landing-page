type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
  rightSlot?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  rightSlot,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-brand-50/80 via-white to-white" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl">
        <div className="h-full w-full rounded-full bg-aurora-light animate-aurora-spin opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {breadcrumb && (
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-ink-500" aria-label="Breadcrumb">
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-ink-400">/</span>}
                <a href={b.href} className="cursor-pointer hover:text-brand-700">
                  {b.label}
                </a>
              </span>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_2px_rgba(37,99,235,0.5)]" />
              {eyebrow}
            </div>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-2xl text-base text-ink-600 md:text-lg">
                {description}
              </p>
            )}
          </div>
          {rightSlot && <div className="lg:col-span-4">{rightSlot}</div>}
        </div>
      </div>
    </section>
  );
}
