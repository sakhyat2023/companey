import Image from "next/image";
import aboutImage from "../public/asset3.png";
import thumbGif from "../public/asset6.gif";
import miniLogo from "../public/asset4.png";
import customDivider from "../public/asset5.png";

export default function About() {
  return (
    <div className="section-container">
      <div className="section-box"  id="about">
        <div className="section-box-left about-us-left">
          <div className="about-logo-title-small-screen md:hidden grid justify-center text-center mb-10">
            <Image
              className="mini-logo-image mb-2 mx-auto"
              src={miniLogo}
              alt="small logo"
            />
            <h3 className="text-[#6527BE] text-3xl font-extrabold ">
              About Us
            </h3>
            <Image
              className="divider-image"
              src={customDivider}
              alt="small logo"
            />
          </div>
          <Image
            className="about-image "
            src={aboutImage}
            alt="Hero image"
            width={500}
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
              About Us
            </h3>
            <Image
              className="divider-image"
              src={customDivider}
              alt="small logo"
            />
          </div>
          <p className="text-justify">
            MD Infotech is a cutting-edge IT business. It offers a wide range of
            IT services and products on a local and global level. We take note
            of your creative suggestions and implement them as you see fit. Our
            customer-centric services include web development, app development,
            artificial intelligence and robotics, eCommerce management, content
            creation, and many more. Our knowledgeable team always keeps up with
            new technology and helps other employees get ready for 4IR.
          </p>
          <div className="thumb-gif">
            <Image className="thumb-image " src={thumbGif} alt="Thumb image" />
          </div>
          <div className="about-designation">
            <h4 className="font-bold text-xl">MD Monjurul Morshed</h4>
            <p>Founder & Chief Executive officer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
