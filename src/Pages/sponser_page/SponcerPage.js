import React, { useEffect } from "react";
import './SponcerPage.css';
import Aos from "aos";
import "aos/dist/aos.css";

export default function SponcerPage() {
  useEffect(() => {
    Aos.init();
  });

  const titleSponsor = {
    name: "IT Trident",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ut nulla nemo vel reiciendis soluta, quidem quae repudiandae ipsa! Omnis expedita illo et doloribus quibusdam voluptatibus quia earum esse.",
    imgSrc: "./SponcerImages/title.8426dceb87d965548435.png",
    link: "https://ittrident.com/",
  };

  const cosponsors = [
    {
      name: "Maha",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cum, tempora qui laboriosam, inventore eligendi.",
      imgSrc: "./SponcerImages/co2.4923a942274860eda8a3.png",
      link: "https://ittrident.com/",
      aosEffect: "fade-right",
    },
    {
      name: "Antway",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia deleniti at asperiores nihil odit laboriosam quos.",
      imgSrc: "./SponcerImages/co1.6570a4f9eef3963ebc51.png",
      link: "https://ittrident.com/",
      aosEffect: "fade-left",
    },
  ];

  return (
    <div className="sponcers">
        <div className="titleMain">
        <div className="titleSponcer">
        <h1 data-text="TITLESPONSOR">TITLESPONSOR</h1>
      </div>
      <div className=" title ">
        <div className="image">
          <img
            src={titleSponsor.imgSrc}
            className="img-fluid"
            alt={`${titleSponsor.name} Sponsor Logo`}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
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
        <h1 data-text="COSPONSORS">COSPONSORS</h1>
      </div>
      <div className="cosponcers">
        {cosponsors.map((cosponsor, index) => (
          <div
            key={index}
            className={` ${cosponsor.name.toLowerCase()}`}
            data-aos={cosponsor.aosEffect}
            data-aos-duration='500'
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
    </div>
  );
}
