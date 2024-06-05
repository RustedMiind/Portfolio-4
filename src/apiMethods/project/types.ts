import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(4).max(40),
  link: z.string().url(),
  image: z.array(z.instanceof(File)).length(1),
  toolsIds: z.array(z.string()).optional(),
  description: z.string().min(4).max(200),
  experienceId: z.string().optional().nullable(),
  featured: z.boolean().optional(),
});

type FormType = z.infer<typeof formSchema>;

export const createProjectSchema = formSchema;
export type CreateProjectFormType = FormType;
