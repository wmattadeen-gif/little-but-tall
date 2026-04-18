import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { brandAssets } from "@/lib/site-data";

const cards = [
  {
    title: "Our mission",
    text: "In this world we are born into our circumstances, and essentially our initial opportunities. Those who are born into underserved communities are often presented with fewer and different opportunities than those born into more affluent situations.",
    image: brandAssets.aboutMission,
  },
  {
    title: "Our staff & volunteers",
    text: "Little But Tall highlights mentors, tutors, business professionals, motivational speakers, career counselors, and chaperones as part of the community supporting the youth it serves.",
    image: brandAssets.communityStaff,
  },
  {
    title: "Our programs",
    text: "The organization’s current program list includes C.L.I.M.B., Leadership In The Community, Internships, College Scholarships, and Opportunity Abroad.",
    image: brandAssets.aboutClimb,
  },
];

export default function AboutPage() {
  return (
    <SiteShell eyebrow="About Little But Tall">
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-10">
        <SectionHeading
          eyebrow="About"
          title="Helping young people move beyond the limits of circumstance"
          text="The current Little But Tall story focuses on youth in underserved communities and the need to connect them with real opportunities in education, work, and personal growth."
        />

        <section className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            Children and young adults that have grown up in underserved communities have endured
            disparities in access to everything from adequate living accommodations to education to
            work and career options. At Little But Tall, the aim is to connect young people with
            opportunities in education and the workforce through partnerships, initiatives, and
            curricula that prepare them to succeed as adults and citizens.
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
