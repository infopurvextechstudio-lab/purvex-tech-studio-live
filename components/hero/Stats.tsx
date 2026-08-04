"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";

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
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number | string;
  suffix: string;
  label: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / rect.width) * 12;
    const rotateX = -((y - rect.height / 2) / rect.height) * 12;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const reset = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
   <motion.div
  
  whileHover={{ y: -8 }}
  transition={{ type: "spring", stiffness: 250 }}
>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 will-change-transform hover:border-cyan-400/60 hover:shadow-[0_0_60px_rgba(6,182,212,.30)]"
      >
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl p-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 animate-[spin_5s_linear_infinite] rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        {/* Mouse Glow */}
        <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

        {/* Floating Particles */}
        <Sparkles className="absolute right-5 top-5 h-5 w-5 animate-pulse text-cyan-400/60" />
        <Sparkles className="absolute bottom-5 left-5 h-4 w-4 animate-bounce text-blue-400/40" />

        <motion.h2
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 10,
          }}
          className="relative bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-center text-3xl font-black text-transparent sm:text-4xl lg:text-5xl"
        >
          {typeof value === "number" ? (
            <>
              <CountUp
                end={value}
                duration={1.3}
                enableScrollSpy
                scrollSpyOnce
              />
              {suffix}
            </>
          ) : (
            value
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-sm font-medium text-slate-300 lg:text-base"
        >
          {label}
        </motion.p>

        {/* Bottom Neon Line */}
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
      viewport={{ once: true, amount: 0.25 }}
      className="relative mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
        />
      ))}
    </motion.div>
  );
}