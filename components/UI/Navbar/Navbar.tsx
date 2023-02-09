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
  StyledButton,
  StyledFontAwesomeIcon,
  StyledLink,
  StyledList,
  StyledListItem,
} from "./styledNavbar";

interface IProps {
  theme: string;
  themeToggle: () => void;
}
function Navbar({ theme, themeToggle }: IProps) {
  const router = useRouter();

  return (
    <>
      <Nav>
        <StyledList>
          <StyledListItem
            style={{
              background:
                router.pathname === "/" ? "rgba(59, 130, 246, 1)" : "",
            }}
          >
            <Link href="/" passHref>
              <StyledLink aria-label="home">
                <StyledFontAwesomeIcon
                  icon={faHome}
                  style={{
                    color: router.pathname === "/" ? "white" : "",
                  }}
                />
              </StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem
            style={{
              background:
                router.pathname === "/projects" ? "rgba(59, 130, 246, 1)" : "",
            }}
          >
            <Link href="/projects" passHref>
              <StyledLink aria-label="go to projects page">
                <StyledFontAwesomeIcon
                  icon={faListCheck}
                  style={{
                    color: router.pathname === "/projects" ? "white" : "",
                  }}
                />
              </StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem
            style={{
              background:
                router.pathname === "/about" ? "rgba(59, 130, 246, 1)" : "",
            }}
          >
            <Link href="/about" passHref>
              <StyledLink aria-label="go to about page">
                <StyledFontAwesomeIcon
                  icon={faUser}
                  style={{
                    color: router.pathname === "/about" ? "white" : "",
                  }}
                />
              </StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem
            style={{
              background:
                router.pathname === "/contact" ? "rgba(59, 130, 246, 1)" : "",
            }}
          >
            <Link href="/contact" passHref>
              <StyledLink aria-label="go to contact page">
                <StyledFontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    color: router.pathname === "/contact" ? "white" : "",
                  }}
                />
              </StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              target="_blank"
              href="https://github.com/ankerx"
              aria-label="visit my GitHub profile"
            >
              <StyledFontAwesomeIcon icon={faGithub} />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledButton onClick={themeToggle} aria-label="theme switch">
              {theme !== "dark" ? (
                <StyledFontAwesomeIcon icon={faMoon} />
              ) : (
                <StyledFontAwesomeIcon icon={faSun} />
              )}
            </StyledButton>
          </StyledListItem>
        </StyledList>
      </Nav>
    </>
  );
}

export default Navbar;
