import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MovieContextProvider } from "./Contexts/MovieContext";
import { GlobalStyle } from "./GlobalStyle";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <MovieContextProvider>
        <Hero />
        <Route path="https://www.themoviedb.org/list/24142" />
      </MovieContextProvider>
      <Route to="" />
    </Router>
  );
};

export default App;
