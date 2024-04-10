import { z } from "zod";
import { toolSchema } from "../Tool";
import { projectSchema } from "../Project";

export const experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  start_at: z.string(),
  end_date: z.string().optional(),
  tools: z.array(toolSchema).optional(),
  org_name: z.string(),
});

export type Experience = z.infer<typeof experienceSchema>;
