import styled from "styled-components";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledHeading = styled.div`
  
  font-size: 50px;
  position: relative;
  display: inline-block;
  padding: 10px;
  background:transparent; /* Add a background color for better visibility of the effect */
  color: #ffffff;

  /* Add the animated neon effect to the bottom-right corner */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 4px; /* Thickness of the line */
    background: linear-gradient(90deg, #FF073A, #007BFF); /* Neon colors */
    animation: neon 2s infinite alternate; /* Animation for moving colors */
  }

  @keyframes neon {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;
export const Heading=({title})=>{
    return(
        <StyledHeading>{title}</StyledHeading>
    )
}

const StyledHeading1 = styled.div`
  
  font-size: 30px;
  position: relative;
  display: inline-block;
  padding: 10px;
  background:transparent; /* Add a background color for better visibility of the effect */
  color: #ffffff;

  /* Add the animated neon effect to the bottom-right corner */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 4px; /* Thickness of the line */
    background: linear-gradient(90deg, #FF073A, #007BFF); /* Neon colors */
    animation: neon 2s infinite alternate; /* Animation for moving colors */
  }

  @keyframes neon {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;
export const Heading1=({title})=>{
    return(
        <StyledHeading1>{title}</StyledHeading1>
    )
}

const SMButton = styled.div`
  height: 20px;
  padding: 15px 10px;
  font-size: 20px;
  font-weight: 400;
  width: fit-content;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 5px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background: transparent; /* Keeps the background white on hover */
  box-shadow: 0px 4px 20px 0px  #FF073A, 0px -4px 20px 0px #007BFF; /* Gradient neon shadow */
  transform: scale(1.1) translate(-5px, -5px);
    transition: transform 0.3s ease;
  }
  &:hover svg {
    transform: rotate(-45deg) scale(1.1);
    transition: transform 0.3s ease;
  }
`;
export const SeeMoreButton = ({ text,link }) => {
  return (
    <a href={link} target="_blank">
    <SMButton>
      {text}
      <ArrowForwardIcon sx={{fill:"white"}}/>
    </SMButton>
    </a>
  );
};
