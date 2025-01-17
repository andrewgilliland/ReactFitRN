import { FC } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "./Text";
import { ColorCode, getColorValue, colors, spacing, fontSize } from "@/styles";

type ButtonProps = {
  children: string;
  /**
   * Override the default theme colors of the button.
   */
  color?: ColorCode;
  disabled?: boolean;
  onPress: () => void;
  theme?: "primary" | "secondary" | "neutral";
  size?: "sm" | "md" | "lg";
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
};

export const Button: FC<ButtonProps> = ({
  children,
  color,
  disabled,
  onPress,
  theme = "primary",
  size = "md",
  style,
}) => {
  const {
    styles: { pressable, text, buttonPressed },
  } = useStyles(stylesheet);

  const themes = {
    primary: colors.orange[600],
    secondary: colors.blue[700],
    neutral: colors.neutral[900],
  };

  const buttonSizes = {
    sm: { paddingHorizontal: spacing[2], paddingVertical: spacing[1] },
    md: { paddingHorizontal: spacing[4], paddingVertical: spacing[2] },
    lg: {
      paddingHorizontal: spacing[6],
      paddingVertical: spacing[3],
    },
  };

  const textSizes = {
    sm: { fontSize: fontSize.sm },
    md: { fontSize: fontSize.base },
    lg: { fontSize: fontSize.xl },
  };

  const $style = [
    pressable,
    { backgroundColor: color ? getColorValue(color) : themes[theme] },
    buttonSizes[size],
    style,
  ];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [$style, pressed && buttonPressed]}
      disabled={disabled}
    >
      <Text weight="bold" style={[text, textSizes[size]]}>
        {children}
      </Text>
    </Pressable>
  );
};

const stylesheet = createStyleSheet(({ colors, rounded, spacing }) => ({
  pressable: {
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: rounded.xl,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    shadowOffset: { width: spacing["0.5"], height: spacing["0.5"] },
    shadowColor: colors.neutral[100],
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  buttonPressed: {
    shadowOffset: { width: 0, height: 0 },
    transform: [{ translateX: spacing["0.5"] }, { translateY: spacing["0.5"] }],
  },
  text: {
    color: colors.neutral[100],
  },
}));
