"use client";

import {
  ArrowRight,
  Sparkles,
  Rocket,
  Target,
  Eye,
  Globe,
  Users,
} from "lucide-react";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "7+", label: "Global Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Premium Support" },
];

const cards = [
  {
    icon: Rocket,
    title: "Web Solutions",
    description:
      "Premium websites, responsive development and scalable digital experiences that help businesses grow.",
  },
  {
    icon: Globe,
    title: "Career Branding",
    description:
      "ATS resumes, LinkedIn optimization, portfolio websites and personal branding solutions.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To transform ambition into achievement by creating purposeful Web Solutions and Career Branding experiences that inspire growth, build credibility and create opportunities that last.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To redefine how businesses and professionals grow by becoming the trusted force behind exceptional digital identities, meaningful careers and future-ready success — Building Together at every step.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#06B6D420,transparent_35%),radial-gradient(circle_at_bottom_right,#2563EB22,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT */}
          <div className="max-w-2xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-300">
              <Sparkles size={16} />
              ABOUT PURVEX TECH STUDIO
            </div>

            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              Building
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Together
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              <span className="font-semibold text-white">
                Founded in 2024,
              </span>{" "}
              <span className="font-semibold text-cyan-400">
                Purvex Tech Studio
              </span>{" "}
              is a forward-thinking digital solutions company committed to
              <span className="font-semibold text-cyan-300">
                {" "}
                "Building Together"
              </span>{" "}
              with startups, SMEs, entrepreneurs and growing enterprises. We
              partner with businesses and professionals to transform ideas into
              impactful solutions that drive growth, strengthen brands and
              create lasting value.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              At
              <span className="font-semibold text-cyan-400">
                {" "}
                Purvex Tech Studio
              </span>
              , we believe success is built through collaboration. By
              understanding your goals, challenges and vision, we develop
              tailored strategies that deliver measurable results while helping
              you thrive in an ever-evolving digital landscape.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Our expertise is centered around two core divisions:
              <span className="font-semibold text-cyan-300">
                {" "}
                Web Solutions
              </span>{" "}
              and
              <span className="font-semibold text-cyan-300">
                {" "}
                Career Branding.
              </span>{" "}
              From building a powerful digital presence for businesses to
              helping professionals establish a compelling personal brand, we
              combine innovation, creativity and strategic thinking to deliver
              solutions that make a meaningful impact.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              What sets us apart is our client-first approach. Every project is
              guided by strategic planning, modern design, technical excellence
              and meticulous execution, ensuring quality, scalability and
              long-term success. We don't simply deliver projects—we build
              lasting partnerships founded on trust, innovation and shared
              growth.
            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-5">
  {stats.map((item) => (
    <div
      key={item.label}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white/10"
    >
      <h3 className="text-4xl font-black text-cyan-400">
        {item.value}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {item.label}
      </p>
    </div>
  ))}
</div>

{/* HOW WE WORK */}

<div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

  <div className="flex items-center gap-3">
    <div className="h-2 w-2 rounded-full bg-cyan-400" />
    <h3 className="text-2xl font-bold text-white">
      How We Work
    </h3>
  </div>

  <p className="mt-3 text-slate-400 leading-7">
    Every successful project follows a proven workflow that ensures
    quality, transparency and long-term success.
  </p>

  <div className="mt-8 space-y-7">

    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 font-bold text-cyan-400">
          01
        </div>
        <div className="mt-2 h-12 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Discover
        </h4>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          Understanding your business, audience and long-term goals.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 font-bold text-cyan-400">
          02
        </div>
        <div className="mt-2 h-12 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Strategy
        </h4>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          Planning the right roadmap focused on growth, branding and performance.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 font-bold text-cyan-400">
          03
        </div>
        <div className="mt-2 h-12 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Design
        </h4>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          Creating elegant interfaces with exceptional user experience.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 font-bold text-cyan-400">
          04
        </div>
        <div className="mt-2 h-12 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Development
        </h4>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          Building scalable, secure and high-performance digital solutions.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 font-bold text-cyan-400">
          05
        </div>
        <div className="mt-2 h-12 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Testing
        </h4>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          Ensuring quality, responsiveness and flawless performance.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="flex items-center justify-center h-11 w-11 rounded-full bg-cyan-500 text-white font-bold">
        ✓
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Launch & Support
        </h4>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          Delivering your project with continuous improvements and long-term support.
        </p>
      </div>
    </div>

  </div>
</div>

<button className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105">
  Learn More
  <ArrowRight size={20} />
</button>

</div>

{/* RIGHT */}
<div className="space-y-6">
  {cards.map((item) => {
  const Icon = item.icon;

  return (
    <div
      key={item.title}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white/10"
    >
      <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-4 transition-colors duration-300 group-hover:bg-cyan-500/20">
        <Icon
          size={30}
          className="text-cyan-400"
        />
      </div>

      <h3 className="text-2xl font-bold text-white">
        {item.title}
      </h3>

      <p className="mt-4 leading-8 text-slate-300">
        {item.description}
      </p>
    </div>
  );
})}

{/* WHY CHOOSE PURVEX */}

<div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent p-8 backdrop-blur-xl">

  <div className="flex items-start gap-5">

    <div className="rounded-2xl bg-cyan-500/10 p-4">
      <Users
        size={30}
        className="text-cyan-400"
      />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white">
        Why Choose Purvex?
      </h3>

      <p className="mt-4 leading-8 text-slate-300">
        We combine strategy, creativity and technology to deliver
        solutions that create measurable business growth. Every
        project is approached with transparency, innovation and a
        commitment to long-term success.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">

        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
          ✓ Premium Quality
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
          ✓ Client First
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
          ✓ Transparent Process
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
          ✓ Long-Term Support
        </div>

      </div>

    </div>

  </div>

</div>

</div>
</div>
</div>

{/* Background Effects */}

<div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

<div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[180px]" />

<div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[220px]" />

<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.025]" />

</section>
);
}