import { z } from "zod";

export const ticketSchema = z.object({
  cusFirstName: z.string(),
  cusLastName: z.string(),
});
