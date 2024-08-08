"use server";

import { ApiManager } from "@/api";
import { cookies } from "next/headers";

export async function getTicket({
  page = 1,
  itemsPerPage = 7,
}: { page?: number; itemsPerPage?: number } = {}) {
  const response = await ApiManager<{
    tickets: TicketResponse[];
    pagination: PaginationResponse;
  }>({
    path: "/ticket",
    method: "GET",
    query: { page, itemsPerPage },
  });

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
