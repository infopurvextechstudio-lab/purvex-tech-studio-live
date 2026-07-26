import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Tech = {
  name: string;
  icon?: string;
};

type Project = {
  title: string;
  category: string;
  image: string;
  link: string;
  tech: Tech[];
  description: string;
};

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({
  project,
}: PortfolioCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(6,182,212,.18)]"
    >
      {/* Image */}
      <div className="relative h-[220px] sm:h-[280px] lg:h-[340px] overflow-hidden bg-[#08111f]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={project.title === "Floerix Innovations"}
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/10 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5 sm:p-6 lg:p-8">

        <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-cyan-300 sm:px-4 sm:py-2 sm:text-xs">
          {project.category}
        </span>

        <h3 className="text-2xl font-black leading-tight text-white transition-colors duration-300 group-hover:text-cyan-300 lg:text-3xl">
          {project.title}
        </h3>

        <p className="text-[15px] leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-all duration-300 group-hover:border-cyan-400/30"
            >
              {tech.icon ? (
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={16}
                  height={16}
                  className="object-contain"
                />
              ) : (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500/20 text-[9px] font-bold text-cyan-300">
                  {tech.name.charAt(0)}
                </span>
              )}

              <span className="text-[11px] font-medium text-slate-300 sm:text-xs">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <span className="flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-all duration-300 group-hover:translate-x-1 sm:text-base">
            View Project

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </span>
        </div>

      </div>

      {/* Border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-400/0 transition-all duration-500 group-hover:border-cyan-400/20" />
    </a>
  );
}