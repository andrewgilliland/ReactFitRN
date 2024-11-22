import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Card from "./Card";
import { Workout } from "../types";

type CardRowProps = {
  type: string;
  workouts: Workout[];
};

const CardRow: FC<CardRowProps> = ({ type, workouts }) => {
  const {
    styles: { container, heading, scrollView },
  } = useStyles(stylesheet);

  return (
    <View style={container}>
      <Text style={heading}>{type}</Text>
      <ScrollView horizontal style={scrollView}>
        {workouts.map((workout, index) => (
          <Card key={index} item={workout} />
        ))}
      </ScrollView>
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, font, spacing, name }) => ({
  container: {
    marginVertical: spacing[3],
  },
  heading: {
    color: name === "dark" ? colors.white : colors.red[800],
    fontSize: font.size.lg,
    fontWeight: "bold",
    marginLeft: spacing[3],
  },
  scrollView: {
    marginVertical: spacing[3],
    paddingLeft: spacing[3],
  },
}));

export default CardRow;
