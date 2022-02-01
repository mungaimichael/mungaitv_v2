import React from "react";
import close from "../Header/close.png";
import {
  StyledAsideContainer,
  StyledAsideIcon,
  StyledAsideList,
  StyledAsideLink,
} from "./Aside.Styled";

const Aside = ({ burgerStatus, handleBurgerClick }) => {
  return (
    <>
      <StyledAsideContainer id={burgerStatus ? "show" : "hide"}>
        <StyledAsideIcon onClick={handleBurgerClick}>
          <img src={close} alt="" />
        </StyledAsideIcon>
        <StyledAsideList>
          <li>
            <StyledAsideLink
              to={{ pathname: "https://www.themoviedb.org/movie" }}
              target="_blank"
            >
              movies
            </StyledAsideLink>
          </li>
          <li>
            <StyledAsideLink
              to={{ pathname: "https://www.themoviedb.org/tv" }}
              target="_blank"
            >
              tv shows
            </StyledAsideLink>
          </li>
          <li>
            <StyledAsideLink
              to={{ pathname: "https://www.themoviedb.org/list/24142" }}
              target="_blank"
            >
              documentaries
            </StyledAsideLink>
          </li>
        </StyledAsideList>
      </StyledAsideContainer>
    </>
  );
};

export default Aside;
