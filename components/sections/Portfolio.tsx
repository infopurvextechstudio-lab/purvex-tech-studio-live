import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Own.Design",
    category: "Creative Agency",
    link: "https://owndesign.co.uk",
  },
  {
    title: "GymPulse",
    category: "Fitness Platform",
    link: "https://gympulse.infinityfree.me/",
  },
  {
    title: "Gift Shop",
    category: "E-Commerce",
    link: "https://muhammadusmanbukc727-rgb.github.io/gift-shop/",
  },
  {
    title: "Purvex Tech Studio",
    category: "Business Solutions",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-black text-white">
            Featured Projects
          </h2>

          <p className="mt-5 text-slate-300">
            A selection of our latest work.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (

            <a
              href={project.link}
              target="_blank"
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/40 transition-all"
            >

              <div className="h-64 bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700" />

              <div className="p-8">

                <div className="mb-3 inline-block rounded-full bg-blue-600/10 px-4 py-1 text-sm text-blue-300">
                  {project.category}
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <div className="mt-6 flex items-center gap-3 text-blue-400">

                  View Project

                  <ArrowUpRight />

                </div>

              </div>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
}