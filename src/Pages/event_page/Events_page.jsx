// // import React, { useEffect, useState } from 'react';
// // import { v4 as uuidv4 } from "uuid";
// // import Card from "./card";
// // import Carroussel from "./carousel";
// // import "./Event_page.css";
// // import carouselData from '../../data/carouselData.js'

// // // import IMG1 from "../../assets/1-3.png";
// // // import IMG2 from "../../assets/CC-1.png";
// // // import IMG3 from "../../assets/PAPERENZA_P01.png";
// // // import IMG4 from "../../assets/techno.png";
// // // import IMG5 from "../../assets/Artboard 1.jpg";
// // // import IMG6 from "../../assets/frank.png";
// // // import IMG7 from "../../assets/dn.png";
// // // //image for non tech
// // // import IMGn1 from "../../assets/brain a holic (1).png";
// // // import IMGn2 from "../../assets/brando palooza (1).png";
// // // import IMGn3 from "../../assets/Cyber Trial_01.png";
// // // import IMGn4 from "../../assets/digital_blueprint1.png";
// // // import IMGn5 from "../../assets/grill and skill.png";
// // // import IMGn6 from "../../assets/one shot.png";

// // // //image for workshop
// // // import IMGw1 from "../../assets/trojans_linux.png";
// // // import IMGw2 from "../../assets/trojans_ncs2.png";
// // // import IMGw3 from "../../assets/trojans_ve.png";
// // // import IMGw4 from "../../assets/trojans_webdev.png";
// // // //image for gaming
// // // import IMGg1 from "../../assets/freefire.jpg";
// // // import IMGg2 from "../../assets/Valo main.jpg";
// // // import IMGg3 from "../../assets/bgmi main.png";
// // import { useAuth0 } from '@auth0/auth0-react';
// // import { useLocation } from 'react-router-dom';

// // const Events_page = () => {
// //   const { isAuthenticated, loginWithRedirect, user } = useAuth0();
// //   const [isFirstSubmissionMain, setIsFirstSubmissionMain] = useState(true);
// //   const [eventsRegistered, setEventsRegistered] = useState([]);
// //   const [showModal, setShowModal] = useState(false);
// //   const [userId, setUserId] = useState("");
// //   const location = useLocation();

// //   useEffect(() => {
// //     const handleHashScroll = () => {
// //       if (location.hash) {
// //         const targetId = location.hash.slice(1); // Remove '#' to get the ID
// //         const targetElement = document.getElementById(targetId);
// //         if (targetElement) {
// //           targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
// //         }
// //       }
// //     };

// //     handleHashScroll();
// //   }, [location]); // Re-run when location changes
// //   useEffect(() => {
// //     const fetchRegisteredEvents = async () => {
// //       if (isAuthenticated && user) {
// //         try {
// //           const res=await fetch(
// //             `${process.env.REACT_APP_BACKEND_URL}/api/users/signin`,
// //             {
// //               method: "POST",
// //               headers: { "Content-Type": "application/json" },
// //               body: JSON.stringify({
// //                 userId: user.sub,
// //                 name: user.name,
// //                 email: user.email,
// //                 profile: user.picture,
// //               }),
// //             }
// //           );
// //           if (!res.ok) {
// //             console.error("Failed to sign in user");
// //             return;
// //           }

// //           const resData = await res.json();
// //           const user_id = resData.user._id;
// //           setUserId(user_id);
// //           const response = await fetch(
// //             `${process.env.REACT_APP_BACKEND_URL}/api/registered/registered-events?user_id=${user_id}`
// //           );

// //           if (response.ok) {
// //             const data = await response.json();
// //             if (data.events.length === 0) {
// //               setIsFirstSubmissionMain(true);
// //               setEventsRegistered([]);
// //             } else {
// //               setIsFirstSubmissionMain(false);
// //               setEventsRegistered(data.events);
// //             }
// //           } else {
// //             console.error("Failed to fetch registered events");
// //           }
// //         } catch (error) {
// //           console.error("Error fetching registered events:", error);
// //         }
// //       }
// //     };

// //     fetchRegisteredEvents();
// //   }, [isAuthenticated, user]);

// //   const handleRegisterClick = (eventId) => {
// //     if (!isAuthenticated) {
// //       alert("Please login to register for events.");
// //       loginWithRedirect();
// //       return;
// //     }

// //     if (isFirstSubmissionMain) {
// //       setShowModal(true); // Show registration modal
// //     }
// //   };

// //   const handleRegisterSubmit = async (eventData) => {
// //     try {
// //       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/registered/register-events`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ user_id: user.sub, events: eventData }),
// //       });

// //       if (response.ok) {
// //         setIsFirstSubmissionMain(false);
// //         setEventsRegistered(eventData);
// //         setShowModal(false);
// //       } else {
// //         console.error("Failed to register for events.");
// //       }
// //     } catch (error) {
// //       console.error("Error registering for events:", error);
// //     }
// //   };
// //   // const carouselData = [
// //   //   { id:"tech",
// //   //     title: "Technical Events",
// //   //     bgColor:  "linear-gradient(135deg, #2A0845, #6441A5)",
// //   //     cards: [
// //   //       {
// //   //         imagen: IMG1,
// //   //         title: "CODE MANIA",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "FREE",
// //   //         // category: "SOLO-PLAY",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-tech1" },
// //   //           { text: "RULES", href: "/rules-tech1" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //       {
// //   //         imagen: IMG2,
// //   //         title: "CODERS CHEMISTRY",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "FREE",
// //   //         // category: "DUO-PLAY",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-tech2" },
// //   //           { text: "RULES", href: "/rules-tech2" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //       {
// //   //         imagen: IMG3,
// //   //         title: "PAPERENZA",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "FREE",
// //   //         // category: "Cloud Computing",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-tech3" },
// //   //           { text: "RULES", href: "/rules-tech3" },
// //   //         ],
// //   //         isMax:false,
// //   //         link:"https://forms.gle/YcA1uzebGcUyLCNbA"
// //   //       },
// //   //       {
// //   //         imagen: IMG4,
// //   //         title: "TECHNO RHYTHM",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "FREE",
// //   //         // category: "SQUAD-PLAY(3 PLAYERS)",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-tech3" },
// //   //           { text: "RULES", href: "/rules-tech3" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //       {
// //   //         imagen: IMG5,
// //   //         title: "TECH TRIVIA",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "FREE",
// //   //         // category: "SOLO-PLAY",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-tech3" },
// //   //           { text: "RULES", href: "/rules-tech3" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //       {
// //   //         imagen: IMG6,
// //   //         title: "FRANKENSTEIN",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "FREE",
// //   //         // category: "DUO-PLAY",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-tech3" },
// //   //           { text: "RULES", href: "/rules-tech3" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //       {
// //   //         imagen: IMG7,
// //   //         title: "DEVELOPER'S NIGHTMARE",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "FREE",
// //   //         // category:"SOLO-PLAY",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-tech3" },
// //   //           { text: "RULES", href: "/rules-tech3" },
// //   //         ],
// //   //         isMax:false,
// //   //       },

// //   //     ],
// //   //   },
// //   //   { id:"nontech",
// //   //     title: "Non-Technical Events",
// //   //     bgColor: "linear-gradient(135deg, #43cea2, #185a9d)",
// //   //     cards: [
// //   //       {
// //   //         imagen: IMGn1,

// //   //         title: "Brain A Holic",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "Free",
// //   //         // category: "Fun Tech",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-art" },
// //   //           { text: "RULES", href: "/rules-art" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //       {
// //   //         imagen: IMGn2,
// //   //         title: "BRAND O PALOOZA",
// //   //         description: "Get ready to groove and compete in our Dance Battle.",
// //   //         time: "TO BE ANNOUNCED",

// //   //         fee: "Free",
// //   //         // category: "Fun-Tech",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-dance" },
// //   //           { text: "RULES", href: "/rules-dance" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //       {
// //   //         imagen: IMGn3,
// //   //         title: "CYBER TRAIL",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "Free",
// //   //         // category: "Fun-tech",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-quiz" },
// //   //           { text: "RULES", href: "/rules-quiz" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //       {
// //   //         imagen: IMGn4,
// //   //         title: "DIGITAL BLUE PRINT",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "Free",
// //   //         // category: "Fun-tech",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-quiz" },
// //   //           { text: "RULES", href: "/rules-quiz" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //       {
// //   //         imagen: IMGn5,
// //   //         title: "GRILL & SKILL",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "Free",
// //   //         // category: "Fun-tech",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-quiz" },
// //   //           { text: "RULES", href: "/rules-quiz" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //       {
// //   //         imagen: IMGn6,
// //   //         title: "ONE SHOT",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "Free",
// //   //         // category: "Fun-Tech",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-quiz" },
// //   //           { text: "RULES", href: "/rules-quiz" },
// //   //         ],
// //   //         isMax:false,
// //   //       },
// //   //     ],
// //   //   },
// //   //   { id:"workshop",
// //   //     title: "Workshops",
// //   //     bgColor: "linear-gradient(135deg, #F7971E, #FFD200)",
// //   //     cards: [
// //   //       {
// //   //         imagen: IMGw1,
// //   //         title: "Linux Workshop",
// //   //         time: "to be Announced",
// //   //         fee: "129",
// //   //         // category: "Workshop",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-graphicdesign" },
// //   //           { text: "DETAILS", href: "/details-graphicdesign" },
// //   //         ],
// //   //         isMax:false,
// //   //         link:"https://forms.gle/h8NAP9frUfR7uW7E9"
// //   //       },
// //   //       {
// //   //         imagen: IMGw2,
// //   //         title: "Networking and CyberSecurity",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "129",
// //   //         // category: "Workshop",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-webdev" },
// //   //           { text: "DETAILS", href: "/details-webdev" },
// //   //         ],
// //   //         isMax:false,
// //   //         link:"https://forms.gle/h8NAP9frUfR7uW7E9"
// //   //       },
// //   //       {
// //   //         imagen: IMGw3,
// //   //         title: "Video Editing Workshop",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "129",
// //   //         // category: "Workshop",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-datascience" },
// //   //           { text: "DETAILS", href: "/details-datascience" },
// //   //         ],
// //   //         isMax:false,
// //   //         link:"https://forms.gle/h8NAP9frUfR7uW7E9"
// //   //       },
// //   //       {
// //   //         imagen: IMGw4,
// //   //         title: "Web Development Workshop",
// //   //         time: "TO BE ANNOUNCED",
// //   //         fee: "129",
// //   //         // category: "Workshop",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-datascience" },
// //   //           { text: "DETAILS", href: "/details-datascience" },
// //   //         ],
// //   //         isMax:false,
// //   //         link:"https://forms.gle/h8NAP9frUfR7uW7E9"
// //   //       },
// //   //     ],
// //   //   },
// //   //   { id:"game",
// //   //     title: "Gaming Events",
// //   //     bgColor: "linear-gradient(135deg, #8E2DE2, #FF0080)",
// //   //     cards: [
// //   //       {
// //   //         imagen: IMGg1,
// //   //         title: "FREE FIRE",
// //   //         description: "Showcase your clashes with battles",
// //   //         time: "10:00 AM - 2:00 PM",
// //   //         date: "05/02/2025",
// //   //         fee: "69",
// //   //         category: "Offline",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-art" },
// //   //           { text: "RULES", href: "/rules-art" },
// //   //         ],
// //   //         isMax:false,
// //   //         link:"https://forms.gle/hJj9BqtF92FbRRp59"
// //   //       },
// //   //       {
// //   //         imagen: IMGg2,
// //   //         title: "VALORANT",
// //   //         description: "Get ready to groove and compete in our Dance Battle.",
// //   //         time: "6:00 PM - 11:00 PM",
// //   //         date: "04/02/2025",
// //   //         fee: "99",
// //   //         category: "Online",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-dance" },
// //   //           { text: "RULES", href: "/rules-dance" },
// //   //         ],
// //   //         isMax:false,
// //   //         link:"https://forms.gle/fKoPQ4MLwCUGeaj48"
// //   //       },
// //   //       {
// //   //         imagen: IMGg3,
// //   //         title: "BGMI",
// //   //         description: "Put your knowledge to the test in our Quiz Competition.",
// //   //         time: "10:00 AM - 2:00 PM",
// //   //         date: "05/02/2025",
// //   //         fee: "69",
// //   //         category: "Offline",
// //   //         buttons: [
// //   //           { text: "REGISTER", href: "/register-quiz" },
// //   //           { text: "RULES", href: "/rules-quiz" },
// //   //         ],
// //   //         isMax:false,
// //   //         link:"https://forms.gle/Ab8bWHUTws4rb2ft7"
// //   //       },
// //   //     ],
// //   //   },
// //   // ];

// //   const handleIsFirstSubmission=(val)=>{
// //     setIsFirstSubmissionMain(val);
// //   }
// //       return (
// //     <div className="container">
// //       {carouselData.map((carousel, index) => (
// //         <div className="carousel-container" key={index} id={carousel.id}>
// //           <h2 className="topic-heading">{carousel.title}</h2>
// //           <Carroussel
// //             cards={carousel.cards.map((card, cardIndex) => ({
// //               key: cardIndex,  // Use card.title or another unique property
// //               content: (
// //                 <Card
// //                 bgcolor={carousel.bgColor}
// //                   imagen={card.imagen}
// //                   title={card.title}
// //                   description={card.description}
// //                   date={card.date}
// //                   time={card.time}
// //                   fee={card.fee}
// //                   link={card.link}
// //                   isMax={card.isMax}
// //                   category={card.category}
// //                   buttons={card.buttons}
// //                   isFirstSubmissionMain={isFirstSubmissionMain}
// //                     handleIsFirstSubmission={handleIsFirstSubmission}
// //                   setIsFirstSubmissionMain={setIsFirstSubmissionMain}
// //                   userId={userId}
// //                   eventsRegistered={eventsRegistered}
// //                   setEventsRegistered={setEventsRegistered}
// //                 />
// //               ),
// //             }))}
// //             showArrows={true}
// //             height="500px"
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Events_page;

// // import React, { useEffect, useState } from 'react';
// // import { v4 as uuidv4 } from "uuid";
// // import Card from "./card";
// // import Carroussel from "./carousel";
// // import "./Event_page.css";
// // import carouselData from '../../data/carouselData.js'

// // // import IMG1 from "../../assets/1-3.png";
// // // import IMG2 from "../../assets/CC-1.png";
// // // import IMG3 from "../../assets/PAPERENZA_P01.png";
// // // import IMG4 from "../../assets/techno.png";
// // // import IMG5 from "../../assets/Artboard 1.jpg";
// // // import IMG6 from "../../assets/frank.png";
// // // import IMG7 from "../../assets/dn.png";
// // // //image for non tech
// // // import IMGn1 from "../../assets/brain a holic (1).png";
// // // import IMGn2 from "../../assets/brando palooza (1).png";
// // // import IMGn3 from "../../assets/Cyber Trial_01.png";
// // // import IMGn4 from "../../assets/digital_blueprint1.png";
// // // import IMGn5 from "../../assets/grill and skill.png";
// // // import IMGn6 from "../../assets/one shot.png";

// // // //image for workshop
// // // import IMGw1 from "../../assets/trojans_linux.png";
// // // import IMGw2 from "../../assets/trojans_ncs2.png";
// // // import IMGw3 from "../../assets/trojans_ve.png";
// // // import IMGw4 from "../../assets/trojans_webdev.png";
// // // //image for gaming
// // // import IMGg1 from "../../assets/freefire.jpg";
// // // import IMGg2 from "../../assets/Valo main.jpg";
// // // import IMGg3 from "../../assets/bgmi main.png";
// // import { useAuth0 } from '@auth0/auth0-react';
// // import { useLocation } from 'react-router-dom';

// // const Events_page = () => {
// //   const { isAuthenticated, loginWithRedirect, user } = useAuth0();
// //   const [isFirstSubmissionMain, setIsFirstSubmissionMain] = useState(true);
// //   const [eventsRegistered, setEventsRegistered] = useState([]);
// //   const [showModal, setShowModal] = useState(false);
// //   const [userId, setUserId] = useState("");
// //   const location = useLocation();

// //   useEffect(() => {
// //     const handleHashScroll = () => {
// //       if (location.hash) {
// //         const targetId = location.hash.slice(1); // Remove '#' to get the ID
// //         const targetElement = document.getElementById(targetId);
// //         if (targetElement) {
// //           targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
// //         }
// //       }
// //     };

// //     handleHashScroll();
// //   }, [location]); // Re-run when location changes
// //   useEffect(() => {
// //     const fetchRegisteredEvents = async () => {
// //       if (isAuthenticated && user) {
// //         try {
// //           const res=await fetch(
// //             `${process.env.REACT_APP_BACKEND_URL}/api/users/signin`,
// //             {
// //               method: "POST",
// //               headers: { "Content-Type": "application/json" },
// //               body: JSON.stringify({
// //                 userId: user.sub,
// //                 name: user.name,
// //                 email: user.email,
// //                 profile: user.picture,
// //               }),
// //             }
// //           );
// //           if (!res.ok) {
// //             console.error("Failed to sign in user");
// //             return;
// //           }

// //           const resData = await res.json();
// //           const user_id = resData.user._id;
// //           setUserId(user_id);
// //           const response = await fetch(
// //             `${process.env.REACT_APP_BACKEND_URL}/api/registered/registered-events?user_id=${user_id}`
// //           );

// //           if (response.ok) {
// //             const data = await response.json();
// //             if (data.events.length === 0) {
// //               setIsFirstSubmissionMain(true);
// //               setEventsRegistered([]);
// //             } else {
// //               setIsFirstSubmissionMain(false);
// //               setEventsRegistered(data.events);
// //             }
// //           } else {
// //             console.error("Failed to fetch registered events");
// //           }
// //         } catch (error) {
// //           console.error("Error fetching registered events:", error);
// //         }
// //       }
// //     };

// //     fetchRegisteredEvents();
// //   }, [isAuthenticated, user]);

// //   const handleRegisterClick = (eventId) => {
// //     if (!isAuthenticated) {
// //       alert("Please login to register for events.");
// //       loginWithRedirect();
// //       return;
// //     }

// //     if (isFirstSubmissionMain) {
// //       setShowModal(true); // Show registration modal
// //     }
// //   };

// //   const handleRegisterSubmit = async (eventData) => {
// //     try {
// //       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/registered/register-events`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ user_id: user.sub, events: eventData }),
// //       });

// //       if (response.ok) {
// //         setIsFirstSubmissionMain(false);
// //         setEventsRegistered(eventData);
// //         setShowModal(false);
// //       } else {
// //         console.error("Failed to register for events.");
// //       }
// //     } catch (error) {
// //       console.error("Error registering for events:", error);
// //     }
// //   };

// //   const handleIsFirstSubmission=(val)=>{
// //     setIsFirstSubmissionMain(val);
// //   }
// //       return (
// //     <div className="container">
// //       {carouselData.map((carousel, index) => (
// //         <div className="carousel-container" key={index} id={carousel.id}>
// //           <h2 className="topic-heading">{carousel.title}</h2>
// //           <Carroussel
// //             cards={carousel.cards.map((card, cardIndex) => ({
// //               key: cardIndex,  // Use card.title or another unique property
// //               content: (
// //                 <Card
// //                 bgcolor={carousel.bgColor}
// //                   imagen={card.imagen}
// //                   title={card.title}
// //                   description={card.description}
// //                   date={card.date}
// //                   time={card.time}
// //                   fee={card.fee}
// //                   link={card.link}
// //                   isMax={card.isMax}
// //                   category={card.category}
// //                   buttons={card.buttons}
// //                   isFirstSubmissionMain={isFirstSubmissionMain}
// //                     handleIsFirstSubmission={handleIsFirstSubmission}
// //                   setIsFirstSubmissionMain={setIsFirstSubmissionMain}
// //                   userId={userId}
// //                   eventsRegistered={eventsRegistered}
// //                   setEventsRegistered={setEventsRegistered}
// //                 />
// //               ),
// //             }))}
// //             showArrows={true}
// //             height="500px"
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Events_page;

// // import React, { useState } from 'react';
// // import Navbar from '../components/Navbar';
// import TechEventFlipCard from './card.jsx';
// // import ChessBackground from '../components/ChessBackground';
// // import EventFilters from '../components/EventFilters';
// import { CARD_THEMES } from '../../cardThemes.js';
// import './Event_page.css'
// import React, { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from "uuid";
// import Card from "./card";
// import Carroussel from "./carousel";
// import "./Event_page.css";
// import carouselData from '../../data/carouselData.js'

// const EVENTS_DATA = [
//     {
//         id: 1,
//         title: "CODE MANIA",
//         type: "TECHNICAL",
//         image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800",
//         price: 150,
//         theme: CARD_THEMES.blue,
//         details: ["Competitive Coding", "2 Rounds", "Solo / Duo"],
//         isFeatured: true
//     },
//     {
//         id: 2,
//         title: "ROBO WAR",
//         type: "WORKSHOP",
//         image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800",
//         price: 300,
//         theme: CARD_THEMES.gold,
//         details: ["Build your bot", "Arena Battle", "Cash Prizes"]
//     },
//     {
//         id: 3,
//         title: "VALORANT",
//         type: "GAMING",
//         image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800",
//         price: 500,
//         theme: CARD_THEMES.red,
//         details: ["5v5 Tournament", "Knockout Rounds", "High Stakes"],
//         isFeatured: true
//     },
//     {
//         id: 4,
//         title: "AI HACKATHON",
//         type: "TECHNICAL",
//         image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",
//         price: 200,
//         theme: CARD_THEMES.green,
//         details: ["24 Hour Hack", "Generative AI", "Top Industry Mentors"]
//     },
//     {
//         id: 5,
//         title: "CYBER HUNT",
//         type: "TECHNICAL",
//         image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
//         price: 100,
//         theme: CARD_THEMES.blue,
//         details: ["CTF Challenge", "Find Flags", "Beat the Timer"]
//     },
//     {
//         id: 6,
//         title: "DRONE RACING",
//         type: "WORKSHOP",
//         image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=800",
//         price: 400,
//         theme: CARD_THEMES.gold,
//         details: ["Drone Assembly", "Obstacle Course", "Fastest Lap Wins"]
//     }
// ];

// const Events = () => {
//     const [activeFilter, setActiveFilter] = useState("ALL");
//     const [searchQuery, setSearchQuery] = useState("");

//     const isMatch = (event) => {
//         const matchesFilter = activeFilter === "ALL" || event.type === activeFilter;
//         const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             event.type.toLowerCase().includes(searchQuery.toLowerCase());
//         return matchesFilter && matchesSearch;
//     };

//     const categories = ["TECHNICAL", "WORKSHOP", "GAMING"];

//     return (
//         <div style={{ minHeight: '100vh', background: '#02040a', paddingBottom: '100px'}} className='event-page'>
//             {/* <Navbar /> */}
//             {/* <ChessBackground /> */}

//             <div style={{ paddingTop: '80px', paddingLeft: '20px', maxWidth: '1400px', margin: '0 auto', paddingRight: '20px', position: 'relative', zIndex: 10 }}>

//                 <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//                     <h1 style={{ marginBottom: '10px', color: '#fff', textShadow: '0 0 20px rgba(0, 180, 255, 0.5)' }}>MAKE YOUR MOVE</h1>
//                     <p style={{ color: '#d4b56a', fontFamily: 'Orbitron', letterSpacing: '2px', opacity: 0.8 }}>STRATEGY × TECHNOLOGY</p>
//                 </div>

//                 {/* <EventFilters
//                     activeFilter={activeFilter}
//                     setActiveFilter={setActiveFilter}
//                     searchQuery={searchQuery}
//                     setSearchQuery={setSearchQuery}
//                 /> */}

//                 {/* Unified Layout: Always grouped by category, CSS handles grid vs scroll */}
//                 <div className="unified-view">
//                     {activeFilter === "ALL" ? (
//                         categories.map(cat => (
//                             <div key={cat} style={{ marginBottom: '60px' }}>
//                                 <div className="separator-band"></div>
//                                 <h3 style={{ marginLeft: '10px', color: '#d4b56a', marginBottom: '40px', fontSize: '1.5rem', letterSpacing: '3px' }}>{cat}</h3>

//                                 <div className="events-container">
//                                     {EVENTS_DATA.filter(e => e.type === cat).map(event => {
//                                         const match = isMatch(event);
//                                         return (
//                                             <div key={event.id} className="event-item-wrapper">
//                                                 <Card {...event} isDimmed={!match} />
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="desktop-grid">
//                             {EVENTS_DATA.filter(e => e.type === activeFilter).map(event => (
//                                 <TechEventFlipCard key={event.id} {...event} isDimmed={!isMatch(event)} />
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* No Results Message */}
//                 {EVENTS_DATA.every(e => !isMatch(e)) && (
//                     <div style={{ textAlign: 'center', marginTop: '50px', color: '#666', fontFamily: 'Orbitron' }}>
//                         <h2>NO VALID MOVES FOUND</h2>
//                         <p>Redeploy strategy.</p>
//                     </div>
//                 )}

//             </div>

//             <style>{`
//         /* Desktop Default (Grid) */
//         .events-container {
//             display: grid;
//             grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//             gap: 40px;
//             place-items: center;
//         }

//         .desktop-grid {
//              display: grid;
//              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//              gap: 40px;
//              place-items: center;
//         }

//         /* Mobile Override (Horizontal Scroll) */
//         // @media (max-width: 768px) {
//         //     .events-container {
//         //         display: flex;
//         //         overflow-x: auto;
//         //         padding-bottom: 20px;
//         //         scroll-snap-type: x mandatory;
//         //         width: 300px;
//         //         gap: 50px; /* Gap handled by margin in wrapper to allow snap alignment */
//         //         place-items: unset;
//         //         grid-template-columns: unset;
//         //     }

//         //     .event-item-wrapper {
//         //         flex: 0 0 auto;
//         //         margin-right: 20px;
//         //         scroll-snap-align: center;
//         //         margin-left: 60px;
//         //         margin-top: 20px;
//         //     }
//         // }

//         @media (max-width: 768px) {
//   .events-container {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: nowrap; /* 🔥 THIS FIXES VERTICAL STACKING */

//     gap: 50px;
//     width: 100%;

//     overflow-x: auto;
//     overflow-y: hidden;

//     padding: 20px 10px 30px;

//     scroll-snap-type: x mandatory;
//     -webkit-overflow-scrolling: touch;
//   }

//   .event-item-wrapper {
//     flex: 0 0 85%; /* 🔥 Forces horizontal layout */
//     scroll-snap-align: center;
//   }
// }

//       `}</style>
//         </div>
//     );
// };

// export default Events;

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TechEventFlipCard from "./card.jsx";
import { CARD_THEMES } from "../../cardThemes.js";
import "./Event_page.css";

gsap.registerPlugin(ScrollTrigger);

const EVENTS_DATA = [
  {
    id: 1,
    title: "CODE MANIA",
    type: "TECHNICAL",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800",
    price: 150,
    theme: CARD_THEMES.cyber,
    details: ["Competitive Coding", "2 Rounds", "Solo / Duo"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "ROBO WAR",
    type: "WORKSHOP",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800",
    price: 300,
    theme: CARD_THEMES.red,
    details: ["Build your bot", "Arena Battle", "Cash Prizes"],
  },
  {
    id: 3,
    title: "VALORANT",
    type: "GAMING",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800",
    price: 500,
    theme: CARD_THEMES.green,
    details: ["5v5 Tournament", "Knockout Rounds", "High Stakes"],
    isFeatured: true,
  },
  {
    id: 4,
    title: "AI HACKATHON",
    type: "TECHNICAL",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",
    price: 200,
    theme: CARD_THEMES.mythic,
    details: ["24 Hour Hack", "Generative AI", "Top Industry Mentors"],
  },
  {
    id: 5,
    title: "CYBER HUNT",
    type: "TECHNICAL",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
    price: 100,
    theme: CARD_THEMES.void,
    details: ["CTF Challenge", "Find Flags", "Beat the Timer"],
  },
  {
    id: 6,
    title: "DRONE RACING",
    type: "WORKSHOP",
    image:
      "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=800",
    price: 400,
    theme: CARD_THEMES.gold,
    details: ["Drone Assembly", "Obstacle Course", "Fastest Lap Wins"],
  },
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  /* ================= GSAP SCROLL REVEAL ================= */
  // useEffect(() => {
  //   const cards = gsap.utils.toArray(".event-item-wrapper");

  //   cards.forEach((card) => {
  //     gsap.fromTo(
  //       card,
  //       {
  //         opacity: 0,
  //         y: 60,
  //         scale: 0.96,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scale: 1,
  //         duration: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 85%",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);

  // useEffect(() => {
  //   const mm = gsap.matchMedia();

  //   mm.add("(min-width: 769px)", () => {
  //     const cards = gsap.utils.toArray(".event-item-wrapper");

  //     gsap.set(cards, {
  //       opacity: 0,
  //       y: 60,
  //       scale: 0.96,
  //     });

  //     cards.forEach((card) => {
  //       gsap.to(card, {
  //         opacity: 1,
  //         y: 0,
  //         scale: 1,
  //         duration: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 85%",
  //           end: "bottom 20%",
  //           toggleActions: "play none play reverse",
  //           invalidateOnRefresh: true,
  //         },
  //       });
  //     });
  //   });

  //   mm.add("(max-width: 768px)", () => {
  //     const cards = gsap.utils.toArray(".event-item-wrapper");

  //     gsap.fromTo(
  //       cards,
  //       { opacity: 0, y: 40 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         stagger: 0.15,
  //         scrollTrigger: {
  //           trigger: ".unified-view",
  //           start: "top 80%",
  //         },
  //       }
  //     );
  //   });

  //   mm.add("(max-width: 768px)", () => {
  //     const container = document.querySelector(".events-container");
  //     const cards = gsap.utils.toArray(".event-item-wrapper");

  //     if (!container || cards.length === 0) return;

  //     gsap.set(cards, {
  //       scale: 0.92,
  //       opacity: 0.6,
  //     });

  //     cards.forEach((card) => {
  //       gsap.to(card, {
  //         scale: 1,
  //         opacity: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: card,
  //           scroller: container,
  //           horizontal: true,

  //           start: "left 60%",
  //           end: "right 40%",

  //           scrub: 0.5,
  //           invalidateOnRefresh: true,
  //         },
  //       });
  //     });
  //   });

  //   return () => mm.revert();
  // }, []);

useEffect(() => {
  const mm = gsap.matchMedia();
  const cards = gsap.utils.toArray(".event-item-wrapper");

  /* ================= VERTICAL REVEAL (ALL DEVICES) ================= */
  gsap.set(cards, {
    opacity: 0,
    y: 60,
    scale: 0.96,
  });

  cards.forEach((card) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        scroller: window,              // ✅ explicit
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none play reverse",
        invalidateOnRefresh: true,
      },
    });
  });

  /* ================= MOBILE: HORIZONTAL FOCUS ================= */
  mm.add("(max-width: 768px)", () => {
    const container = document.querySelector(".events-container");
    if (!container) return;

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          scale: 0.92,
          opacity: 0.6,
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            scroller: container,       // ✅ horizontal scroller
            horizontal: true,
            start: "left 65%",
            end: "right 35%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  });

  return () => {
    mm.revert();
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);


  /* ===================================================== */

  const isMatch = (event) => {
    const matchesFilter = activeFilter === "ALL" || event.type === activeFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  };

  const categories = ["TECHNICAL", "WORKSHOP", "GAMING"];

  return (
    <div
      className="event-page"
      style={{
        minHeight: "100vh",
        background: "#02040a",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          paddingTop: "80px",
          paddingLeft: "20px",
          paddingRight: "20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              color: "#fff",
              textShadow: "0 0 20px rgba(0,180,255,0.5)",
            }}
          >
            MAKE YOUR MOVE
          </h1>
          <p
            style={{
              color: "#d4b56a",
              fontFamily: "Orbitron",
              letterSpacing: "2px",
            }}
          >
            STRATEGY × TECHNOLOGY
          </p>
        </div>

        <div className="unified-view">
          {activeFilter === "ALL" &&
            categories.map((cat) => (
              <div key={cat} style={{ marginBottom: "60px" }}>
                <div className="separator-band"></div>
                {/* <h3
                  style={{
                    color: "#d4b56a",
                    marginBottom: "40px",
                    letterSpacing: "3px",
                  }}
                >
                  {cat}
                </h3> */}
                <h3
                  style={{
                    marginLeft: "10px",
                    color: "#d4b56a",
                    marginBottom: "40px",
                    fontSize: "1.5rem",
                    letterSpacing: "3px",
                  }}
                >
                  {cat}
                </h3>

                <div className="events-container">
                  {EVENTS_DATA.filter((e) => e.type === cat).map((event) => (
                    <div key={event.id} className="event-item-wrapper">
                      <TechEventFlipCard
                        {...event}
                        isDimmed={!isMatch(event)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
