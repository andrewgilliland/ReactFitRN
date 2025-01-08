import { z } from "zod";

export const MuscleGroup = z.enum([
  "Chest",
  "Lats",
  "Upper Back",
  "Middle Back",
  "Quads",
  "Hamstrings",
  "Glutes",
  "Calves",
  "Triceps",
  "Biceps",
  "Forearms",
  "Shoulders",
  "Abs",
]);

export type MuscleGroupType = z.infer<typeof MuscleGroup>;
