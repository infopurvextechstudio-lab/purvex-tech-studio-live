import PortfolioCard from "@/components/portfolio/Portfoliocard";
import { projects } from "@/components/portfolio/Portfoliodata";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06B6D410,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-20">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-300 sm:px-5 sm:text-sm">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:mt-8 lg:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A collection of premium websites and digital solutions we've
            designed and developed for businesses and brands.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <PortfolioCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}