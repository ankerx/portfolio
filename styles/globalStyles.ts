import styled from "styled-components";

export const BackgroundGradientTop = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  right: 3rem;
  top: 3rem;
  background: #60a5fa;
  filter: blur(70px);
  @media (min-width: 1024px) {
    right: 8rem;
    width: 6rem;
    height: 6rem;
    filter: blur(100px);
  }
`;
export const BackgroundGradientBottom = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  left: 2rem;
  bottom: 7rem;
  background: #60a5fa;
  filter: blur(70px);
  @media (min-width: 1024px) {
    left: 8rem;
    width: 6rem;
    height: 6rem;
    filter: blur(120px);
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  margin: 0 2rem;
  background: ${(props) => props.theme.body};
  padding-bottom: 8rem;
  text-align: center;
`;

export const SectionBlog = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding: 0 1.5rem;
  line-height: 1.8rem;
  background: ${(props) => props.theme.body};
  padding-bottom: 8rem;
  @media (min-width: 1024px) {
    padding: 0 20rem;
  }
`;
