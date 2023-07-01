import Image from "next/image";
import quoteImage from "../public/asset14.webp";
import miniLogo from "../public/asset4.png";

export default function Quote() {
  return (
    <div className="quote-container">
      <div className="section-container">
        <div className="section-box">
          <div className="section-box-text md:w-[50%]">
            <Image
              className="mini-logo-image mb-2"
              src={miniLogo}
              alt="small logo"
            />
            <p className="capitalize-heading text-xl">EMBEDDED SYSTEMS</p>
            <h4 className="font-extrabold text-2xl md:text-4xl">
              Computer Vision, AI, Embedding
            </h4>
            <p className="text-justify text-lg">
              Our goal is to promote the use of computer vision and AI to
              safeguard lives, goods, company and assets through proactive
              solutions. Our team is continuously looking for people who share
              our passion for enhancing living standards via AI-powered
              solutions.
            </p>
            <button className="px-6 py-3 font-medium text-sm md:text-lg border border-white rounded-lg hover:bg-[#6527be] duration-300 hover:border-[#6527be]">
              Get a free quote
            </button>
          </div>

          <div className="section-box-right quote-right md:w-[40%]">
            <Image src={quoteImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
