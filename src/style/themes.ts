import { rounded } from "./borderRadius";
import { colors } from "./colors";
import { font } from "./typography";
import { spacing } from "./spacing";

export const lightTheme = {
  colors,
  font,
  spacing,
  rounded,
  name: "light",
} as const;

export const darkTheme = {
  colors,
  font,
  spacing,
  rounded,
  name: "dark",
} as const;

// define other themes
