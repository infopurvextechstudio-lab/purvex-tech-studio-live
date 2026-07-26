import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  FileText,
  Search,
  Briefcase,
  Presentation,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Career Branding",
  description:
    "Professional Resume Writing, Resume Review, Portfolio Creation, Presentation Design and LinkedIn Branding by Purvex Tech Studio.",
};

const services = [
  {
    title: "Resume Writing",
    description:
      "ATS-friendly resumes written to maximize interview opportunities.",
    icon: FileText,
  },
  {
    title: "Resume Review",
    description:
      "Professional review with detailed improvements and optimization.",
    icon: Search,
  },
  {
    title: "Portfolio Creation",
    description:
      "Modern portfolio websites that showcase your work professionally.",
    icon: Briefcase,
  },
  {
    title: "Presentation Design",
    description:
      "Business presentations, pitch decks and professional slides.",
    icon: Presentation,
  },
//   {
//     title: "LinkedIn Branding",
//     description:
//       "Profile optimization to improve visibility and credibility.",
//     icon: Linkedin,
//   },
];

export default function CareerBrandingPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white pt-24">

        <section className="mx-auto max-w-7xl px-6 py-24">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            Career Branding
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight lg:text-7xl">
            Build Your Professional
            <span className="block text-cyan-400">
              Personal Brand
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            We help professionals stand out with ATS resumes,
            portfolio websites, LinkedIn branding,
            presentations and career optimization.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-cyan-500 px-7 py-4 font-semibold transition hover:scale-105"
            >
              Get Started
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:border-cyan-500"
            >
              View Portfolio
            </Link>

          </div>

        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-500/40"
              >
                <Icon className="mb-6 text-cyan-400" size={34} />

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold">
                  Learn More
                  <ArrowRight size={18} />
                </div>

              </div>
            );
          })}

        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">

          <div className="rounded-[36px] border border-cyan-500/20 bg-cyan-500/10 p-10">

            <h2 className="text-4xl font-bold">
              Why Choose Purvex?
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {[
                "ATS Optimized Resume",
                "Professional Portfolio",
                "LinkedIn Optimization",
                "Premium Design",
                "Career Focused Strategy",
                "Fast Delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-cyan-400"
                    size={20}
                  />

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}