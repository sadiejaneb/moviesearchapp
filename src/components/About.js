import React from "react";
import Hero from "./Hero";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AboutView = () => {
  return (
    <>
      <Hero text="About Us" />
      <Container>
        <Box mt={5} mb={5}>
          <Typography variant="body1" component="p" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            officia omnis nulla recusandae eos! Maiores, molestiae, porro atque
            ex fugiat, aspernatur mollitia maxime deleniti officiis voluptate
            esse laudantium debitis veniam!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default AboutView;
