import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { brandAssets } from "@/lib/site-data";

const cards = [
  {
    title: "Our mission",
    text: "Little But Tall expands opportunities for young people in underserved communities by connecting them with mentorship, education, resources, and experiences that help them build confidence and discover their potential.",
    image: brandAssets.aboutMission,
  },
  {
    title: "Our staff & volunteers",
    text: "Little But Tall highlights mentors, tutors, business professionals, motivational speakers, career counselors, and chaperones as part of the community supporting the youth it serves.",
    image: brandAssets.communityStaff,
  },
  {
    title: "Our programs",
    text: "The organization’s programs, including C.L.I.M.B., Leadership In The Community, Internships, College Scholarships, and Opportunity Abroad, help youth access support, exposure, and practical pathways forward.",
    image: brandAssets.aboutClimb,
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

        <section className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            Potential is everywhere. Opportunity is not. Little But Tall expands opportunities for
            young people in underserved communities by connecting them with mentorship, education,
            resources, and experiences that help them build confidence, discover their potential,
            and create lasting impact in their communities and beyond.
          </p>
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
      </main>
    </SiteShell>
  );
}
