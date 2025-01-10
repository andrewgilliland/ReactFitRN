import z from "zod";

export const difficulty = z.enum(["beginner", "intermediate", "advanced"]);

export type Difficulty = z.infer<typeof difficulty>;
