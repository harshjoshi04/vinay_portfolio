import React from "react";
import Tech from "./Tech";

const Skills = () => {
  return (
    <div
      className="bg-mainFirst w-full h-full pb-16 md:h-[80vh] flex md:justify-center sm:px-4"
      id="skills"
    >
      <div className="w-full px-4 md:px-0 md:w-[60vw] pt-16 h-[100%] ">
        <div className="flex flex-col justify-center space-y-16 ">
          <div className="flex w-full flex-col items-center space-y-3">
            <p className="uppercase -tracking-tight text-md text-second">
              Skills
            </p>
            <p className="text-4xl">Tech&apos;s That I Know</p>
            <p className="text-center">
              I bring a wealth of expertise in web development, seamlessly
              integrating front-end and back-end technologies to deliver
              holistic solutions. Proficient in crafting visually captivating
              user interfaces with HTML5, CSS3, and JavaScript . On the back
              end, I build robust server-side logic, databases, and APIs using
              languages such as Node.js(Express.Js) orPHP, working with
              databases including MySQL and NoSQL databases like MongoDB, With
              mobile app development, I create cross-platform solutions for iOS
              and Android using frameworks like Flutter. My skill set extends to
              database management, responsive design implementation, and
              ensuring security best practices. This comprehensive approach
              ensures the creation of seamless, responsive, and secure digital
              experiences.
            </p>
          </div>
          <div className="flex justify-center ">
            <div className="w-[100vw] md:w-[30vw] h-auto bg-mainSecond px-4 py-2 flex flex-col justify-start ">
              <p className="text-second text-lg  pt-2 pb-4">Tech&apos;s</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4  text-sm">
                <Tech />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
