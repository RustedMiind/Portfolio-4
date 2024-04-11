import { z } from "zod";
import { roleSchema } from "../Role";

export const UserSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullable().optional(),
  email: z.string(),
  hash: z.string(),
  firstName: z.string().nullable().optional(),
  lastName: z.string().nullable().optional(),
  roleId: z.string().nullable().optional(),
  role: roleSchema.nullable().optional(),
  profileImage: z.string().nullable().optional(),
});

export type User = z.infer<typeof UserSchema>;
