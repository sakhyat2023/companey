// import Image from "next/image";

import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Navbar />
      <About />
      <Services />
      <Quote />
      <WhyUs />
      <Projects />
      <NewsLetter />
      <Footer />
    </>
  );
}
