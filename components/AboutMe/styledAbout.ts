import styled from "styled-components";

export const StyledHeading = styled.h1`
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;
export const H3 = styled.h3`
  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  /* padding: 2rem; */
  @media (min-width: 600px) {
    width: 60%;
    margin-bottom: 2rem;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    margin-top: 3rem;
  }
`;
export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
  font-weight: 200;
`;
export const H2 = styled.h2`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 200;
`;
export const SkillsBox = styled.div`
  display: flex;
  margin-top: 1rem;
  max-width: 600px;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    gap: 30px;
  }
`;
export const SkillBox = styled.div`
  min-width: 3.2rem;
  /* margin: 0.2rem; */
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SkillText = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;
