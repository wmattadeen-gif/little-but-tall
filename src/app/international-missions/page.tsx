import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { brandAssets, donationLinks } from "@/lib/site-data";

const studentSupport = [
  "Direct assistance to students and their families",
  "Uniforms, meals, and transportation support so students can attend school",
  "Books, backpacks, writing utensils, and paper for educational access",
  "Summer camps that provide learning, activity, meals, snacks, and growth opportunities",
];

const broaderSupport = [
  "Volunteer as a tutor, mentor, or motivational speaker",
  "Donate to broader efforts supporting specific causes",
  "Contribute stock or bitcoin to help fund long-term capital campaign efforts",
  "Help collect laptops, tablets, and other technology to bridge the gap between aspiration and opportunity",
];

export default function InternationalMissionsPage() {
  return (
    <SiteShell eyebrow="International Missions">
      <main className="pb-20 pt-6">
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={brandAssets.missionsHero} alt="International missions" className="h-[340px] w-full object-cover md:h-[420px]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18),rgba(15,23,42,0.72))]" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-200">International Missions</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                Support that helps students access education, nourishment, and opportunity
              </h1>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-6 pt-12 lg:px-10">
          <SectionHeading
            eyebrow="Global impact"
            title="Where your contribution goes"
            text="This page emphasizes practical educational support for students and families, especially where school access depends on basic but essential needs being met."
          />

          <section className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Students</h2>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                {studentSupport.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-rose-500">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="h-64 bg-slate-100">
                <img src={brandAssets.missionsSupport} alt="Mission support" className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-slate-900">Volunteering and donations</h2>
                <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                  {broaderSupport.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-slate-900">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={donationLinks.gofundme}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
                >
                  Support current mission
                </a>
              </div>
            </div>
          </section>
        </main>
      </main>
    </SiteShell>
  );
}
