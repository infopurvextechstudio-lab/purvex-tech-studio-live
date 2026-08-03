import CTAButton from "@/components/layout/navbar/CTAButton";
import Stats from "./Stats";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="max-w-xl lg:max-w-2xl">

      <div className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-300 sm:px-5 sm:text-sm">
         Trusted by Global  Professionals 
      </div>
<h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">

Building

<br />

<span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
Together.
</span>

<br />


</h1>
      

    
    <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">

Purvex Tech Studio helps startups, businesses and professionals
launch premium websites,career branding and
high-converting digital experiences that drive measurable growth.

</p>
      <div className="mt-10 flex flex-wrap gap-5">

        <CTAButton />

<Link
  href="/#portfolio"
  className="rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:bg-blue-500/10"
>
  View Portfolio
</Link>

      </div>

      <div className="mt-16">
        <Stats />
      </div>

    </div>
  );
}