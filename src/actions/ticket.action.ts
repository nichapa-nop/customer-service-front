"use server";

import { ApiManager } from "@/api";
import { ticketSchema } from "@/schemas/ticket.schema";
import { z } from "zod";

export async function createTicket(data: any) {
  const response = await ApiManager<
    TicketResponse,
    never,
    CreateTicketRequestBodyDTO
  >({
    path: "/ticket",
    method: "POST",
    body: data,
    next: {
      revalidateTags: ["get-ticket-list"],
    },
  });
  if (response.success && response.data) {
    return {
      data: response.data,
      success: true,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}

export async function getTicketList({
  page = 1,
  itemsPerPage = 7,
  keyword,
}: { page?: number; itemsPerPage?: number; keyword?: string } = {}) {
  const response = await ApiManager<{
    tickets: TicketResponse[];
    pagination: PaginationResponse;
  }>({
    path: "/ticket",
    method: "GET",
    query: { page, itemsPerPage, keyword },
    next: {
      tags: ["get-ticket-list"],
    },
  });
  // console.log(keyword);
  if (response.success && response.data) {
    return {
      data: response.data.tickets,
      success: true,
      pagination: response.data.pagination,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}

export async function deleteTicket({ ticketId }: { ticketId: string }) {
  const response = await ApiManager<TicketResponse, never, never>({
    path: `/ticket/${ticketId}`,
    method: "DELETE",
    next: {
      revalidateTags: ["get-ticket-list"],
    },
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
