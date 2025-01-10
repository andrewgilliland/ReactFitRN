import { z } from "zod";

export const forceType = z.enum(["push", "pull", "hinge", "static"]);

export type ForceType = z.infer<typeof forceType>;
