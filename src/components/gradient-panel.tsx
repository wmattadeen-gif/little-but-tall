export function GradientPanel({
  title,
  text,
  eyebrow,
}: {
  title: string;
  text: string;
  eyebrow: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#7c3aed_55%,#fb7185_100%)] p-[1px] shadow-2xl">
      <div className="rounded-[calc(2rem-1px)] bg-slate-950/90 p-8 text-white backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-bold leading-tight">{title}</h2>
        <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>
      </div>
    </div>
  );
}
