type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`${
        isCenter ? "mx-auto text-center" : "text-left"
      } max-w-3xl`}
    >
      <div
        className={`${
          isCenter ? "inline-flex" : "flex"
        } items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_2px_rgba(14,165,233,0.45)]" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-ink-900 md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-ink-600 md:text-lg">{description}</p>
      )}
    </div>
  );
}
