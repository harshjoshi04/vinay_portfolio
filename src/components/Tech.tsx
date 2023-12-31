"use client";
import React, { useMemo } from "react";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill } from "react-icons/ri";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";

const Tech = () => {
  const Techs = useMemo(
    () => [
      {
        id: 1,
        title: "HTML",
        Icon: FaHtml5,
      },
      {
        id: 2,
        title: "CSS",
        Icon: FaCss3,
      },
      {
        id: 3,
        title: "Javascript",
        Icon: IoLogoJavascript,
      },
      {
        id: 4,
        title: "Bootstrap",
        Icon: FaBootstrap,
      },
      {
        id: 5,
        title: "Tailwind",
        Icon: SiTailwindcss,
      },
      {
        id: 6,
        title: "Java",
        Icon: FaJava,
      },
      {
        id: 7,
        title: "PHP",
        Icon: FaPhp,
      },
      {
        id: 8,
        title: "Android",
        Icon: IoLogoAndroid,
      },
      {
        id: 9,
        title: "Flutter",
        Icon: RiFlutterFill,
      },
      {
        id: 10,
        title: "Node Js",
        Icon: FaNodeJs,
      },
      {
        id: 11,
        title: "My SQL",
        Icon: SiMysql,
      },
      {
        id: 12,
        title: "MongoDb",
        Icon: SiMongodb,
      },
    ],
    []
  );
  return (
    <>
      {Techs.map(({ id, title, Icon }) => {
        return (
          <div
            className="px-2 py-1 bg-[#313137] flex items-center gap-2 text-[1rem] hover:text-second"
            key={id}
          >
            <Icon size={18} />
            <span>{title}</span>
          </div>
        );
      })}
    </>
  );
};

export default Tech;
