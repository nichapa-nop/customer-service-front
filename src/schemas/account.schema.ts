import { z } from "zod";

export const accountSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  firstNameTh: z.string().min(1),
  lastNameTh: z.string().min(1),
  email: z.string().email(),
  status: z.enum(["verified", "not_verify", "disabled", "deleted"]),
  phoneNum: z.string().min(10).max(10),
});
