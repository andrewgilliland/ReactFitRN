import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { getExerciseById } from "@/src/lib/supabase";
import { Button, Text } from "@/components";
import { spacing } from "../styles";

export default function ExerciseScreen() {
  const [exercise, setExercise] = useState<any>([]);
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      const { data, error } = await getExerciseById(id);

      if (error) {
        console.error("Error fetching exercises:", error.message);
      } else {
        console.log("Exercises: ", data);
        setExercise(data);
      }
    })();
  }, []);

  const {
    styles: { container },
  } = useStyles(stylesheet);

  return (
    <SafeAreaView>
      <View style={container}>
        <Button onPress={() => router.back()}>Go Back</Button>

        <View>
          <Text
            weight="bold"
            color="neutral.100"
            size="2xl"
            style={{ marginTop: spacing[6], textTransform: "capitalize" }}
          >
            {exercise.name}
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
