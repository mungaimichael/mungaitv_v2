import React, { useState } from "react";

import Aside from "../Aside";
import Header from "../Header";
import SearchedMovie from "../SearchedMovie";
import { StyledHeroContainer, StyledHeroOverlay } from "./Hero.Elements";
import TrendingMovie from "./TrendingMov";

const Hero = () => {
  // state to handle burger icon toggle
  const [burgerStatus, setburgerStatus] = useState(false);
  const [moviestatus, setmoviestatus] = useState(false);

  // handle burger status toggle function
  const handleBurgerClick = () => {
    setburgerStatus(!burgerStatus);
    console.log(burgerStatus);
  };

  return (
    <>
      <StyledHeroContainer>
        <Header
          handleBurgerClick={handleBurgerClick}
          burgerStatus={burgerStatus}
          setburgerStatus={setburgerStatus}
          setmoviestatus={setmoviestatus}
        />
        <Aside
          burgerStatus={burgerStatus}
          handleBurgerClick={handleBurgerClick}
        />
        {/* <>{checkmovie()}</> */}
        {moviestatus ? <SearchedMovie /> : <></>}
        <TrendingMovie />
        <StyledHeroOverlay id={burgerStatus ? "show" : ""} />
      </StyledHeroContainer>
    </>
  );
};

export default Hero;
