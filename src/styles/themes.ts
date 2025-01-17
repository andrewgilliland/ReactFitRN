import { rounded } from "./borderRadius";
import { colors } from "./colors";
import { fontSize } from "./typography";
import { spacing } from "./spacing";

export const lightTheme = {
  colors,
  fontSize,
  spacing,
  rounded,
  name: "light",
} as const;

export const darkTheme = {
  colors,
  fontSize,
  spacing,
  rounded,
  name: "dark",
} as const;

// define other themes
