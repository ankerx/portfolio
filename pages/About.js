import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  background: ${(props) => props.theme.body};
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
const H3 = styled.h3``;
const Box = styled.div`
  margin: 0 1rem;
  /* padding: 2rem; */
  @media (min-width: 1024px) {
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
function About() {
  return (
    <Section>
      <Background></Background>
      <Background2></Background2>
      <StyledHeading>About me</StyledHeading>
      <Container>
        <Box>
          <Text>
            I am a Frontend Developer from Poland. I have serious passion about
            making websites. I am learning new things everyday and this is what
            I like the most in programming world - you never stop learning.
          </Text>
        </Box>
        <Box>
          <Text>
            When I am not coding I spend most of the time on the gym. For over 7
            years I was in national team, sport gave me a lot of benefits and
            shaped my character. Very ambitous and well-organised person, that
            always keeps forward.
          </Text>
        </Box>
        <Box>
          <H3>Technology I use:</H3>
          <Text>HTML, CSS/SCSS, JAVSCRIPT, REACT, NEXTJS </Text>
        </Box>
      </Container>
    </Section>
  );
}

export default About;
