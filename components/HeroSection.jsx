import Image from "next/image";
import heroImage from "../public/asset1.webp";
import heroShape from "../public/hero-shape.PNG";
export default function HeroSection() {
  return (
    <div className="hero-section relative">
      <div className="section-container">
        <div className="section-box hero-box">
          <div className="section-box-text md:w-[50%]">
            <p className="text-sm lg:text-lg">Welcome to MD Infotech!</p>
            <h3 className="text-xl text-center md:text-left md:text-5xl">
              Hungry For Challenges <br /> <b>Impact and More!</b>
            </h3>
            <hr />
            <p className="text-sm lg:text-lg">
              One of the pioneer ITES provider company.
            </p>
            <button className="px-6 py-3 font-medium text-sm md:text-lg border border-white rounded-lg hover:bg-[#6527be] duration-300 hover:border-[#6527be]">
              Learn More
            </button>
          </div>
          <div className="section-box-right hero-right md:w-[50%]">
            <Image
              className="hero-image"
              src={heroImage}
              alt="Hero image"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
      <Image className="hero-shape" src={heroShape} alt="Hero shape" />
    </div>
  );
}
