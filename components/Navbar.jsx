"use client";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/asset0.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "#about",
    },
    {
      name: "service",
      path: "#service",
    },
    {
      name: "testimonial",
      path: "#testimonial",
    },
    {
      name: "contact",
      path: "#contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed  top-0 w-full ease-in duration-300 bg-white z-[50]">
      <nav className="">
        <div className="max-w-7xl navbar mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-30">
            <div className="logo">
              <Link href="/" onClick={closeMenu}>
                <Image width={200} src={logo} />
              </Link>
            </div>
            <button onClick={toggleMenu} type="button" className="md:hidden">
              {!isOpen ? <BiMenuAltRight size={23}/> : <IoIosClose size={23}/>}
            </button>
            <div className="hidden md:block sm:ml-6">
              <ul className="flex gap-10">
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.path}
                    className={`capitalize text-black py-2 text-sm font-medium `}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.path}
                  className="capitalize text-black px-3 py-2 text-sm font-medium border-b"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
