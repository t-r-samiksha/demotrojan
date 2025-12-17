import React, { useEffect, useRef } from "react";
import nexus from "../../assets/nexus.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NexusAbout = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const svgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, { perspective: 1000 });
      gsap.set(cardRef.current, { willChange: "transform", force3D: true });
      gsap.set(imgRef.current, { willChange: "transform, opacity" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true, // 🔥 prevents reflow lag
        },
      });

      // Card entry
      tl.from(cardRef.current, {
        y: 80,
        rotateX: 10,
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Image reveal (lighter)
      tl.from(
        imgRef.current,
        {
          x: -40,
          scale: 1.05,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Text + SVG
      tl.from(
        [svgRef.current, textRef.current],
        {
          y: 25,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Floating SVG (cheap animation)
      gsap.to(svgRef.current, {
        y: -8,
        rotation: 4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ⚡ Smooth mouse parallax (NO LAG)
      const rotateXTo = gsap.quickTo(cardRef.current, "rotateX", {
        duration: 0.6,
        ease: "power3.out",
      });
      const rotateYTo = gsap.quickTo(cardRef.current, "rotateY", {
        duration: 0.6,
        ease: "power3.out",
      });

      const handleMove = (e) => {
        const bounds = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - bounds.left) / bounds.width - 0.5;
        const y = (e.clientY - bounds.top) / bounds.height - 0.5;

        rotateYTo(x * 6);
        rotateXTo(-y * 6);
      };

      const handleLeave = () => {
        rotateXTo(0);
        rotateYTo(0);
      };

      sectionRef.current.addEventListener("mousemove", handleMove);
      sectionRef.current.addEventListener("mouseleave", handleLeave);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-7xl px-4 mx-auto mt-24">
      <blockquote
        ref={cardRef}
        className="relative grid md:grid-cols-3 rounded-xl overflow-hidden border"
        style={{
          background: "linear-gradient(135deg, rgba(10, 5, 5, 0.85), rgba(25, 10, 10, 0.9))",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(229, 197, 104, 0.3)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(229, 197, 104, 0.1)"
        }}
      >
        <img
          ref={imgRef}
          src={nexus}
          alt="NEXUS"
          className="hidden md:block w-full h-full object-cover"
        />

        <article className="relative p-6 md:p-8 md:col-span-2 flex flex-col justify-center h-full">
          <div
            ref={svgRef}
            className="absolute top-0 right-0 hidden md:block w-24 h-24 -mt-12 -mr-12 opacity-40 text-[#E5C568]"
          >
            <svg
              width="256"
              height="256"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                stroke="currentColor"
                strokeWidth="8"
              ></path>
            </svg>
          </div>

          <p
            ref={textRef}
            className="text-base md:text-xl text-gray-200 font-light leading-relaxed tracking-wide text-justify decoration-clone"
          >
            The theme <span className="text-[#E5C568] font-normal">'Nexus 5.0 – Shaping the Future'</span> explores the transformative impact of technologies like IoT, AI, and Big Data on industries, emphasizing advancements in automation, smart manufacturing, and digital connectivity. It bridges academic learning and real-world applications, equipping participants with insights into emerging trends and tools. Through knowledge-sharing and industry collaboration, the symposium empowers students and participants to thrive in the evolving technological landscape, preparing them to shape the future of Nexus 5.0.
          </p>
        </article>
      </blockquote>
    </div>
  );
};

export default NexusAbout;
