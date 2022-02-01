import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledAsideContainer = styled.div`
  position: absolute;
  width: 35%;
  height: 100%;
  background: white;
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition: transform 0.2s 0.2s ease-in-out;
  z-index: 999;
  // display: none;
`;

export const StyledAsideIcon = styled.div`
  width: 60px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
  right: 6.5rem;
  top: 0;

  img {
    width: 40px;
    height: 40px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const StyledAsideList = styled.ul`
  height: calc(100% - 80px);
  width: 100%;
  top: 200px;
  margin-top: 80px;
  padding: 4rem 5rem;
  list-style: none;

  li {
    margin: 2rem;
  }
`;
export const StyledAsideLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: Montserrat;
  font-weight: 900;
  font-size: 2.5rem;

  :hover {
    text-decoration: 7px underline black;
  }
`;
