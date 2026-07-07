import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import TrustedBy from "@/components/hero/TrustedBy";
import About from "@/components/sections/About";
// import Services from "@/components/services/Services";
// import Stats from "@/components/stats/Stats";
import BusinessSolutions from "@/components/sections/BusinessSolutions";
import CareerBranding from "@/components/sections/CareerBranding";
import WhyPurvex from "@/components/sections/WhyPurvex";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";


export default function Home() {
  return (
    <>
     <Navbar />
<Hero />
<TrustedBy />
<About />
<BusinessSolutions />
<WhyPurvex />
<CareerBranding />
<Pricing />
<Portfolio />
<Process />
<Testimonials />
<FAQ />
<CTA />
<Contact />
<Footer />
    </>
  );
}