import React, { FC } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { AntDesign } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "./Text";
import { Workout } from "@/types";
import { colors, rounded, spacing } from "@/styles";
import { WorkoutExercises } from "./WorkoutExercises";

type WorkoutOverviewProps = {
  workout: Workout;
};

export const WorkoutOverview: FC<WorkoutOverviewProps> = ({ workout }) => {
  const {
    styles: { container, pill },
  } = useStyles(stylesheet);

  const setCount = Object.values(workout.sets).reduce(
    (acc, sets) => acc + sets.length,
    0
  );

  return (
    <View style={container}>
      <View style={[pill, { marginTop: spacing[4] }]}>
        <Text
          color="orange.500"
          size="sm"
          weight="bold"
          style={{ textTransform: "capitalize" }}
        >
          {workout.type}
        </Text>
      </View>
      <Text
        weight="bold"
        color="neutral.100"
        size="3xl"
        style={{ marginTop: spacing[6], textTransform: "capitalize" }}
      >
        {workout.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: spacing[4],
          marginTop: spacing[4],
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          <MaterialCommunityIcons
            name="dumbbell"
            size={18}
            color={colors.orange[600]}
          />
          <Text
            color="neutral.400"
            weight="semibold"
          >{`${setCount.toString()} sets`}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          <AntDesign name="clockcircle" size={18} color={colors.blue[700]} />
          <Text color="neutral.400" weight="semibold">{`30min`}</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: spacing[6],
          alignSelf: "flex-start",
        }}
      >
        <Text weight="semibold">Overview</Text>
        <Text
          color="neutral.300"
          weight="regular"
          style={{ marginTop: spacing[4] }}
        >
          {workout.description}
        </Text>
      </View>
      <WorkoutExercises workoutExercises={workout.sets} />
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, fontSize, spacing }) => ({
  container: {
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[6],
    borderRadius: rounded.xl,
    backgroundColor: colors.neutral[950],
    marginTop: -spacing[6],
    flexDirection: "column",
    alignItems: "center",
  },
  pill: {
    backgroundColor: colors.orange[950],
    borderRadius: rounded.xl,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
}));
