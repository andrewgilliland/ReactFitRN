import { FC } from "react";
import { TextInput, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { fontFamily } from "@/styles";

type IconInputProps = {
  placeholder?: string;
  valueState: [string, React.Dispatch<React.SetStateAction<string>>];
};

const IconInput: FC<IconInputProps> = ({ placeholder, valueState }) => {
  const [value, setValue] = valueState;

  const {
    styles: { container, icon, placeholderStyle, inputStyle },
  } = useStyles(stylesheet);

  return (
    <View style={container}>
      <Feather size={24} name="search" color={icon.color} />
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
  ({ colors, fontSize, spacing, rounded }) => ({
    container: {
      backgroundColor: colors.neutral[800],
      flexDirection: "row",
      borderWidth: spacing["0.5"],
      borderRadius: rounded.xl,
      borderColor: colors.neutral[800],
      gap: spacing[3],
      padding: spacing[3],
    },
    icon: {
      color: colors.neutral[100],
    },
    inputStyle: {
      color: colors.neutral[100],
      fontSize: fontSize.base,
      fontFamily: fontFamily.sans.medium,
    },
    placeholderStyle: {
      color: colors.gray[400],
    },
  })
);

export default IconInput;
