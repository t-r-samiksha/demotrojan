import React, { useEffect, useState } from "react";
import loading_video from "../../assets/trojans_neon_loadin.mp4";
import logo from "../../assets/trojans.png";
import "./loading.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import TypewriterComponent from "typewriter-effect";

const Loading = () => {
  useEffect(() => {
    Aos.init();
  });
  const [fadeOut, setFadeOut] = useState(false); // State to trigger fade-out effect

  const handleTimeUpdate = (e) => {
    const video = e.target;
    if (video.duration - video.currentTime <= 2) {
      setFadeOut(true); // Trigger fade-out in the last 2 seconds
    }
  };
  const [isVideoEnd, setIsVideoEnd] = useState(true);
  const handleVideoEnd = () => {
    setIsVideoEnd(true);
  };
  // for date calculation
  const targetDate = new Date("2025-02-05T00:00:00");
  const [days, setDays] = useState(0);
  useEffect(() => {
    const now = new Date();
    const diff = targetDate - now;
    if (diff < 0) return;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    setDays(days);
  });
  // useEffect(() => {
  //     if (fadeOut) {
  //       Aos.refresh(); // Refresh AOS when fadeOut is true to trigger animations
  //     }
  //   }, [fadeOut]);

  return (
    <div className="loading">
      {/* {!isVideoEnd ? (
        <div className={`${fadeOut?"fade-out":""}`}>
          <video
            src={loading_video}
            autoPlay
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnd}
            style={{ width: "100%", height: "120vh", objectFit: "cover" }}
          ></video>
        </div>
      ) : ( */}
      <div className="loading_1">
        <div className="logoText">
          <span data-aos="fade-left" data-aos-duration="5000">
            {" "}
            TR
          </span>
          <div className="logo">
            <video
              src={loading_video}
              autoPlay
              muted
              playsInline
              onTimeUpdate={handleTimeUpdate}
              // onEnded={handleVideoEnd}
              style={{ width: "100%", objectFit: "cover" }}
            ></video>
          </div>
          {/* <img src={logo} className="logo" /> */}
          <span data-aos="fade-right" data-aos-duration="5000">
            JANS
          </span>
        </div>
        <div className="days_text">
          <TypewriterComponent
            options={{
              strings: [`${days} days to go!!!`],
              delay: 200,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Loading;
