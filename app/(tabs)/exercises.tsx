import { SafeAreaView, Text, View } from "react-native";
import ExerciseList from "@/src/components/ExerciseList";
import IconInput from "@/src/components/Inputs/IconInput";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

export default function ExercisesScreen() {
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

  const exercises = [
    {
      name: "Push-ups",
      description: "Great for chest and arms",
      icon: "💪",
      type: "strength",
    },
    {
      name: "Squats",
      description: "Builds lower body strength",
      icon: "🦵",
      type: "strength",
    },
    {
      name: "Plank",
      description: "Strengthens core and improves posture",
      icon: "🧘",
      type: "strength",
    },
    {
      name: "Lunges",
      description: "Targets legs and improves balance",
      icon: "🏃",
      type: "strength",
    },
    {
      name: "Burpees",
      description: "Full body workout, great for cardio",
      icon: "🏋️",
      type: "strength",
    },
    {
      name: "Mountain Climbers",
      description: "Cardio and core strength",
      icon: "🏔️",
      type: "strength",
    },
    {
      name: "Jumping Jacks",
      description: "Simple but effective cardio",
      icon: "🤸",
      type: "cardio",
    },
    {
      name: "Bicycle Crunches",
      description: "Targets abs and obliques",
      icon: "🚴",
      type: "strength",
    },
    {
      name: "Leg Raises",
      description: "Strengthens lower abs",
      icon: "🦵",
      type: "strength",
    },
    {
      name: "Russian Twists",
      description: "Targets obliques and core",
      icon: "🇷🇺",
      type: "strength",
    },
    {
      name: "Superman",
      description: "Strengthens lower back and glutes",
      icon: "🦸",
      type: "strength",
    },
    {
      name: "Bridge",
      description: "Strengthens glutes and lower back",
      icon: "🌉",
      type: "strength",
    },
    {
      name: "Jump Rope",
      description: "Great cardio workout",
      icon: "🏃",
      type: "cardio",
    },
  ];

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
      <ExerciseList exercises={filteredExercises} />
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(({ colors, font, spacing, rounded }) => ({
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
    fontSize: font.size["2xl"],
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
}));
