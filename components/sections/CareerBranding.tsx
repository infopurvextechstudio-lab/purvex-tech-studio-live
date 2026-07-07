import {
  FileText,
  BriefcaseBusiness,
  Presentation,
  UserRound,
  Award,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "ATS Resume",
    text: "Professional resumes optimized for ATS systems.",
  },

  {
    icon: BriefcaseBusiness,
    title: "Portfolio Website",
    text: "Personal websites that impress recruiters.",
  },
  {
    icon: Presentation,
    title: "Presentation Design",
    text: "Premium pitch decks and business presentations.",
  },
  {
    icon: UserRound,
    title: "Personal Branding",
    text: "Create a memorable and trusted professional identity.",
  },
  {
    icon: Award,
    title: "Career Consulting",
    text: "Guidance to accelerate your career growth.",
  },
];

export default function CareerBranding() {
  return (
    <section className="bg-[#08111f] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black text-white">
            Career Branding
          </h2>

          <p className="mt-5 text-slate-300">
            Helping professionals stand out in today's competitive market.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-500/40"
              >
                <Icon
                  className="mb-5 text-cyan-400"
                  size={34}
                />

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-300">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}