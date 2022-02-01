import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledSearchedContainer = styled.div`
  position: absolute;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  background: black;
  z-index: 900;
  color: white;
`;
export const StyledMovieContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-betwaeen;
  border-bottom: 1px solid white;

  h4,
  p {
    align-self: center;
  }
  h6 {
    font-family: Ubuntu;
    width: 40%;
    height: 100%;
    line-height: 1.2rem;
    max-width: auto;
    text-align: start;
    padding: 0.4rem;
    font-size: 0.8rem;
    flex: 1;
  }
  p {
    font-family: Poppins;
    font-size: 1.5rem;
    padding: 0 1rem;
    font-weight: 800;
  }
  img {
    padding: 0.5rem;
  }
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-family: Montserrat;
    font-size: 1.1rem;
    font-weight: 900;
    align-self: center;
    color: white;
    padding: 0.5rem;
  }
`;
