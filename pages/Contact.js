import styled from "styled-components";
import { ContactUs } from "./components/Email";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
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
function Contact() {
  return (
    <Section>
      <Background></Background>
      <Background2></Background2>
      <ContactUs />
    </Section>
  );
}

export default Contact;
