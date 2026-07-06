import Link from "next/link";
import { brandAssets, donationLinks, navLinks, socialLinks } from "@/lib/site-data";

export function SiteShell({
  children,
  eyebrow = "Little But Tall Charities",
}: {
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fdf2f8,0%,#fff7ed,36%,#ffffff,70%)] text-slate-900">
      <header className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/85 px-5 py-4 shadow-sm backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={brandAssets.logo}
              alt="Little But Tall Charities logo"
              className="h-14 w-14 rounded-2xl object-cover shadow-sm"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">{eyebrow}</p>
              <p className="mt-1 text-sm text-slate-600">Potential is everywhere. Opportunity is not.</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full px-3 py-2 transition hover:bg-slate-100">
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={donationLinks.paypal}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-200"
          >
            Donate Now
          </a>
        </div>
      </header>

      {children}

      <footer className="mt-20 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-3 lg:px-10">
          <div>
            <h3 className="text-lg font-semibold">Little But Tall Charities</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
              Helping young people in underserved communities access mentorship, education, exposure, and real support through the C.L.I.M.B. approach.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">Quick links</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">Connect</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {link.label}
                </a>
              ))}
              <a href={donationLinks.gofundme} target="_blank" rel="noreferrer" className="hover:text-white">
                Support International Missions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
