import { z } from "zod";
import { roleSchema } from "../Role";

export const UserSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  email: z.string(),
  hash: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  roleId: z.string().optional(),
  role: roleSchema.optional(),
  profileImage: z.string().optional(),
});

export type User = z.infer<typeof UserSchema>;
