import { FC } from "react";
import { Pressable, Text } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { colors } from "../style/colors";

type ThemedButtonProps = {
  children: string;
  disabled?: boolean;
  onPress: () => void;
  theme?: "primary" | "secondary" | "neutral";
};

const ThemedButton: FC<ThemedButtonProps> = ({
  children,
  disabled,
  onPress,
  theme = "primary",
}) => {
  const {
    styles: { pressable, text },
  } = useStyles(stylesheet);

  const themes = {
    primary: colors.orange[600],
    secondary: colors.blue[700],
    neutral: colors.neutral[900],
  };

  return (
    <Pressable
      onPress={onPress}
      style={[pressable, { backgroundColor: themes[theme] }]}
      disabled={disabled}
    >
      <Text style={text}>{children}</Text>
    </Pressable>
  );
};

const stylesheet = createStyleSheet(({ colors, font, rounded, spacing }) => ({
  pressable: {
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: colors.orange[600],
    borderRadius: rounded.xl,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
  text: {
    color: colors.neutral[100],
    fontSize: font.size.base,
    fontWeight: "700",
  },
}));

export default ThemedButton;
