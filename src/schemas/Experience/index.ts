import { z } from "zod";
import { toolSchema } from "../Tool";
import { projectSchema } from "../Project";

export const experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  start_date: z.string(),
  end_date: z.string().nullable(),
  org_name: z.string(),
});

export type Experience = z.infer<typeof experienceSchema>;
