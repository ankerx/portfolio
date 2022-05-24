import Image from "next/image";
import {
  BackgroundGradientBottom,
  BackgroundGradientTop,
} from "../../styles/globalStyles";
import bigweirdo from "../../public/images/bigweirdos.png";
import cryptoweb from "../../public/images/crypto.png";
import workoutapp from "../../public/images/workoutapp.png";
import {
  Box,
  Container,
  Div,
  ImageBox,
  Section,
  StyledH2,
  StyledHeading,
  StyledLink,
  Text,
} from "./StyledProjects";
import Project from "./Project";

function MyProjects({ posts }) {
  console.log(posts);
  return (
    <Section>
      <BackgroundGradientTop></BackgroundGradientTop>
      <BackgroundGradientBottom></BackgroundGradientBottom>
      <StyledHeading>Projects</StyledHeading>
      <StyledH2>
        Some of the projects that I have been working on last time
      </StyledH2>
      <Container>
        {posts &&
          posts.map((post) => (
            <Project
              key={post.id}
              src={post.image.url}
              desc={post.description}
              link={post.link}
            />
          ))}
        {/* <Box>
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
        </Box> */}
      </Container>
    </Section>
  );
}

export default MyProjects;
