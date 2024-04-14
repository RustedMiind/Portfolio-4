import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1).max(16),
  link: z.string().url(),
});

type FormType = z.infer<typeof formSchema>;

export const createToolSchema = formSchema;
export type CreateToolFormType = FormType;
