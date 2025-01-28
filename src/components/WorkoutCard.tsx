import { FC } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Workout } from "../types";
import { Text } from "./Text";
import { spacing } from "../styles";
import { workout } from "../types/Workout";

type CardProps = {
  workout: Workout;
};

const WorkoutCard: FC<CardProps> = ({ workout }) => {
  const {
    styles: { container, pill, icon, link },
  } = useStyles(stylesheet);

  // Get the number of sets in the workout
  // by countuing the number of objects in the arrays of sets
  const setCount = Object.values(workout.sets).reduce(
    (acc, sets) => acc + sets.length,
    0
  );

  return (
    <View style={container}>
      <View style={pill}>
        <Text
          color="neutral.100"
          size="sm"
          weight="medium"
          style={{ textTransform: "capitalize" }}
        >
          {workout.type}
        </Text>
      </View>
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
            {workout.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing[4],
            }}
          >
            <Text color="neutral.300" size="base" weight="medium">
              {`${setCount} sets`}
            </Text>
            <Text color="neutral.300" size="base" weight="medium">
              30min
            </Text>
          </View>
        </View>
        <View style={link}></View>
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
  icon: {
    color: name === "dark" ? colors.white : colors.black,
    opacity: 0.25,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  link: {
    backgroundColor: colors.orange[600],
    height: spacing[14],
    width: spacing[14],
    borderRadius: rounded.xl,
  },
}));

export default WorkoutCard;
