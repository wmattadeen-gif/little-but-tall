import Link from "next/link";
import { ImpactBand } from "@/components/impact-band";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { brandAssets, featuredPrograms } from "@/lib/site-data";

const pillars = [
  {
    title: "A mission rooted in opportunity",
    text: "Little But Tall exists to help children and young adults in underserved communities access education, workforce opportunity, and the support they need to grow.",
    image: brandAssets.aboutMission,
  },
  {
    title: "Growth through the C.L.I.M.B.",
    text: "The organization’s core framework, Choose, Learn, Intentions, Move, Believe, shapes how it mentors, teaches, and encourages young people.",
    image: brandAssets.aboutClimb,
  },
  {
    title: "Programs backed by community",
    text: "Mentors, tutors, volunteers, speakers, and partners all help Little But Tall build relationships and expand what is possible for the youth it serves.",
    image: brandAssets.communityStaff,
  },
];

const stats = [
  { label: "Mission", value: "Empowering youth, growing communities" },
  { label: "Core approach", value: "Choose, Learn, Intentions, Move, Believe" },
  { label: "Focus", value: "Education, mentoring, and opportunity" },
];

const impactTiles = [
  {
    title: "Education and workforce access",
    text: "The mission centers on helping young people prepare for adult life through partnerships, initiatives, and real developmental support.",
    accent: "from-fuchsia-500 to-rose-400",
  },
  {
    title: "Community relationships",
    text: "Little But Tall emphasizes the power of community and relationships in shaping hope, expectations, and future success.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Mission-specific support",
    text: "From local outreach efforts to international education support, each campaign is built around practical needs and meaningful action.",
    accent: "from-sky-400 to-cyan-500",
  },
];

const stories = [
  {
    quote:
      "Children and young adults that have grown up in underserved communities have endured disparities in access to everything from adequate living accommodations to education to work and career options.",
    name: "About Little But Tall",
    role: "Current site mission language",
  },
  {
    quote:
      "At the heart of Little But Tall is a belief in the power of community and relationships. Communities play the primary role in preventing juvenile delinquency and in setting expectations for future success.",
    name: "Community Impact",
    role: "Current site community emphasis",
  },
];

const focusAreas = [
  {
    title: "C.L.I.M.B.",
    detail: "A structured way to help youth choose their path, learn from others, act with intention, move with perseverance, and believe in their future.",
  },
  {
    title: "Community Impact",
    detail: "Volunteer-led relationship building, donation drives, and mission-specific opportunities that meet youth where they are.",
  },
  {
    title: "International Missions",
    detail: "Support for uniforms, transportation, meals, books, supplies, camps, and technology so students can access education and opportunity.",
  },
  {
    title: "Opportunity Abroad",
    detail: "A clearer place to show how the mission extends beyond local borders while staying rooted in student support and practical help.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.32),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_24%),linear-gradient(180deg,#fff7ed_0%,#fff8fb_38%,#ffffff_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pt-14">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm text-rose-700 shadow-sm">
                It&apos;s the C.L.I.M.B.
              </div>

              <div className="space-y-6">
                <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
                  Every child deserves the chance to climb toward a stronger future.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
                  Little But Tall Charities serves children and young adults in underserved communities through mentorship, education, community support, and real pathways to opportunity.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/programs/climb"
                  className="rounded-full bg-rose-500 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600"
                >
                  Explore C.L.I.M.B.
                </Link>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=8GNB9TY6HGGAU"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-900 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-700"
                >
                  Donate Now
                </a>
                <Link
                  href="/get-involved"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-900 transition hover:border-slate-900"
                >
                  Community Impact
                </Link>
              </div>

              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-sm backdrop-blur"
                  >
                    <div className="text-base font-semibold text-slate-900">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src={brandAssets.aboutMission}
                  alt="Little But Tall mission image"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.1),rgba(15,23,42,0.72))]" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-200">Our mission</p>
                  <h2 className="mt-3 max-w-lg text-3xl font-bold leading-tight">
                    Connecting young people with opportunities in education and the workforce
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-7 text-slate-100">
                    Through partnerships, initiatives, and curricula, Little But Tall prepares youth to succeed as adults and citizens.
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/about"
                      className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-rose-50"
                    >
                      Read the mission
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {impactTiles.map((tile) => (
                  <div
                    key={tile.title}
                    className="rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-sm"
                  >
                    <div className={`h-2 w-24 rounded-full bg-gradient-to-r ${tile.accent}`} />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{tile.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{tile.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ImpactBand />

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-52 overflow-hidden bg-slate-100">
                  <img src={pillar.image} alt={pillar.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Programs"
            title="Programs that reflect the heart of the mission"
            text="Each area of the site is organized to show how Little But Tall supports youth through growth, relationships, practical help, and opportunity."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featuredPrograms.map((program, index) => (
              <Link
                key={program.title}
                href={program.href}
                className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`h-2 w-full ${[
                    "bg-gradient-to-r from-rose-400 to-fuchsia-500",
                    "bg-gradient-to-r from-sky-400 to-cyan-500",
                    "bg-gradient-to-r from-amber-400 to-orange-500",
                    "bg-gradient-to-r from-violet-500 to-purple-600",
                  ][index % 4]}`}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-rose-600">{program.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{program.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="group relative overflow-hidden rounded-[1.75rem] shadow-lg">
              <img src={brandAssets.communityHistory} alt="Community history" className="h-72 w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(15,23,42,0.78)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-lg font-semibold">Our History</div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[1.75rem] shadow-lg">
              <img src={brandAssets.communityStaff} alt="Our staff" className="h-72 w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(15,23,42,0.78)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-lg font-semibold">Our Staff</div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[1.75rem] shadow-lg">
              <img src={brandAssets.communityPartners} alt="Our partners" className="h-72 w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(15,23,42,0.78)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-lg font-semibold">Our Partners</div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[1.75rem] shadow-lg">
              <img src={brandAssets.programsFeature} alt="Programs" className="h-72 w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(15,23,42,0.78)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-lg font-semibold">Our Programs</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Mission"
                title="A mission built on hope, relationships, and opportunity"
                text="Little But Tall exists to help young people in underserved communities see what is possible and keep moving toward it with support.
"
              />
              <div className="space-y-4">
                {stories.map((story) => (
                  <div key={story.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-base leading-8 text-slate-700">“{story.quote}”</p>
                    <div className="mt-4 text-sm font-semibold text-slate-900">{story.name}</div>
                    <div className="text-sm text-slate-500">{story.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">Core focus areas</p>
              <div className="mt-6 space-y-6">
                {focusAreas.map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-200">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
