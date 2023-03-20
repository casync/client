import { theme } from "../src/theme/theme";

export const decorators = [
  (Story, context) => {
    return (
      <MyThemeProvider theme={theme}>
        <Story {...context} />
      </MyThemeProvider>
    );
  },
];
