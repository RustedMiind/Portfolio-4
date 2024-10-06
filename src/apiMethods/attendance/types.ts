import { z } from "zod";

const formSchema = z.object({
  start: z.string().datetime(),
  end: z.string().datetime(),
});

type FormType = z.infer<typeof formSchema>;

export const createShiftSchema = formSchema;
export type CreateShiftFormType = FormType;
