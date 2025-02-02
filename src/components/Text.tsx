import { FC, ReactNode } from "react";
import { Text as RNText, StyleProp, TextStyle } from "react-native";
import {
  ColorCode,
  getColorValue,
  fontSize,
  FontFamily,
  FontSize,
  FontWeight,
  fontFamily,
  lineHeight,
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
  children: ReactNode;
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
    { fontFamily: fontFamily[family][weight] },
    { fontSize: fontSize[size] },
    { lineHeight: lineHeight[size] },
    style,
  ];

  return <RNText style={[$style]}>{children}</RNText>;
};
