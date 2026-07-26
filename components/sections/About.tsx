import {
  ArrowRight,
  BadgeCheck,
  Rocket,
  ShieldCheck,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "We build modern digital products using the latest technologies, AI workflows and scalable architectures.",
  },
  {
    icon: BrainCircuit,
    title: "AI Driven",
    description:
      "From intelligent automation to AI-powered business solutions, we help companies work smarter and grow faster.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Security",
    description:
      "Every solution is developed with performance, reliability, security and long-term scalability in mind.",
  },
  {
    icon: BadgeCheck,
    title: "Client Success",
    description:
      "Your business goals become our mission. We focus on measurable results, not just beautiful designs.",
  },
];

export default function About() {
  return (
  
      <section id="about">
    
  
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb22,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed22,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
              <Sparkles size={16} />
              ABOUT PURVEX
            </div>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
              Building
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Future-Ready{" "}
              </span>
              Digital Experiences
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Purvex Tech Studio is a modern digital agency focused on
              Business Growth, AI Automation, Career Branding and Premium
              Digital Experiences.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              We combine strategy, creativity and cutting-edge technology
              to help startups, businesses and professionals establish a
              powerful online presence and achieve sustainable growth.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div>
                <h3 className="text-4xl font-black text-cyan-400">
                  50+
                </h3>

                <p className="mt-2 text-slate-400">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-400">
                  12+
                </h3>

                <p className="mt-2 text-slate-400">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-400">
                  98%
                </h3>

                <p className="mt-2 text-slate-400">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-400">
                  24/7
                </h3>

                <p className="mt-2 text-slate-400">
                  Premium Support
                </p>
              </div>

            </div>

            <button className="mt-12 flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105">
              Learn More

              <ArrowRight size={20} />
            </button>

          </div>

          {/* RIGHT */}

          <div className="grid gap-6">

            {features.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/10"
                >

                  <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-4">
                    <Icon
                      className="text-cyan-400"
                      size={34}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {item.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}