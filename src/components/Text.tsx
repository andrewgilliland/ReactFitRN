import { FC } from "react";
import { Text as RNText, StyleProp, TextStyle } from "react-native";

type TextProps = {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  children: string;
};

const Text: FC<TextProps> = ({ children }) => {
  return <RNText>{children}</RNText>;
};

export default Text;
