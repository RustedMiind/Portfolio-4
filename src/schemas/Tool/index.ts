import { z } from "zod";

export const toolSchema = z.object({
  id: z.string(),
  name: z.string(),
  link: z.string(),
});

export type Tool = z.infer<typeof toolSchema>;
