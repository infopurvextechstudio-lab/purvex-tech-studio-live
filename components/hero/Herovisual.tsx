"use client";

import Image from "next/image";
import FloatingIcons from "./FloatingIcons";

export default function HeroVisual() {
  return (
    <div className="relative flex h-[650px] items-center justify-center">

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Main Glow */}
      <div className="absolute h-[650px] w-[650px] rounded-full bg-cyan-500/15 blur-[180px]" />

      {/* Rings */}
    <div className="absolute h-[540px] w-[540px] rounded-full border border-cyan-500/20" />

      <div className="absolute h-[380px] w-[380px] rounded-full border border-blue-500/10" />
<div className="absolute h-[560px] w-[560px] rounded-full border border-cyan-500/10" />
      {/* Dashboard */}
      <div className="relative z-20 w-full max-w-[360px] sm:max-w-[430px] overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(6,182,212,.20)]">

        {/* Window Bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="space-y-5 p-6">
<div className="flex h-64 items-center justify-center rounded-2xl bg-[#0B1220] p-3">
 <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B1220] p-3 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
  <Image
    src="/images/hero/hero-banner.jpeg"
    alt="Purvex Tech Studio Dashboard"
    width={1200}
    height={800}
    priority
    className="h-auto w-full object-contain"
  />
</div>
</div>

          <div className="grid grid-cols-3 gap-4">

            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs text-slate-400">Traffic</p>
              <h3 className="mt-2 text-2xl font-bold text-white">+184%</h3>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs text-slate-400">Growth</p>
              <h3 className="mt-2 text-2xl font-bold text-green-400">+92%</h3>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs text-slate-400">Revenue</p>
              <h3 className="mt-2 text-2xl font-bold text-cyan-400">+$42K</h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}