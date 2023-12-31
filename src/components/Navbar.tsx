"use client";
import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleChange = () => {
    setisOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between items-center  ">
        <div>
          <p className="font-bold text-3xl relative NavLink" id="title">
            VC
          </p>
        </div>
        <div className="md:hidden px-4">
          <HiOutlineMenu
            size={30}
            className="cursor-pointer"
            onClick={handleChange}
          />
        </div>
        <div className="hidden md:flex  items-center space-x-10 text-[17px] font-medium">
          <a className="NavLink">Home</a>
          <a className="NavLink" href="#service" id="link">
            Service
          </a>
          <a className="NavLink" href="#skills" id="link">
            Skills
          </a>
          <a className="NavLink" href="#projects" id="link">
            Projects
          </a>
          <a className="NavLink" href="contact" id="link">
            Contact
          </a>
        </div>
      </div>
      <div
        className={twMerge(
          `mx-3 my-2 h-0 overflow-hidden bg-[#333333] transition-all flex flex-col items-center space-y-4 peer-active:h-auto `,
          isOpen && "h-auto"
        )}
      >
        <div className="pt-2">
          <a onClick={handleChange} className="NavLink ">
            Home
          </a>
        </div>
        <a onClick={handleChange} className="NavLink" href="#service">
          Service
        </a>
        <a onClick={handleChange} className="NavLink" href="#skills">
          Skills
        </a>
        <a onClick={handleChange} className="NavLink" href="#projects">
          Projects
        </a>
        <div className="pb-2">
          <a onClick={handleChange} className="NavLink" href="contact">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
