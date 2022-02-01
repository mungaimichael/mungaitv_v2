import styled from "styled-components";

const primFont = "Montserrat";
const secFont = "Ubuntu";

export const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-family: ${primFont};
    font-size: 40px;
    color: white;
    font-weight: 900;

    span {
      color: #838181;
    }
  }
`;
export const StyledSearchContainer = styled.div`
  height: 70%;
  width: 40%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledSearchInput = styled.input`
  width: 90%;
  height: 100%;
  flex: 1;
  font-family: ${secFont};
  font-size: 1.5rem;
  font-weight: 700;
  border: 0;
`;

export const StyledIconContainer = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;

  img {
    width: 32px;
    height: 32px;
    padding: 0.1rem;
  }
  :hover {
    cursor: pointer;
  }
`;

export const StyledBurgerContainer = styled.div`
  height: 100%;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  img {
    height: 40px;
    width: 50px;
  }
`;
