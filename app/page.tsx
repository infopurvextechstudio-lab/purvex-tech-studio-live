import dynamic from "next/dynamic";

import Hero from "@/components/hero/Hero";
import TrustedBy from "@/components/hero/TrustedBy";
import About from "@/components/sections/About";
import BusinessSolutions from "@/components/sections/BusinessSolutions";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import FeaturedBlogs from "@/components/sections/FeaturedBlogs";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials")
);

const FAQ = dynamic(
  () => import("@/components/sections/FAQ")
);

const Contact = dynamic(
  () => import("@/components/sections/Contact")
);

const Footer = dynamic(
  () => import("@/components/sections/Footer")
);

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />

      <About />

      <BusinessSolutions />

      <Portfolio />

      <Pricing />

      <FeaturedBlogs />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />
    </>
  );
}