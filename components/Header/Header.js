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
  StyledButton,
} from "./styledHeader";

function Header() {
  return (
    <StyledHeader>
      <BackgroundGradientTop></BackgroundGradientTop>
      <BackgroundGradientBottom></BackgroundGradientBottom>
      <Box>
        <StyledText>Hello</StyledText>
        <StyledHeading>My name is Sebastian</StyledHeading>
        <StyledH1>I am Frontend Developer</StyledH1>
        <StyledDescription>
          I take every website on next level!
        </StyledDescription>
        <Link href="/Projects">
          <StyledButton>See my projects</StyledButton>
        </Link>
      </Box>
    </StyledHeader>
  );
}

export default Header;
