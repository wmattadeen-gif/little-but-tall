export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">{title}</h1>
      {text ? <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}
