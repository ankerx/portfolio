import Logo from "./Logo";
import Navbar from "../Navbar/Navbar";

interface IProps {
  theme: string;
  themeToggle: () => void;
  children: React.ReactNode;
}
function Layout({ children, themeToggle, theme }: IProps) {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <Logo />
      {children}
      <Navbar themeToggle={themeToggle} theme={theme} />
    </div>
  );
}

export default Layout;
