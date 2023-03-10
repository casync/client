import { createTheming } from "@callstack/react-theme-provider";
import { styled } from "@linaria/react";

export const theme = {
  font: {
    family: {
      primary: "Wotfard, sans-serif",
      handwritting: "Kalam, cursive",
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      body: "1.125rem",
      small: "0.875rem",
      h6: "1.25rem",
      h5: "1.5rem",
      h4: "2.125rem",
      h3: "3rem",
      h2: "4.5rem",
      h1: "6rem",
    },
    height: {
      body: "0.75rem",
      small: "0.875rem",
      h6: "1.25rem",
      h5: "1.5rem",
      h4: "2.125rem",
      h3: "3rem",
      h2: "4.5rem",
      h1: "6rem",
    },
  },
  icon: {
    sizes: {
      small: "1rem",
      medium: "2.5rem",
      large: "2rem",
    },
  },
  spacings: {
    xxxsmall: "0.4rem",
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  paddings: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },
  border: {
    radius: {
      small: "0.25rem",
      medium: "0.5rem",
      large: "1rem",
    },
  },
  colors: {
    primary: "#FFCD00",
    secondary: "#0092FF",
    blueMain: "#0092FF", // main
    blueDark: "#153FAB", // dark
    blueLight: "#8CC7FF", // light
    blue600: "#002649",
    blue500: "#003263",
    blue400: "#1960BD",
    blue300: "#1B69D2",
    blue200: "#5390E3",
    blue100: "#BDDEF7",
    blueNote: "hsl(225deg 100% 80% / 0.1)",
    gradient1:
      "linear-gradient(225deg, #0C0F17 0%, rgba(16, 16, 16, 0.9) 100%)",
    gradient2: "linear-gradient(225deg, #2D54F1 0%, #0033FF 100%)",
    gradient3: "linear-gradient(225deg, #090909 0%, #1B1B1B 100%)",
    gradient4: "linear-gradient(225deg, #0033FF 0%, #2B4CD0 100%)",
    yellowMain: "#FFCD00",
    yellowDark: "#7B6300",
    yellowLight: "#F2D049",
    yellowNote: "hsl(40deg 100% 50% / 0.1)",
    redMain: "#F03D3D",
    redDark: "#7B0000",
    redNote: "hsl(340deg 95% 43% / 0.1)",
    greenMain: "#0BB07B",
    greenDark: "#007B4C",
    greenNote: "hsl(160deg 100% 40% / 0.1)",
    whiteDark: "#ECECEC",
    whiteMain: "#FAFAFA",
    whiteLight: "#FAFCFC",
    blackDark: "#060606",
    blackMain: "#090909",
    blackLight: "#1B1B1B",
    grayMain: "#151515",
    gray0: "#060606",
    gray1: "#2B2B2C",
    gray2: "#424344",
    gray3: "#595A5C",
    gray4: "#717274",
    gray5: "#888A8C",
    gray6: "#9EA0A3",
    auxRed: "#F03D3D",
    auxGreen: "#0BB07B",
    auxYellow: "#F2D049",
  },
} as const;

export const { ThemeProvider, withTheme, useTheme } = createTheming(theme);
