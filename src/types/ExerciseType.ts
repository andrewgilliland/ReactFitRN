import { z } from "zod";

export const exerciseType = z.enum(["Strength", "Cardio", "Stretching"]);

export type ExerciseType = z.infer<typeof exerciseType>;
