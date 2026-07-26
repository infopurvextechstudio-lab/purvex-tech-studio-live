import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Globe } from "lucide-react";

import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Career Branding and Business Solutions offered by Purvex Tech Studio.",
};

const services = [
  {
    title: "Career Branding",
    description:
      "Resume Writing, Resume Review, Portfolio Creation, Presentation Design and LinkedIn Branding.",
    href: "/services/career-branding",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business Solutions",
    description:
      "Website Development, SEO, AEO, GEO Optimization and Social Media Marketing.",
    href: "/services/business-solutions",
    icon: Globe,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] pt-24 text-white">

        <section className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            Our Services
          </span>

          <h1 className="mt-8 text-5xl font-black lg:text-7xl">
            Solutions Built
            <span className="block text-cyan-400">
              For Growth
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Whether you're building your professional career or growing your
            business, Purvex Tech Studio provides premium digital solutions
            designed for long-term success.
          </p>

        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-28 lg:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40"
              >
                <div className="mb-8 inline-flex rounded-2xl bg-cyan-500/10 p-5">
                  <Icon
                    size={34}
                    className="text-cyan-400"
                  />
                </div>

                <h2 className="text-3xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-10 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all group-hover:gap-4">
                  Explore Service
                  <ArrowRight size={18} />
                </div>

              </Link>
            );
          })}

        </section>

      </main>

      <Footer />
    </>
  );
}