import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";

const contactPaths = [
  "Volunteer and mentor interest",
  "Community Impact mission support",
  "Program and youth opportunity questions",
  "International mission and donation follow-up",
];

export default function ContactPage() {
  return (
    <SiteShell eyebrow="Contact">
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="A simpler contact experience aligned with the real Little But Tall work"
          text="This contact structure is organized around the main ways people connect with Little But Tall, from volunteering and programs to mission support and partnership opportunities."
        />

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Suggested contact paths</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              {contactPaths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-rose-50 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Why this fits better</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              This structure keeps contact connected to the organization’s real work, including C.L.I.M.B., Community Impact, programs, and international mission support.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
