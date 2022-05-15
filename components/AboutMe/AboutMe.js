import Image from "next/image";
import html from "./images/html.png";
import css from "./images/css.png";
import sass from "./images/sass.png";
import git from "./images/git.png";
import react from "./images/react.png";
import javascript from "./images/javascript.png";
import {
  StyledHeading,
  H3,
  SkillBox,
  SkillText,
  SkillsBox,
  Container,
  Text,
  Box,
  TextBox,
} from "./styledAbout";
import {
  BackgroundGradientBottom,
  BackgroundGradientTop,
  Section,
} from "../../styles/globalStyles";

function AboutMe() {
  return (
    <Section>
      <BackgroundGradientTop></BackgroundGradientTop>
      <BackgroundGradientBottom></BackgroundGradientBottom>
      <StyledHeading>About me</StyledHeading>
      <Container>
        <TextBox>
          <Text>
            I am a Frontend Developer from Poland. I have a serious passion for
            making websites. I am learning new things every day and this is what
            I like the most in the programming world - you never stop learning.
          </Text>
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
          <SkillsBox>
            <SkillBox>
              <Image src={html} alt="html" width={45} height={45} />
              <SkillText>HTML</SkillText>
            </SkillBox>
            <SkillBox>
              <Image src={css} alt="css" width={45} height={45} />
              <SkillText>CSS</SkillText>
            </SkillBox>
            <SkillBox>
              <Image src={sass} alt="sass" width={45} height={45} />
              <SkillText>SCSS</SkillText>
            </SkillBox>
            <SkillBox>
              <Image src={javascript} alt="javascript" width={45} height={45} />
              <SkillText>Javascript</SkillText>
            </SkillBox>
            <SkillBox>
              <Image src={react} alt="react" width={45} height={45} />
              <SkillText>React</SkillText>
            </SkillBox>
            <SkillBox>
              <Image src={git} alt="git" width={45} height={45} />
              <SkillText>GIT</SkillText>
            </SkillBox>
          </SkillsBox>
        </Box>
      </Container>
    </Section>
  );
}

export default AboutMe;
