import { z } from "zod";
import { equipment } from "./Equipment";

export const workout = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  type: z.string(),
  equipment: z.array(equipment),
  exercises: z.array(z.number()), // Array of exercise IDs
  sets: z.number(),
});

export type Workout = z.infer<typeof workout>;

export type WorkoutDictionary = {
  [key: string]: Workout[];
};
