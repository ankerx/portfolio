import Image from "next/image";
import styled from "styled-components";
import bigweirdo from "../public/images/bigweirdos.png";
import cryptoweb from "../public/images/crypto.png";
import workoutapp from "../public/images/workoutapp.png";
import { useState, useEffect } from "react";

const Section = styled.section`
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
const StyledHeading = styled.h1`
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;
const StyledH2 = styled.h2`
  font-size: 1rem;
  margin: 1rem;
  margin-bottom: 3rem;
  font-weight: 400;
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ImageBox = styled.div`
  border: 1px solid rgba(24, 138, 236, 1);
  /* position: relative; */
  box-shadow: 0.5rem 0.5rem 0.4rem 0.4rem rgba(24, 138, 236, 0.1);
`;
const Text = styled.p`
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 1rem;
  padding-bottom: 8rem;

  @media (min-width: 768px) {
  }
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
  @media (min-width: 1024px) {
    right: 8rem;
    width: 6rem;
    height: 6rem;
    filter: blur(100px);
  }
`;
const Background2 = styled.div`
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
const Div = styled.div`
  @media (min-width: 1024px) {
    order: -1;
  }
`;
function Projects() {
  return (
    <Section>
      <Background></Background>
      <Background2></Background2>
      <StyledHeading>Projects</StyledHeading>
      <StyledH2>
        Some of the projects that I have been working on last time
      </StyledH2>
      <Container>
        <Box>
          <ImageBox>
            <Image
              src={workoutapp}
              alt="Picture of the website"
              width={520}
              height={270}
            />
          </ImageBox>
          <div>
            <Text>
              App created to track workout data. You can add, edit and delete
              sets, reps, and weight. Data of all workouts, for example, how
              many kilograms u lifted, is calculated.
            </Text>
            <StyledLink
              target="_blank"
              href="https://github.com/ankerx/workout-app"
            >
              View more
            </StyledLink>
          </div>
        </Box>
        <Box>
          <ImageBox>
            <Image
              src={cryptoweb}
              alt="Picture of the website"
              width={520}
              height={270}
            />
          </ImageBox>
          <Div>
            <Text>
              Cryptocurrency dashboard. This react app is created to see current
              crypto prices by fetching data from coingecko API. You can check
              the prices of the top 10 cryptocurrencies. By clicking on a
              particular coin you can see some information about it and also a
              chart displaying price data.
            </Text>
            <StyledLink
              target="_blank"
              href="https://github.com/ankerx/crypto-chart"
            >
              View more
            </StyledLink>
          </Div>
        </Box>
        <Box>
          <ImageBox>
            <Image
              src={bigweirdo}
              alt="Picture of the website"
              width={520}
              height={270}
            />
          </ImageBox>
          <div>
            <Text>Website presenting NFT collection.</Text>
            <StyledLink
              target="_blank"
              href="https://github.com/ankerx/big-weirdos"
            >
              View more
            </StyledLink>
          </div>
        </Box>
      </Container>
    </Section>
  );
}

export default Projects;
