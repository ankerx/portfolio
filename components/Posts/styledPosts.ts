import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  border: 1px solid rgba(24, 138, 236, 1);
  box-shadow: 0.5rem 0.5rem 0.4rem 0.4rem rgba(24, 138, 236, 0.1);
  transition: all 0.3s;
  @media (min-width: 1024px) {
    width: 70vw;
    flex-direction: row;
    margin: 2.5rem 6rem;
  }
  &:hover {
    transform: scale(0.98);
  }
`;
export const Paragraph = styled.div`
  transition: all 0.3s;
  &:hover {
    color: rgba(24, 138, 236, 1);
  }
`;
export const TextContainer = styled.div`
  margin: 0 1rem 1rem;
  @media (min-width: 1024px) {
    padding-bottom: 1.2rem;
    width: 100%;
  }
`;
export const H2 = styled.h2`
  margin-top: 1.2rem;
  margin-bottom: 0;
  cursor: pointer;
  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 1.8rem;
  }
`;

export const StyledText = styled.p`
  margin: 0.6rem;
  line-height: 1.5rem;
  @media (min-width: 1024px) {
    margin: 1.3rem 2rem;
  }
`;
