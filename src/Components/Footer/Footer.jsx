import {
  CopyrightOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
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
      {/* <div className='footer-up'>
        <div className='footer-up-in'>
            <h1>Connect</h1>
            {socialLinks.map((item,index)=>(
                <div className='links' key={index}>
                    <a href={item.link} className='footer-link'><item.Icon/> - {item.name}</a>
                </div>    
            ))}
        </div>
        <div className='footer-up-in'>
            <h1>About</h1>
            {About.map((item,index)=>(
                <div className='' key={index}>
                    <a href={item.link} className='footer-link'>{item.name}</a>
                </div>
            ))}
        </div>
        <div className='footer-up-in'>
            <h1>Events</h1>
            {Events.map((item,index)=>(
                <div className='' key={index}>
                    <a href={item.link} className='footer-link'>{item.name}</a>
                </div>    
            ))}
        </div>
        </div>
        <div className='footer-down'>
            <p className='copyright'>Copyright <CopyrightOutlined/> {Year} All Rights Reserved</p>
            <p>Innovatively Designed by the Trojans Web Development Team</p>
        </div> */}

      <footer class="bg-transparent backdrop-blur-md p-4 rounded-lg">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://www.citchennai.edu.in/" class="flex items-center">
                <img
                  src={college}
                  style={{'height':"200px",'width':'200px'}}
                  alt="CIT Logo"
                />
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-base font-semibold text-white ">
                  Events
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="/events-page" class="hover:underline"  onClick={()=>{
                      const targetElement = document.getElementById('events');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      Technical
                    </a>
                  </li>
                  <li>
                    <a href="/events-page" class="hover:underline"  onClick={()=>{
                      const targetElement = document.getElementById('events');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      Non-Technical
                    </a>
                  </li>
                  <li>
                    <a href="/events-page" class="hover:underline"  onClick={()=>{
                      const targetElement = document.getElementById('events');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      Workshop
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h2 class="mb-6 text-base font-semibold text-white">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="" class="hover:underline ">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="" class="hover:underline">
                      Linked-In
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="" class="hover:underline ">
                      You-tube
                    </a>
                  </li>
                </ul>
              </div> */}
              <div>
                <h2 class="mb-6 text-base font-semibold text-white">
                  About us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#about" class="hover:underline"  onClick={()=>{
                      const targetElement = document.getElementById('about');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      College
                    </a>
                  </li>
                  <li>
                    <a href="#about" class="hover:underline" onClick={()=>{
                      const targetElement = document.getElementById('about');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                      }
                    }}>
                      Department
                    </a>
                  </li>
                  <li>
                    <a href="/sponser-page" class="hover:underline">
                      Sponsors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-white-500 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a href="https://www.citchennai.edu.in/" class="hover:underline">
                Trojans™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              {/* <a
                href="https://www.citchennai.edu.in/" target="_blank"
                class="text-gray-500 hover:text-white dark:hover:text-white"
              >
                <Facebook />
                <span class="sr-only">Facebook page</span>
              </a> */}
              <a
                href="https://instagram.com/trojans_cit/" target="_blank"
                class="text-gray-500 hover:text-white  ms-5"
              >
                <Instagram />
                <span class="sr-only">Instagram community</span>
              </a>

              <a
                href="https://www.linkedin.com/in/trojans-cit-363404239/" target="_blank"
                class="text-gray-500 hover:text-white  ms-5"
              >
                <LinkedIn />
                <span class="sr-only">Linked-In account</span>
              </a>
              {/* <a
                href="https://www.citchennai.edu.in/" target="_blank"
                class="text-gray-500  hover:text-white ms-5"
              >
                <YouTube />
                <span class="sr-only">Youtube account</span>
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;