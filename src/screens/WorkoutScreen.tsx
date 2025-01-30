import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { getExerciseById, getWorkoutById } from "@/src/lib/supabase";
import { Button, Text } from "@/components";
import { colors, rounded, spacing } from "../styles";
import { Workout, workout } from "../types/Workout";
import Entypo from "@expo/vector-icons/Entypo";
import { AntDesign } from "@expo/vector-icons";

export default function WorkoutScreen() {
  const [workout, setWorkout] = useState<Workout>({
    id: 1,
    title: "Chest Day",
    description:
      "A workout focused on chest muscles and strength. This workout is designed to help you build strength and muscle mass in your chest. It includes a variety of exercises that target different parts of the chest, including the upper, middle, and lower chest.",
    type: "strength",
    equipment: ["barbell", "dumbbell", "bodyweight"],
    exercises: [1, 2, 3],
    sets: {
      1: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
      2: [{ reps: 10 }, { reps: 10 }, { reps: 10 }, { reps: 10 }],
      3: [{ reps: 12 }, { reps: 12 }, { reps: 12 }, { reps: 12 }],
    },
  });
  const { id } = useLocalSearchParams<{ id: string }>();
  const screenHeight = Dimensions.get("window").height;
  const headerHeight = screenHeight * 0.3; // 60% of screen height

  const setCount = Object.values(workout.sets).reduce(
    (acc, sets) => acc + sets.length,
    0
  );

  useEffect(() => {
    // (async () => {
    //   const { data, error } = await getWorkoutById(id);
    //   if (error) {
    //     console.error("Error fetching exercises:", error.message);
    //   } else {
    //     console.log("Exercises: ", data);
    //     setExercise(data);
    //   }
    // })();
  }, []);

  const {
    styles: { container, contentContainer, pill },
  } = useStyles(stylesheet);

  return (
    <View>
      <Button
        size="square"
        theme="neutral"
        onPress={() => router.back()}
        style={{ position: "absolute", zIndex: 1, top: 40, left: 20 }}
      >
        <Entypo name="chevron-left" size={24} color="white" />
      </Button>
      <ScrollView>
        <View
          style={[
            { height: headerHeight, backgroundColor: colors.orange[700] },
            container,
          ]}
        ></View>

        <View
          style={[
            container,
            contentContainer,
            { height: screenHeight - headerHeight },
          ]}
        >
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
              <AntDesign
                name="clockcircle"
                size={18}
                color={colors.blue[700]}
              />
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
        </View>
      </ScrollView>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors, fontSize, spacing }) => ({
  container: {
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[6],
  },
  contentContainer: {
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
