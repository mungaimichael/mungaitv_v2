import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [search, setsearch] = useState("");
  let BASE_URL = `https://api.themoviedb.org/3/`;
  // API variables
  let API_KEY = "5cc4e35007253470f56f68d826ae8f8d";
  // state to handle movie response
  const [movies, setmovies] = useState([]);
  return (
    <MovieContext.Provider
      value={[search, setsearch, movies, setmovies, BASE_URL, API_KEY]}
    >
      {children}
    </MovieContext.Provider>
  );
};
