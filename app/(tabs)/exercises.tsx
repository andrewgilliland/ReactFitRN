import { SafeAreaView, Text, View } from "react-native";
import "@/src/style/unistyles";
import ExerciseList from "@/src/components/ExerciseList";
import IconInput from "@/src/components/Inputs/IconInput";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function ExercisesScreen() {
  const {
    styles: {
      headerContainer,
      screenHeading,
      headerIcon,
      searchInputContainer,
    },
  } = useStyles(stylesheet);

  const exercises = [
    { name: "Push-ups", description: "Great for chest and arms", icon: "💪" },
    { name: "Squats", description: "Builds lower body strength", icon: "🦵" },
    {
      name: "Plank",
      description: "Strengthens core and improves posture",
      icon: "🧘",
    },
    {
      name: "Lunges",
      description: "Targets legs and improves balance",
      icon: "🏃",
    },
    {
      name: "Burpees",
      description: "Full body workout, great for cardio",
      icon: "🏋️",
    },
    {
      name: "Mountain Climbers",
      description: "Cardio and core strength",
      icon: "🏔️",
    },
    {
      name: "Jumping Jacks",
      description: "Simple but effective cardio",
      icon: "🤸",
    },
    {
      name: "Bicycle Crunches",
      description: "Targets abs and obliques",
      icon: "🚴",
    },
    {
      name: "Leg Raises",
      description: "Strengthens lower abs",
      icon: "🦵",
    },
    {
      name: "Russian Twists",
      description: "Targets obliques and core",
      icon: "🇷🇺",
    },
    {
      name: "Superman",
      description: "Strengthens lower back and glutes",
      icon: "🦸",
    },
    {
      name: "Bridge",
      description: "Strengthens glutes and lower back",
      icon: "🌉",
    },
  ];

  return (
    <SafeAreaView>
      <View style={headerContainer}>
        <Text style={screenHeading}>Exercises</Text>
        <View style={headerIcon} />
      </View>
      <View style={searchInputContainer}>
        <IconInput icon="💪" placeholder="Search Exercises" value="Search" />
      </View>
      <ExerciseList exercises={exercises} />
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
    fontSize: font.size["2xl"],
    fontWeight: "600",
  },
  headerIcon: {
    height: 24,
    width: 24,
    backgroundColor: colors.purple[600],
    borderRadius: rounded.sm,
  },
  searchInputContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: 36,
    paddingVertical: 16,
  },
}));
