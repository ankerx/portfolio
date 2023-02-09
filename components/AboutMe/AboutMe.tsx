import {
  StyledHeading,
  H3,
  Container,
  Text,
  Box,
  TextBox,
  H2,
} from "./styledAbout";
import { Section } from "../../styles/globalStyles";
import Skills from "./Skills";

function AboutMe() {
  return (
    <Section>
      <StyledHeading>About me</StyledHeading>
      <Container>
        <TextBox>
          <H2>
            I am a Fullstack Developer from Poland. I have a serious passion for
            making websites and applications. I am learning new things every day
            and this is what I like the most in the programming world - you
            never stop learning.
          </H2>
        </TextBox>
        <TextBox>
          <Text>
            When I am not coding I spend most of the time in the gym. For over 7
            years I was in the national team, sport gave me a lot of benefits
            and shaped my character. Very ambitious and well-organised person,
            that always keeps forward.
          </Text>
        </TextBox>
        <Box>
          <H3>Technology I use:</H3>
          <Skills />
        </Box>
      </Container>
    </Section>
  );
}

export default AboutMe;
