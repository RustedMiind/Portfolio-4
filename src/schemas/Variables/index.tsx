import { z } from "zod";

export const vairablesSchema = z.object({
  main_heading: z.string(),
  main_subtitle: z.string(),
  about_me: z.string(),
  my_description: z.string(),
  linked_in: z.string(),
  email: z.string(),
  github: z.string(),
  phone: z.string(),
  whats_app: z.string(),
  share_title: z.string(),
  share_hashtags: z.string(),
  resume: z.string(),
});

export type Vairables = z.infer<typeof vairablesSchema>;
