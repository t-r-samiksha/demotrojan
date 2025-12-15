import React, { useEffect } from "react";
import './SponcerPage.css';
import Aos from "aos";
import "aos/dist/aos.css";

import {titleSponsor,hospitality,cosponsors,goldSponcers,eventsponsors,sponcers} from '../../data/sponsorData.js'

export default function SponcerPage() {
  useEffect(() => {
    Aos.init();
  });

  // const titleSponsor = {
  //   name: "Chennai Petroleum Corporation Limited",
  //   description:
  //   "We are honored to have Chennai Petroleum Corporation Limited (CPCL), a leading central government organization, as the title sponsor of our symposium. A pioneer in the energy sector, CPCL is renowned for its excellence in refining and commitment to sustainability. Their support aligns seamlessly with our theme, 'Industry 4.0 - Shaping the Future,' and adds immense value to our event.",
  //   imgSrc:Ctcl,
  //   link: "https://cpcl.co.in/",
  // };

  // const hospitality=[{
  //   name: "MAKER'S CAFE",
  //   description:
  //   "We are delighted to have Makers Cafe as our hospitality sponsor, keeping our symposium refreshed with beverages and drinks. Their support ensures a vibrant and energized experience for all attendees.",
  //   imgSrc:makerscafe,
  //   // link: "https://cpcl.co.in/",
  // }
  // ]
  // const cosponsors = [
  //   {
  //     name: "poorvika",
  //     description:
  //       "We are delighted to have Poorvika Mobiles, India's leading mobile retail chain, as our certificate sponsor. Their dedication to connecting people with cutting-edge technology aligns perfectly with the innovative spirit of our symposium.",
  //     imgSrc: Poo,
  //     link: "https://www.poorvika.com/",
  //     aosEffect: "fade-right",
  //   },
  //   {
  //     name: "greentrends",
  //     description:
  //     "We are thrilled to partner with Green Trends, a trusted name in the beauty and styling industry, as our coupon sponsor. Their support adds a touch of style to our event, making it even more special.",
  //     imgSrc: Green,
  //     link: "https://www.mygreentrends.in/",
  //     aosEffect: "fade-left",
  //   }
  //   ,

  // ];
  // const goldSponcers = [
  //   {
  //     name: "Naturals",
  //     description:
  //     "We are excited to welcome Naturals, India's No. 1 salon chain, as our coupon sponsor. Their commitment to beauty and self-care resonates with the vibrant energy of our symposium.",
  //     imgSrc: Nat,
  //     link: "https://naturals.in/",
  //     aosEffect: "fade-right"
  //   },
  //   {
  //   name: "TastyTreats",
  //   description:
  //   "We are thrilled to partner with Tasty Treat, a beloved name in the world of delightful snacks and desserts, as our food sponsor. Their passion for crafting flavorsome treats perfectly complements the joyful spirit of our event",
  //   imgSrc: "https://media-hosting.imagekit.io//c2e897b2dd0b41f5/WhatsApp%20Image%202025-01-20%20at%201.04.21%20PM.jpeg?Expires=1831989022&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=a33tzH4w0KjXuoUdpQOyQE4o-TlFiixpgF7iaRPJR0m-K0TMNHdBX~CEJ5c~j5kywQq~wlAgBmuqLic6U-yWZVrEjDuqB4uIXTbJHwHtsn0YrB9pt5PfMyyxACCTYQa-YnS1yw1ZbfsBMMQH0IPxEAxrPat3E0x4JN7nffbEN~cDyyrfOQeTivNAbKKDw6l-WAUIctduxqDSDSrXVXjEW7tkh-4s3QTUFdLDYB8PUrH~k4mfd8eksU3sVe121iKVprXlakxjVbxZ6syLXrcpoiV7jAudKNTtcLpurh7bnZOSmAYIRL1BX0EqyhlOm6geobCBjcpRE3NkykOCqsTh2g__",
  //   link: "https://www.tastytreats.co.in/",
  //   aosEffect: "fade-left"
  //   }
  // ];
  // const eventsponsors=[
  //   {
  //     name: "SLAM",
  //     description:
  //     "We are thrilled to have SLAM as our event sponsor, bringing energy and excitement to our symposium. Their dedication to sports and fitness perfectly aligns with our spirit of enthusiasm and collaboration.",
  //     imgSrc: slam,
  //     link: "https://slamfitnessstudio.in/about-us/",
  //     aosEffect: "fade-right"
  //     }
  // ]
  // const sponcers = [
  //   {
  //     name: "Ajantha",
  //     // description:
  //     // "We are excited to welcome Naturals, India's No. 1 salon chain, as our coupon sponsor. Their commitment to beauty and self-care resonates with the vibrant energy of our symposium.",
  //     imgSrc: Ajan,
  //     // link: "https://naturals.in/",
  //     aosEffect: "fade-right"
  //   },
  //   {
  //     name: "Malaifi",
  //     // description:
  //     // "We are excited to welcome Naturals, India's No. 1 salon chain, as our coupon sponsor. Their commitment to beauty and self-care resonates with the vibrant energy of our symposium.",
  //     imgSrc: malaifi,
  //     // link: "https://naturals.in/",
  //     aosEffect: "fade-right"
  //   },
  //   {
  //     name:"Kadhar Briyani",
  //     imgSrc:kadhar_briyani,
  //     aosEffect:"fade-left"
  //   },
  //   {
  //     name: "Waffle Luv",
  //     // description:
  //     // "We are excited to welcome Naturals, India's No. 1 salon chain, as our coupon sponsor. Their commitment to beauty and self-care resonates with the vibrant energy of our symposium.",
  //     imgSrc: waffleLuv,
  //     // link: "https://naturals.in/",
  //     aosEffect: "fade-left"
  //   },
   
    
  // ];

  return (
    <div className="sponcers">
        <div className="titleMain">
        <div className="titleSponcer">
        <h1 data-text="TITLESPONSOR">TITLE SPONSOR</h1>
      </div>
      <div className=" title_1 ">
        <div className="image">
          <img
            src={titleSponsor.imgSrc}
            className="img-fluid"
            alt={`${titleSponsor.name} Sponsor Logo`}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="content "
        >
          <h2>{titleSponsor.name}</h2>
          <p>{titleSponsor.description}</p>
          <a href={titleSponsor.link} target="_blank" rel="noreferrer">
            DISCOVER MORE
          </a>
        </div>
      </div>
        </div>


  
      <div className="titleSponcer">
        <h1 >SPONSORS</h1>
      </div>
      <div className="cosponcers">
        {cosponsors.map((cosponsor, index) => (
          <div
            key={index}
            className={` ${cosponsor.name.toLowerCase()}`}
            data-aos={cosponsor.aosEffect}
            data-aos-duration="500"
          >
            <img
              src={cosponsor.imgSrc}
              className="img"
              alt={`${cosponsor.name} Sponsor Logo`}
            />
            <div className="content">
              <p>{cosponsor.description}</p>

              <a href={cosponsor.link} target="_blank" rel="noreferrer">
                DISCOVER MORE
              </a>
            </div>
          </div>
        ))}
      </div>



      <div className="cosponcers">
        {goldSponcers.map((goldSponcer, index) => (
          <div
            key={index}
            className={` ${goldSponcer.name.toLowerCase()}`}
            data-aos={goldSponcer.aosEffect}
            data-aos-duration="500"
          >
            <img
              src={goldSponcer.imgSrc}
              className="img"
              alt={`${goldSponcer.name} Sponsor Logo`}
            />
            <div className="content">
              <p>{goldSponcer.description}</p>
            {goldSponcer.link && (
              <a href={goldSponcer.link} target="_blank" rel="noreferrer">
              DISCOVER MORE
            </a>
            )}
            </div>
          </div>
        ))}
      </div>
      <div>
      <div className="titleSponcer">
        <h1 >EVENT SPONSORS</h1>
      </div>
      <div className="cosponcers">
        {eventsponsors.map((eventsponsor, index) => (
          <div
            key={index}
            className={` ${eventsponsor.name.toLowerCase()}`}
            data-aos={eventsponsor.aosEffect}
            data-aos-duration="500"
          >
            <img
              src={eventsponsor.imgSrc}
              className="img"
              alt={`${eventsponsor.name} Sponsor Logo`}
            />
            <div className="content">
              <p>{eventsponsor.description}</p>
            {eventsponsor.link && (
              <a href={eventsponsor.link} target="_blank" rel="noreferrer">
              DISCOVER MORE
            </a>
            )}
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="cosponcers malaifi1">
        {sponcers.map((sponcer, index) => (
          <div
            key={index}
            className={` ${sponcer.name.toLowerCase()}`}
            data-aos={sponcer.aosEffect}
            data-aos-duration="500"
          >
            <img
              src={sponcer.imgSrc}
              className="img"
              alt={`${sponcer.name} Sponsor Logo`}
            />
            
            <div className="content">
            <h2>{sponcer.name}</h2>
            {sponcer.description && (
              <p>{sponcer.description}</p>
            )}
            {sponcer.link && (
              <a href={sponcer.link} target="_blank" rel="noreferrer">
              DISCOVER MORE
            </a>
            )}
            </div>
          </div>
        ))}
      </div>

      <div>
      <div className="titleSponcer">
        <h1 >HOSPITALITY SPONSORS</h1>
      </div>
      <div className="cosponcers">
        {hospitality.map((eventsponsor, index) => (
          <div
            key={index}
            className={` ${eventsponsor.name.toLowerCase()}`}
            data-aos={eventsponsor.aosEffect}
            data-aos-duration="500"
          >
            <img
              src={eventsponsor.imgSrc}
              className="img"
              alt={`${eventsponsor.name} Sponsor Logo`}
            />
            <div className="content">
              <p>{eventsponsor.description}</p>
            {eventsponsor.link && (
              <a href={eventsponsor.link} target="_blank" rel="noreferrer">
              DISCOVER MORE
            </a>
            )}
            </div>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
}
