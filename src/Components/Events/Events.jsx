import React from "react";
import {
  Heading,
  SeeMoreButton,
} from "../../StyledComponents/styledcomponents";
import "./events.css";

const Events = () => {
  const EventsList = [
    { img: "", name: "Techniical", link: "" },
    { img: "", name: "Techniical", link: "" },
    { img: "", name: "Techniical", link: "" },
    { img: "", name: "Techniical", link: "" },
  ];
  return (
    <div className="events">
      <div className="events-title">
        <Heading title="Events" />
      </div>
      <div className="events-container">
        {EventsList.map((item, index) => (
          <div className="events-card" key={index}>
            <div className="events-card-img">
              <img src="" />
            </div>
            <div className="events-card-title">
              <h1>{item.name}</h1>
            </div>
            <div>
              <SeeMoreButton text="Know More" link={item.link} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
