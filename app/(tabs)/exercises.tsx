import { SafeAreaView, Text, TextInput, View } from "react-native";
import "@/src/style/unistyles";
import ExerciseList from "@/src/components/ExerciseList";
import IconInput from "@/src/components/IconInput";

export default function ExercisesScreen() {
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
      <View
        style={{
          borderWidth: 1,
          paddingHorizontal: 36,
          paddingVertical: 24,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "600" }}>Exercises</Text>
        <View
          style={{
            height: 24,
            width: 24,
            backgroundColor: "purple",
            borderRadius: 4,
          }}
        />
      </View>
      <IconInput icon="💪" placeholder="Search Exercises" value="Search" />
      <ExerciseList exercises={exercises} />
    </SafeAreaView>
  );
}
