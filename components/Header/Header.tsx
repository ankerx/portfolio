import Link from "next/link";
import {
  BackgroundGradientBottom,
  BackgroundGradientTop,
} from "../../styles/globalStyles";

import {
  StyledHeader,
  Box,
  StyledText,
  StyledHeading,
  StyledDescription,
  StyledH1,
  BTN,
} from "./styledHeader";

function Header() {
  return (
    <StyledHeader>
      <Box>
        <StyledText>Hello 👋</StyledText>
        <StyledHeading>My name is Sebastian</StyledHeading>
        <StyledH1>I am a Fullstack Developer</StyledH1>
        <StyledDescription>
          Pushing web to the next level with Web3 <br /> and Fullstack
          Development Expertise
        </StyledDescription>
        <Link href="/projects" passHref>
          <BTN>See my projects</BTN>
        </Link>
        <Link href="/blog" passHref>
          <BTN>See my blog</BTN>
        </Link>
      </Box>
    </StyledHeader>
  );
}

export default Header;
