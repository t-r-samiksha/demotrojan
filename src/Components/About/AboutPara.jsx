import React, { useEffect, useRef, useState } from "react";
import "./aboutPara.css";

const AboutPara = ({ para }) => {
  const textRef = useRef(null);
  const [animate, setAnimate] = useState(false); // Track when to start animation

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect(); // Get the element's position
        const windowHeight = window.innerHeight;

        // Check if the element is in the viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          setAnimate(true); // Start animation
        }
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    handleScroll(); // Initial check in case the element is already in view

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener
    };
  }, []);

  useEffect(() => {
    if (animate && textRef.current) {
      const text = textRef.current;
      let newDom = "";
      const animationDelay = 6;

      // Build the new DOM structure with spans for each character
      for (let i = 0; i < para.length; i++) {
        newDom += `<span class="char">${
          para[i] === " " ? "&nbsp;" : para[i]
        }</span>`;
      }

      text.innerHTML = newDom; // Replace innerHTML safely
      const children = text.children;

      // Add animation delay to each character
      for (let i = 0; i < children.length; i++) {
        children[i].style["animation-delay"] = animationDelay * i + "ms";
      }
    }
  }, [animate, para]); // Run only when animation should start

  return (
    <div>
      <div className="center">
        <p id="text" ref={textRef}>
          {para}
        </p>
      </div>
    </div>
  );
};

export default AboutPara;
