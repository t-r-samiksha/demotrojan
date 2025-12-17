import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import trojansLogo from '../../assets/trojans-bg.png';
import './background.css';

const Background = () => {
  const location = useLocation();

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash) {
        const targetId = location.hash.slice(1); // Remove '#' to get the ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
        }
      }
    };

    handleHashScroll();
  }, [location]); // Re-run when location changes

  return (
    <div className="background-app">
      {/* Background logo removed as per request */}
    </div>
  );
};

export default Background;
