import { useEffect, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { getWorkoutById } from "@/src/lib/supabase";
import { Button } from "@/components";
import { colors, spacing } from "@/styles";
import { Workout } from "@/types";
import Entypo from "@expo/vector-icons/Entypo";
import { WorkoutOverview } from "../components/WorkoutOverview";

export default function WorkoutScreen() {
  const [workout, setWorkout] = useState<Workout>({
    id: 1,
    name: "Chest Day",
    description:
      "A workout focused on chest muscles and strength. This workout is designed to help you build strength and muscle mass in your chest. It includes a variety of exercises that target different parts of the chest, including the upper, middle, and lower chest.",
    type: "strength",
    equipment: ["barbell", "dumbbell", "bodyweight"],
    exercise_sets: {
      1: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
      2: [{ reps: 10 }, { reps: 10 }, { reps: 10 }, { reps: 10 }],
      3: [{ reps: 12 }, { reps: 12 }, { reps: 12 }, { reps: 12 }],
    },
  });
  const { id } = useLocalSearchParams<{ id: string }>();
  const screenHeight = Dimensions.get("window").height;
  const headerHeight = screenHeight * 0.3; // 60% of screen height

  useEffect(() => {
    (async () => {
      const { data, error } = await getWorkoutById(id);
      if (error) {
        console.error("Error fetching workout:", error.message);
      } else {
        console.log("Workout: ", data);
        setWorkout(data);
      }
    })();
  }, []);

  const {
    styles: { container },
  } = useStyles(stylesheet);

  return (
    <ScrollView>
      <Button
        size="square"
        theme="neutral"
        onPress={() => router.back()}
        style={{
          position: "absolute",
          zIndex: 1,
          top: spacing[12],
          left: spacing[5],
        }}
      >
        <Entypo name="chevron-left" size={24} color="white" />
      </Button>
      <View>
        <View
          style={[
            { height: headerHeight, backgroundColor: colors.blue[700] },
            container,
          ]}
        />

        <WorkoutOverview workout={workout} />
      </View>
    </ScrollView>
  );
}

const stylesheet = createStyleSheet(({ spacing }) => ({
  container: {
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[6],
  },
}));
