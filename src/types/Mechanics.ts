import { z } from "zod";

export const mechanics = z.enum(["compound", "isolation", "isometric"]);

export type Mechanics = z.infer<typeof mechanics>;
