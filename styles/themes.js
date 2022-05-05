import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background:${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
    transition: all 0.25s ease-in;
    font-family: 'Space Grotesk', sans-serif;
  }
  h1,h2,h3,h4,h5,h6{
    margin: .7rem 0
  }
  input {
    font-family: 'Space Grotesk', sans-serif;
    padding:.4rem;
  }
  label {
    margin-top: 1rem;
     margin-bottom: 0.2rem;
  }
`;

export const lightTheme = {
  body: "linear-gradient(90.46deg, rgba(255, 255, 255, 0.9) 0.36%, rgba(255, 255, 255, 0.9) 99.57%)",
  navBody: "rgba(243, 244, 246, 1)",
  navColor: "rgba(75, 85, 99, 1)",
  navActive: "rgba(59, 130, 246, 1)",
  fontColor: "black",
};

export const darkTheme = {
  body: "linear-gradient(90.46deg, #1F2937 0.36%, #111827 99.57%)",
  navBody: "rgba(31, 41, 55, 1)",
  navColor: "rgba(209, 213, 219, 1)",
  navActive: "rgba(59, 130, 246, 1)",
  fontColor: "white",
};
