import React, { useEffect, useRef } from "react";
import nexus from "../../assets/nexus.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NexusAbout = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const svgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Set perspective for 3D effect
      gsap.set(sectionRef.current, { perspective: 1000 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Trigger a bit earlier
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Card Entry (3D Swing)
      tl.fromTo(
        cardRef.current,
        {
          rotateX: 15,
          y: 100,
          opacity: 0,
          scale: 0.9,
          transformOrigin: "center top",
        },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6, // Faster (0.6s)
          ease: "power3.out", // Snappier ease
        }
      );

      // 2. Image Wipe (Clip Path Animation)
      // Final shape: polygon(0 0, 100% 0, 75% 100%, 0% 100%)
      tl.fromTo(
        imgRef.current,
        {
          clipPath: "polygon(0 0%, 0 0%, 0 100%, 0 100%)", // Invisible (left edge)
          scale: 1.2,
          filter: "grayscale(100%) brightness(0.5)",
        },
        {
          clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)", // Final Trapezoid
          scale: 1,
          filter: "grayscale(0%) brightness(1)",
          duration: 0.8, // Faster (0.8s)
          ease: "expo.inOut",
        },
        "-=0.4" // Start tighter with card settle
      );

      // 3. Text & SVG Stagger Reveal
      tl.fromTo(
        [svgRef.current, textRef.current],
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Continuous subtle float for the SVG
      gsap.to(svgRef.current, {
        y: -10,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Parallax effect on mouse move for the whole card
      sectionRef.current.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        gsap.to(cardRef.current, {
          rotateY: (x - 0.5) * 5,
          rotateX: (y - 0.5) * -5,
          duration: 0.5,
          ease: "power1.out",
        });
      });

      // Reset on leave
      sectionRef.current.addEventListener("mouseleave", () => {
        gsap.to(cardRef.current, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-7xl px-4 mx-auto sm:px-8 mt-24"
    >
      <blockquote
        ref={cardRef}
        className="relative grid items-center bg-gray-950 shadow-2xl md:grid-cols-3 rounded-xl overflow-hidden border border-gray-900/50"
      >
        <img
          ref={imgRef}
          className="hidden object-cover w-full h-full rounded-l-xl md:block"
          style={{ clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)" }} // Initial state for hydration, overwritten by GSAP
          src={nexus}
          alt="NEXUS"
        />

        <article ref={contentRef} className="relative p-6 md:p-8 md:col-span-2">
          <div ref={svgRef} className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 md:block">
            <svg
              width="256"
              height="256"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-cyan-500/40"
            >
              <path
                d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                stroke="currentColor"
                strokeWidth="8"
              ></path>
            </svg>
          </div>

          <div className="space-y-8 flex " ref={textRef}>
            <p className="text-base sm:leading-relaxed md:text-xl text-gray-300 font-light">
              The theme 'Nexus 5.0 – Shaping the Future' explores the
              transformative impact of technologies like IoT, AI, and Big Data on
              industries, emphasizing advancements in automation, smart
              manufacturing, and digital connectivity. It bridges academic learning
              and real-world applications, equipping participants with insights
              into emerging trends and tools. Through knowledge-sharing and
              industry collaboration, the symposium empowers students and
              participants to thrive in the evolving technological landscape,
              preparing them to shape the future of Nexus 5.0.
            </p>
          </div>
        </article>
      </blockquote>
    </div>
  );
};

export default NexusAbout;
