import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  Globe,
  Search,
  Code2,
  MonitorSmartphone,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Solutions",
  description:
    "Website Development, SEO, AEO, GEO, Social Media Marketing and Digital Growth by Purvex Tech Studio.",
};

const services = [
  {
    title: "Website Development",
    description:
      "Premium responsive websites built with modern technologies.",
    icon: Globe,
  },
  {
    title: "SEO Optimization",
    description:
      "Increase your visibility with technical and on-page SEO.",
    icon: Search,
  },
  {
    title: "AEO & GEO",
    description:
      "Optimize your business for AI search engines and generative experiences.",
    icon: BarChart3,
  },
  {
    title: "Social Media Marketing",
    description:
      "Grow your audience with strategic social media campaigns.",
    icon: MonitorSmartphone,
  },
  {
    title: "JavaScript & Bootstrap",
    description:
      "Fast, scalable and interactive frontend development.",
    icon: Code2,
  },
];

export default function BusinessSolutionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] pt-24 text-white">

        <section className="mx-auto max-w-7xl px-6 py-24">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            Business Solutions
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight lg:text-7xl">
            Digital Solutions
            <span className="block text-cyan-400">
              That Drive Growth
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            We help businesses grow with premium websites, SEO,
            AEO, GEO optimization, social media marketing,
            and modern web technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-500 px-7 py-4 font-semibold transition hover:scale-105"
            >
              Start Your Project
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

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-cyan-400">
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
              Why Businesses Choose Us
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {[
                "Premium Website Development",
                "SEO & Technical Optimization",
                "AEO & GEO Strategy",
                "Fast Performance",
                "Scalable Solutions",
                "Dedicated Support",
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