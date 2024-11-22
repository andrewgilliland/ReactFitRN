import { FC } from "react";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Workout } from "../types";

type CardProps = {
  item: Workout;
};

const Card: FC<CardProps> = ({ item }) => {
  const {
    styles: { container, text },
  } = useStyles(stylesheet);

  return (
    <View style={container}>
      <Text key={item.id} style={text}>
        {item.title}
      </Text>
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, font, spacing, rounded }) => ({
  container: {
    backgroundColor: colors.amber[500],
    borderWidth: 1,
    borderRadius: rounded.lg,
    height: spacing[24],
    width: spacing[24],
    padding: spacing[3],
    marginRight: spacing[3],
  },
  text: {
    fontWeight: "bold",
    fontSize: font.size.base,
  },
}));

export default Card;
