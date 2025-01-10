import { z } from "zod";

export const exerciseType = z.enum([
  "strength",
  "cardio",
  "mobility",
  "balance",
]);

export type ExerciseType = z.infer<typeof exerciseType>;
