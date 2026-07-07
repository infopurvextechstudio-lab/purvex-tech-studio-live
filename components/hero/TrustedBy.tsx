"use client";

import Marquee from "react-fast-marquee";
import {
  FaShopify,
  FaWordpress,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  // SiOpenai,
  SiCloudflare,
  SiVercel,
} from "react-icons/si";

const companies = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaShopify, name: "Shopify" },
  { icon: FaWordpress, name: "WordPress" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiCloudflare, name: "Cloudflare" },
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-[#0B1220] to-[#111827] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          Technologies We Work With
        </p>

        <Marquee speed={45} gradient={false} pauseOnHover>
          {companies.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="mx-5 flex h-28 w-56 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-blue-500/10"
            >
              <div className="flex flex-col items-center gap-3">
                <Icon className="text-5xl text-blue-400" />
                <span className="font-semibold text-slate-200">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}