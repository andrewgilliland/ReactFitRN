import { State } from "@/src/types";
import { FC, useState } from "react";
import { TextInput as RNTextInput, TextInputProps, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "./Text";

type ThemedTextInputProps = TextInputProps & {
  valueState: State<string>;
  label?: string;
  // TODO: Add Haptics feedback
};

export const TextInput: FC<ThemedTextInputProps> = ({
  valueState,
  label,
  ...restProps
}) => {
  const { styles } = useStyles(stylesheet);
  const [value, setValue] = valueState;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      {label && (
        <Text
          color="neutral.400"
          weight="semibold"
          size="sm"
          style={styles.label}
        >
          {label}
        </Text>
      )}

      <RNTextInput
        onChangeText={(text) => setValue(text)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        placeholderTextColor={styles.placeholderTextColor.color}
        style={[styles.textInput, isFocused && styles.focused]}
        {...restProps}
      />
    </View>
  );
};

const stylesheet = createStyleSheet(
  ({ colors, fontSize, rounded, spacing }) => ({
    container: {},
    label: {
      marginBottom: spacing[1],
    },
    textInput: {
      backgroundColor: colors.neutral[800],
      color: colors.neutral[100],
      borderWidth: spacing["0.5"],
      borderRadius: rounded.xl,
      fontSize: fontSize.base,
      fontWeight: "500",
      padding: spacing[3],
    },
    focused: { borderColor: colors.orange[600] },
    placeholderTextColor: { color: colors.neutral[600] },
  })
);
