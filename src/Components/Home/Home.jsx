"use client";
import React, { useEffect } from "react";
import { SparklesCore } from "../ui/sparkles";
import logo from "../../assets/trojans.png";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className=" h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md" id="home">
      {/* Logo Text */}
      <div className="logoText">
        TR
        <img src={logo} alt="Logo" className="logo" />
        JANS
      </div>

      <div className="w-[50rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-72 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1.1}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* Symposium Description */}
      <div className="text-center mt-8">
  {/* Symposium Description */}
  <div className="sympoDesc text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-300 tracking-wide">
    The Destination where Curiosity Ignites Creation
  </div>

  {/* Event Name */}
  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-400 tracking-wide mt-4">
    Nexus 4.0
  </div>
</div>
    </div>
  );
};

export default Home;
