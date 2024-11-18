import { SafeAreaView, Text, View } from "react-native";
import ExerciseList from "@/src/components/ExerciseList";
import IconInput from "@/src/components/Inputs/IconInput";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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
          value="Search"
        />
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
