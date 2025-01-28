import { z } from "zod";
import { equipment } from "./Equipment";

export const set = z.object({
  reps: z.number(),
});

export type Set = z.infer<typeof set>;

export const workout = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  type: z.string(),
  equipment: z.array(equipment),
  exercises: z.array(z.number()), // Array of exercise IDs
  sets: z.record(z.array(set)), // Record of sets
});

export type Workout = z.infer<typeof workout>;

export type WorkoutDictionary = {
  [key: string]: Workout[];
};
