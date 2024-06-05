import { features } from "process";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(4).max(40),
  description: z.string().min(4).max(200),
  start_date: z.string().datetime(),
  end_date: z.string().datetime().optional(),
  toolsIds: z.array(z.string()).optional(),
  org_name: z.string().min(3).max(30),
  featured: z.boolean().optional(),
});

type FormType = z.infer<typeof formSchema>;

export const createExperienceSchema = formSchema;
export type CreateExperienceFormType = FormType;
