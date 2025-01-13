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

const fonts = {
  workSans: {
    thin: "workSansThin",
    extraLight: "workSansExtraLight",
    light: "workSansLight",
    regular: "workSansRegular",
    medium: "workSansMedium",
    semibold: "workSansSemiBold",
    bold: "workSansBold",
    extraBold: "workSansExtraBold",
    black: "workSansBlack",
  },
};

export const typography = {
  sans: fonts.workSans,
  serif: fonts.workSans,
  heading: fonts.workSans,
  body: fonts.workSans,
  mono: fonts.workSans,
} as const;

export const font = {
  size: {
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
  },
} as const;
