import { FC } from "react";
import { TextInput, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type IconInputProps = {
  icon: string;
  placeholder?: string;
  value: string;
};

const IconInput: FC<IconInputProps> = ({ icon, placeholder, value }) => {
  const {
    styles: { container, iconStyle, placeholderStyle, inputStyle },
  } = useStyles(stylesheet);

  return (
    <View style={container}>
      <View style={iconStyle} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderStyle.color}
        style={inputStyle}
      />
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, font, spacing, rounded }) => ({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.gray[400],
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  iconStyle: {
    height: 24,
    width: 24,
    backgroundColor: colors.purple[600],
    borderRadius: 4,
  },
  inputStyle: {
    fontSize: 16,
    flex: 1,
  },
  placeholderStyle: {
    color: colors.gray[400],
  },
}));

export default IconInput;
