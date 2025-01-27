import { useState } from "react";
import ScreenLayout from "@/src/components/Layouts/ScreenLayout";
import WorkoutListCollection from "@/src/components/WorkoutListCollection";
import { Workout } from "@/src/types";

const WorkoutsScreen = () => {
  const searchValueState = useState("");

  const workouts: Workout[] = [
    {
      id: 1,
      title: "Chest Day",
      description: "A workout focused on chest muscles",
      type: "strength",
      equipment: ["barbell", "dumbbell", "bodyweight"],
      exercises: [1, 2, 3],
      sets: 12,
    },
    {
      id: 2,
      title: "Leg Day",
      description: "A workout focused on leg muscles",
      type: "strength",
      equipment: ["barbell", "dumbbell", "bodyweight"],
      exercises: [4, 5, 6],
      sets: 12,
    },
    {
      id: 3,
      title: "Back Day",
      description: "A workout focused on back muscles",
      type: "strength",
      equipment: ["barbell", "dumbbell", "bodyweight"],
      exercises: [7, 8, 9],
      sets: 12,
    },
    {
      id: 4,
      title: "Arm Day",
      description: "A workout focused on arm muscles",
      type: "strength",
      equipment: ["barbell", "dumbbell", "bodyweight"],
      exercises: [10, 11, 12],
      sets: 12,
    },
    {
      id: 5,
      title: "Cardio Day",
      description: "A workout focused on cardio",
      type: "cardio",
      equipment: ["bodyweight"],
      exercises: [13, 14, 15],
      sets: 12,
    },
    {
      id: 6,
      title: "Yoga",
      description: "A workout focused on flexibility",
      type: "flexibility",
      equipment: ["bodyweight"],
      exercises: [16, 17, 18],
      sets: 12,
    },
    {
      id: 7,
      title: "Wind Sprints",
      description: "A workout focused on speed",
      type: "cardio",
      equipment: ["bodyweight"],
      exercises: [19, 20, 21],
      sets: 12,
    },
  ];

  const filteredWorkouts = workouts.filter((workout) =>
    workout.title.toLowerCase().includes(searchValueState[0].toLowerCase())
  );

  return (
    <ScreenLayout
      searchValueState={searchValueState}
      title="Workouts"
      icon="dumbbell"
    >
      <WorkoutListCollection workouts={filteredWorkouts} />
    </ScreenLayout>
  );
};

export default WorkoutsScreen;
