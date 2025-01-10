export { Exercise } from "./Exercise";
export { Difficulty } from "./Difficulty";
export { MuscleGroup } from "./MuscleGroup";

export type Workout = {
  id: number;
  title: string;
  description: string;
  type: string;
};

export type WorkoutDictionary = {
  [key: string]: Workout[];
};
