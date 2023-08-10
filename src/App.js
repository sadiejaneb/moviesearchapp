import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutView from "./components/About";
import SearchView from "./components/Search";
import MovieView from "./components/Movie";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch movie search results when searchText changes
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer YOUR_API_KEY", // Replace with your actual API key
      },
    };

    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        })
        .catch((err) => console.error(err));
    }
  }, [searchText]);

  const navigate = useNavigate();

  const handleSearchEnter = (event) => {
    if (event.key === "Enter") {
      navigate("/search"); // Navigate to /search route when Enter key is pressed
    }
  };

  return (
    <div className="App">
      <NavBar
        setSearchText={setSearchText}
        setSearchResults={setSearchResults}
        onSearchEnter={handleSearchEnter}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
