import { colors, spacing } from "../theme";

export const lightTheme = {
  colors,
  spacing,
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

export const darkTheme = {
  colors,
  spacing,
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

// define other themes
