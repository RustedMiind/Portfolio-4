import { z } from "zod";

export const PermissionSchema = z.object({
  id: z.string(),
  name: z.string(),
  showName: z.string().optional(),
});

export type Permission = z.infer<typeof PermissionSchema>;
