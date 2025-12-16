import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./contact.css";
import ContactUs from "../../assets/contact-us.webp";
import { Heading, Heading1 } from "../../StyledComponents/styledcomponents";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const containerRef = useRef(null);

  const Staff_coordinator = [
    {
      name: "Mrs. T. N. Charanya. M.E.,",
      phone: "",
    },
    {
      name: "Mrs. D. Lita Pansy, M.TECH.,",
      phone: "",
    },
  ];
  const president = [
    {
      name: "Mokesh K",
      phone: "+91 9629154156",
    },
  ];
  const vice_president = [
    {
      name: "V. S. Kanna",
      phone: "+91 9677044486",
    },
    {
      name: "N.E. Sitharth",
      phone: "+91 7305493313",
    },
    {
      name: "R. Sugash",
      phone: "+91 9150957616",
    },
  ];
  const hod = [
    {
      name: "Dr. A.R. Kavitha, M.E., PhD., ",
      phone: "",
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".contact-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-header",
            start: "top 85%",
          },
        }
      );

      // Contact Columns Stagger Animation
      gsap.fromTo(
        ".contact-each",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-down",
            start: "top 80%",
          },
        }
      );

      // Hover animations for contact cards
      gsap.utils.toArray(".contact-each").forEach((card) => {
        let hover = gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          paused: true,
          ease: "power2.out"
        });
        card.addEventListener("mouseenter", () => hover.play());
        card.addEventListener("mouseleave", () => hover.reverse());
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact" id='contact' ref={containerRef}>
      <div className="contact-header">
        <Heading title="Contact Us" />
      </div>
      <div className="contact-down">

        <div className="contact-per-role-full">
          <div className="contact-each">
            <div>
              <Heading1 title="HOD" />
            </div>
            {hod.map((item, index) => (
              <div key={index} className="contact-per-role">
                <div className="inner-contact-name-number">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <div className="contact-each">
            <div>
              <Heading1 title="Registration & Help Desk" />
            </div>
            {president.map((item, index) => (
              <div key={index} className="contact-per-role">
                <div className="inner-contact-name-number">
                  {item.name} : <a href={`tel:${item.phone}`}>{item.phone}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-each">
            <div>
              <Heading1 title="Student Co-ordinator" />
            </div>
            {vice_president.map((item, index) => (
              <div key={index} className="contact-per-role">
                <div className="inner-contact-name-number">
                  {item.name} : <a href={`tel:${item.phone}`}>{item.phone}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-each">
            <div>
              <Heading1 title="Staff Co-ordinator" />
            </div>
            {Staff_coordinator.map((item, index) => (
              <div key={index} className="contact-per-role">
                <div className="inner-contact-name-number">
                  {item.name}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;