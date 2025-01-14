import React from 'react';
import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import Carroussel from "./carousel";
import "./Event_page.css"
const Events_page = () => {
  const carouselData = [
    {
      title: "Technical Events",
      cards: [
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg",
          title: "Tech Event 1",
          description: "Explore the latest in technology at Tech Event 1.",
          buttons: [
            { text: "REGISTER", href: "/register-tech1" },
            { text: "RULES", href: "/rules-tech1" },
          ],
        },
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png",
          title: "Tech Event 2",
          description: "Join us for an exciting Tech Event 2.",
          buttons: [
            { text: "REGISTER", href: "/register-tech2" },
            { text: "RULES", href: "/rules-tech2" },
          ],
        },
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg",
          title: "Tech Event 3",
          description: "Explore the latest in technology at Tech Event 3.",
          buttons: [
            { text: "REGISTER", href: "/register-tech1" },
            { text: "RULES", href: "/rules-tech1" },
          ],
        },
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png",
          title: "Workshop 1",
          description: "Learn new skills at Workshop 1.",
          buttons: [
            { text: "REGISTER", href: "/register-workshop1" },
            { text: "DETAILS", href: "/details-workshop1" },
          ],
        },
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg",
          title: "Tech Event 1",
          description: "Explore the latest in technology at Tech Event 1.",
          buttons: [
            { text: "REGISTER", href: "/register-tech1" },
            { text: "RULES", href: "/rules-tech1" },
          ],
        },
      ],
    },
    {
      title: "NON-Technical Events",
      cards: [
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png",
          title: "Non-Tech Event 1",
          description: "Enjoy a creative experience at Non-Tech Event 1.",
          buttons: [
            { text: "REGISTER", href: "/register-nontech1" },
            { text: "RULES", href: "/rules-nontech1" },
          ],
        },
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png",
          title: "Non-Tech Event 2",
          description: "Participate in Non-Tech Event 2.",
          buttons: [
            { text: "REGISTER", href: "/register-nontech2" },
            { text: "RULES", href: "/rules-nontech2" },
          ],
        },
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png",
          title: "Non-Tech Event 3",
          description: "Participate in Non-Tech Event 3.",
          buttons: [
            { text: "REGISTER", href: "/register-nontech2" },
            { text: "RULES", href: "/rules-nontech2" },
          ],
        },
      ],
    },
    {
      title: "Workshops",
      cards: [
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png",
          title: "Workshop 1",
          description: "Learn new skills at Workshop 1.",
          buttons: [
            { text: "REGISTER", href: "/register-workshop1" },
            { text: "DETAILS", href: "/details-workshop1" },
          ],
        },
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg",
          title: "Workshop 2",
          description: "Advance your knowledge at Workshop 2.",
          buttons: [
            { text: "REGISTER", href: "/register-workshop2" },
            { text: "DETAILS", href: "/details-workshop2" },
          ],
        },
        {
          imagen:"https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png",
          title: "Workshop 3",
          description: "Advance your knowledge at Workshop 3.",
          buttons: [
            { text: "REGISTER", href: "/register-workshop2" },
            { text: "DETAILS", href: "/details-workshop2" },
          ],
        },
  
      ],
    },
  ];  
      return (
        <div className="container">
        {carouselData.map((carousel, index) => (
          <div className="carousel-container" key={index}>
            <h2 className="topic-heading">{carousel.title}</h2>
            <Carroussel
              cards={carousel.cards.map((card) => ({
                key: uuidv4(),
                content: (
                  <Card
                    imagen={card.imagen}
                    title={card.title}
                    description={card.description}
                    buttons={card.buttons}
                  />
                ),
              }))}
              showArrows={true}
              height="500px"
            />
          </div>
        ))}
      </div>
    );
    }  

export default Events_page;
