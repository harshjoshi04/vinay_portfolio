"use client";
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div
      className="bg-mainFirst w-full h-[100vh] flex md:justify-center sm:px-4"
      id="mainhome"
    >
      <div className="md:w-[60vw] pt-16 h-[90%]">
        {/* Page 1 */}
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
