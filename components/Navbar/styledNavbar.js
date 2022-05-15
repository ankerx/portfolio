import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Nav = styled.nav`
  position: fixed;
  z-index: 55;
  bottom: 2rem;
  width: 350px;
  left: calc(50% - 175px);
  background: ${(props) => props.theme.body};
  padding: 0.5rem 1rem;
  border: 1px solid #374151;
  box-shadow: -1rem 1rem 3rem rgba(38, 50, 56, 0.5);
  border-radius: 16px;
  @media (min-width: 1024px) {
    width: 400px;
    left: calc(50% - 200px);
    padding: 0.8rem 1.6rem;
  }
  @media (max-width: 370px) {
    width: 300px;
    left: calc(50% - 150px);
  }
`;
export const StyledListItem = styled.li`
  background: ${(props) => props.theme.navBody};
  padding: 0.3rem;
  text-decoration: none;
  border-radius: 8px;
  @media (min-width: 1024px) {
    padding: 0.4rem 0.5rem;
  }
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  color: ${(props) => props.theme.navColor};
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(0.9);
  }
  @media (max-width: 370px) {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media (min-width: 1024px) {
  }
`;
export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  color: ${(props) => props.theme.fontColor};
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;
