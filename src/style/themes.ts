import { rounded } from "./borderRadius";
import { colors } from "./colors";
import { font } from "./font";
import { spacing } from "./spacing";

export const lightTheme = {
  colors,
  font,
  spacing,
  rounded,
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  name: "light",
} as const;

export const darkTheme = {
  colors,
  font,
  spacing,
  rounded,
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  name: "dark",
} as const;

// define other themes
