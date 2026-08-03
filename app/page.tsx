import dynamic from "next/dynamic";

import Hero from "@/components/hero/Hero";
import TrustedBy from "@/components/hero/TrustedBy";

const About = dynamic(() => import("@/components/sections/About"));
const BusinessSolutions = dynamic(() => import("@/components/sections/BusinessSolutions"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const FeaturedBlogs = dynamic(() => import("@/components/sections/FeaturedBlogs"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/sections/Footer"));
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