import React from "react";
import emailImg from "../public/email.webp";
import Image from "next/image";
const NewsLetter = () => {
  return (
    <div className="contact-container bg-[#ebf8ff]" id="contact">
      <div className="section-container px-4">
        <div className="flex justify-center h-64">
          <div className="news-content flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 w-full">
            <div className="flex items-center gap-5">
              <Image
                src={emailImg}
                alt=""
                width={60}
                height={60}
                className="hidden md:flex"
              />
              <div className="flex md:flex-col">
                <p>
                  <span className="font-bold">Subscribe</span> your email for
                </p>
                <p>
                  <span className="font-bold">Newsletter</span> & Stay up to
                  date
                </p>
              </div>
            </div>
            <form className="flex flex-col md:flex-row items-center">
              <div className="form-control flex bg-white">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="py-3 px-6 outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#6527BE] text-white py-3 px-6"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
