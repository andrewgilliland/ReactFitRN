import { z } from "zod";

export const equipment = z.enum([
  "barbell",
  "dumbbell",
  "kettlebell",
  "machine",
  "cable",
  "bodyweight",
  "bands",
  "foam roller",
  "bench",
  "ez bar",
  "medicine ball",
  "exercise ball",
  "bosu Ball",
  "trx",
  "sandbag",
  "sled",
  "plate",
  "landmine",
]);

export type Equipment = z.infer<typeof equipment>;
