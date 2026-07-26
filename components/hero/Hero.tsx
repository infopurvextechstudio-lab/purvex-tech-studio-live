import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

import { GridBackground } from "@/components/effects/grid-background";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { MouseGradient } from "@/components/effects/mouse-gradient";
import { BackgroundLines } from "@/components/effects/background-lines";
import { FloatingParticles } from "@/components/effects/floating-particles";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#07122b] to-[#050816]">
      {/* Premium Background Animations */}
      <GridBackground />
      <AuroraBackground />
      <MouseGradient />
      <BackgroundLines />
      <FloatingParticles />

      {/* Fallback Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563EB22,transparent_40%),radial-gradient(circle_at_bottom_left,#7C3AED22,transparent_40%)]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 pt-32 pb-16 lg:grid lg:min-h-screen lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-6 lg:pt-40 lg:pb-20">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}