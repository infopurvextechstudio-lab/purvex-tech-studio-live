"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const companies = [
  { image: "/icons/tech/nextjs.svg", name: "Next.js" },
  { image: "/icons/tech/react.svg", name: "React" },
  { image: "/icons/tech/tailwind.svg", name: "Tailwind CSS" },
  { image: "/icons/tech/nodejs.svg", name: "Node.js" },
  { image: "/icons/tech/shopify.svg", name: "Shopify" },
  { image: "/icons/tech/wordpress.svg", name: "WordPress" },
  { image: "/icons/tech/vercel.svg", name: "Vercel" },
  { image: "/icons/tech/cloudflare.svg", name: "Cloudflare" },
  { image: "/icons/tech/github.svg", name: "GitHub" },
  { image: "/icons/tech/typescript.svg", name: "TypeScript" },
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-cyan-500/10 bg-gradient-to-b from-[#08111f] via-[#0b1220] to-[#08111f] py-24">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-cyan-400/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
            TECHNOLOGIES WE USE
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Powered By
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Modern Technologies
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            We build scalable, lightning-fast digital experiences using
            industry-leading technologies trusted by startups and enterprises.
          </p>

        </div>

        <Marquee
          speed={45}
          gradient={false}
          pauseOnHover
          autoFill
        >          {companies.map((company) => (
            <div
              key={company.name}
              className="group mx-5 flex h-48 w-64 items-center justify-center rounded-[32px]
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              transition-all duration-500
              hover:-translate-y-4
              hover:scale-105
              hover:border-cyan-400/60
              hover:bg-cyan-500/10
              hover:shadow-[0_0_60px_rgba(6,182,212,.30)]"
            >
              <div className="flex flex-col items-center gap-6">

                <div
                  className="flex h-32 w-32 items-center justify-center rounded-3xl
                  border border-white/10
                  bg-white/10
                  transition-all duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                  group-hover:border-cyan-400/40
                  group-hover:bg-white/20"
                >
                  <Image
                    src={company.image}
                    alt={company.name}
                    width={90}
                    height={90}
                    className="h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <span className="text-lg font-bold tracking-wide text-slate-100 transition-colors duration-300 group-hover:text-cyan-300">
                  {company.name}
                </span>

              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}