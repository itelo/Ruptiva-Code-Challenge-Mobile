import React from "react";
import { Dimensions } from "react-native";

type FontWeightType =
  | "300"
  | "400"
  | "500"
  | "bold"
  | "normal"
  | "100"
  | "200"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;

const sharedTypographyProps = {
  fontFamily: "Roboto",
  color: "rgba(0, 0, 0, 0.87)",
  fontWeight: "500" as FontWeightType
};

export const theme = {
  metrics: {
    screenHeight: Dimensions.get("screen").height,
    screenWidth: Dimensions.get("screen").width,
  },
  palette: {
    boring: {
      orange: "#ff6a00",
      blue: "#00b2ff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    common: {
      black: "#000",
      white: "#fff"
    },
    type: "light",
    primary: {
      light: "#5B1E7D",
      main: "#5B1E7D",
      dark: "#5B1E7D",
      contrastText: "#fff"
    },
    secondary: {
      light: "#FFAE26",
      main: "#FFAE26",
      dark: "#FFAE26",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    grey: {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161"
    }
  },
  elevations: {
    elevation1: {
      shadowOpacity: 0.75,
      shadowRadius: 4,
      shadowColor: "rgba(0, 0, 0, 0.2)",
      shadowOffset: { height: 0, width: 0 },
      elevation: 2
    }
  },
  divider: "rgba(0, 0, 0, 0.12)",
  typography: {
    fontFamily: "SF Pro Text",
    fontFamilyText: "SF Pro Text",
    fontFamilyDisplay: "SF Pro Display",
    h1: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Display",
      fontWeight: "300" as FontWeightType,
      fontSize: 96,
      lineHeight: 96,
      letterSpacing: 0.24992
    },
    h2: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Display",
      fontWeight: "300" as FontWeightType,
      fontSize: 60,
      lineHeight: 60,
      letterSpacing: 0.13328
    },
    h3: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Display",
      fontWeight: "400" as FontWeightType,
      fontSize: 48,
      lineHeight: 49.92,
      letterSpacing: 0
    },
    h4: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Display",
      fontWeight: "400" as FontWeightType,
      fontSize: 34,
      lineHeight: 39.78,
      letterSpacing: 0.1176
    },
    h5: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Display",
      fontWeight: "400" as FontWeightType,
      fontSize: 24,
      lineHeight: 31.92,
      letterSpacing: 0
    },
    h6: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Display",
      fontWeight: "500" as FontWeightType,
      fontSize: 20,
      lineHeight: 32,
      letterSpacing: 0.12
    },
    subtitle1: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Text",
      fontWeight: "400" as FontWeightType,
      fontSize: 16,
      lineHeight: 28,
      letterSpacing: 0.15008
    },
    subtitle2: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Text",
      fontWeight: "500" as FontWeightType,
      fontSize: 14,
      lineHeight: 21.98,
      letterSpacing: 0.11424
    },
    body1: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Text",
      fontWeight: "400" as FontWeightType,
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.15008
    },
    body2: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Text",
      fontWeight: "400" as FontWeightType,
      fontSize: 14,
      lineHeight: 21,
      letterSpacing: 0.17136
    },
    button: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Text",
      fontWeight: "500" as FontWeightType,
      fontSize: 14,
      lineHeight: 24.5,
      letterSpacing: 0.45712
    },
    caption: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Text",
      fontWeight: "400" as FontWeightType,
      fontSize: 12,
      lineHeight: 19.919999999999998,
      letterSpacing: 0.53328
    },
    overline: {
      ...sharedTypographyProps,
      fontFamily: "SF Pro Text",
      fontWeight: "400" as FontWeightType,
      fontSize: 12,
      lineHeight: 31.92,
      letterSpacing: 1.33328
    }
  }
};

// @ts-ignore
// window.theme = theme;

export type ThemeType = typeof theme;

const ThemeContext = React.createContext<ThemeType>(theme);

export default ThemeContext;
