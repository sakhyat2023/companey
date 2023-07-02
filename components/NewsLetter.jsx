import React from "react";
import emailImg from "../public/email.webp";
import Image from "next/image";
const NewsLetter = () => {
  return (
    <div className="contact-container bg-[#ebf8ff]" id="contact">
      <div className="w-full md:max-w-4xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <div className="flex items-center gap-5">
            <Image
              src={emailImg}
              alt=""
              width={60}
              height={60}
              className="hidden md:flex"
            />
            <div className="flex md:flex-col gap-1 md:w-64">
              <span>
                <span className="font-bold">Subscribe</span> your email for
              </span>
              <span>
                <span className="font-bold">Newsletter</span> & Stay up to date
              </span>
            </div>
          </div>
          <form className="flex flex-col md:flex-row items-center w-full">
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="py-3 px-6 outline-none w-full"
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
  );
};

export default NewsLetter;
