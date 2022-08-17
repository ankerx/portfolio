import styled from "styled-components";
import Link from "next/link";
const StyledLink = styled.a`
  margin: 0.5rem 1rem;
  font-size: 2.2rem;
  font-family: "Yellowtail", cursive;
  font-weight: 400;
  color: #188aec;
  @media (min-width: 1024px) {
    font-size: 2.6rem;
  }
`;
function Logo() {
  return (
    <Link href="/" passHref>
      <StyledLink className="logo">Sebx.</StyledLink>
    </Link>
  );
}

export default Logo;
