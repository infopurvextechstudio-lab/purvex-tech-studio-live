import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import TrustedBy from "@/components/hero/TrustedBy";
import About from "@/components/sections/About";
import BusinessSolutions from "@/components/sections/BusinessSolutions";
import Portfolio from "@/components/sections/Portfolio";
// import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FeaturedBlogs from "@/components/sections/FeaturedBlogs";



export default function Home() {
  return (
    <>
   <Navbar />
<Hero />
<TrustedBy />

<About />

<BusinessSolutions />

<Portfolio />

<Pricing />

<FeaturedBlogs />

<FAQ />

<Contact />

<Footer />
    </>
  );
}