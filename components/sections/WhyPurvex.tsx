import {
  Zap,
  ShieldCheck,
  Brain,
  Clock3,
  Users,
  Rocket,
} from "lucide-react";

const points = [
  {
    icon: Zap,
    title: "Fast Delivery",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
  },
  {
    icon: Brain,
    title: "AI Powered",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
  },
  {
    icon: Users,
    title: "Dedicated Team",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
  },
];

export default function WhyPurvex() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-16 text-center text-5xl font-black text-white">
          Why Choose Purvex?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {points.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-2"
              >
                <Icon
                  className="mx-auto mb-5 text-blue-400"
                  size={40}
                />

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}