import Logo from "./Logo";
import Navbar from "../Navbar/Navbar";

function Layout({ children, themeToggle, theme }) {
  return (
    <div>
      <Logo />
      {children}
      <Navbar themeToggle={themeToggle} theme={theme} />
    </div>
  );
}

export default Layout;
