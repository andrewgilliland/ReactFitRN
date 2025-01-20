import { SafeAreaView, ScrollView, View } from "react-native";
import ExerciseList from "@/src/components/ExerciseList";
import IconInput from "@/src/components/Inputs/IconInput";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import { getAllExercises } from "@/src/lib/supabase";
import { Text } from "@/components";
import { ExerciseListItem } from "@/components";

export default function ExercisesScreen() {
  const [exercises, setExercises] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await getAllExercises();

      if (error) {
        console.error("Error fetching exercises:", error.message);
      } else {
        console.log("Exercises: ", data);
        setExercises(data);
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

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchValueState[0].toLowerCase())
  );

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

      <ScrollView style={{ padding: 36 }}>
        {filteredExercises.map((exercise, index) => (
          <ExerciseListItem exercise={exercise} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(
  ({ colors, fontSize, spacing, rounded }) => ({
    headerContainer: {
      borderWidth: 1,
      paddingHorizontal: 36,
      paddingVertical: 24,
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
      paddingHorizontal: 36,
      paddingVertical: 16,
    },
    searchInputIcon: {
      color: colors.gray[500],
    },
    exerciseCard: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: colors.neutral[800],
      padding: spacing[5],
      marginBottom: 24,
      borderRadius: rounded["2xl"],
      shadowColor: colors.neutral[900],
      shadowOffset: {
        width: spacing[1],
        height: spacing[1],
      },
      shadowOpacity: 1,
      shadowRadius: 0,
    },
    exerciseCardLink: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.orange[600],
      height: spacing[12],
      width: spacing[12],
      borderRadius: rounded.xl,
    },
    exerciseCardDifficultyIcon: {
      color: colors.blue[700],
    },
  })
);
