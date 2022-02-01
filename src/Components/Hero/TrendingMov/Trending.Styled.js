import styled from "styled-components";

export const StyledTrendingContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 800;
`;

export const StyledPosterContainer = styled.div`
  height: 100%;
  width: 40%;

  img {
    height: 99%;
    width: 100%;
    max-width: 90%;
    padding: 1.4rem;
    filter: drop-shadow(5px 5px 10px black);
  }
`;

export const StyledMovieDescription = styled.div`
  height: 100%;
  width: 60%;

  h3 {
    padding: 0 0.8rem;
  }
`;
export const StyledTrendingTitle = styled.h1`
  font-family: Poppins;
  font-weight: 900;
  font-size: 4rem;
  padding: 0.8rem;
`;

export const StyledTrendingDescription = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 1rem;
  width: 85%;
  max-height: 80%;
`;

export const StyledTrendingRating = styled.h2`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 1.6rem;
  padding: 1rem;
`;
