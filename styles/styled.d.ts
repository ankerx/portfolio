import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontColor: string;
    body: string;
    navBody: string;
    navColor: string;
  }
}
