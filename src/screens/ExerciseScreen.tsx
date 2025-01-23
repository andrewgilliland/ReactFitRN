import { SafeAreaView, View } from "react-native";
import IconInput from "@/src/components/Inputs/IconInput";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import { getExerciseById } from "@/src/lib/supabase";
import { Text } from "@/components";

import { useLocalSearchParams } from "expo-router";

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
    styles: {
      headerContainer,
      screenHeading,
      headerIcon,
      searchInputContainer,
      searchInputIcon,
    },
  } = useStyles(stylesheet);

  const searchValueState = useState("");

  return (
    <SafeAreaView>
      <View style={headerContainer}>
        <Text style={screenHeading}>Exercises</Text>
        <MaterialCommunityIcons
          size={24}
          name="weight-lifter"
          color={headerIcon.color}
        />
      </View>
      <View style={searchInputContainer}>
        <IconInput
          icon={
            <Feather size={18} name="search" color={searchInputIcon.color} />
          }
          placeholder="Search Exercises"
          valueState={searchValueState}
        />
      </View>

      <Text>{exercise.name}</Text>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(({ colors, fontSize, spacing }) => ({
  headerContainer: {
    borderWidth: 1,
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[6],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screenHeading: {
    color: colors.gray[800],
    fontSize: fontSize["2xl"],
    fontWeight: "600",
  },
  headerIcon: {
    color: colors.gray[800],
  },
  searchInputContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: spacing[9],
    paddingVertical: spacing[4],
  },
  searchInputIcon: {
    color: colors.gray[500],
  },
}));
