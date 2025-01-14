import React from "react";
import "./navbar.css";
import { Heading } from "../../StyledComponents/styledcomponents";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navtitle = "TROJANS ` 25";
  const navLinks = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Events",
      link: "/events-page",
    },
    {
      name: "Sponser",
      link: "/sponser-page",
    },
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Home",
      link: "#",
    },
  ];
  return (
    <div className="navbar">
      <div className="nav-logo">
        <div className="nav-logo-text">{navtitle}</div>
      </div>
      <div className="navlinks">
        {navLinks.map((item, index) => (
          <Link to={item.link} key={index} className="navlink">
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
                    <Link to={item.link} className="navlink">
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
