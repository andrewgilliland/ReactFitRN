import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { getExerciseById, getWorkoutById } from "@/src/lib/supabase";
import { Button, Text } from "@/components";
import { spacing } from "../styles";
import { Workout, workout } from "../types/Workout";
import Entypo from "@expo/vector-icons/Entypo";

export default function WorkoutScreen() {
  const [workout, setWorkout] = useState<Workout>({
    id: 1,
    title: "Chest Day",
    description: "A workout focused on chest muscles",
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
    styles: { container },
  } = useStyles(stylesheet);

  return (
    <SafeAreaView>
      <View style={container}>
        <Button size="square" theme="neutral" onPress={() => router.back()}>
          <Entypo name="chevron-left" size={24} color="white" />
        </Button>

        <View>
          <Text
            weight="bold"
            color="neutral.100"
            size="2xl"
            style={{ marginTop: spacing[6], textTransform: "capitalize" }}
          >
            {workout.title}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(({ colors, fontSize, spacing }) => ({
  container: {
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[6],
  },
  headerContainer: {
    borderWidth: 1,
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[6],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
