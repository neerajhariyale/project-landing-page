import Link from "next/link";

type Section = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type Props = {
  title: string;
  eyebrow: string;
  intro: string;
  lastUpdated: string;
  sections: Section[];
};

export default function LegalLayout({
  title,
  eyebrow,
  intro,
  lastUpdated,
  sections,
}: Props) {
  return (
    <article className="mx-auto max-w-6xl px-4 pb-24">
      <header className="pt-36 md:pt-44">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
          {eyebrow}
        </div>
        <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight tracking-tight text-ink-900 md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-ink-600 md:text-lg">{intro}</p>
        <p className="mt-3 text-xs text-ink-500">Last updated: {lastUpdated}</p>
      </header>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Sidebar TOC */}
        <aside className="lg:col-span-3">
          <nav
            aria-label="Table of contents"
            className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
          >
            <div className="mb-2 text-xs font-medium uppercase tracking-wider text-ink-500">
              On this page
            </div>
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block cursor-pointer rounded-lg px-2.5 py-1.5 text-sm text-ink-600 transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-slate-200 pt-3 text-xs text-ink-500">
              Questions? Email{" "}
              <Link
                href="/contact"
                className="cursor-pointer font-medium text-brand-700 hover:text-brand-900"
              >
                hello.kstechnology@gmail.com
              </Link>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9">
          <div className="space-y-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-soft md:p-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
                  {s.title}
                </h2>
                <div className="prose-legal mt-4 space-y-4 text-ink-700 [&_a]:text-brand-700 [&_a:hover]:text-brand-900 [&_li]:my-1 [&_strong]:text-ink-900 [&_ul]:list-disc [&_ul]:pl-5">
                  {s.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
