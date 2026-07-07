import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import BackgroundEffects from "./BackgroundEffects";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#050816] via-[#07122b] to-[#050816]">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563EB22,transparent_40%),radial-gradient(circle_at_bottom_left,#7C3AED22,transparent_40%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-40 lg:grid-cols-2">

        <HeroContent />

        <HeroVisual />

      </div>

    </section>
  );
}