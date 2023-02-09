import styled from "styled-components";
import {
  BackgroundGradientBottom,
  BackgroundGradientTop,
} from "../../styles/globalStyles";
import Logo from "./Logo";
import Navbar from "./Navbar/Navbar";

interface IProps {
  theme: string;
  themeToggle: () => void;
  children: React.ReactNode;
}
function Layout({ children, themeToggle, theme }: IProps) {
  return (
    <Box>
      <Logo />
      <main>
        <BackgroundGradientTop />
        <BackgroundGradientBottom />
        {children}
      </main>
      <Navbar themeToggle={themeToggle} theme={theme} />
    </Box>
  );
}

export default Layout;

const Box = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;
