import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'; // Importing icons properly
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
export default function Carroussel(props) {
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);

  useEffect(() => {
    setOffsetRadius(props.offset || 4);
    setShowArrows(props.showArrows || false);
  }, [props.offset, props.showArrows]);

  const cards = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const handlePrev = () => {
    setGoToSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setGoToSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      style={{
        width: props.width || "80%",
        height: props.height || "400px",
        margin: props.margin || "20px auto",
        display: "flex",
        flexDirection: "column", // Ensures arrows are below
        alignItems: "center",
        position: "relative",
      }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={false} // Disable default navigation to use custom arrows
        animationConfig={config.gentle}
        
      />
      {showArrows && (
       <div className="arrow" style={{ display: "flex", justifyContent: "space-between", width: "100px" }}>
       <button
         onClick={handlePrev}
         style={{
           width: "40px", // Equal width and height for circular shape
           height: "40px",
           borderRadius: "50%", // Fully rounded shape
           border: "none",
           backgroundColor: "white",
           color: "black",
           
           display: "flex", // Center icon
           justifyContent: "center",
           alignItems: "center",
           cursor: "pointer",
           
         }}
       >
         <ArrowBackIosNewRoundedIcon /> {/* Correct icon usage */}
       </button>
       <button
         onClick={handleNext}
         style={{
           width: "40px", // Equal width and height for circular shape
           height: "40px",
           borderRadius: "50%", // Fully rounded shape
           border: "none",
           backgroundColor: "white",
           color: "black",
           display: "flex", // Center icon
           justifyContent: "center",
           alignItems: "center",
           cursor: "pointer",
         }}
       >
         <ArrowForwardIosRoundedIcon /> {/* Correct icon usage */}
       </button>
     </div>
     
      )}
    </div>
  );
}