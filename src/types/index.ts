export { Exercise } from "./Exercise";
export { Workout, WorkoutDictionary } from "./Workout";
export { Difficulty } from "./Difficulty";
export { MuscleGroup } from "./MuscleGroup";

export type State<T> = [T, React.Dispatch<React.SetStateAction<T>>];
