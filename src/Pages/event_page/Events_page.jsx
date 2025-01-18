
import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import Carroussel from "./carousel";
import "./Event_page.css";
import IMG1 from "../../assets/1.png";
import IMG2 from "../../assets/CC_PAGE_1.png";
import IMG3 from "../../assets/PAPERNZA.png";
import IMG4 from "../../assets/TECHNO 1.png";
import IMG5 from "../../assets/Artboard 1.jpg";
import IMG6 from "../../assets/frank.png";
import IMG7 from "../../assets/dn.png";


const Events_page = () => {
  const carouselData = [
    {
      title: "Technical Events",
      cards: [
        {
          imagen: IMG1,
          title: "CODE A THON",
          time: "TO BE ANNOUNCED",
          fee: "FREE",
          category: "SOLO-PLAY",
          buttons: [
            { text: "REGISTER", href: "/register-tech1" },
            { text: "RULES", href: "/rules-tech1" },
          ],
        },
        {
          imagen: IMG2,
          title: "CODERS CHEMISTRY",
          time: "TO BE ANNOUNCED",
          fee: "FREE",
          category: "DUO-PLAY",
          buttons: [
            { text: "REGISTER", href: "/register-tech2" },
            { text: "RULES", href: "/rules-tech2" },
          ],
        },
        {
          imagen: IMG3,
          title: "PAPERENZA",
          time: "TO BE ANNOUNCED",    
          fee: "FREE",
          category: "Cloud Computing",
          buttons: [
            { text: "REGISTER", href: "/register-tech3" },
            { text: "RULES", href: "/rules-tech3" },
          ],
        },
        {
          imagen: IMG4,
          title: "TECHNO RYTHM",
          time: "TO BE ANNOUNCED",
          fee: "FREE",
          category: "SQUAD-PLAY(3 PLAYERS)",
          buttons: [
            { text: "REGISTER", href: "/register-tech3" },
            { text: "RULES", href: "/rules-tech3" },
          ],
        },
        {
          imagen: IMG5,
          title: "TECH TRIVIA",
          time: "TO BE ANNOUNCED",
          fee: "FREE",
          category: "SOLO-PLAY",
          buttons: [
            { text: "REGISTER", href: "/register-tech3" },
            { text: "RULES", href: "/rules-tech3" },
          ],
        },
        {
          imagen: IMG6,
          title: "FRANKESTEIN",
          time: "TO BE ANNOUNCED",
          fee: "FREE",
          category: "DUO-PLAY",
          buttons: [
            { text: "REGISTER", href: "/register-tech3" },
            { text: "RULES", href: "/rules-tech3" },
          ],
        },
        {
          imagen: IMG7,
          title: "DEVELOPER'S NIGHTMARE",
          time: "TO BE ANNOUNCED",
          fee: "FREE",
          category:"SOLO-PLAY",
          buttons: [
            { text: "REGISTER", href: "/register-tech3" },
            { text: "RULES", href: "/rules-tech3" },
          ],
        },
        
      ],
    },
    {
      title: "Non-Technical Events",
      cards: [
        {
          imagen: IMG1,
          title: "Art Competition",
          description: "Showcase your creativity in our Art Competition.",
          time: "10:00 AM - 12:00 PM",
          date: "2025-01-28",
          fee: "$5",
          category: "Art & Design",
          buttons: [
            { text: "REGISTER", href: "/register-art" },
            { text: "RULES", href: "/rules-art" },
          ],
        },
        {
          imagen: IMG2,
          title: "Dance Battle",
          description: "Get ready to groove and compete in our Dance Battle.",
          time: "4:00 PM - 7:00 PM",
          date: "2025-01-29",
          fee: "$8",
          category: "Performing Arts",
          buttons: [
            { text: "REGISTER", href: "/register-dance" },
            { text: "RULES", href: "/rules-dance" },
          ],
        },
        {
          imagen: IMG5,
          title: "Quiz Competition",
          description: "Put your knowledge to the test in our Quiz Competition.",
          time: "1:00 PM - 3:00 PM",
          date: "2025-01-30",
          fee: "$5",
          category: "Trivia",
          buttons: [
            { text: "REGISTER", href: "/register-quiz" },
            { text: "RULES", href: "/rules-quiz" },
          ],
        },
      ],
    },
    {
      title: "Workshops",
      cards: [
        {
          imagen: IMG1,
          title: "Graphic Design Workshop",
          description: "Explore the art of graphic design in this interactive workshop.",
          time: "9:00 AM - 1:00 PM",
          date: "2025-02-01",
          fee: "$12",
          category: "Graphic Design",
          buttons: [
            { text: "REGISTER", href: "/register-graphicdesign" },
            { text: "DETAILS", href: "/details-graphicdesign" },
          ],
        },
        {
          imagen: IMG2,
          title: "Web Development Workshop",
          description: "Learn the basics of web development in this beginner-friendly workshop.",
          time: "2:00 PM - 6:00 PM",
          date: "2025-02-02",
          fee: "$15",
          category: "Web Development",
          buttons: [
            { text: "REGISTER", href: "/register-webdev" },
            { text: "DETAILS", href: "/details-webdev" },
          ],
        },
        {
          imagen: "https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png",
          title: "Data Science Workshop",
          description: "Dive into the world of data analysis and visualization.",
          time: "3:00 PM - 6:00 PM",
          date: "2025-02-03",
          fee: "$18",
          category: "Data Science",
          buttons: [
            { text: "REGISTER", href: "/register-datascience" },
            { text: "DETAILS", href: "/details-datascience" },
          ],
        },
      ],
    },
  ];
  const [isFirstSubmissionMain, setIsFirstSubmissionMain] = useState(true);
  const handleIsFirstSubmission=(val)=>{
    setIsFirstSubmissionMain(val);
  }
      return (
    <div className="container">
      {carouselData.map((carousel, index) => (
        <div className="carousel-container" key={index}>
          <h2 className="topic-heading">{carousel.title}</h2>
          <Carroussel
            cards={carousel.cards.map((card, cardIndex) => ({
              key: cardIndex,  // Use card.title or another unique property
              content: (
                <Card
                  imagen={card.imagen}
                  title={card.title}
                  description={card.description}
                  date={card.date}
                  time={card.time}
                  fee={card.fee}
                  category={card.category}
                  buttons={card.buttons}
                  isFirstSubmissionMain={isFirstSubmissionMain}
                    handleIsFirstSubmission={handleIsFirstSubmission}
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
};

export default Events_page;