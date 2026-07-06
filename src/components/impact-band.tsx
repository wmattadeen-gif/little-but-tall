export function ImpactBand() {
  const stats = [
    { value: "Opportunity", label: "Opening doors through mentorship, education, exposure, and practical support" },
    { value: "Belief", label: "Helping young people recognize potential that circumstances cannot erase" },
    { value: "Impact", label: "Equipping youth to stand tall and contribute to their communities" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <div className="grid gap-4 rounded-[2rem] bg-slate-900 p-6 text-white shadow-2xl md:grid-cols-3 md:p-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <div className="text-2xl font-bold text-rose-300">{stat.value}</div>
            <p className="mt-2 text-sm leading-7 text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
