import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { brandAssets } from "@/lib/site-data";

const cards = [
  {
    title: "Our mission",
    text: "Little But Tall expands opportunities for young people in underserved communities by connecting them with mentorship, education, resources, and experiences that help them build confidence, discover their potential, and create lasting impact.",
    image: brandAssets.aboutMission,
  },
  {
    title: "Our staff & volunteers",
    text: "Little But Tall is supported by mentors, tutors, business professionals, motivational speakers, career counselors, and volunteers who invest time, encouragement, and experience into helping young people grow.",
    image: brandAssets.communityStaff,
  },
  {
    title: "Our programs",
    text: "Through C.L.I.M.B., Leadership In The Community, future-readiness work, scholarships, and Opportunity Abroad, Little But Tall helps youth access support, exposure, and practical pathways forward.",
    image: brandAssets.aboutClimb,
  },
];

const values = [
  {
    title: "Opportunity",
    text: "We believe access to the right opportunities, relationships, and resources can change a young person’s future.",
  },
  {
    title: "Belief",
    text: "We see potential before circumstances define the story, and we help young people believe in what is possible.",
  },
  {
    title: "Exposure",
    text: "We introduce youth to ideas, careers, people, and pathways they may not encounter every day.",
  },
  {
    title: "Relationships",
    text: "We believe consistent, caring adults and community partners can help change trajectories.",
  },
  {
    title: "Growth",
    text: "We encourage young people to choose, learn, intend, move, and believe through the C.L.I.M.B. process.",
  },
  {
    title: "Dignity",
    text: "We serve youth with respect, not pity, recognizing their strengths, stories, and capacity for impact.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell eyebrow="About Little But Tall">
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-10">
        <SectionHeading
          eyebrow="About"
          title="Helping young people stand tall through opportunity, support, and belief"
          text="Little But Tall is rooted in the Jamaican spirit of Likkle but Tallawah: the belief that something small or underestimated can still have extraordinary impact."
        />

        <section className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-slate-100">
            <img src={brandAssets.aboutMission} alt="Little But Tall mission" className="h-full min-h-[320px] w-full object-cover" />
          </div>
          <div className="p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">Core belief</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Potential is everywhere. Opportunity is not.</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Young people are often measured by where they live, the schools they attend, the resources around them,
              or the challenges they face. Little But Tall exists to challenge that belief by expanding access to
              opportunities, relationships, knowledge, and experiences that help youth recognize and pursue their potential.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              The name Little But Tall draws from the Jamaican expression “Likkle but Tallawah,” a reminder that greatness
              is not determined by size, circumstance, or where someone begins. With opportunity, support, and encouragement,
              young people can stand tall and make an impact far beyond what others imagined.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="h-52 bg-slate-100">
                <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-900">{card.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{card.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">Mission</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Expanding opportunity for young people</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Little But Tall expands opportunities for young people in underserved communities by connecting them with
              mentorship, education, resources, and experiences that help them build confidence, discover their potential,
              and create lasting impact in their communities and beyond.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">Vision</p>
            <h2 className="mt-3 text-2xl font-semibold">A world where every young person can stand tall</h2>
            <p className="mt-4 text-base leading-8 text-slate-200">
              Our vision is a world where every young person, regardless of where they begin, has access to the opportunities,
              relationships, and encouragement they need to stand tall and make a meaningful impact.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">Theory of change</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">How the mission creates impact</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            When young people are exposed to new possibilities, supported by caring mentors, equipped with practical resources,
            and encouraged to believe in their own potential, they are more likely to build confidence, pursue education and
            career pathways, and create meaningful impact in their communities.
          </p>
        </section>

        <section className="mt-12">
          <SectionHeading
            eyebrow="Values"
            title="The values that guide how Little But Tall serves"
            text="These values turn the mission into a consistent way of working with youth, families, schools, volunteers, donors, and partners."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
