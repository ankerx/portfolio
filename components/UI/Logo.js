import styled from "styled-components";

const Text = styled.h2`
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
  return <Text className="logo">Sebx.</Text>;
}

export default Logo;
