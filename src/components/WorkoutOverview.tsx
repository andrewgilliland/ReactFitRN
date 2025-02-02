import { FC } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { AntDesign } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "./Text";
import { Workout } from "@/types";
import { colors, rounded, spacing } from "@/styles";
import { WorkoutExercises } from "./WorkoutExercises";
import { Pill } from "./Pill";

type WorkoutOverviewProps = {
  workout: Workout;
};

export const WorkoutOverview: FC<WorkoutOverviewProps> = ({ workout }) => {
  const {
    styles: { container },
  } = useStyles(stylesheet);

  const { sets, type, title, description } = workout;

  const setCount = Object.values(sets).reduce(
    (acc, sets) => acc + sets.length,
    0
  );

  return (
    <View style={container}>
      <Pill style={{ marginTop: spacing[4] }}>{type}</Pill>
      <Text
        weight="bold"
        color="neutral.100"
        size="3xl"
        style={{ marginTop: spacing[6], textTransform: "capitalize" }}
      >
        {title}
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
          >{`${setCount} sets`}</Text>
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
          {description}
        </Text>
      </View>
      <WorkoutExercises workoutExercises={sets} />
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, spacing }) => ({
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
