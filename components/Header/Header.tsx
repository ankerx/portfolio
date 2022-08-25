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
      <BackgroundGradientTop></BackgroundGradientTop>
      <BackgroundGradientBottom></BackgroundGradientBottom>
      <Box>
        <StyledText>Hello 👋</StyledText>
        <StyledHeading>My name is Sebastian</StyledHeading>
        <StyledH1>I am Frontend Developer</StyledH1>
        <StyledDescription>
          I take every website to the next level!
        </StyledDescription>
        <Link href="/projects">
          <a>
            <BTN>See my projects</BTN>
          </a>
        </Link>
        <Link href="/blog">
          <a>
            <BTN>See my blog</BTN>
          </a>
        </Link>
      </Box>
    </StyledHeader>
  );
}

export default Header;
