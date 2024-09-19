import { FC } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { palette, rounded, spacing } from "../theme";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const AnimatedButton: FC<ButtonProps> = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.blue[600],
    padding: spacing.sm,
    borderRadius: rounded.sm,
    alignItems: "center",
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
