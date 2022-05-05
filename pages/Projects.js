import Image from "next/image";
import styled from "styled-components";
import bigweirdo from "../public/images/bigweirdos.png";
import cryptoweb from "../public/images/crypto.png";
import workoutapp from "../public/images/workoutapp.png";
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
  margin-top: 2rem;
  border: 1px solid rgba(24, 138, 236, 1);
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
const Background = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  right: 3rem;
  top: 3rem;
  background: #60a5fa;
  filter: blur(70px);
`;
const Background2 = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  left: 2rem;
  bottom: 7rem;
  background: #60a5fa;
  filter: blur(70px);
`;
function Projects() {
  return (
    <Section>
      <Background></Background>
      <Background2></Background2>
      <StyledHeading>Projects</StyledHeading>
      <StyledH2>
        Some of my projects that I have been working on last time
      </StyledH2>
      <Container>
        <ImageBox>
          <Image
            src={cryptoweb}
            // width="200px"
            // height="100px"
            alt="Picture of the website"
            layout="responsive"
          />
        </ImageBox>
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
          View more
        </StyledLink>
        <ImageBox>
          <Image
            src={workoutapp}
            // width="200px"
            // height="100px"
            alt="Picture of the website"
            layout="responsive"
          />
        </ImageBox>
        <Text>
          App created to track workout data. You can add, edit and delete sets,
          reps and weight. Data of all workout, for example how many kilograms u
          lifted, is calculated.
        </Text>
        <StyledLink
          target="_blank"
          href="https://github.com/ankerx/workout-app"
        >
          View more
        </StyledLink>
        <ImageBox>
          <Image
            src={bigweirdo}
            // width="200px"
            // height="100px"
            alt="Picture of the website"
            layout="responsive"
          />
        </ImageBox>
        <Text>Website presenting NFT collection.</Text>

        <StyledLink
          target="_blank"
          href="https://github.com/ankerx/big-weirdos"
        >
          View more
        </StyledLink>
      </Container>
    </Section>
  );
}

export default Projects;
