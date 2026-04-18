export function StoryCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/60 bg-white/85 p-7 shadow-sm backdrop-blur">
      <p className="text-base leading-8 text-slate-700">“{quote}”</p>
      <div className="mt-5">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">{role}</div>
      </div>
    </div>
  );
}
