"use client";
import React, { useEffect } from "react";
import { SparklesCore } from "../ui/sparkles";
import logo from "../../assets/trojans.png";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import TrojanHelmet from "../../Components/trojanhelmet.jsx";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    //     <div className=" h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md" id="home">
    //       {/* Logo Text */}
    //       <div className="logoText">
    //         TR
    //         <img src={logo} alt="Logo" className="logo" />
    //         JANS
    //       </div>

    //       <div className="w-[50rem] h-40 relative">
    //         {/* Gradients */}
    //         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
    //         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
    //         <div className="absolute inset-x-72 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
    //         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

    //         <SparklesCore
    //           background="transparent"
    //           minSize={0.5}
    //           maxSize={1.1}
    //           particleDensity={1000}
    //           className="w-full h-full"
    //           particleColor="#FFFFFF"
    //         />
    //         <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    //       </div>

    //       {/* Symposium Description */}
    //       <div className="text-center mt-8">
    //   {/* Symposium Description */}
    //   {/* <div className="sympoDesc text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-300 tracking-wide">
    //     The Destination where Curiosity Ignites Creation
    //   </div> */}

    //   {/* Event Name */}
    //   <div className="nexus">
    //   <span className="letter letter-1">N</span>
    //   <span className="letter letter-2">E</span>
    //   <span className="letter letter-3">X</span>
    //   <span className="letter letter-4">U</span>
    //   <span className="letter letter-1">S</span>
    //   <span className="letter letter-3"> </span>
    //   <span className="letter letter-3">4</span>
    //   <span className="letter letter-3">.</span>
    //   <span className="letter letter-4">0</span>
    // </div>
    // </div>
    //     </div>

    // <div
    //   className="relative h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md"
    //   id="home"
    // >
    //   {/* GRID BACKGROUND */}
    //   <div className="space-grid"></div>

    //   {/* CONTENT */}
    //   <div className="relative z-10 flex flex-col items-center justify-center w-full">
    //     {/* Logo Text */}
    //     <div className="logoText">
    //       TR
    //       <img src={logo} alt="Logo" className="logo" />
    //       JANS
    //     </div>

    //     {/* Sparkles */}
    //     <div className="w-[50rem] h-40 relative">
    //       <SparklesCore
    //         background="transparent"
    //         minSize={0.4}
    //         maxSize={1.2}
    //         particleDensity={140}
    //         speed={1}
    //         particleColor="#ffffff"
    //         className="w-full h-full"
    //       />
    //     </div>

    //     {/* Event Name */}
    //     <div className="nexus">
    //       <span className="letter letter-1">N</span>
    //       <span className="letter letter-2">E</span>
    //       <span className="letter letter-3">X</span>
    //       <span className="letter letter-4">U</span>
    //       <span className="letter letter-1">S</span>
    //       <span className="letter letter-3"> </span>
    //       <span className="letter letter-3">4</span>
    //       <span className="letter letter-3">.</span>
    //       <span className="letter letter-4">0</span>
    //     </div>
    //   </div>
    // </div>

    <div
      className="relative h-[40rem] w-full bg-black overflow-hidden"
      id="home"
    >
      {/* GRID */}
      {/* <TrojanHelmet />
      <div className="space-grid" /> */}

      {/* GRID (BOTTOM) */}
      <div className="space-grid z-0" />

      {/* 3D HELMET (MIDDLE) */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <TrojanHelmet />
      </div>

      {/* PARTICLES – FULL SCREEN */}
      <SparklesCore
        className="absolute inset-0"
        particleDensity={1550} // MORE STARS
        minSize={0.1}
        maxSize={0.9}
        speed={1}
      />

      {/* CONTENT */}
      {/* SYSTEM BADGE REMOVED */}
      {/* <div className="system-badge">A TROJAN OF IDEAS // LIVE</div> */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* <div className="relative z-10 flex flex-col items-center h-full pt-24"> */}
        <div className="logoText">
          TR
          <img src={logo} alt="Logo" className="logo" />
          JANS
        </div>

        {/* <div className="nexus mt-8">
      <span className="letter">N</span>
      <span className="letter">E</span>
      <span className="letter">X</span>
      <span className="letter">U</span>
      <span className="letter">S</span>
      <span className="letter"> 4.0</span>
    </div> */}

        {/* <div className="nexus-wrapper">
  <span className="nexus-text">NEXUS 4.0</span>
</div> */}

        {/* <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm transition-all hover:scale-105">
          <div className="absolute inset-0 border border-trojan-cyan/50 skew-x-12 group-hover:bg-trojan-cyan/10 transition-all duration-300" />
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-trojan-cyan" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-trojan-cyan" />
          <span className="relative flex items-center gap-2 font-orbitron font-bold text-trojan-cyan tracking-widest group-hover:text-white transition-colors">
            NEXUS 4.0
          </span>
        </button> */}

        <div className="nexus-wrapper group">
          {/* Skewed border (same as button) */}
          <div className="nexus-border" />

          {/* Corner ticks */}
          <div className="corner tl" />
          <div className="corner tr" />
          <div className="corner bl" />
          <div className="corner br" />

          {/* Text */}
          <span className="nexus-text">NEXUS&nbsp;5.0</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
