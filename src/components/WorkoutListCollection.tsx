import { FC } from "react";
import { SectionList, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "./Text";
import { Workout, WorkoutDictionary } from "@/types";
import { spacing } from "../styles";
import WorkoutCard from "./WorkoutCard";

type WorkoutListCollectionProps = {
  workouts: Workout[];
};

const WorkoutListCollection: FC<WorkoutListCollectionProps> = ({
  workouts,
}) => {
  const {
    styles: { contentContainer },
  } = useStyles(stylesheet);

  /** An object with the workouts 
    have the type as the key and the value
    is an array of workouts with that type */
  const workoutsByType = workouts.reduce((acc: WorkoutDictionary, workout) => {
    if (!acc[workout.type]) {
      acc[workout.type] = [];
    }
    acc[workout.type].push(workout);
    return acc;
  }, {});

  const workoutsByTypeTitle = Object.entries(workoutsByType).map(
    ([title, data]) => ({
      title,
      data,
    })
  );

  return (
    <SectionList
      sections={workoutsByTypeTitle}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={contentContainer}
      renderItem={({ item }) => <WorkoutCard workout={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text
          size="2xl"
          weight="semibold"
          style={{ textTransform: "capitalize", marginVertical: spacing[3] }}
        >
          {title}
        </Text>
      )}
      ItemSeparatorComponent={() => <View style={{ height: spacing[3] }} />}
      stickySectionHeadersEnabled={false}
    />
  );
};

const stylesheet = createStyleSheet(({ spacing }) => ({
  contentContainer: {
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[4],
  },
}));

export default WorkoutListCollection;
