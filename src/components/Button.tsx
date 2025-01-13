import { FC } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import Text from "./Text";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { colors, spacing, font } from "@/style";

type ButtonProps = {
  children: string;
  disabled?: boolean;
  onPress: () => void;
  theme?: "primary" | "secondary" | "neutral";
  size?: "sm" | "md" | "lg";
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
};

const Button: FC<ButtonProps> = ({
  disabled,
  onPress,
  theme = "primary",
  size = "md",
  children,
  style,
}) => {
  const {
    styles: { pressable, text },
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
    sm: { fontSize: font.size.sm },
    md: { fontSize: font.size.base },
    lg: { fontSize: font.size.xl },
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        pressable,
        { backgroundColor: themes[theme] },
        buttonSizes[size],
        style,
      ]}
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
  },
  text: {
    color: colors.neutral[100],
    fontWeight: "700",
  },
}));

export default Button;
