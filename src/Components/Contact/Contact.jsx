import React from "react";
import "./contact.css";
import ContactUs from "../../assets/contact-us.webp";
import { Heading, Heading1 } from "../../StyledComponents/styledcomponents";
const Contact = () => {
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
  const hod=[
    {
      name: "Dr. A.R. Kavitha, M.E., PhD., ",
      phone: "",
    }
  ]

  return (
    <div className="contact" id='contact'>
      <div className="">
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