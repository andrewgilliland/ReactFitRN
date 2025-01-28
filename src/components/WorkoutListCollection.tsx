import { FC } from "react";
import { ScrollView, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "./Text";
import { Workout, WorkoutDictionary } from "@/types";
import WorkoutList from "./WorkoutList";
import { spacing } from "../styles";

type WorkoutListCollectionProps = {
  workouts: Workout[];
};

const WorkoutListCollection: FC<WorkoutListCollectionProps> = ({
  workouts,
}) => {
  const {
    styles: { container },
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

  return (
    <ScrollView>
      {Object.entries(workoutsByType).map(([type, workouts]) => (
        <View style={container}>
          <Text
            size="2xl"
            weight="semibold"
            style={{ textTransform: "capitalize", marginLeft: spacing[9] }}
          >
            {type}
          </Text>
          <WorkoutList workouts={workouts} />
        </View>
      ))}
    </ScrollView>
  );
};

const stylesheet = createStyleSheet(({ spacing }) => ({
  container: {
    marginVertical: spacing[3],
  },
}));

export default WorkoutListCollection;
