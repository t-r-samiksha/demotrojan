import React from "react";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Heading } from "../../StyledComponents/styledcomponents";
import "./events.css";
import { Link } from 'react-router-dom';

export function ThreeDCardDemo() {
  const details = [
    {
      Title: "Technical Events",
      Description:
        "Dive into the world of innovation and creativity. Showcase your technical prowess and solve real-world challenges in a collaborative environment.",
      Image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      Navigate: "Explore Technical Events",
    },
    {
      Title: "FunTech Events",
      Description:
        "Blending fun with technology, these events let you unleash your creativity in exciting and unconventional ways.",
      Image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      Navigate: "Join FunTech Events",
    },
    {
      Title: "Workshops",
      Description:
        "Expand your knowledge and learn from industry experts. Hands-on sessions to master new skills and stay ahead.",
      Image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      Navigate: "Attend Workshops",
    },
  ];

  return (
    <div className="events">
      <div className="events-title">
        <Heading title="Events" />
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {details.map((event, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-3xl font-extrabold text-center text-neutral-700 dark:text-white leading-tight tracking-wide"
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
                  <Link to="/events-page" className="w-full">
                    {event.Navigate} <ArrowRightAltIcon className="ml-1" />
                  </Link>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  More Info
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
