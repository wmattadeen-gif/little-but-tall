import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { brandAssets, donationLinks } from "@/lib/site-data";

const pillars = [
  {
    title: "Educational access",
    text: "Little But Tall’s international support work highlights how things like uniforms, transportation, meals, and school supplies can determine whether a student can attend school consistently.",
  },
  {
    title: "Broader perspective",
    text: "Opportunity Abroad extends the nonprofit’s mission beyond local borders, reinforcing that youth opportunity and human dignity matter across communities and countries.",
  },
  {
    title: "Practical support",
    text: "The organization’s mission language points toward direct aid, local partnership, and tangible resources that help students and families move forward.",
  },
];

export default function OpportunityAbroadPage() {
  return (
    <SiteShell eyebrow="Opportunity Abroad">
      <main className="pb-20 pt-6">
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={brandAssets.missionsHero} alt="Opportunity Abroad" className="h-[320px] w-full object-cover md:h-[420px]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.16),rgba(15,23,42,0.72))]" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-200">Opportunity Abroad</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                Expanding the mission by supporting opportunity beyond local borders
              </h1>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-10">
          <SectionHeading
            eyebrow="Global opportunity"
            title="A dedicated page for the international side of the mission"
            text="Opportunity Abroad gives this part of the mission a clearer home while staying tied to Little But Tall’s emphasis on education, support, and access."
          />

          <section className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">{pillar.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{pillar.text}</p>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-[2rem] bg-rose-50 p-8 shadow-sm lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Why it belongs here</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Little But Tall’s international mission language is consistent with the rest of the organization’s work. It focuses on students, practical support, and the belief that real opportunity should not be limited by geography or economic circumstance.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                This page helps make Opportunity Abroad feel like a real part of the organization rather than a passing mention inside another section.
              </p>
              <a
                href={donationLinks.gofundme}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
              >
                Support international opportunity
              </a>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] shadow-lg lg:mt-0">
              <img src={brandAssets.missionsSupport} alt="International support" className="h-full w-full object-cover" />
            </div>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
