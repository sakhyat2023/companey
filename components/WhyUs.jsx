import Image from "next/image";
import aboutImage from "../public/asset15.webp";
import miniLogo from "../public/asset4.png";
import customDivider from "../public/asset5.png";

export default function WhyUs() {
  return (
    <div className="section-container">
      <div className="section-box">
        <div className="section-box-left about-us-left">
          <div className="about-logo-title-small-screen md:hidden grid justify-center text-center mb-10">
            <Image
              className="mini-logo-image mb-2 mx-auto"
              src={miniLogo}
              alt="small logo"
            />
            <h3 className="text-[#6527BE] text-3xl font-extrabold ">
              Why Choose Us?
            </h3>
            <Image
              className="divider-image"
              src={customDivider}
              alt="small logo"
            />
          </div>
          <Image
            className="about-image mt-10"
            src={aboutImage}
            alt="Hero image"
            width={600}
            height={600}
          />
        </div>
        <div className="section-box-text about-us-text md:w-[50%] mt-12">
          <div className="about-logo-title-large-screen hidden md:block">
            <Image
              className="mini-logo-image mb-3"
              src={miniLogo}
              alt="small logo"
            />
            <h3 className="text-[#6527BE] text-3xl font-extrabold ">
              Why Choose Us?
            </h3>
            <Image
              className="divider-image"
              src={customDivider}
              alt="small logo"
            />
          </div>
          <p className="text-justify">
            We Are Here For Made Your Idea. Our team is dedicated to learning
            and understanding about your business. By building a relationship
            with each of our clients, we can ensure our marketing strategy is
            built with the sole focus of solving the problems your business
            faces. Each of our marketing campaigns is built with the client's
            needs in mind to solve the greatest marketing problems. Our team is
            not only dedicated to their profession; they are persistent also to
            make clients completely satisfied because our services are
            client-centric.
          </p>

          <button className="px-6 py-3 font-medium text-sm md:text-lg border border-blue-[#6527BE] rounded-lg bg-[#6527BE] text-white hover:bg-[#9681EB] duration-300 hover:border-[#9681EB]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
