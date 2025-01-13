import { FC } from "react";
import { Text as RNText, StyleProp, TextStyle } from "react-native";
import { colors, font, typography } from "@/style";

type ColorKey = keyof typeof colors;
type ColorShade = keyof (typeof colors)[ColorKey];
type ColorCode =
  | `${Exclude<ColorKey, "black" | "white">}.${ColorShade}`
  | "black"
  | "white";

type FontFamily = keyof typeof typography;
type FontSize = keyof typeof font.size;
type FontWeight = "light" | "regular" | "medium" | "semibold" | "bold";

type TextProps = {
  family?: FontFamily;
  color?: ColorCode;
  size?: FontSize;
  weight?: FontWeight;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  children: string;
};

const Text: FC<TextProps> = ({
  family = "sans",
  color = "neutral.100",
  size = "base",
  weight = "regular",
  style,
  children,
}) => {
  /** Accepts a ColorCode value and returns the Hex Color value */
  const getColorValue = (color: ColorCode) => {
    if (color === "black" || color === "white") {
      return colors[color];
    }
    const [key, shade] = color.split(".") as [ColorKey, ColorShade];
    return colors[key][shade];
  };

  const colorValue = getColorValue(color);

  const $style = [
    { color: colorValue },
    { fontFamily: typography[family][weight] },
    { fontSize: font.size[size] },
    style,
  ];

  return <RNText style={$style}>{children}</RNText>;
};

export default Text;
