import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 90vh;
`;
const Box = styled.div`
  margin: 0 1.5rem;
  margin-bottom: 10rem;
`;
const StyledText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0;
  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;
const StyledHeading = styled.h2`
  font-size: 1.7rem;
  @media (min-width: 1024px) {
    font-size: 2.1rem;
  }
`;
const StyledDesc = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 3rem;
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
const StyledH1 = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 2.5rem;
  @media (min-width: 1024px) {
    font-size: 2.1rem;
    margin-bottom: 3rem;
  }
`;

const StyledButton = styled.button`
  position: relative;
  background: rgba(24, 138, 236, 1);
  padding: 0.8rem 1.6rem;
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
  @media (min-width: 1024px) {
    font-size: 1.1rem;
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
    width: 7rem;
    height: 7rem;
    filter: blur(100px);
  }
`;
function Header() {
  return (
    <StyledHeader>
      <Background></Background>
      <Background2></Background2>
      <Box>
        <StyledText>Hello</StyledText>
        <StyledHeading>My name is Sebastian</StyledHeading>
        <StyledH1>I am Frontend Developer</StyledH1>
        <StyledDesc>I take every website on next level!</StyledDesc>
        <Link href="/Projects">
          <StyledButton>See my projects</StyledButton>
        </Link>
      </Box>
    </StyledHeader>
  );
}

export default Header;
