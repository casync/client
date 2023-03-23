import GlobalStyles from "../src/theme/Global";
import { theme } from "../src/theme/theme";
import { ThemeProvider } from "styled-components";
export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Story {...context} />
        </>
      </ThemeProvider>
    );
  },
];
