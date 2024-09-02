import { z } from "zod";

export const ticketSchema = z.object({
  cusFirstName: z.string(),
  cusLastName: z.string(),
  cusPhoneNum: z.string(),
  cusEmail: z.string(),
  cusCompanyName: z.string(),
  cusCompanyType: z.string(),
  topic: z.string(),
  description: z.string(),
  platform: z.string(),
  incidentType: z.string(),
  businessImpact: z.string(),
  assignTo: z.string(),
  status: z.string(),
  feedbackCh: z.string(),
  ticketLink: z.string(),
  email: z.string(),
  solution: z.string(),
});
