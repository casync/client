import { createTheming } from "@callstack/react-theme-provider";
import { theme, ThemeProvider, useTheme } from "../src/theme/theme";

function MyThemeProvider(props) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export const decorators = [
  (Story, context) => {
    const theme = useTheme();
    return (
      <MyThemeProvider theme={theme}>
        <Story {...context} />
      </MyThemeProvider>
    );
  },
];
