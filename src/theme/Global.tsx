import { createGlobalStyle, css } from "styled-components";

type props = {
  theme: any,
}

const GlobalStyles = createGlobalStyle<props>`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: ${theme.font.family.primary};
    }
  `}
`;

export default GlobalStyles;
