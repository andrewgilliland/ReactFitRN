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

const stylesheet = createStyleSheet(
  ({ colors, font, spacing, rounded, name }) => ({
    container: {
      flexDirection: "row",
      borderWidth: spacing["0.5"],
      borderRadius: rounded.lg,
      borderColor: colors.gray[400],
      gap: spacing[3],
      paddingHorizontal: spacing[3],
      paddingVertical: spacing[2],
    },
    inputStyle: {
      color: name === "dark" ? colors.white : colors.black,
      fontSize: font.size.base,
    },
    placeholderStyle: {
      color: colors.gray[400],
    },
  })
);

export default IconInput;
