import { FC } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Entypo from "@expo/vector-icons/Entypo";
import { Workout } from "../types";
import { Text } from "./Text";
import { colors, spacing } from "../styles";
import { router } from "expo-router";
import { Button } from "./Button";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pill } from "./Pill";

type CardProps = {
  workout: Workout;
};

const WorkoutCard: FC<CardProps> = ({ workout }) => {
  const {
    styles: { container },
  } = useStyles(stylesheet);

  // Get the number of sets in the workout
  // by countuing the number of objects in the arrays of sets
  const { exercise_sets } = workout;

  const setCount = Object.values(exercise_sets).reduce(
    (acc, sets) => acc + sets.length,
    0
  );

  return (
    <View style={container}>
      <Pill theme="neutral" style={{ alignSelf: "flex-start" }}>
        {workout.type}
      </Pill>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: spacing[12],
        }}
      >
        <View>
          <Text color="neutral.100" size="2xl" weight="bold">
            {workout.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing[4],
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
              <Text color="neutral.400" weight="semibold">
                {`${setCount} sets`}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: spacing[1],
              }}
            >
              <AntDesign
                name="clockcircle"
                size={18}
                color={colors.blue[700]}
              />
              <Text color="neutral.400" weight="semibold">
                30min
              </Text>
            </View>
          </View>
        </View>

        <Button
          size="square"
          onPress={() => router.push(`/workouts/${workout.id}`)}
        >
          <Entypo name="chevron-right" size={24} color="white" />
        </Button>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, spacing, rounded, name }) => ({
  container: {
    backgroundColor: colors.neutral[800],
    borderRadius: rounded.xl,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    shadowColor: colors.neutral[900],
    shadowOffset: {
      width: spacing[1],
      height: spacing[1],
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  pill: {
    alignSelf: "flex-start",
    backgroundColor: colors.neutral[600],
    borderRadius: rounded.lg,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
  },
}));

export default WorkoutCard;
