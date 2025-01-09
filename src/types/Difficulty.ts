import z from "zod";

export const difficulty = z.enum(["Beginner", "Intermediate", "Advanced"]);

export type Difficulty = z.infer<typeof difficulty>;
