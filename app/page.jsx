// import Image from "next/image";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import NewsLetter from "@/components/NewsLetter";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Quote />
      <WhyUs />
      <Projects />
      <NewsLetter />
    </>
  );
}
