import { z } from "zod";

export const accountSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  firstNameTh: z.string().min(1),
  lastNameTh: z.string().min(1),
  email: z.string().email(),
  status: z.enum(["verified", "not_verify", "disabled", "deleted"]).optional(),
  phoneNum: z.string().min(10).max(10),
  roleId: z.string().min(1),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password is required"),
    confirmPassword: z.string().min(6, "Passwords do not match"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // แสดง error ที่ confirmPassword เมื่อไม่ตรงกับ password
  });
