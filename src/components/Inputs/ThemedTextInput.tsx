import { State } from "@/src/types";
import { FC, useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type ThemedTextInputProps = TextInputProps & {
  valueState: State<string>;
  // TODO: Add Haptics feedback
};

const ThemedTextInput: FC<ThemedTextInputProps> = ({
  valueState,
  ...restProps
}) => {
  const { styles } = useStyles(stylesheet);
  const [value, setValue] = valueState;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      onChangeText={(text) => setValue(text)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value={value}
      placeholderTextColor={styles.placeholderTextColor.color}
      style={[styles.textInput, isFocused && styles.focused]}
      {...restProps}
    />
  );
};

const stylesheet = createStyleSheet(({ colors, font, rounded, spacing }) => ({
  container: {},
  textInput: {
    backgroundColor: colors.neutral[800],
    color: colors.neutral[100],
    borderWidth: spacing["0.5"],
    borderRadius: rounded.xl,
    fontSize: font.size.base,
    fontWeight: "500",
    padding: spacing[3],
  },
  focused: { borderColor: colors.orange[600] },
  placeholderTextColor: { color: colors.neutral[600] },
}));

export default ThemedTextInput;
