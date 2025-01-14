// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for components
// import "./SponcerPage.css"; // Import your custom styles
// import Aos from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// export default function SponcerPage() {
//   useEffect(() => {
//     Aos.init();
//   }, []);

//   const titleSponsor = {
//     name: "IT Trident",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ut nulla nemo vel reiciendis soluta, quidem quae repudiandae ipsa! Omnis expedita illo et doloribus quibusdam voluptatibus quia earum esse.",
//     imgSrc:"",
//     link: "https://ittrident.com/",
//   };

//   const cosponsors = [
//     {
//       name: "Maha",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cum, tempora qui laboriosam, inventore eligendi.",
//       imgSrc: "https://images.pexels.com/photos/30110117/pexels-photo-30110117/free-photo-of-solitary-cabin-in-misty-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//       link: "https://ittrident.com/",
//       aosEffect: "fade-right",
//     },
//     {
//       name: "Antway",
//       description:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia deleniti at asperiores nihil odit laboriosam quos.",
//       imgSrc: "https://images.pexels.com/photos/30110117/pexels-photo-30110117/free-photo-of-solitary-cabin-in-misty-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//       link: "https://ittrident.com/",
//       aosEffect: "fade-left",
//     },
//   ];

//   return (
//     <div className="sponcers">
//       {/* Title Sponsor Section */}
//       <div className="titleSponcer">
//         <h1 data-text="TITLESPONSOR">TITLESPONSOR</h1>
//       </div>
//       <div className="container title row mx-auto">
//         <div className="col-lg-6 image p-5">
//           <img
//             src={titleSponsor.imgSrc}
//             className="img-fluid"
//             alt={`${titleSponsor.name} Sponsor Logo`}
//           />
//         </div>
//         <div
//           data-aos="fade-left"
//           data-aos-duration="3000"
//           className="col-lg-6 content p-lg-5"
//         >
//           <h2>{titleSponsor.name}</h2>
//           <p>{titleSponsor.description}</p>
//           <a href={titleSponsor.link} target="_blank" rel="noreferrer">
//             DISCOVER MORE
//           </a>
//         </div>
//       </div>

//       {/* Co-Sponsors Section */}
//       <div className="titleSponcer">
//   <h1 data-text="COSPONSORS">COSPONSORS</h1>
// </div>
// <div className="container">
//   <div className="row cosponcers justify-content-center">
//     {cosponsors.map((cosponsor, index) => (
//       <div
//         key={index}
//         className={`col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center p-4 ${cosponsor.name.toLowerCase()}`}
//         data-aos={cosponsor.aosEffect}
//         data-aos-duration="500"
//       >
//         <img
//           src={cosponsor.imgSrc}
//           className="img-fluid mb-3"
//           alt={`${cosponsor.name} Sponsor Logo`}
//         />
//         <div className="content text-center">
//           <p>{cosponsor.description}</p>
//           <a href={cosponsor.link} target="_blank" rel="noreferrer">
//             DISCOVER MORE
//           </a>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//     </div>
//   );
// }
