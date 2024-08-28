"use server";

import { ApiManager } from "@/api";

export async function createTicket({}) {
  const response = await ApiManager<
    TicketResponse,
    never,
    CreateTicketRequestBody
  >({
    path: "/ticket",
    method: "POST",
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

export async function getTicket({
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

export async function getTicketList() {
  const response = await ApiManager<ITicketListResponse>({
    path: "/ticket",
    method: "GET",
    useAccessToken: true,
  });
  return response;
}

export async function deleteTicket({ ticketId }: { ticketId: string }) {
  const response = await ApiManager<TicketResponse, never, never>({
    path: `/ticket/${ticketId}`,
    method: "DELETE",
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
