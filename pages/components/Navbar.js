import styled from "styled-components";
import {
  faUser,
  faHome,
  faListCheck,
  faEnvelope,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Nav = styled.nav`
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
`;
const StyledListItem = styled.li`
  background: ${(props) => props.theme.navBody};
  padding: 0.3rem;
  text-decoration: none;
  border-radius: 8px;
  @media (min-width: 1024px) {
    padding: 0.4rem 0.5rem;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  color: ${(props) => props.theme.navColor};
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(0.9);
  }
  @media (min-width: 1024px) {
  }
`;
const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  color: ${(props) => props.theme.fontColor};
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

function Navbar({ theme, setTheme, themeToggle }) {
  const router = useRouter();

  return (
    <>
      <Nav>
        <StyledList>
          <StyledListItem
            style={{
              background: router.pathname == "/" && "rgba(59, 130, 246, 1)",
            }}
          >
            <Link href="/">
              <StyledLink>
                <StyledFontAwesomeIcon
                  icon={faHome}
                  style={{
                    color: router.pathname == "/" && "white",
                  }}
                />
              </StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem
            style={{
              background:
                router.pathname == "/Projects" && "rgba(59, 130, 246, 1)",
            }}
          >
            <Link href="/Projects">
              <StyledLink>
                <StyledFontAwesomeIcon
                  icon={faListCheck}
                  style={{
                    color: router.pathname == "/Projects" && "white",
                  }}
                />
              </StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem
            style={{
              background:
                router.pathname == "/About" && "rgba(59, 130, 246, 1)",
            }}
          >
            <Link href="/About">
              <StyledLink>
                <StyledFontAwesomeIcon
                  icon={faUser}
                  style={{
                    color: router.pathname == "/About" && "white",
                  }}
                />
              </StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem
            style={{
              background:
                router.pathname == "/Contact" && "rgba(59, 130, 246, 1)",
            }}
          >
            <Link href="/Contact">
              <StyledLink>
                <StyledFontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    color: router.pathname == "/Contact" && "white",
                  }}
                />
              </StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <StyledLink target="_blank" href="https://github.com/ankerx">
              <StyledFontAwesomeIcon icon={faGithub} />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink onClick={themeToggle}>
              {theme !== "dark" ? (
                <StyledFontAwesomeIcon icon={faMoon} />
              ) : (
                <StyledFontAwesomeIcon icon={faSun} />
              )}
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </Nav>
    </>
  );
}

export default Navbar;
