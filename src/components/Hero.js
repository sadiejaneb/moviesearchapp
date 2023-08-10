import React from "react";
import { styled } from "@mui/material/styles";

const HeroContainer = styled("header")({
  backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
  color: "#FFFFFF",
  padding: "2rem",
  position: "relative",
  textAlign: "center", // Center align text
});

const HeroBackdrop = styled("div")(({ backdrop }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundPosition: "center ",
  opacity: 0.8,
  zIndex: -1,
}));

const HeroText = styled("h1")({
  fontSize: "3rem",
  marginBottom: "rem",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", // Text shadow for better visibility
});

const Hero = ({ text, backdrop }) => {
  return (
    <HeroContainer>
      <HeroText>{text}</HeroText>
      {backdrop && <HeroBackdrop backdrop={backdrop} />}
    </HeroContainer>
  );
};

export default Hero;
