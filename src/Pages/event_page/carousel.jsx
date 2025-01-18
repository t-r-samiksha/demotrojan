import React, { useState, useEffect, useMemo, useCallback } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import "./Event_page.css";

export default function Carroussel(props) {
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Update offset and arrows based on props
  useEffect(() => {
    setOffsetRadius(props.offset || 4);
    setShowArrows(props.showArrows || false);
  }, [props.offset, props.showArrows]);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = debounce(() => {
      setIsSmallScreen(window.innerWidth <= 768);
    }, 100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = useMemo(() => 
    props.cards.map((element, index) => ({
      ...element,
      onClick: () => setGoToSlide(index),
    })),
    [props.cards]
  );

  const handlePrev = useCallback(() => {
    setGoToSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  }, [cards.length]);

  const handleNext = useCallback(() => {
    setGoToSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  }, [cards.length]);

  const arrowStyle = useMemo(() => ({
    width: isSmallScreen ? "30px" : "40px",
    height: isSmallScreen ? "30px" : "40px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "white",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  }), [isSmallScreen]);

  return (
    <div
      style={{
        width: props.width || "80%",
        height: props.height || "400px",
        margin: props.margin || "20px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        
      }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={false}
        animationConfig={{
          tension: 80,  // Reduced for smoother animations
          friction: 10, // Reduced for smoother easing
          clamp: false, // Ensures animations are not cut short
        }}
      />
      {showArrows && (
        <div
          className="arrow-btn"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            position: "absolute",
            bottom: "-60px",
          }}
        >
          <button onClick={handlePrev} style={arrowStyle}>
            <ArrowBackIosNewRoundedIcon />
          </button>
          <div style={{ display: "flex", gap: "10px" }}>
            {cards.map((_, index) => (
              <span
                key={index}
                onClick={() => setGoToSlide(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: index === goToSlide ? "white" : "gray",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              ></span>
            ))}
          </div>
          <button onClick={handleNext} style={arrowStyle}>
            <ArrowForwardIosRoundedIcon />
          </button>
        </div>
      )}
    </div>
  );
}

// Debounce function to optimize event handling
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}