import Link from "next/link";
import {
  BackgroundGradientBottom,
  BackgroundGradientTop,
} from "../../styles/globalStyles";
import Button from "../UI/Button/Button";

import {
  StyledHeader,
  Box,
  StyledText,
  StyledHeading,
  StyledDescription,
  StyledH1,
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
          <Button>See my projects</Button>
        </Link>
      </Box>
    </StyledHeader>
  );
}

export default Header;
