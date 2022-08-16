import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  margin: 0 1.5rem;
  text-align: center;
  @media (min-width: 768px) {
    margin: 0 5rem;
  }
`;
export const StyledHeading = styled.h1`
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;
export const StyledH2 = styled.h2`
  font-size: 1rem;
  margin: 1rem;
  margin-bottom: 3rem;
  font-weight: 400;
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ImageBox = styled.div`
  border: 1px solid rgba(24, 138, 236, 1);
  /* position: relative; */
  box-shadow: 0.5rem 0.5rem 0.4rem 0.4rem rgba(24, 138, 236, 0.1);
`;
export const Text = styled.p`
  font-size: 0.8rem;
  margin: 1.5rem;
  margin-bottom: 3rem;
  line-height: 1.4rem;
  font-weight: 200;

  @media (min-width: 1024px) {
    font-size: 1rem;
    width: 40vw;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 1rem;
  padding-bottom: 8rem;

  @media (min-width: 768px) {
  }
`;
export const StyledLink = styled.a`
  position: relative;
  background: rgba(24, 138, 236, 1);
  padding: 0.8rem 1.6rem;
  margin: 0.5rem 0;
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
`;

export const Div = styled.div`
  @media (min-width: 1024px) {
    order: -1;
  }
`;
