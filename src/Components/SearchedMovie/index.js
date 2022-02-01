import React, { useContext, useEffect, useState } from "react";
import {
  MovieLink,
  StyledMovieContainer,
  StyledSearchedContainer,
} from "./Searched.Elements";
import { MovieContext } from "../../Contexts/MovieContext";
const SearchedMovie = () => {
  //movie poster url
  // let posterUrl = "https://image.tmdb.org/t/p/w45/";
  const posterUrl = "https://image.tmdb.org/t/p/original/";

  const [moviesShowStatus, setmoviesShowStatus] = useState(false);
  // pull movies array from context
  const [, , movies] = useContext(MovieContext);

  const checkMoviesArray = () => {
    if (movies === []) {
      return moviesShowStatus;
    } else {
      setmoviesShowStatus(true);
    }
  };
  let fiveMovies = movies.slice(0, 5);

  useEffect(() => {
    checkMoviesArray();
    //eslint-disable-next-line
  }, [movies]);
  return (
    <>
      <StyledSearchedContainer>
        {fiveMovies.map((movie) => (
          <StyledMovieContainer>
            <img
              src={`${posterUrl}${movie.backdrop_path}`}
              alt="movie poster"
            />
            <MovieLink>
              <h1>{movie.original_title}</h1>
            </MovieLink>
            <h6>{movie.overview}</h6>
            <p>{movie.release_date}</p>
          </StyledMovieContainer>
        ))}
      </StyledSearchedContainer>
    </>
  );
};

export default SearchedMovie;
