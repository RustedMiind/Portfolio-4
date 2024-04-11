import { z } from "zod";
import { toolSchema } from "../Tool";
import { experienceSchema } from "../Experience";

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  link: z.string(),
  image: z.string().nullable(),
  experienceId: z.string().nullable(),
});

export type Project = z.infer<typeof projectSchema>;
