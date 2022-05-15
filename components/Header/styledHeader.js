import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 90vh;
`;
export const Box = styled.div`
  margin: 0 1.5rem;
  margin-bottom: 10rem;
`;

export const StyledText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0;
  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;
export const StyledHeading = styled.h2`
  font-size: 1.7rem;
  @media (min-width: 1024px) {
    font-size: 2.1rem;
  }
`;

export const StyledDescription = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 3rem;
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 2.5rem;
  @media (min-width: 1024px) {
    font-size: 2.1rem;
    margin-bottom: 3rem;
  }
`;
