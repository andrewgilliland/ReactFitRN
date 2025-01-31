import React, { FC } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { AntDesign } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "./Text";
import { Workout } from "@/types";
import { colors, rounded, spacing } from "@/styles";

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
      <View
        style={{
          alignSelf: "flex-start",
          marginTop: spacing[6],
          width: "100%",
        }}
      >
        <Text weight="semibold" style={{ marginTop: spacing[6] }}>
          Exercises
        </Text>
        {Object.entries(workout.sets).map(([exerciseId, sets]) => (
          <View
            key={exerciseId}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: spacing[4],
            }}
          >
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
                  {/* {exerciseId} */}
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
        ))}
      </View>
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
  headerContainer: {
    borderWidth: 1,
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[6],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pill: {
    backgroundColor: colors.orange[950],
    borderRadius: rounded.xl,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
}));
