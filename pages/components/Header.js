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
`;
const StyledHeading = styled.h2`
  font-size: 1.8rem;
`;
const StyledDesc = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 3rem;
`;
const StyledH1 = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
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
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;

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
function Header() {
  return (
    <StyledHeader>
      <Background></Background>
      <Background2></Background2>
      <Box>
        <StyledText>Hello</StyledText>
        <StyledHeading>My name is Sebastian</StyledHeading>
        <StyledH1>I am Frontend Developer</StyledH1>
        <StyledDesc>
          Let me help you get your website on the next level!
        </StyledDesc>

        <Link href="/Projects">
          <StyledButton>See my projects</StyledButton>
        </Link>
      </Box>
    </StyledHeader>
  );
}

export default Header;
