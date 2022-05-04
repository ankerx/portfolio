import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background: ${(props) => props.theme.body};
`;
function About() {
  return <Section>About</Section>;
}

export default About;
