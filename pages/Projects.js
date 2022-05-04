import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  margin: 0 1.5rem;
  text-align: center;
`;
const StyledHeading = styled.h1`
  // font-size: 1.8rem;
`;
const StyledH2 = styled.h2`
  font-size: 1rem;
  margin: 1rem;
  font-weight: 400;
`;
const ImageBox = styled.div`
  width: 80%;
  height: 10rem;
  margin-top: 1.5rem;
  border: 1px solid rgba(24, 138, 236, 1);
  background: gray;
`;
const Text = styled.p`
  font-size: 0.8rem;
  margin: 1.5rem;
  line-height: 1.4rem;
  font-weight: 200;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 1rem;
  padding-bottom: 8rem;
`;
const StyledLink = styled.a`
  position: relative;
  background: rgba(24, 138, 236, 1);
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 8px;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;

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
function Projects() {
  return (
    <Section>
      <StyledHeading>Projects</StyledHeading>
      <StyledH2>
        Some of my projects that I have been working on last time
      </StyledH2>
      <Container>
        <ImageBox></ImageBox>
        <Text>
          Cryptocurrency dashboard. This react app is created to see currently
          crypto prices by fetching data from coingecko API. You can check
          prices of top 10 cryptocurrencies When you click on particular coin
          you will be able to see some infromation about it and also chart
          displaying price data.
        </Text>
        <StyledLink
          target="_blank"
          href="https://github.com/ankerx/crypto-chart"
        >
          See more
        </StyledLink>
        <ImageBox></ImageBox>
        <Text>
          App created to track workout data. You can add, edit and delete sets,
          reps and weight. Data of all workout, for example how many kilograms u
          lifted, is calculated.
        </Text>
        <StyledLink
          target="_blank"
          href="https://github.com/ankerx/workout-app"
        >
          See more
        </StyledLink>
        <ImageBox></ImageBox>
        <Text>Website presenting NFT collection.</Text>

        <StyledLink
          target="_blank"
          href="https://github.com/ankerx/big-weirdos"
        >
          See more
        </StyledLink>
      </Container>
    </Section>
  );
}

export default Projects;
