import Image from "next/image";
import styled from "styled-components";
import html from "../public/images/html.png";
import css from "../public/images/css.png";
import sass from "../public/images/sass.png";
import git from "../public/images/git.png";
import figma from "../public/images/figma.png";
import react from "../public/images/react.png";
import javascript from "../public/images/javascript.png";
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  margin: 0 2rem;
  background: ${(props) => props.theme.body};
  padding-bottom: 8rem;
  text-align: center;
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
const StyledHeading = styled.h1`
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;
const H3 = styled.h3`
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
const TextBox = styled.div`
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
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    margin-top: 3rem;
  }
`;
const Text = styled.p`
  line-height: 1.4rem;
  font-weight: 200;
`;
const SkillsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  max-width: 500px;
  width: 100%;
`;
const SkillBox = styled.div`
  min-width: 3.2rem;
  /* margin: 0.2rem; */
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SkillText = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;
function About() {
  return (
    <Section>
      <Background></Background>
      <Background2></Background2>
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
          {/* <Text>HTML, CSS/SCSS, JAVASCRIPT, REACT, NEXTJS </Text> */}
        </Box>
      </Container>
    </Section>
  );
}

export default About;
