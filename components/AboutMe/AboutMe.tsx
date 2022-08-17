import Image from "next/image";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import git from "../../assets/images/git.png";
import react from "../../assets/images/react.png";
import javascript from "../../assets/images/javascript.png";
import typescript from "../../assets/images/typescript.png";
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
  H2,
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
          <H2>
            I am a Frontend Developer from Poland. I have a serious passion for
            making websites. I am learning new things every day and this is what
            I like the most in the programming world - you never stop learning.
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
          <SkillsBox>
            <SkillBox>
              <Image src={html} alt="html" width={45} height={45} />
              <SkillText>HTML</SkillText>
            </SkillBox>
            <SkillBox>
              <Image src={css} alt="css" width={45} height={45} />
              <SkillText>CSS</SkillText>
            </SkillBox>
            {/* <SkillBox>
              <Image src={sass} alt="sass" width={45} height={45} />
              <SkillText>SCSS</SkillText>
            </SkillBox> */}
            <SkillBox>
              <Image src={javascript} alt="javascript" width={45} height={45} />
              <SkillText>Javascript</SkillText>
            </SkillBox>
            <SkillBox>
              <Image src={react} alt="react" width={45} height={45} />
              <SkillText>React</SkillText>
            </SkillBox>
            <SkillBox>
              <Image src={typescript} alt="typescript" width={45} height={45} />
              <SkillText>Typescript</SkillText>
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
