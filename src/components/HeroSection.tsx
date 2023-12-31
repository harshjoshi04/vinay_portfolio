import React from "react";
import { CgArrowDown } from "react-icons/cg";

const HeroSection = () => {
  return (
    <div className="w-full h-full  flex flex-col  md:flex-row   pt-10 md:pt-0  justify-between items-center">
      <div className="space-y-4 mx-auto md:mx-0">
        <div>
          <p className="text-6xl relative pb-6 " id="title2">
            <span className="titleName">Vinay</span>
            <br /> <span className="pl-4 titleName">Chauhan</span>
          </p>
        </div>
        <div className="py-4 space-x-2 text-md">
          <a
            className="transition hover:text-second cursor-pointer "
            href="#contact"
            id="links"
          >
            Instagram
          </a>
          <span id="links">|</span>
          <a
            className="transition hover:text-second cursor-pointer "
            href="#contact"
            id="links"
          >
            LinkedIn
          </a>
        </div>
        <a href="#contact">
          <button
            className="px-6 py-2 border-2 border-second uppercase text-second  font-semibold transition  hover:text-mainFirst hover:bg-second   tracking-[1.2px]"
            id="contactBtn"
          >
            Contact ME
          </button>
        </a>
      </div>

      <div className="flex-col justify-start md:w-[50%]  space-y-4 px-4 md:px-0 ">
        <p className="text-lg uppercase text-second  tracking-[1px]">
          Introduction
        </p>
        <p className="text-4xl">
          Web Developer, <br /> App Developer
        </p>
        <p>
          I am a passionate and seasoned Web and App Developer dedicated to
          crafting immersive online experiences. As a tech enthusiast with a
          keen eye for design, I bring to the table a blend of innovation and
          precision that transforms ideas into dynamic, user-centric solutions.
        </p>
        <a
          href="#service"
          className="text-second flex  items-center space-x-1 cursor-pointer "
        >
          <span>Learn More</span>
          <CgArrowDown size={18} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
