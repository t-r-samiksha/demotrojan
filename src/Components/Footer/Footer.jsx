import {
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import college from '../../assets/College_white_logo.webp'
import React from "react";
//import "./footer.css";
const Footer = () => {
  //   const socialLinks = [
  //     {
  //       name: "Instagram",
  //       Icon: Instagram,
  //       link: "#",
  //     },
  //     {
  //       name: "Youtube",
  //       Icon: YouTube,
  //       link: "#",
  //     },
  //     {
  //       name: "Facebook",
  //       Icon: Facebook,
  //       link: "#",
  //     },
  //     {
  //       name: "LinkedIn",
  //       Icon: LinkedIn,
  //       link: "#",
  //     },
  //   ];
  //   const Events = [
  //     {
  //       name: "Technical",
  //       link: "#",
  //     },
  //     {
  //       name: "Technical",
  //       link: "#",
  //     },
  //     {
  //       name: "Technical",
  //       link: "#",
  //     },
  //     {
  //       name: "Technical",
  //       link: "#",
  //     },
  //   ];
  //   const About = [
  //     {
  //       name: "Symposium",
  //       link: "",
  //     },
  //     {
  //       name: "College",
  //       link: "",
  //     },
  //   ];
  //   const Year = 2025;
  return (
    <div className="footer">
      <footer className="bg-transparent backdrop-blur-md p-4 rounded-lg">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://www.citchennai.edu.in/" className="flex items-center">
                <img
                  src={college}
                  style={{ 'height': "200px", 'width': '200px' }}
                  alt="CIT Logo"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-base font-semibold text-white ">
                  Events
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/events-page#tech" className="hover:underline" onClick={() => {
                      const targetElement = document.getElementById('events');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      Technical
                    </a>
                  </li>
                  <li>
                    <a href="/events-page#nontech" className="hover:underline" onClick={() => {
                      const targetElement = document.getElementById('events');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      Non-Technical
                    </a>
                  </li>
                  <li>
                    <a href="/events-page#workshop" className="hover:underline" onClick={() => {
                      const targetElement = document.getElementById('events');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      Workshop
                    </a>

                  </li>
                  <li>
                    <a href="/events-page#game" className="hover:underline" onClick={() => {
                      const targetElement = document.getElementById('events');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      Gaming
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h2 className="mb-6 text-base font-semibold text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline ">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      Linked-In
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline ">
                      You-tube
                    </a>
                  </li>
                </ul>
              </div> */}
              <div>
                <h2 className="mb-6 text-base font-semibold text-white">
                  About us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#about" className="hover:underline" onClick={() => {
                      const targetElement = document.getElementById('about');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      College
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:underline" onClick={() => {
                      const targetElement = document.getElementById('about');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      Department
                    </a>
                  </li>
                  <li>
                    <a href="/sponser-page" className="hover:underline">
                      Sponsors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white-500 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a href="https://www.citchennai.edu.in/" className="hover:underline">
                Trojans™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* <a
                href="https://www.citchennai.edu.in/" target="_blank"
                className="text-gray-500 hover:text-white dark:hover:text-white"
              >
                <Facebook />
                <span className="sr-only">Facebook page</span>
              </a> */}
              <a
                href="https://instagram.com/trojans_cit/" target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white  ms-5"
              >
                <Instagram />
                <span className="sr-only">Instagram community</span>
              </a>

              <a
                href="https://www.linkedin.com/in/trojans-cit-363404239/" target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white  ms-5"
              >
                <LinkedIn />
                <span className="sr-only">Linked-In account</span>
              </a>
              {/* <a
                href="https://www.citchennai.edu.in/" target="_blank"
                className="text-gray-500  hover:text-white ms-5"
              >
                <YouTube />
                <span className="sr-only">Youtube account</span>
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;