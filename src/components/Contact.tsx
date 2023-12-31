import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Contact = () => {
  return (
    <div
      className="w-full h-[80vh] bg-mainFirst  flex md:justify-center  sm:px-4 relative"
      id="contact"
    >
      <div className="md:w-[60vw] pt-28 h-[90%]">
        <div className="flex flex-col justify-center gap-7">
          <div className="flex w-full flex-col items-center space-y-3">
            <p className="uppercase text-second tracking-[1px]">Contact Us</p>
            <p className="text-4xl capitalize   ">Way to Contact Us </p>
            <p className="max-w-2xl text-md font-extralight tracking-[0.8px] text-center">
              Have questions, feedback, or just want to say hello? We'd love to
              hear from you! Our dedicated support team is here to assist you.
              Feel free to reach out through the following channels:
            </p>
          </div>
          <div className="flex justify-center  gap-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3   gap-4">
              <div className="flex items-center gap-4 px-6 py-4 bg-mainSecond rounded  shadow text-lg -tracking-tighter       ">
                <MdOutlineMailOutline size={25} />
                <a
                  className="text-second NavLink"
                  href="mailto:chauhavinay6@gmail.com"
                >
                  chauhavinay6@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-mainSecond rounded  shadow text-lg -tracking-tighter       ">
                <HiPhone size={25} />
                <p className="text-second text-center flex-1 cursor-pointer NavLink">
                  +91 7862916153
                </p>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-mainSecond rounded  shadow text-lg -tracking-tighter       ">
                <BiLogoLinkedin size={25} />
                <a
                  className="text-second text-center  NavLink"
                  href="https://www.linkedin.com/in/chauhan-vinay-6b8024280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  Make Connection
                </a>
              </div>
              <div className="md:col-span-3 md:flex justify-center">
                <div className="flex items-center gap-4 px-6 py-4 bg-mainSecond rounded  shadow text-lg -tracking-tighter        ">
                  <FaInstagram size={25} />
                  <a
                    className="text-second text-center  NavLink"
                    href="https://www.instagram.com/chauhan_vinay_16/"
                  >
                    @chauhan_vinay_16
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <div>
          <div className="absolute right-6 bottom-20">
            <div className="border-4 border-second text-second font-bold ">
              <a href="#mainhome">
                <IoIosArrowUp size={35} />
              </a>
            </div>
          </div>
          <div className=" w-full h-1 bg-second mb-4" />
          <div className="flex justify-center py-2">
            <p>Copyright - Vinay Chauhan | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
