"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 7,
    suffix: "+",
    label: "Global Clients",
  },
  {
    value: 98,
    suffix: "%",
    label: "Success Rate",
  },
  {
    value: "24/7",
    suffix: "",
    label: "Support",
  },
];

export default function Stats() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="group flex min-h-[110px] sm:min-h-[140px] lg:min-h-[170px] flex-col justify-center rounded-2xl lg:rounded-3xl border border-white/10 bg-white/5 px-3 py-5 sm:px-5 sm:py-6 lg:px-6 lg:py-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(6,182,212,.25)]"
        >
          <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center text-2xl sm:text-3xl lg:text-5xl font-black text-transparent">
            {typeof item.value === "number" ? (
              <>
                <CountUp
                  end={item.value}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </>
            ) : (
              item.value
            )}
          </h3>

          <p className="mt-2 sm:mt-3 text-center text-[11px] sm:text-sm lg:text-base font-medium leading-5 text-slate-300">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}