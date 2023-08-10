import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import imageNotFound from "../images/image_not_found.jpg";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define options for the API request
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer YOUR_API_KEY", // Replace with your actual API key
      },
    };

    // Fetch movie details from the API based on the provided ID
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  // Render movie details or loading message based on state
  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Gathering your movie details" />;
    }

    if (movieDetails) {
      // Define URLs for poster and backdrop images
      const posterPath = movieDetails.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        : imageNotFound;
      const backdropUrl = movieDetails.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        : null;

      return (
        <>
          {/* Display the Hero component with movie title and backdrop */}
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />

          {/* Display movie details in a Container */}
          <Container>
            <Box mt={5} mb={5}>
              {/* Use Grid layout for responsive design */}
              <Grid container spacing={3}>
                {/* Left column for movie poster */}
                <Grid item xs={12} md={3}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={movieDetails.original_title}
                      height="auto"
                      image={posterPath}
                    />
                  </Card>
                </Grid>

                {/* Right column for movie details */}
                <Grid item xs={12} md={9}>
                  {/* Display movie title */}
                  <Typography
                    variant="h4"
                    gutterBottom
                    style={{ color: "#FFFFFF" }}
                  >
                    {movieDetails.original_title}
                  </Typography>

                  {/* Display movie overview */}
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ color: "#FFFFFF" }}
                  >
                    {movieDetails.overview}
                  </Typography>

                  {/* Display movie release date */}
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ color: "#FFFFFF" }}
                  >
                    Release: {movieDetails.release_date}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </>
      );
    }
  }

  // Call the renderMovieDetails function to display the content
  return renderMovieDetails();
};

export default MovieView;
