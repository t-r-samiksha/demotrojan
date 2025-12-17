import React, { useEffect, useRef } from "react";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Heading } from "../../StyledComponents/styledcomponents";
import "./events.css";
import { Link } from "react-router-dom";
import workshop from "../../assets/workshop_final.jpg";
import tech from "../../assets/technical_final.png";
import nont from "../../assets/non_tech_final_v2.jpg";
import game from "../../assets/gaming_final.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ThreeDCardDemo() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Determine direction: Even index = Left (-200), Odd index = Right (200)
        const xOffset = index % 2 === 0 ? -200 : 200;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: xOffset,
            scale: 0.6, // Zoom start size
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1, // Fast but smooth
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Trigger just as it comes into view
              toggleActions: "play reverse play reverse", // Re-plays on scroll
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const details = [
    {
      id: "tech",
      Title: "Technical Events",
      Description:
        "Dive into the world of innovation and creativity. Showcase your technical prowess and solve real-world challenges in a collaborative environment.",
      Image: tech,
      Navigate: "Explore Technical Events",
    },
    {
      id: "nontech",
      Title: "Non-Tech Events",
      Description:
        "Blending fun with technology, these events let you unleash your creativity in exciting and unconventional ways.",
      Image: nont,
      Navigate: "Join NonTech Events",
    },
    {
      id: "workshop",
      Title: "Workshops",
      Description:
        "Expand your knowledge and learn from industry experts. Hands-on sessions to master new skills and stay ahead.",
      Image: workshop,
      Navigate: "Attend Workshops",
    },
    {
      id: "game",
      Title: "Gaming",
      Description:
        "Level up your gaming skills and learn from industry pros. Dive into hands-on sessions to master strategies, improve gameplay, and stay ahead in the competition.",
      Image: game,
      Navigate: "Attend Gaming",
    },
  ];

  return (
    <div className="events" id="events">
      <div className="events-title">
        <Heading title="Events" />
      </div>
      <div className="flex flex-wrap justify-center dark gap-8 p-1 overflow-hidden">
        {details.map((event, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="w-auto"
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="events-card-title-trojan leading-tight"
                >
                  {event.Title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {event.Description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={event.Image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={event.Title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="a"
                    className="flex items-center px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-black"
                  >
                    <Link to={`/events-page#${event.id}`} className="w-full">
                      {event.Navigate} <ArrowRightAltIcon className="ml-1" />
                    </Link>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    {" "}
                    <Link to={`/events-page#${event.id}`}>More Info</Link>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
