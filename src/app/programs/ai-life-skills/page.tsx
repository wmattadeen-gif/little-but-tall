import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { aiProgramWeeks } from "@/lib/site-data";

export default function AiLifeSkillsPage() {
  return (
    <SiteShell eyebrow="AI & Life Skills Pilot">
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-10">
        <SectionHeading
          eyebrow="Future Ready"
          title="A future-facing concept that should stay grounded in Little But Tall’s real mission"
          text="This page is still a more forward-looking pilot, but the language has been pulled closer to the organization’s actual themes of opportunity, growth, confidence, mentoring, and readiness for adult life."
        />

        <section className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-rose-300">Mission fit</p>
              <p className="mt-2 text-xl font-semibold">Education and workforce readiness</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-rose-300">Approach</p>
              <p className="mt-2 text-xl font-semibold">Technology framed through C.L.I.M.B. values</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-rose-300">Outcome</p>
              <p className="mt-2 text-xl font-semibold">Confidence, literacy, and life preparation</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {aiProgramWeeks.map((week) => (
            <div key={week.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">{week.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{week.text}</p>
            </div>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
