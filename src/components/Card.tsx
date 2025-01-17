import { FC } from "react";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Workout } from "../types";

type CardProps = {
  item: Workout;
};

const Card: FC<CardProps> = ({ item }) => {
  const {
    styles: { container, text, icon },
  } = useStyles(stylesheet);

  return (
    <View style={container}>
      <Text key={item.id} style={text}>
        {item.title}
      </Text>
      <Ionicons name="fitness" size={48} color={icon.color} style={icon} />
    </View>
  );
};

const stylesheet = createStyleSheet(
  ({ colors, fontSize, spacing, rounded, name }) => ({
    container: {
      backgroundColor: colors.amber[600],
      borderWidth: 1,
      borderRadius: rounded.lg,
      height: spacing[24],
      width: spacing[24],
      padding: spacing[3],
      marginRight: spacing[3],
      overflow: "hidden",
    },
    text: {
      color: name === "dark" ? colors.white : colors.black,
      fontWeight: "bold",
      fontSize: fontSize.base,
    },
    icon: {
      color: name === "dark" ? colors.white : colors.black,
      opacity: 0.25,
      position: "absolute",
      right: 0,
      bottom: 0,
    },
  })
);

export default Card;
