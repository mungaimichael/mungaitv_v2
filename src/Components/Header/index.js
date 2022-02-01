import React, { useContext } from "react";
import { MovieContext } from "../../Contexts/MovieContext";

import {
  StyledHeader,
  StyledSearchContainer,
  StyledIconContainer,
  StyledSearchInput,
  StyledBurgerContainer,
} from "./Header.Elements";
import Axios from "axios";

import searchIcon from "./searchIcon.png";
import bars from "./bars.png";
import close from "./close.png";

const Header = ({ handleBurgerClick, burgerStatus, setmoviestatus }) => {
  // pull search and set search from global movie context
  const [search, setsearch, , setmovies, BASE_URL, API_KEY] =
    useContext(MovieContext);

  // function to handle input change
  const handleInputChange = (event) => {
    setsearch(event.target.value);
  };
  const handleSearch = () => {
    getData(search);
    setsearch("");
    setmoviestatus(true);
  };

  // FETCH MOVIES ARRAY AND UPDATE MOVEIS STATE ARRAY

  let getData = async (text) => {
    let response = await Axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${search}&page=1`
    );
    let movieResponse = await response.data.results;
    await handleMovies(movieResponse);
  };

  let handleMovies = async (arr) => {
    let films = await arr;
    movieDisplay(films);
  };
  let movieDisplay = (films) => {
    let moviesArray = films;
    setmovies(moviesArray);
  };
  return (
    <>
      <StyledHeader>
        <h1>
          mungai<span>tv</span>
        </h1>
        <StyledSearchContainer>
          <StyledSearchInput onChange={handleInputChange} value={search} />
          <StyledIconContainer onClick={handleSearch}>
            <img src={searchIcon} alt="" />
          </StyledIconContainer>
        </StyledSearchContainer>
        <StyledBurgerContainer onClick={handleBurgerClick}>
          {burgerStatus ? (
            <img src={close} alt="" />
          ) : (
            <img src={bars} alt="" />
          )}
        </StyledBurgerContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
