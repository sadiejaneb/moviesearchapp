import React from "react";
import Hero from "./Hero";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const imageURL =
    "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

  const theme = useTheme();

  return (
    <div>
      <Hero
        text="Welcome to the Movie Search Tool!"
        backdrop="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <Container>
        <Box mt={5} mb={5}>
          <Card
            elevation={3}
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <CardMedia
              component="img"
              alt="Movie Search"
              height="300"
              image={imageURL}
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                style={{ color: "#FFFFFF" }}
              >
                Explore Movies
              </Typography>
              <Typography
                variant="body1"
                component="p"
                gutterBottom
                style={{ color: "#FFFFFF" }}
              >
                Search for any movie to view its details.
              </Typography>
              <Typography
                variant="body2"
                component="p"
                color="textSecondary"
                style={{ color: "#FFFFFF" }}
              >
                Get started by using the search bar above.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
