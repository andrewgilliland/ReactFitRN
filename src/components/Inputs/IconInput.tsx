import { FC, ReactElement } from "react";
import { TextInput, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type IconInputProps = {
  icon: ReactElement;
  placeholder?: string;

  valueState: [string, React.Dispatch<React.SetStateAction<string>>];
};

const IconInput: FC<IconInputProps> = ({ icon, placeholder, valueState }) => {
  const [value, setValue] = valueState;

  const {
    styles: { container, placeholderStyle, inputStyle },
  } = useStyles(stylesheet);

  return (
    <View style={container}>
      {icon}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderStyle.color}
        style={inputStyle}
        value={value}
        onChange={(e) => setValue(e.nativeEvent.text)}
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

  inputStyle: {
    fontSize: 16,
    flex: 1,
  },
  placeholderStyle: {
    color: colors.gray[400],
  },
}));

export default IconInput;
