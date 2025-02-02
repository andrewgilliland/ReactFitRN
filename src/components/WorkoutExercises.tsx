import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "./Text";
import { spacing } from "@/styles";
import { WorkoutExercise } from "./WorkoutExercise";

type WorkoutExercisesProps = {
  workoutExercises: Record<
    string,
    {
      reps: number;
    }[]
  >;
};

export const WorkoutExercises: FC<WorkoutExercisesProps> = ({
  workoutExercises,
}) => {
  return (
    <View style={{ marginTop: spacing[6] }}>
      <Text weight="semibold" style={{ marginTop: spacing[6] }}>
        Exercises
      </Text>
      {Object.entries(workoutExercises).map(([exerciseId, sets]) => (
        <WorkoutExercise key={exerciseId} exerciseId={exerciseId} sets={sets} />
      ))}
    </View>
  );
};
