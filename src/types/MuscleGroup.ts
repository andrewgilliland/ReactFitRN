import { z } from "zod";

export const muscleGroup = z.enum([
  "Shoulders",
  "Chest",
  "Lats",
  "Upper Back",
  "Middle Back",
  "Quads",
  "Hamstrings",
  "Glutes",
  "Hip Flexors",
  "Calves",
  "IT Band",
  "Triceps",
  "Biceps",
  "Forearms",
  "Abs",
  "Obliques",
  "Adductors",
  "Abductors",
  "Neck",
  "Palmar Fascia",
  "Plantar Fascia",
]);

export type MuscleGroup = z.infer<typeof muscleGroup>;
