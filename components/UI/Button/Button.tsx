import { StyledButton } from "./styledButton";

interface IProps {
  children: React.ReactNode;
}
function Button({ children }: IProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
