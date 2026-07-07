"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 120,
    suffix: "+",
    label: "Clients",
  },
  {
    value: 98,
    suffix: "%",
    label: "Success",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support",
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

      {stats.map((item) => (
        <div
          key={item.label}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]"
        >
          <h3 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            <CountUp
              end={item.value}
              duration={2.5}
            />

            {item.suffix}

          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {item.label}
          </p>

        </div>
      ))}

    </div>
  );
}