import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  useEffect(() => {
    const sendUserDataToBackend = async () => {


      if (user) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/api/users/signin`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: user.sub,
                name: user.name,
                email: user.email,
                profile: user.picture,
              }),
            }
          );

          if (!response.ok) {
            console.error("Failed to send user data to the backend", response);
          }
        } catch (error) {
          console.error("Error sending user data to the backend:", error);
        }
      }
    };

    if (isAuthenticated) {
      sendUserDataToBackend();
    }
  }, [isAuthenticated, user]);

  const navtitle = "TROJANS ` 25";
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events-page" },
    { name: "Sponsor", link: "/sponser-page" },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" },
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
      
      <div className="login-btn-container">
        {isAuthenticated ? (
          <div
            className="profile-btn"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            <img src={user.picture} alt="Profile" className="profile-img" />
            <div className={`dropdown ${dropdownVisible ? "show" : ""}`}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <button
                className="logout-btn"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button className="login-btn" onClick={() => loginWithRedirect()}>
            Login
          </button>
        )}
      </div>
      </div>
      {/* HAM BURGER MENU */}
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
                <li>
                  {isAuthenticated ? (
                    // <button
                    //   className="navlink"
                    //   onClick={() => logout({ returnTo: window.location.origin })}
                    // >
                    //   Logout
                    // </button>
                    <div>
                      <hr>
                      </hr>
                    <div
                      className="profile-btn-hamburger"
                      onClick={() => setDropdownVisible(!dropdownVisible)}
                    >
                      <img
                          src={user.picture}
                          alt="Profile"
                          className="profile-img"
                        />
                      <div className="profile-info">
                        <p className="user-name">{user.name}</p>
                        <p className="user-email">{user.email}</p>
                        
                      </div>
                      
                    </div>
                    <button
                    className="navlink"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Logout
                  </button>
                  </div>
                  ) : (
                    <button
                      className="navlink"
                      onClick={() => loginWithRedirect()}
                    >
                      Login
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;