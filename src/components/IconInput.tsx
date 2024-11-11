import { FC } from "react";
import { TextInput, View } from "react-native";

type IconInputProps = {
  icon: string;
  placeholder?: string;
  value: string;
};

const IconInput: FC<IconInputProps> = ({ icon, placeholder, value }) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        paddingHorizontal: 36,
        paddingVertical: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 8,
          borderColor: "#999",
          gap: 12,
          paddingHorizontal: 12,
          paddingVertical: 8,
        }}
      >
        <View
          style={{
            height: 24,
            width: 24,
            backgroundColor: "purple",
            borderRadius: 4,
          }}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#999"}
          style={{ fontSize: 16, flex: 1 }}
        />
      </View>
    </View>
  );
};

export default IconInput;
