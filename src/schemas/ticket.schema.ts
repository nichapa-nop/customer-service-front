import { z } from "zod";

export const ticketSchema = z.object({
  cusFirstName: z.string().min(1),
  cusLastName: z.string().min(1),
  cusPhoneNum: z.string().min(10).max(10),
  cusEmail: z.string().email(),
  cusCompanyName: z.string(),
  cusCompanyType: z.enum(["hr", "cdd", "other"]),
  topic: z.string().min(1),
  description: z.string().min(1),
  platform: z.enum(["hr", "cdd"]),
  incidentType: z.enum(["issue", "consult", "other"]),
  businessImpact: z.enum(["s1", "s2", "s3", "s4", "no"]),
  assignTo: z.string().email().optional(),
  status: z.string().optional(),
  feedbackCh: z.enum([
    "help_crunch",
    "phone",
    "email",
    "line",
    "ticket",
    "base_employee",
  ]),
  ticketLink: z.string().optional(),
});

export const closeTicketSchema = z.object({
  email: z.string().email().optional(),
  solution: z.string(),
});
