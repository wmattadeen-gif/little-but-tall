import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { brandAssets, donationLinks, featuredPrograms } from "@/lib/site-data";

export default function ProgramsPage() {
  return (
    <SiteShell eyebrow="Programs Overview">
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-10">
        <SectionHeading
          eyebrow="Programs"
          title="Programs organized around the C.L.I.M.B. philosophy"
          text="Little But Tall’s work is shaped by Choose, Learn, Intend, Move, and Believe, with each program helping young people grow through community, support, and opportunity."
        />

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-slate-900">How We C.L.I.M.B.</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Little But Tall describes C.L.I.M.B. as the foundation for growth and success. Each
              program is designed to inspire students to choose their path, learn new skills, set
              positive intentions, move toward their goals, and believe in their ability to create change.
            </p>
          </div>
          <div className="bg-slate-100">
            <img src={brandAssets.programsFeature} alt="Little But Tall programs" className="h-full w-full object-cover" />
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredPrograms.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-slate-900">{program.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{program.description}</p>
            </Link>
          ))}
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Programs with clearer pathways</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              This structure helps families, supporters, and partners understand how each part of the mission supports young people with growth, direction, and access to opportunity.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl">
            <h2 className="text-2xl font-semibold">Program categories now surfaced more clearly</h2>
            <p className="mt-4 text-base leading-8 text-slate-200">
              Instead of leaving Opportunity Abroad and community-oriented leadership work buried inside lists, this structure gives each part of the mission a clearer place in the site architecture.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] bg-rose-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Support the work</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Supporting these programs helps Little But Tall keep opening doors for young people through mentoring, education, and practical opportunity.
          </p>
          <a
            href={donationLinks.paypal}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Donate Now
          </a>
        </section>
      </main>
    </SiteShell>
  );
}
