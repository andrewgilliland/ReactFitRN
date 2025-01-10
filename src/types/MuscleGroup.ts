import { z } from "zod";

export const muscleGroup = z.enum([
  "shoulders",
  "chest",
  "lats",
  "upper back",
  "middle back",
  "quads",
  "hamstrings",
  "glutes",
  "hip flexors",
  "calves",
  "IT band",
  "triceps",
  "biceps",
  "forearms",
  "abs",
  "obliques",
  "adductors",
  "abductors",
  "neck",
  "palmar fascia",
  "plantar fascia",
]);

export type MuscleGroup = z.infer<typeof muscleGroup>;
