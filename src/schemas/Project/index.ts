import { z } from "zod";
import { toolSchema } from "../Tool";
import { experienceSchema } from "../Experience";

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  link: z.string(),
  image: z.string().optional(),
  tools: z.array(toolSchema).optional(),
  experience: experienceSchema,
});

export type Project = z.infer<typeof projectSchema>;
