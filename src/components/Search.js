import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import imageNotFound from "../images/image_not_found.jpg";

// Component to render each individual movie card
const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : imageNotFound;

  const detailUrl = `/movies/${movie.id}`;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          component="img"
          alt={movie.original_title}
          height="400"
          image={posterUrl}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {movie.original_title}
          </Typography>
          <Button
            component={Link} // Use Link component for navigation
            to={detailUrl}
            variant="contained"
            color="primary"
          >
            Show details
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

// Component to render the search results page
const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for: ${keyword}`;

  // Generate HTML for each movie card using the MovieCard component
  const resultsHtml = searchResults.map((obj, i) => (
    <MovieCard movie={obj} key={i} />
  ));

  return (
    <div>
      <Hero
        text={title}
        backdrop="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <Container>
        <Grid container spacing={3}>
          {/* Render movie cards only if there are search results */}
          {resultsHtml.length > 0 && resultsHtml}
        </Grid>
      </Container>
    </div>
  );
};

export default SearchView;
