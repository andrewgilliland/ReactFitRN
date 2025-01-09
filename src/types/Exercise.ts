import { z } from "zod";
import { muscleGroup } from "./MuscleGroup";
import { difficulty } from "./Difficulty";
import { exerciseType } from "./ExerciseType";
import { equipment } from "./Equipment";

// * Source: https://www.muscleandstrength.com/exercises
export const exercise = z.object({
  id: z.string(),
  name: z.string(),
  difficulty, // experience level
  exerciseType,
  equipment,
  forceType: z.string(),
  mechanics: z.string(),
  targetMuscleGroup: muscleGroup,
  secondaryMuscleGroups: z.array(muscleGroup),
  description: z.string(), // overview
  instructions: z.string(),
  image: z.string(),
});

export type Exercise = z.infer<typeof exercise>;
