import React, { FC, useState } from "react";
import { TextInput } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type ThemedTextInputProps = {
  placeholder: string;
  valueState: [string, React.Dispatch<React.SetStateAction<string>>];
};

const ThemedTextInput: FC<ThemedTextInputProps> = ({
  placeholder,
  valueState,
}) => {
  const { styles } = useStyles(stylesheet);
  const [value, setValue] = valueState;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      onChangeText={(text) => setValue(text)}
      onFocus={() => setIsFocused(!isFocused)}
      value={value}
      placeholderTextColor={styles.placeholderTextColor.color}
      placeholder={placeholder}
      autoCapitalize={"none"}
      style={[styles.textInput, isFocused && styles.focused]}
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
