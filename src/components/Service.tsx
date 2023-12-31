import React from "react";
import { LuCode } from "react-icons/lu";
import { MdPhoneAndroid } from "react-icons/md";

const Service = () => {
  return (
    <div
      className="w-full h-[90vh] bg-mainSecond  flex md:justify-center  sm:px-4"
      id="service"
    >
      <div className="md:w-[60vw] pt-28 h-[90%]">
        <div className="flex flex-col justify-center gap-7">
          <div className="flex w-full flex-col items-center space-y-3">
            <p className="uppercase text-second tracking-[1px]">Services</p>
            <p className="text-4xl">What I Am Great At</p>
            <p className="max-w-2xl text-md font-extralight tracking-[0.8px] text-center">
              Elevate your digital presence with seamless solutions tailored for
              the web and mobile platforms. From captivating websites to
              engaging mobile applications, I specialize in creating responsive,
              user-friendly experiences that bring your ideas to life and
              connect with your audience.
            </p>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="w-56 h-56 bg-[#2E2E35] flex flex-col items-center gap-4 justify-center text-xl transition hover:text-second">
              <LuCode className="text-[5rem]" />
              <p>Web Development</p>
            </div>
            <div className="w-56 h-56 bg-[#2E2E35] flex flex-col items-center gap-4 justify-center text-xl hover:text-second">
              <MdPhoneAndroid className="text-[5rem]" />
              <p>App Development</p>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              className="px-4 py-2 border border-second text-second uppercase tracking-[0.7px] transition hover:text-mainSecond hover:bg-second"
              download
              href="/vinay_cv.pdf"
            >
              Download Cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
