import { FC } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { palette, rounded, spacing } from "../theme";
import { useSharedValue } from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const AnimatedButton: FC<ButtonProps> = ({ title, onPress, disabled }) => {
  const { styles } = useStyles(stylesheet);
  // const height = useSharedValue(24);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  button: {
    backgroundColor: theme.colors.primary[500],
    padding: spacing.sm,
    borderRadius: rounded.sm,
    alignItems: "center",
  },
  pressed: {
    backgroundColor: theme.colors.primary[700],
  },
  disabled: {
    backgroundColor: palette.gray[400],
  },
  buttonText: {
    color: theme.colors.typography,
    fontSize: 18,
  },
}));

export default AnimatedButton;
