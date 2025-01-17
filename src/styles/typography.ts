import {
  WorkSans_100Thin as workSansThin,
  WorkSans_200ExtraLight as workSansExtraLight,
  WorkSans_300Light as workSansLight,
  WorkSans_400Regular as workSansRegular,
  WorkSans_500Medium as workSansMedium,
  WorkSans_600SemiBold as workSansSemiBold,
  WorkSans_700Bold as workSansBold,
  WorkSans_800ExtraBold as workSansExtraBold,
  WorkSans_900Black as workSansBlack,
} from "@expo-google-fonts/work-sans";
// https://fonts.google.com/specimen/Work+Sans

export const customFontsToLoad = {
  workSansThin,
  workSansExtraLight,
  workSansLight,
  workSansRegular,
  workSansMedium,
  workSansSemiBold,
  workSansBold,
  workSansExtraBold,
  workSansBlack,
};

const fontWeight = {
  thin: "100",
  extralight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

const fonts = {
  workSans: {
    thin: "workSansThin",
    extralight: "workSansExtraLight",
    light: "workSansLight",
    regular: "workSansRegular",
    medium: "workSansMedium",
    semibold: "workSansSemiBold",
    bold: "workSansBold",
    extrabold: "workSansExtraBold",
    black: "workSansBlack",
  },
};

export const fontFamily = {
  sans: fonts.workSans,
  serif: fonts.workSans,
  heading: fonts.workSans,
  body: fonts.workSans,
  mono: fonts.workSans,
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
  "8xl": 96,
  "9xl": 128,
} as const;

export const lineHeight = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 32,
  "2xl": 36,
  "3xl": 40,
  "4xl": 44,
  "5xl": 48,
  "6xl": 52,
  "7xl": 56,
  "8xl": 60,
  "9xl": 64,
} as const;

export const typography = {
  sans: fonts.workSans,
  serif: fonts.workSans,
  heading: fonts.workSans,
  body: fonts.workSans,
  mono: fonts.workSans,
} as const;

export type FontFamily = keyof typeof fontFamily;
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
