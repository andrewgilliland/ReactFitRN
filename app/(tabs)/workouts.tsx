import { ScrollView, Text, View } from "react-native";
// import { createStyleSheet } from "react-native-unistyles";
import ScreenLayout from "@/src/components/Layouts/ScreenLayout";
import { useState } from "react";
import Card from "@/src/components/Card";
import { Workout, WorkoutDictionary } from "@/src/types";
import CardRow from "@/src/components/CardRow";

const WorkoutsScreen = () => {
  const searchValueState = useState("");

  const workouts: Workout[] = [
    {
      id: 1,
      title: "Chest Day",
      description: "A workout focused on chest muscles",
      type: "strength",
    },
    {
      id: 2,
      title: "Leg Day",
      description: "A workout focused on leg muscles",
      type: "strength",
    },
    {
      id: 3,
      title: "Back Day",
      description: "A workout focused on back muscles",
      type: "strength",
    },
    {
      id: 4,
      title: "Arm Day",
      description: "A workout focused on arm muscles",
      type: "strength",
    },
    {
      id: 5,
      title: "Cardio Day",
      description: "A workout focused on cardio",
      type: "cardio",
    },
    {
      id: 6,
      title: "Yoga",
      description: "A workout focused on flexibility",
      type: "flexibility",
    },
    {
      id: 7,
      title: "Wind Sprints",
      description: "A workout focused on speed",
      type: "cardio",
    },
  ];

  // filter out workouts that don't match the search value
  const filteredWorkouts = workouts.filter((workout) =>
    workout.title.toLowerCase().includes(searchValueState[0].toLowerCase())
  );

  // Make a new object with the workouts have the type as the key and the value is an array of workouts with that type
  const workoutsByType = filteredWorkouts.reduce(
    (acc: WorkoutDictionary, workout) => {
      if (!acc[workout.type]) {
        acc[workout.type] = [];
      }
      acc[workout.type].push(workout);
      return acc;
    },
    {}
  );

  return (
    <ScreenLayout
      searchValueState={searchValueState}
      title="Workouts"
      icon="dumbbell"
    >
      <ScrollView>
        {Object.entries(workoutsByType).map(([type, workouts]) => (
          <CardRow key={type} type={type} workouts={workouts} />
        ))}
      </ScrollView>
    </ScreenLayout>
  );
};

// const stylesheet = createStyleSheet(({ colors, font, spacing, rounded }) => ({
//   headerContainer: {
//     borderWidth: 1,
//     paddingHorizontal: 36,
//     paddingVertical: 24,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   screenHeading: {
//     color: colors.gray[800],
//     fontSize: font.size["2xl"],
//     fontWeight: "600",
//   },
//   headerIcon: {
//     color: colors.gray[800],
//   },
//   searchInputContainer: {
//     borderBottomWidth: 1,
//     paddingHorizontal: 36,
//     paddingVertical: 16,
//   },
//   searchInputIcon: {
//     color: colors.gray[500],
//   },
// }));

export default WorkoutsScreen;
