
import React, { useEffect, useState } from "react";
import "./countdown.css";

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to check if it's mobile screen

  useEffect(() => {
    // Check if the screen size is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480); // If screen width is 480px or less, it's mobile
    };

    // Check screen size on initial load and whenever it changes
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener when the component unmounts
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-02-05T00:00:00"); // Set your target date

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff < 0) {
        setIsTimeUp(true); // Mark time as up
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately to avoid delay

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  // Logic for non-mobile screens (larger than 480px)
  const circleDashArray = (value, total) => (value / total) * 440; // Calculate progress for stroke-dasharray
  const dotRotation = (value, total) => (value / total) * 360; // Calculate dot rotation

  // Render for mobile screens (480px or smaller)
  if (isMobile) {
    const circleRadius = 70;
    const circleCircumference = 2 * Math.PI * circleRadius;

    const circleDashArray = (value, total) => (value / total) * circleCircumference; // Calculate strokeDasharray

    return (
      <div className="body">
      
        {isTimeUp ? (
          <h2 className="newYear">The Moment is Over!!</h2>
        ) : (
          <div id="time">
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <div
                className="circle"
                key={unit}
                style={{
                  "--clr": ["#ffffff", "#ff0909", "#fee800", "#04fc43"][index],
                }}
              >
                
                <svg viewBox="0 0 160 160" width="100%" height="100%">
                  <circle cx="80" cy="80" r="70"></circle>
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    id={unit[0] + unit[1]} // e.g., 'dd' for days
                    style={{
                      strokeDasharray: circleCircumference,
                      strokeDashoffset: circleCircumference - circleDashArray(
                        time[unit],
                        unit === "days" ? 30 : unit === "hours" ? 24 : 65
                      ),
                      stroke: ["#ffffff", "#ff0909", "#fee800", "#04fc43"][index], // Color based on unit
                      filter: [
                        "drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))",        // White glow for white
                        "drop-shadow(0 0 8px rgba(255, 9, 9, 0.9))",           // Red glow for red
                        "drop-shadow(0 0 8px rgba(255, 255, 0, 0.9))",         // Yellow glow for yellow
                        "drop-shadow(0 0 8px rgba(4, 252, 67, 0.9))"           // Green glow for green
                      ][index], // Adjust the glow based on color
                      transition: "all 0.3s ease", // Smooth transition for changes
                    }}
                    
                  ></circle>
                </svg>
                <div id={unit}>
                  {time[unit].toString().padStart(2, "0")}
                  <br />
                  <span>{unit}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Render for larger screens
  return (
    <div className="body">
   
      {isTimeUp ? (
        <h2 className="newYear">The Moment is Over!!</h2>
      ) : (
        <div id="time">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <div
              className="circle"
              key={unit}
              style={{ "--clr": ["#ffffff", "#ff0909", "#fee800", "#04fc43"][index] }}
            >
              <div
                className={`dots ${unit}_dot`}
                style={{
                  transform: `rotate(${dotRotation(
                    time[unit],
                    unit === "days" ? 30 : 60
                  )}deg)`,
                }}
              ></div>
              <svg>
                <circle cx={70} cy={70} r={70}></circle>
                <circle
                  cx={70}
                  cy={70}
                  r={70}
                  id={unit[0] + unit[1]} // e.g., 'dd' for days
                  style={{
                    strokeDasharray: 440,
                    strokeDashoffset: 440 - circleDashArray(
                      time[unit],
                      unit === "days" ? 30 : 60
                    ),
                  }}
                ></circle>
              </svg>
              <div id={unit}>
                {time[unit].toString().padStart(2, "0")}
                <br />
                <span>{unit}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countdown;
