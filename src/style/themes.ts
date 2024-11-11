import { rounded } from "./borderRadius";
import { colors } from "./colors";
import { spacing } from "./spacing";

export const lightTheme = {
  colors,
  spacing,
  rounded,
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
  rounded,
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

// define other themes
