import CTAButton from "@/components/layout/navbar/CTAButton";
import Stats from "./Stats";

export default function HeroContent() {
  return (
    <div className="max-w-xl lg:max-w-2xl">

      <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
         Trusted by Professionals & Growing Businesses
      </div>
<h1 className="text-6xl font-black leading-[1.05] tracking-tight text-white lg:text-7xl">
  Helping Businesses

  <br />

  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
    Grow Smarter.
  </span>
</h1>
      

     <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
  We help businesses launch high-performing websites, automate workflows,
  strengthen digital presence, and build professional brands that convert
  visitors into long-term clients.
</p>
      <div className="mt-10 flex flex-wrap gap-5">

        <CTAButton />

        <button className="rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:bg-blue-500/10">
          View Portfolio
        </button>

      </div>

      <div className="mt-16">
        <Stats />
      </div>

    </div>
  );
}