import { z } from "zod";
import { PermissionSchema } from "../Permission";

export const roleSchema = z.object({
  id: z.string(),
  name: z.string(),
  permissions: z.array(PermissionSchema).optional(),
});

export type Role = z.infer<typeof roleSchema>;
