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

export const BTN = styled.button`
  position: relative;
  background: rgba(24, 138, 236, 1);
  margin-right: 2rem;
  margin-bottom: 1.5rem;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 8px;

  &:after {
    position: absolute;
    z-index: 22;
    content: "";
    border: 1px solid rgba(24, 138, 236, 1);
    border-radius: 8px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    left: 0;
    bottom: 0;
    transform: translate(12px, -12px);
    transition: all 0.3s;
  }
  &:hover:after {
    transform: translate(0);
  }
  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;
