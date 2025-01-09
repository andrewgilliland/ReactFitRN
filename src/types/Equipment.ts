import { z } from "zod";

export const equipment = z.enum([
  "Barbell",
  "Dumbbell",
  "Kettlebell",
  "Machine",
  "Cable",
  "Bodyweight",
  "Bands",
  "Foam Roller",
  "Bench",
  "EZ Curl Bar",
  "Medicine Ball",
  "Exercise Ball",
  "Bosu Ball",
  "TRX",
  "Sandbag",
  "Sled",
  "Plate",
  "Landmine",
]);

export type Equipment = z.infer<typeof equipment>;
