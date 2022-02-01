import styled from "styled-components";

export const StyledHeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  transition: all 0.2s 0.2s ease-in-out;
  div#show {
    transform: translateX(0);
  }

  #show {
    display: block;
  }
`;

export const StyledHeroOverlay = styled.div`
  background: black;
  filter: opacity(0.8);
  height: calc(100vh - 80px);
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  display: none;
  transition: all 0.3s ease-in-out;
  z-index: 998;
`;
