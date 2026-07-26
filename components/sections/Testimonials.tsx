import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Marketing Manager",
    company: "Nova Marketing",
    text: "Purvex transformed our online presence with a modern website, outstanding communication and excellent support throughout the project.",
  },
  {
    name: "Ahmed Ali",
    role: "Business Owner",
    company: "AA Enterprises",
    text: "Professional team, fast delivery and exceptional quality. They understood our business needs and exceeded expectations.",
  },
  {
    name: "Usman Tariq",
    role: "Software Engineer",
    company: "Tech Solutions",
    text: "My portfolio website and LinkedIn branding now look premium and have helped me attract recruiters and freelance clients.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06B6D420,transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Trusted by startups, businesses and professionals for delivering
            premium digital solutions.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(6,182,212,.18)]"
            >

              <div className="mb-6 flex items-center justify-between">

                <div className="flex gap-1">

                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

                <Quote
                  size={26}
                  className="text-cyan-400 opacity-70"
                />

              </div>

              <p className="leading-8 text-slate-300">
                "{item.text}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="text-lg font-bold text-white">
                      {item.name}
                    </h3>

                    <BadgeCheck
                      size={18}
                      className="text-cyan-400"
                    />

                  </div>

                  <p className="text-sm text-slate-400">
                    {item.role}
                  </p>

                  <p className="text-xs text-cyan-300">
                    {item.company}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}