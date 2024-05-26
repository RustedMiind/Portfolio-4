import { z } from "zod";

const formSchema = z.object({
  sender_name: z.string().min(2).max(20),
  sender_email: z.string().email(),
  org_name: z.string().optional(),
  subject: z.string().min(8).max(30),
  body: z.string().min(8),
});

type FormType = z.infer<typeof formSchema>;

export const ContactFormSchema = formSchema;
export type ContactFormType = FormType;
