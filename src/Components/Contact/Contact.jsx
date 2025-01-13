import React from "react";
import "./contact.css";
import ContactUs from "../../assets/contact-us.webp";
import { Heading, Heading1 } from "../../StyledComponents/styledcomponents";
const Contact = () => {
  const Staff_coordinator = [
    {
      name: "LoremIpsum",
      phone: "1234567890",
    },
  ];
  const president = [
    {
      name: "LoremIpsum",
      phone: "1234567890",
    },
  ];
  const vice_president = [
    {
      name: "LoremIpsum",
      phone: "1234567890",
    },
  ];
  const Event_coordinators = [
    {
      name: "LoremIpsum",
      phone: "1234567890",
    },
  ];
  return (
    <div className="contact">
      <div className="">
        <Heading title="Contact Us" />
      </div>
      <div className="contact-down">
        <div
          className="contact-img"
          style={{
            background: `url(${ContactUs})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="contact-per-role-full">
          <div className="contact-each">
            <div>
              <Heading1 title="Staff Co-ordinator" />
            </div>
            {Staff_coordinator.map((item, index) => (
              <div key={index} className="contact-per-role">
                <div className="inner-contact-name-number">
                  {item.name} : <a href={`tel:${item.phone}`}>{item.phone}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-each">
            <div>
              <Heading1 title="President" />
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
              <Heading1 title="Vice President" />
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
              <Heading1 title="Event Co-ordinator" />
            </div>
            {Event_coordinators.map((item, index) => (
              <div key={index} className="contact-per-role">
                <div className="inner-contact-name-number">
                  {item.name} : <a href={`tel:${item.phone}`}>{item.phone}</a>
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
