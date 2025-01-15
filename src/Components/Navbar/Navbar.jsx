import React from "react";
import "./navbar.css";
import { Heading } from "../../StyledComponents/styledcomponents";
const Navbar = () => {
  const navtitle = "TROJANS ` 25";
  const navLinks = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Home",
      link: "#",
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
          <a href={item.link} key={index} className="navlink">
            {item.name}
          </a>
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
                    <a href={item.link} className="navlink">
                      {item.name}
                    </a>
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
