import { z } from "zod";

export const Exercise = z.object({
  id: z.string(),
  name: z.string(),
  difficulty: z.string(),
  exerciseType: z.string(),
  equipment: z.string(),
  forceType: z.string(),
  mechanics: z.string(),
  targetMuscleGroup: z.string(),
  secondaryMuscleGroups: z.array(z.string()),
  description: z.string(),
  image: z.string(),
});

export type ExerciseType = z.infer<typeof Exercise>;
