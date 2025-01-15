import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./navbar.css";
import { Heading } from "../../StyledComponents/styledcomponents";

const Navbar = () => {
  const navtitle = "TROJANS ` 25";
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Events",
      link: "/events-page",  // Update with the correct route
    },
    {
      name: "Sponsor",
      link: "/sponser-page",  // Update with the correct route
    },
    {
      name: "About",
      link: "#",  // Add the correct route if needed
    },
    {
      name: "Contact",
      link: "#",  // Add the correct route if needed
    },
  ];

  return (
    <div className="navbar">
      <div className="nav-logo">
        <div className="nav-logo-text">{navtitle}</div>
      </div>
      <div className="navlinks">
        {navLinks.map((item, index) => (
          <Link to={item.link} key={index} className="navlink">  {/* Use Link instead of <a> */}
            {item.name}
          </Link>
        ))}
      </div>

      {/* <------------------------------HAM BURGER MENU -------------------------------------->*/}
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="navlink">  {/* Use Link instead of <a> */}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
