# Movie Search Web App

This is a simple web application that allows users to search for movies and view their details. The app uses the TMDB (The Movie Database) API to fetch movie data and display it to the user.
![Home Page](https://github.com/sadiejaneb/moviesearch/blob/master/src/screenshots/home_screenshot.png)
![Search Results](https://github.com/sadiejaneb/moviesearch/blob/master/src/screenshots/search_screenshot.png)
![Movie Details](https://github.com/sadiejaneb/moviesearch/blob/master/src/screenshots/results_screenshot.png)

## Features

- Search for movies using keywords.
- View detailed information about a selected movie.
- Responsive design for various screen sizes.
- Stylish UI with a navigation bar and hero section.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Material-UI: A popular UI framework for React applications.
- TMDB API: Provides movie data for searching and displaying details.
- React Router: Handles navigation and routing within the app.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your system.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Create project: `npx create-react-project moviesearchapp`
3. Navigate to the project directory: `cd moviesearchapp`
4. Install dependencies: `npm install react-router-dom`
5. Start development: `npm start`

### Get a TMDB API Token

1. Go to [The Movie Database (TMDB)](https://www.themoviedb.org/) and sign up for an account.
2. Once logged in, go to your account settings and navigate to the "API" section.
3. Create a new API Key and make note of it.

## Replace API Token

1. Open the `src/components/NavBar.js` file.
2. Find the `Authorization` header in the `eseEffect` functions in App.js and Movie.js, and `handleSearch` in NavBar.js.
3. Replace the existing token with your TMDB API token.

## Install Material-UI

To install Material-UI in your project, run the following command:

```bash
npm install @mui/material @emotion/styled @emotion/react
npm install @mui/icons-material
```
