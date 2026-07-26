"use client";

import Image from "next/image";
import {
  FileText,
  BriefcaseBusiness,
  Presentation,
  UserRound,
  Award,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "ATS Resume",
    text: "Professional ATS-friendly resumes optimized to pass applicant tracking systems.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Portfolio Website",
    text: "Modern portfolio websites that showcase your skills professionally.",
  },
  {
    icon: Presentation,
    title: "Presentation Design",
    text: "Business presentations and premium pitch decks that impress clients.",
  },
  {
    icon: UserRound,
    title: "Personal Branding",
    text: "LinkedIn optimization and personal branding to build your online presence.",
  },
  {
    icon: Award,
    title: "Career Consulting",
    text: "Expert career guidance helping professionals achieve their goals faster.",
  },
];

export default function CareerBranding() {
  return (
    <section
      id="career"
      className="relative overflow-hidden bg-[#08111f] py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06B6D420,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Career Branding
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Build A Career
            <br />
            That Gets Noticed
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Premium resumes, LinkedIn optimization, portfolio websites,
            presentations and personal branding services for professionals.
          </p>

        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">

          {/* Left Side */}

          <div className="grid gap-7 md:grid-cols-2">

                    {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(6,182,212,.18)]"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-4 transition-all duration-300 group-hover:bg-cyan-500/20">
                  <Icon
                    className="text-cyan-400"
                    size={30}
                  />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.text}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-3"
                >
                  Get Started

                  <ArrowRight size={18} />
                </a>

              </div>
            );
          })}

          </div>

          {/* Right Side */}

          <div className="relative">

            <div className="absolute inset-0 rounded-[36px] bg-cyan-500/20 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0B1220] p-3 shadow-[0_0_60px_rgba(6,182,212,.18)]">

              <Image
                src="/images/services/career-branding.jpeg"
                alt="Career Branding"
                width={900}
                height={1200}
                className="h-auto w-full rounded-[28px] object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>

            <div className="mt-8 rounded-[28px] border border-cyan-500/20 bg-cyan-500/10 p-7 backdrop-blur-xl">

              <h3 className="text-2xl font-bold text-white">
                Ready To Accelerate Your Career?
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                We create ATS resumes, LinkedIn profiles, portfolio websites,
                presentations and personal branding strategies that help you
                stand out in today's competitive job market.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Start Your Career Journey
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
          