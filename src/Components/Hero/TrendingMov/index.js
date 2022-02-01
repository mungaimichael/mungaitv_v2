import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../../Contexts/MovieContext";
import Axios from "axios";
import {
  StyledPosterContainer,
  StyledTrendingContainer,
  StyledMovieDescription,
  StyledTrendingTitle,
  StyledTrendingDescription,
  StyledTrendingRating,
} from "./Trending.Styled";

const TrendingMovie = () => {
  // MOVIE IMAGE URL
  let POSTER_URL = "https://image.tmdb.org/t/p/w500/";

  const [trendingMovie, settrendingMovie] = useState({});

  const [, , , , BASE_URL, API_KEY] = useContext(MovieContext);

  // fetch call to get trending movie
  let getTrendingMovie = async () => {
    let response = await Axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}`
    );

    let responseArr = await response.data.results;
    handleMovie(responseArr);
    console.log(responseArr[0]);
  };

  let handleMovie = (arr) => {
    let randomInd = [0, 1, 2, 3, 4, 5, 10, 6, 7, 8, 13];

    let randomNumber = Math.floor(Math.random() * randomInd.length);
    let trendingMovie = arr[randomNumber];
    movieHandler(trendingMovie);
  };

  // function to set the trending movie to component state

  let movieHandler = (trending) => {
    // let movie = trending;
    settrendingMovie(trending);
  };
  useEffect(() => {
    getTrendingMovie();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <StyledTrendingContainer>
        <StyledPosterContainer>
          <img src={`${POSTER_URL}${trendingMovie.poster_path}`} alt="" />
        </StyledPosterContainer>
        <StyledMovieDescription>
          <StyledTrendingTitle>{trendingMovie.title}</StyledTrendingTitle>
          <StyledTrendingDescription>
            {trendingMovie.overview}
          </StyledTrendingDescription>
          <h3>Rating</h3>

          <StyledTrendingRating>
            {trendingMovie.vote_average}
          </StyledTrendingRating>
        </StyledMovieDescription>
      </StyledTrendingContainer>
    </>
  );
};

export default TrendingMovie;
