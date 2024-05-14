import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
type FormType = z.infer<typeof formSchema>;

export const loginFormSchema = formSchema;
export type LoginFormType = FormType;
