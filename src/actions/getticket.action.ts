"use server";

import { ApiManager } from "@/api";
import { cookies } from "next/headers";

export async function getTicket({
  page = 1,
  itemsPerPage = 7,
}: { page?: number; itemsPerPage?: number } = {}) {
  const res = await fetch(
    `http://localhost:5000/v1/ticket?page=${page}&itemsPerPage=${itemsPerPage}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
      method: "GET",
    }
  );

  const ticketData = await res.json();
  if (res.ok) {
    return {
      data: ticketData.tickets as TicketResponse[],
      success: res.ok,
      pagination: ticketData.pagination as PaginationResponse,
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
