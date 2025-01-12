import {
  WorkSans_300Light as workSansLight,
  WorkSans_400Regular as workSansRegular,
  WorkSans_500Medium as workSansMedium,
  WorkSans_600SemiBold as workSansSemiBold,
  WorkSans_700Bold as workSansBold,
} from "@expo-google-fonts/work-sans";

export const customFontsToLoad = {
  workSansLight,
  workSansRegular,
  workSansMedium,
  workSansSemiBold,
  workSansBold,
};

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
