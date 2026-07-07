import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    text: "Understanding your business goals and audience.",
  },
  {
    icon: PencilRuler,
    title: "Strategy & Design",
    text: "Planning the experience and creating modern UI/UX.",
  },
  {
    icon: Code2,
    title: "Development",
    text: "Building fast, scalable and SEO-friendly solutions.",
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    text: "Deployment, optimization and continuous support.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#08111f] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black text-white">
            Our Process
          </h2>
          <p className="mt-5 text-slate-300">
            A simple, transparent workflow from idea to launch.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-2 hover:border-blue-500/40"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/15">
                  <Icon className="text-blue-400" size={30} />
                </div>

                <div className="mb-2 text-sm font-bold text-cyan-400">
                  Step {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-300">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}