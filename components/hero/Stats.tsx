"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

type StatCardProps = {
  value: number | string;
  suffix: string;
  label: string;
};
function StatCard({
  value,
  suffix,
  label,
}: StatCardProps) {
  return (
    <motion.div
      
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,.22)]">

        {/* Top Border */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-80" />

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <h2 className="relative bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-center text-3xl font-black text-transparent sm:text-4xl lg:text-5xl">
          {typeof value === "number" ? (
            <>
              <CountUp
                end={value}
                duration={1.5}
                enableScrollSpy
                scrollSpyOnce
              />
              {suffix}
            </>
          ) : (
            value
          )}
        </h2>

        <p className="mt-4 text-center text-sm font-medium text-slate-300 lg:text-base">
          {label}
        </p>

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4"
    >
      {stats.map((s, i) => (
        <StatCard
          key={i}
          value={s.value}
          suffix={s.suffix}
          label={s.label}
        />
      ))}
    </motion.div>
  );
}