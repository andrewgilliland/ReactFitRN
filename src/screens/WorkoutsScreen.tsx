import { useState } from "react";
import ScreenLayout from "@/src/components/Layouts/ScreenLayout";
import WorkoutListCollection from "@/src/components/WorkoutListCollection";
import { Workout } from "@/src/types";

const WorkoutsScreen = () => {
  const searchValueState = useState("");

  const workouts: Workout[] = [
    {
      id: 1,
      name: "Chest Day",
      description: "A workout focused on chest muscles",
      type: "strength",
      equipment: ["barbell", "dumbbell", "bodyweight"],

      exercise_sets: {
        1: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
        2: [{ reps: 10 }, { reps: 10 }, { reps: 10 }, { reps: 10 }],
        3: [{ reps: 12 }, { reps: 12 }, { reps: 12 }, { reps: 12 }],
      },
    },
    {
      id: 2,
      name: "Leg Day",
      description: "A workout focused on leg muscles",
      type: "strength",
      equipment: ["barbell", "dumbbell", "bodyweight"],

      exercise_sets: {
        1: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
        2: [{ reps: 10 }, { reps: 10 }, { reps: 10 }, { reps: 10 }],
        3: [{ reps: 12 }, { reps: 12 }, { reps: 12 }, { reps: 12 }],
      },
    },
    {
      id: 3,
      name: "Back Day",
      description: "A workout focused on back muscles",
      type: "strength",
      equipment: ["barbell", "dumbbell", "bodyweight"],

      exercise_sets: {
        1: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
        2: [{ reps: 10 }, { reps: 10 }, { reps: 10 }, { reps: 10 }],
        3: [{ reps: 12 }, { reps: 12 }, { reps: 12 }, { reps: 12 }],
      },
    },
    {
      id: 4,
      name: "Arm Day",
      description: "A workout focused on arm muscles",
      type: "strength",
      equipment: ["barbell", "dumbbell", "bodyweight"],

      exercise_sets: {
        1: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
        2: [{ reps: 10 }, { reps: 10 }, { reps: 10 }, { reps: 10 }],
        3: [{ reps: 12 }, { reps: 12 }, { reps: 12 }, { reps: 12 }],
      },
    },
    {
      id: 5,
      name: "Cardio Day",
      description: "A workout focused on cardio",
      type: "cardio",
      equipment: ["bodyweight"],

      exercise_sets: {
        1: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
        2: [{ reps: 10 }, { reps: 10 }, { reps: 10 }, { reps: 10 }],
        3: [{ reps: 12 }, { reps: 12 }, { reps: 12 }, { reps: 12 }],
      },
    },
    {
      id: 6,
      name: "Yoga",
      description: "A workout focused on flexibility",
      type: "flexibility",
      equipment: ["bodyweight"],

      exercise_sets: {
        1: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
        2: [{ reps: 10 }, { reps: 10 }, { reps: 10 }, { reps: 10 }],
        3: [{ reps: 12 }, { reps: 12 }, { reps: 12 }, { reps: 12 }],
      },
    },
    {
      id: 7,
      name: "Wind Sprints",
      description: "A workout focused on speed",
      type: "cardio",
      equipment: ["bodyweight"],

      exercise_sets: {
        1: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
        2: [{ reps: 10 }, { reps: 10 }, { reps: 10 }, { reps: 10 }],
        3: [{ reps: 12 }, { reps: 12 }, { reps: 12 }, { reps: 12 }],
      },
    },
  ];

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchValueState[0].toLowerCase())
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
