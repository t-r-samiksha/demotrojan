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
    imgSrc: "https://media-hosting.imagekit.io//24a69208feef4367/title.8426dceb87d965548435.png?Expires=1831531422&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iuf0klmt5uPtjR4CVbqlZPTWbqBIGYp2~TC5Nb7c5ghMMAb3F-mLZr0R-DF~~ZRo-F5wixKEvINY3drdUxCRJuQWSgG6zKG4iOfVCvCD1afjNlKrOCJJeHlRKU0ETByTjvSBvEIV~vTcF580lo0rgvqjrHPP8AU2Vis3L4SQrnxfLPYHd~OaKnGU6s9HbrB~vb6IK6K~7pOAjazYkGc17FqzJeO2Wpf9kF2ZgPehJSq0qx7dV2X89nDYo09wY8T0mnVQmIf7zkbbZt2jdxOLfIeaXhpr1PjXnf7JerRFModHUyiFp44rHNuZ6kX4sajgQWiBu2JL5TIMNmmY2WA9wg__",
    // imgSrc:"https://via.placeholder.com/150/0000FF/808080 ?Text=PAKAINFO.com",
    link: "https://ittrident.com/",
  };

  const cosponsors = [
    {
      name: "Maha",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cum, tempora qui laboriosam, inventore eligendi.",
      imgSrc: "https://media-hosting.imagekit.io//c28872a304734558/co2.4923a942274860eda8a3.png?Expires=1831531422&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aG7nmR~NCYNKO5oqSnv8zNoaqWFuDHYf1SE0OgAa56Jh0AWSxgqQ7sgVc8ockn-~EW34v~2Irev2IoBjXXLfQ~Qza2IqYpkw1j6swmXTcwweDndwj3R3plsG6XNuSWkcUsprXGAbrAibDsKBeSgGeQkgx6yVoUggz25nyyh6I~W1GDVilzZW-R69ypTdvXmCqxk9KaRv0sATq6TTzz-aZJBhozDhM0cb9j~jgv1LlgMOETJ4MMYVhVmxvx8QB6So7G9JaOXQjWQ6CoYOv3hfD4BT7CrhZadhEOoiJGSZMLcVWNAGXSvp-7buCmG3aShhapsdpcoWHuCFWd35GL6pww__",
      link: "https://ittrident.com/",
      aosEffect: "fade-right",
    },
    {
      name: "Antway",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia deleniti at asperiores nihil odit laboriosam quos.",
      imgSrc: "https://media-hosting.imagekit.io//ac20a9b740b64c84/co1.6570a4f9eef3963ebc51.png?Expires=1831531422&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=myvAuB3uyR9wdGxEkV3TCfHiO7oaCk9C7E4qikPjx7gkm5~EFf0s-OBOxPhsCRcO8wNzTbqjNsvxfBIrl50Lsu1jYKrRXl11aKGSfD32jqXxUQV5moGDZPmBtOv8uMdURCnMMYYqFrlNWyc460Kaxnu1NnQNxyjBOFGiGcIU6PCq0Atxc1lpRjRW1dtfyNDbsrACRNf60PhfLWnm0z2pzZqY6oRVafrGmCEZ6FJvCNFbEOg-fMWeXmQSZ1Bc3R6FLnryhvIngTy~3l-7EyurEPNckTKgcpkUb5wgT4So9IwDxk6GCLe5QaNGGCIUh1WciKTd~fba61iupu~zp2rGVA__",
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
        <h1 data-text="COSPONSORS">COSPONSORS</h1>
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
    </div>
  );
}
