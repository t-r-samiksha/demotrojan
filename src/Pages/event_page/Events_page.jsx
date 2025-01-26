import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import Carroussel from "./carousel";
import "./Event_page.css";

import IMG1 from "../../assets/1-3.png";
import IMG2 from "../../assets/CC-1.png";
import IMG3 from "../../assets/PAPERENZA_P01.png";
import IMG4 from "../../assets/techno.png";
import IMG5 from "../../assets/Artboard 1.jpg";
import IMG6 from "../../assets/frank.png";
import IMG7 from "../../assets/dn.png";
//image for non tech
import IMGn1 from "../../assets/brain a holic (1).png";
import IMGn2 from "../../assets/brando palooza (1).png";
import IMGn3 from "../../assets/Cyber Trial_01.png";
import IMGn4 from "../../assets/digital_blueprint1.png";
import IMGn5 from "../../assets/grill and skill.png";
import IMGn6 from "../../assets/one shot.png";


//image for workshop
import IMGw1 from "../../assets/trojans_linux.png";
import IMGw2 from "../../assets/trojans_ncs2.png";
import IMGw3 from "../../assets/trojans_ve.png";
import IMGw4 from "../../assets/trojans_webdev.png";
//image for gaming
import IMGg1 from "../../assets/freefire.jpg";
import IMGg2 from "../../assets/Valo main.jpg";
import IMGg3 from "../../assets/bgmi main.png";
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';



const Events_page = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [isFirstSubmissionMain, setIsFirstSubmissionMain] = useState(true);
  const [eventsRegistered, setEventsRegistered] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash) {
        const targetId = location.hash.slice(1); // Remove '#' to get the ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
        }
      }
    };

    handleHashScroll();
  }, [location]); // Re-run when location changes
  useEffect(() => {
    const fetchRegisteredEvents = async () => {
      if (isAuthenticated && user) {
        try {
          const res=await fetch(
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
          if (!res.ok) {
            console.error("Failed to sign in user");
            return;
          }
  
          const resData = await res.json();
          const user_id = resData.user._id;  
          setUserId(user_id);
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/api/registered/registered-events?user_id=${user_id}`
          );

          if (response.ok) {
            const data = await response.json();
            if (data.events.length === 0) {
              setIsFirstSubmissionMain(true);
              setEventsRegistered([]);
            } else {
              setIsFirstSubmissionMain(false);
              setEventsRegistered(data.events);
            }
          } else {
            console.error("Failed to fetch registered events");
          }
        } catch (error) {
          console.error("Error fetching registered events:", error);
        }
      }
    };

    fetchRegisteredEvents();
  }, [isAuthenticated, user]);

  const handleRegisterClick = (eventId) => {
    if (!isAuthenticated) {
      alert("Please login to register for events.");
      loginWithRedirect();
      return;
    }

    if (isFirstSubmissionMain) {
      setShowModal(true); // Show registration modal
    }
  };

  const handleRegisterSubmit = async (eventData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/registered/register-events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user.sub, events: eventData }),
      });

      if (response.ok) {
        setIsFirstSubmissionMain(false);
        setEventsRegistered(eventData);
        setShowModal(false);
      } else {
        console.error("Failed to register for events.");
      }
    } catch (error) {
      console.error("Error registering for events:", error);
    }
  };
  const carouselData = [
    { id:"tech",
      title: "Technical Events",
      bgColor:  "linear-gradient(135deg, #2A0845, #6441A5)",
      cards: [
        {
          imagen: IMG1,
          title: "CODE MANIA",
          time: "TO BE ANNOUNCED",
          fee: "FREE",
          // category: "SOLO-PLAY",
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
          // category: "DUO-PLAY",
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
          // category: "Cloud Computing",
          buttons: [
            { text: "REGISTER", href: "/register-tech3" },
            { text: "RULES", href: "/rules-tech3" },
          ],
          link:"https://forms.gle/YcA1uzebGcUyLCNbA"
        },
        {
          imagen: IMG4,
          title: "TECHNO RHYTHM",
          time: "TO BE ANNOUNCED",
          fee: "FREE",
          // category: "SQUAD-PLAY(3 PLAYERS)",
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
          // category: "SOLO-PLAY",
          buttons: [
            { text: "REGISTER", href: "/register-tech3" },
            { text: "RULES", href: "/rules-tech3" },
          ],
        },
        {
          imagen: IMG6,
          title: "FRANKENSTEIN",
          time: "TO BE ANNOUNCED",
          fee: "FREE",
          // category: "DUO-PLAY",
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
          // category:"SOLO-PLAY",
          buttons: [
            { text: "REGISTER", href: "/register-tech3" },
            { text: "RULES", href: "/rules-tech3" },
          ],
        },
        
      ],
    },
    { id:"nontech",
      title: "Non-Technical Events",
      bgColor: "linear-gradient(135deg, #43cea2, #185a9d)",
      cards: [
        {
          imagen: IMGn1,
         
          title: "Brain A Holic",
          time: "TO BE ANNOUNCED",
          fee: "Free",
          // category: "Fun Tech",
          buttons: [
            { text: "REGISTER", href: "/register-art" },
            { text: "RULES", href: "/rules-art" },
          ],
        },
        {
          imagen: IMGn2,
          title: "BRAND O PALOOZA",
          description: "Get ready to groove and compete in our Dance Battle.",
          time: "TO BE ANNOUNCED",
          
          fee: "Free",
          // category: "Fun-Tech",
          buttons: [
            { text: "REGISTER", href: "/register-dance" },
            { text: "RULES", href: "/rules-dance" },
          ],
        },
        {
          imagen: IMGn3,
          title: "CYBER TRAIL",
          time: "TO BE ANNOUNCED",
          fee: "Free",
          // category: "Fun-tech",
          buttons: [
            { text: "REGISTER", href: "/register-quiz" },
            { text: "RULES", href: "/rules-quiz" },
          ],
        },
        {
          imagen: IMGn4,
          title: "DIGITAL BLUE PRINT",
          time: "TO BE ANNOUNCED",
          fee: "Free",
          // category: "Fun-tech",
          buttons: [
            { text: "REGISTER", href: "/register-quiz" },
            { text: "RULES", href: "/rules-quiz" },
          ],
        },
        {
          imagen: IMGn5,
          title: "GRILL & SKILL",
          time: "TO BE ANNOUNCED",
          fee: "Free",
          // category: "Fun-tech",
          buttons: [
            { text: "REGISTER", href: "/register-quiz" },
            { text: "RULES", href: "/rules-quiz" },
          ],
        },
        {
          imagen: IMGn6,
          title: "ONE SHOT",
          time: "TO BE ANNOUNCED",
          fee: "Free",
          // category: "Fun-Tech",
          buttons: [
            { text: "REGISTER", href: "/register-quiz" },
            { text: "RULES", href: "/rules-quiz" },
          ],
        },
      ],
    },
    { id:"workshop",
      title: "Workshops",
      bgColor: "linear-gradient(135deg, #F7971E, #FFD200)", 
      cards: [
        {
          imagen: IMGw1,
          title: "Linux Workshop",
          time: "to be Announced",
          fee: "129",
          // category: "Workshop",
          buttons: [
            { text: "REGISTER", href: "/register-graphicdesign" },
            { text: "DETAILS", href: "/details-graphicdesign" },
          ],
          link:"https://forms.gle/h8NAP9frUfR7uW7E9"
        },
        {
          imagen: IMGw2,
          title: "Networking and CyberSecurity",
          time: "TO BE ANNOUNCED",
          fee: "129",
          // category: "Workshop",
          buttons: [
            { text: "REGISTER", href: "/register-webdev" },
            { text: "DETAILS", href: "/details-webdev" },
          ],
          link:"https://forms.gle/h8NAP9frUfR7uW7E9"
        },
        {
          imagen: IMGw3,
          title: "Video Editing Workshop",
          time: "TO BE ANNOUNCED",
          fee: "129",
          // category: "Workshop",
          buttons: [
            { text: "REGISTER", href: "/register-datascience" },
            { text: "DETAILS", href: "/details-datascience" },
          ],
          link:"https://forms.gle/h8NAP9frUfR7uW7E9"
        },
        {
          imagen: IMGw4,
          title: "Web Development Workshop",
          time: "TO BE ANNOUNCED",
          fee: "129",
          // category: "Workshop",
          buttons: [
            { text: "REGISTER", href: "/register-datascience" },
            { text: "DETAILS", href: "/details-datascience" },
          ],
          link:"https://forms.gle/h8NAP9frUfR7uW7E9"
        },
      ],
    },
    { id:"game",
      title: "Gaming Events",
      bgColor: "linear-gradient(135deg, #8E2DE2, #FF0080)",
      cards: [
        {
          imagen: IMGg1,
          title: "FREE FIRE",
          description: "Showcase your clashes with battles",
          time: "10:00 AM - 2:00 PM",
          date: "05/02/2025",
          fee: "69",
          category: "Offline",
          buttons: [
            { text: "REGISTER", href: "/register-art" },
            { text: "RULES", href: "/rules-art" },
          ],
          link:"https://forms.gle/hJj9BqtF92FbRRp59"
        },
        {
          imagen: IMGg2,
          title: "VALORANT",
          description: "Get ready to groove and compete in our Dance Battle.",
          time: "6:00 PM - 11:00 PM",
          date: "04/02/2025",
          fee: "99",
          category: "Online",
          buttons: [
            { text: "REGISTER", href: "/register-dance" },
            { text: "RULES", href: "/rules-dance" },
          ],
          link:"https://forms.gle/fKoPQ4MLwCUGeaj48"
        },
        {
          imagen: IMGg3,
          title: "BGMI",
          description: "Put your knowledge to the test in our Quiz Competition.",
          time: "10:00 AM - 2:00 PM",
          date: "05/02/2025",
          fee: "69",
          category: "Offline",
          buttons: [
            { text: "REGISTER", href: "/register-quiz" },
            { text: "RULES", href: "/rules-quiz" },
          ],
          link:"https://forms.gle/Ab8bWHUTws4rb2ft7"
        },
      ],
    },
  ];

  const handleIsFirstSubmission=(val)=>{
    setIsFirstSubmissionMain(val);
  }
      return (
    <div className="container">
      {carouselData.map((carousel, index) => (
        <div className="carousel-container" key={index} id={carousel.id}>
          <h2 className="topic-heading">{carousel.title}</h2>
          <Carroussel
            cards={carousel.cards.map((card, cardIndex) => ({
              key: cardIndex,  // Use card.title or another unique property
              content: (
                <Card
                bgcolor={carousel.bgColor}
                  imagen={card.imagen}
                  title={card.title}
                  description={card.description}
                  date={card.date}
                  time={card.time}
                  fee={card.fee}
                  link={card.link}
                  
                  category={card.category}
                  buttons={card.buttons}
                  isFirstSubmissionMain={isFirstSubmissionMain}
                    handleIsFirstSubmission={handleIsFirstSubmission}
                  setIsFirstSubmissionMain={setIsFirstSubmissionMain}
                  userId={userId}
                  eventsRegistered={eventsRegistered}
                  setEventsRegistered={setEventsRegistered}
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