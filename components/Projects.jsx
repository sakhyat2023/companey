"use client";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiSolidStar } from "react-icons/bi";
import { BsStarHalf } from "react-icons/bs";
import Image from "next/image";
import miniLogo from "../public/asset4.png";
import customDivider from "../public/asset5.png";
import img1 from "../public/t3.png";

const Projects = () => {
  const sliderData = [
    {
      id: 1,
      img: img1,
      name: "Leroy P. King",
      designation: "CEO | JetPark",
      description:
        "Great service...I didn't have any ideas on how to get started and seller patiently worked with me through the whole process.",
    },
    {
      id: 2,
      img: img1,
      name: "Leroy P. King",
      designation: "CEO | JetPark",
      description:
        "Great service...I didn't have any ideas on how to get started and seller patiently worked with me through the whole process.",
    },
    {
      id: 3,
      img: img1,
      name: "Leroy P. King",
      designation: "CEO | JetPark",
      description:
        "Great service...I didn't have any ideas on how to get started and seller patiently worked with me through the whole process.",
    },
  ];
  return (
    <div className="swiper-container relative" id="testimonial">
      <div className="slider-info max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-10 md:px-4">
        <div className="services-logo-title mb-8">
          <Image
            className="mini-logo-image mb-2 mx-auto"
            src={miniLogo}
            alt="small logo"
          />
          <h3 className="text-[#6527BE] text-3xl font-extrabold text-center">
            Testimonial
          </h3>
          <Image
            className="divider-image mx-auto"
            src={customDivider}
            alt="small logo"
          />
          <p className="text-center w-96 mx-auto text-[#666666]">
            We deliver the digital result you desire. For whom we have this
            platform, their comments about us
          </p>
        </div>
        <Swiper
          modules={[Navigation, A11y]}
          grabCursor={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            992: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            896: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <div className="slider-info py-3 px-10">
                  <div className="info flex items-center">
                    <div className="thumb">
                      <Image src={img1} alt="" width={130} height={130} />
                    </div>
                    <div className="rating flex gap-2 text-yellow-400">
                      <BiSolidStar size={18} />
                      <BiSolidStar size={18} />
                      <BiSolidStar size={18} />
                      <BiSolidStar size={18} />
                      <BsStarHalf size={16} />
                    </div>
                  </div>
                  <div className="-mt-12 mb-4 leading-6 text-[#232323]">
                    <p className="indent-[7rem]">
                      Great service...I didn't have any ideas on how to get
                      started and seller patiently worked with me through the
                      whole process.
                    </p>
                  </div>
                  <div className="profile-info">
                    <h4>Leroy P. King</h4>
                    <span className="text-[#6527be]">
                      CEO | <strong>JetPark</strong>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
