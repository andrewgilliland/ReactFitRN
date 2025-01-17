import { FC } from "react";
import { Text as RNText, StyleProp, TextStyle } from "react-native";
import {
  ColorCode,
  getColorValue,
  fontSize,
  typography,
  FontFamily,
  FontSize,
  FontWeight,
} from "@/styles";

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
    { fontSize: fontSize[size] },
    style,
  ];

  return <RNText style={$style}>{children}</RNText>;
};
