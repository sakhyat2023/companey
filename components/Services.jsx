"use client";
import Image from "next/image";
import miniLogo from "../public/asset4.png";
import customDivider from "../public/asset5.png";
import servicecard1 from "../public/asset12.png";
import services from "../data/services.js";
export default function Services() {
  const servicesCardsJSX = services.map((service, i) => {
    return (
      <div className="service-card">
        <div className="service-card-image">
          <Image width={120} src={service.image} />
        </div>
        <h4 className="service-card-title">{service.title}</h4>
        <p className="service-card-description">{service.desc}</p>
      </div>
    );
  });
  return (
    <div className="services-container">
      <div className="section-container">
        <div className="services-logo-title mb-8">
          <Image
            className="mini-logo-image mb-2 mx-auto"
            src={miniLogo}
            alt="small logo"
          />
          <h3 className="text-[#6527BE] text-3xl font-extrabold text-center">
            Our Services
          </h3>
          <Image
            className="divider-image mx-auto"
            src={customDivider}
            alt="small logo"
          />
        </div>
        <div className="services-cards">{servicesCardsJSX}</div>
      </div>
    </div>
  );
}
