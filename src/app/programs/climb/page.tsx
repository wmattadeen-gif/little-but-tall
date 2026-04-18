import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { climbSteps } from "@/lib/site-data";

const intro =
  'Our core approach at Little But Tall works through a growth process we call "The C.L.I.M.B." Growth is like a climb because it begins with a commitment to yourself and then becomes one foot in front of the other until you reach your goal.';

const quotes = [
  {
    letter: "C",
    quote:
      "Always stay true to yourself, and never let what somebody says distract you from your goals.",
    author: "Michelle Obama",
  },
  {
    letter: "L",
    quote: "A true genius admits that he or she knows nothing.",
    author: "Albert Einstein",
  },
  {
    letter: "I",
    quote: "Setting goals is the first step in turning the invisible into the visible.",
    author: "Tony Robbins",
  },
  {
    letter: "M",
    quote:
      "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    author: "Pelé",
  },
  {
    letter: "B",
    quote:
      "We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.",
    author: "Marie Curie",
  },
];

export default function ClimbPage() {
  return (
    <SiteShell eyebrow="C.L.I.M.B. Program">
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-10">
        <SectionHeading
          eyebrow="C.L.I.M.B."
          title="The core growth framework behind Little But Tall"
          text={intro}
        />

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {climbSteps.map((step, index) => (
            <div key={step.letter} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-4xl font-bold text-rose-500">{step.letter}</div>
              <h2 className="mt-4 text-xl font-semibold text-slate-900">{step.word}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm italic leading-6 text-slate-500">“{quotes[index].quote}”</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {quotes[index].author}
                </p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
