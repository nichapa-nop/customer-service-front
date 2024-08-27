"use server";

import { ApiManager } from "@/api";

export async function showTicketDetail({ ticketId }: { ticketId: string }) {
  const response = await ApiManager<TicketResponse, never, never>({
    path: `/ticket/${ticketId}`,
    method: "GET",
  });
  if (response.success && response.data) {
    return {
      // data: response.data.ticket
      success: true,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}
