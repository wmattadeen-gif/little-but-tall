import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { brandAssets, donationLinks } from "@/lib/site-data";

const cards = [
  {
    title: "Our History",
    text: "At the heart of Little But Tall is a belief in the power of community and relationships. Communities play a primary role in preventing juvenile delinquency and setting expectations for future success.",
    image: brandAssets.communityHistory,
  },
  {
    title: "Our Staff",
    text: "The team is made up of dedicated volunteers who serve through mentorship, tutoring, life coaching, and internship support for the young people Little But Tall reaches.",
    image: brandAssets.communityStaff,
  },
  {
    title: "Our Partners",
    text: "Little But Tall highlights local partners that help expand its reach and support, from community resources to broader mission collaboration.",
    image: brandAssets.communityPartners,
  },
];

export default function GetInvolvedPage() {
  return (
    <SiteShell eyebrow="Community Impact">
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-10">
        <SectionHeading
          eyebrow="Community Impact"
          title="Meeting youth where they are through relationships and practical support"
          text="The current Little But Tall Community Impact page is centered on volunteer effort, relationship building, and mission-specific drives that respond to real needs."
        />

        <section className="mt-12 grid gap-6 md:grid-cols-3">
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

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">How can you help?</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Little But Tall explains that Community Impact helps develop relationships with the youth it serves through volunteer effort and donation collection. Each drive is mission-specific, so supporters are invited to check back often for the latest opportunity.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              That gives this page a clearer job in the new structure. It should function as a living hub for campaigns, outreach, and community-based ways to show up for youth.
            </p>
            <div className="mt-6 rounded-2xl bg-rose-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Featured mission</p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                Holiday Cheer at the JDC focused on increasing hope and helping reduce recidivism through non-judgmental relationships between incarcerated youth and Little But Tall volunteers trained in the C.L.I.M.B. approach.
              </p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                The page explains that a $20 gift can provide a holiday care bag for one resident youth, including approved items like socks, stationery, books, candy, body wash, and inspirational letters.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl">
            <h2 className="text-2xl font-semibold">Take part in the mission</h2>
            <p className="mt-4 text-base leading-8 text-slate-200">
              Community involvement at Little But Tall is tied to real outreach efforts, real youth relationships, and specific opportunities to serve well.
            </p>
            <a
              href={donationLinks.communityImpact}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900"
            >
              Support Community Impact
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
