import { FC } from "react";
import { Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { palette, rounded, spacing } from "../theme";
import { useSharedValue } from "react-native-reanimated";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const AnimatedButton: FC<ButtonProps> = ({ title, onPress, disabled }) => {
  const height = useSharedValue(24);

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

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.blue[600],
    padding: spacing.sm,
    borderRadius: rounded.sm,
    alignItems: "center",
  },
  pressed: {
    backgroundColor: palette.blue[700],
  },
  disabled: {
    backgroundColor: palette.gray[400],
  },
  buttonText: {
    color: palette.gray[50],
    fontSize: 18,
  },
});

export default AnimatedButton;
