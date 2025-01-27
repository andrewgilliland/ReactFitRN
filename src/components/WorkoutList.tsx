import { FC } from "react";
import { FlatList, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import WorkoutCard from "./WorkoutCard";
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
      renderItem={({ item }) => <WorkoutCard item={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={contentContainer}
      ItemSeparatorComponent={() => <View style={itemSeparator} />}
    />
  );
};

const stylesheet = createStyleSheet(({ spacing }) => ({
  contentContainer: {
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[5],
  },
  itemSeparator: {
    height: spacing[3],
  },
}));

export default WorkoutList;
