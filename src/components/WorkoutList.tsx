import { FC } from "react";
import { FlatList, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Card from "./Card";
import { Workout } from "@/types";

type WorkoutListProps = {
  workouts: Workout[];
};

const WorkoutList: FC<WorkoutListProps> = ({ workouts }) => {
  const {
    styles: { contentContainer, itemSeparator },
  } = useStyles(stylesheet);

  return (
    <FlatList
      data={workouts}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={contentContainer}
      ItemSeparatorComponent={() => <View style={itemSeparator} />}
    />
  );
};

const stylesheet = createStyleSheet(({ spacing }) => ({
  contentContainer: {
    marginVertical: spacing[3],
  },
  itemSeparator: {
    height: spacing[3],
  },
}));

export default WorkoutList;
