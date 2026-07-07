"use client";

import {
  Bot,
  Globe,
  Briefcase,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import FloatingIcons from "./FloatingIcons";
export default function HeroVisual() {
  return (
    <div className="relative flex h-[650px] items-center justify-center
    <FloatingIcons />">

      {/* Main Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />

      {/* Outer Ring */}
      <div className="absolute h-[480px] w-[480px] rounded-full border border-blue-500/20 animate-pulse" />

      {/* Dashboard */}
      <div className="relative z-20 w-[430px] overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

        {/* Window Bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* Dashboard */}
        <div className="space-y-5 p-6">

          <div className="h-40 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs text-slate-400">Traffic</p>
              <h3 className="mt-2 text-3xl font-bold text-white">+184%</h3>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs text-slate-400">Growth</p>
              <h3 className="mt-2 text-3xl font-bold text-green-400">+92%</h3>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Icons */}

      <div className="absolute left-0 top-16 rounded-full bg-blue-600 p-4 shadow-xl animate-bounce">
        <Globe className="text-white" />
      </div>

      <div className="absolute right-0 top-20 rounded-full bg-violet-600 p-4 shadow-xl animate-bounce">
        <Bot className="text-white" />
      </div>

      <div className="absolute bottom-16 left-10 rounded-full bg-green-600 p-4 shadow-xl animate-bounce">
        <TrendingUp className="text-white" />
      </div>

      <div className="absolute bottom-20 right-8 rounded-full bg-orange-500 p-4 shadow-xl animate-bounce">
        <Briefcase className="text-white" />
      </div>

      <div className="absolute right-24 bottom-0 rounded-full bg-pink-500 p-4 shadow-xl animate-bounce">
        <Sparkles className="text-white" />
      </div>

    </div>
  );
}