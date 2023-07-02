"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import footerImg from "../public/FOOTER logo 1.png"
const Footer = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleShowContact = () => {
    setShowContact(!showContact);
  };
  return (
    <footer className="bg-gradient-to-r from-[#9681EB] to-[#6527BE] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
          {/* Footer Items */}
          <div className="col-span-1">
            <Image
              src={footerImg}
              alt="Logo"
              width={200}
              height={200}
            />
            <p className="mt-8">
              If you have the Commitment & Desire to develop your business we
              have the experience and expertise to make it a success!
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-span-1 flex flex-col items-start md:items-center">
            <div className="flex flex-col justify-center gap-2">
              <h4
                className="font-bold cursor-pointer md:cursor-auto mb-4"
                onClick={handleShowLinks}
              >
                Trigger Links
              </h4>
              {showLinks ? (
                <div className="flex flex-col gap-4">
                  <Link href="/career">Career</Link>
                  <Link href="/about">About</Link>
                </div>
              ) : (
                <div className="hidden md:flex flex-col gap-4">
                  <Link href="/career">Career</Link>
                  <Link href="/about">About</Link>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 flex flex-col items-start">
            <h4
              className="font-bold cursor-pointer md:cursor-auto mb-4"
              onClick={handleShowContact}
            >
              Contact Info
            </h4>
            {showContact ? (
              <div className="flex flex-col gap-4">
                <p className="mb-2">
                  Headquarter: Bangabandhu Sheikh Mujib Hi-Tech Park, Rajshahi,
                  Bangladesh.
                </p>
                <p className="mb-2">(+88) 01914 092223</p>
                <p className="mb-2">info@mdinfotechbd.com</p>
              </div>
            ) : (
              <div className="hidden md:flex flex-col gap-4">
                <p className="mb-2">
                  Headquarter: Bangabandhu Sheikh Mujib Hi-Tech Park, Rajshahi,
                  Bangladesh.
                </p>
                <p className="mb-2">(+88) 01914 092223</p>
                <p className="mb-2">info@mdinfotechbd.com</p>
              </div>
            )}
          </div>
        </div>
        <div className="footer-bottom text-center border-t border-white py-5">
          <p>MD Infotech {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;