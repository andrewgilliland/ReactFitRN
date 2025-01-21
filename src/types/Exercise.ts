import { z } from "zod";
import { muscleGroup } from "./MuscleGroup";
import { difficulty } from "./Difficulty";
import { exerciseType } from "./ExerciseType";
import { equipment } from "./Equipment";
import { forceType } from "./ForceType";
import { mechanics } from "./Mechanics";

// * Source: https://www.muscleandstrength.com/exercises
export const exercise = z.object({
  id: z.string(),
  name: z.string(),
  difficulty, // experience level
  exerciseType,
  equipment,
  forceType,
  mechanics,
  targetMuscleGroup: muscleGroup,
  secondaryMuscleGroups: z.array(muscleGroup),
  description: z.string(), // overview
  instructions: z.string(),
  image: z.string(),
  imageUrls: z.array(z.string()), // Array of strings for image URLs
});

export type Exercise = z.infer<typeof exercise>;
