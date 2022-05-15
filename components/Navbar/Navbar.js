import styled from "styled-components";
import {
  faUser,
  faHome,
  faListCheck,
  faEnvelope,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Nav,
  StyledFontAwesomeIcon,
  StyledLink,
  StyledList,
  StyledListItem,
} from "./styledNavbar";

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
