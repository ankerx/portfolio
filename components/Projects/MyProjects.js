import {
  BackgroundGradientBottom,
  BackgroundGradientTop,
} from "../../styles/globalStyles";
import { Container, Section, StyledH2, StyledHeading } from "./styledProjects";
import Project from "./Project";

function MyProjects({ posts }) {
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
