import React, { FC } from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "./Text";
import { colors, rounded, spacing } from "@/styles";

type WorkoutExercisesProps = {
  exerciseId: string;
  sets: {
    reps: number;
  }[];
};

export const WorkoutExercise: FC<WorkoutExercisesProps> = ({
  exerciseId,
  sets,
}) => {
  const {
    styles: { container },
  } = useStyles(stylesheet);

  // Todo: const exerciseName = getExerciseNameById(exerciseId);

  return (
    <View key={exerciseId} style={container}>
      <View
        style={{
          backgroundColor: colors.neutral[800],
          paddingHorizontal: spacing[4],
          paddingVertical: spacing[4],
          width: "100%",
          borderRadius: rounded["xl"],
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: spacing[4],
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: spacing[14],
              width: spacing[14],
              backgroundColor: colors.neutral[700],
              borderRadius: rounded["xl"],
            }}
          >
            <MaterialCommunityIcons
              name="dumbbell"
              size={24}
              color={colors.neutral[100]}
            />
          </View>

          <Text color="neutral.100" size="xl" weight="bold">
            {/* {exerciseName} */}
            Dumbbell Bench Press
          </Text>
        </View>
        <View
          style={{
            backgroundColor: colors.neutral[900],
            gap: spacing[3],
            marginTop: spacing[4],
            padding: spacing[4],
            borderRadius: rounded["xl"],
          }}
        >
          <View style={{ flexDirection: "row", gap: spacing[4] }}>
            <Text color="neutral.300" weight="semibold">
              Set
            </Text>
            <Text color="neutral.100" weight="medium">
              Reps
            </Text>
          </View>
          {sets.map((set, index) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: spacing[4],
              }}
              key={index}
            >
              <View
                style={{
                  position: "relative",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: spacing[6],
                    width: spacing[6],
                    backgroundColor: colors.orange[600],
                    borderRadius: rounded["lg"],
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text color="neutral.100" size="sm" weight="bold">
                    {`${index + 1}`}
                  </Text>
                </View>
                {index < sets.length - 1 && (
                  <View
                    style={{
                      position: "absolute",
                      backgroundColor: colors.orange[600],
                      height: spacing[6],
                      width: spacing["0.5"],
                      top: 26,
                    }}
                  />
                )}
              </View>
              <View
                style={{
                  height: spacing[10],
                  width: spacing[10],
                  backgroundColor: colors.neutral[700],
                  borderRadius: rounded["lg"],
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text color="neutral.100" size="base" weight="medium">
                  {`${set.reps.toString()}`}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(({ spacing }) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing[4],
    shadowColor: colors.neutral[900],
    shadowOffset: {
      width: spacing[1],
      height: spacing[1],
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
}));
