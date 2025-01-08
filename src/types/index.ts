export { ExerciseType } from "./Exercise";

export type Workout = {
  id: number;
  title: string;
  description: string;
  type: string;
};

export type WorkoutDictionary = {
  [key: string]: Workout[];
};
