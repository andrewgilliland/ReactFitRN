import { FC } from "react";
import { Text as RNText, StyleProp, TextStyle } from "react-native";
import { font, typography } from "@/style";
import { ColorCode, getColorValue } from "../style/colors";

type FontFamily = keyof typeof typography;
type FontSize = keyof typeof font.size;
type FontWeight = keyof typeof typography.sans;

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

export const Text: FC<TextProps> = ({
  family = "sans",
  color = "neutral.100",
  size = "base",
  weight = "regular",
  style,
  children,
}) => {
  const colorValue = getColorValue(color);

  const $style = [
    { color: colorValue },
    { fontFamily: typography[family][weight] },
    { fontSize: font.size[size] },
    style,
  ];

  return <RNText style={$style}>{children}</RNText>;
};
