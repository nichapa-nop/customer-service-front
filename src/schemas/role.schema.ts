import { z } from "zod";

export const roleSchema = z.object({
  roleName: z.string().min(1),
  groupMenuId: z.string().min(1),
});
