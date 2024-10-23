"use server";

import { ApiManager } from "@/api";
import { Filterers } from "@/app/(main)/ticket-management/client";

export async function showTicketDetail({ ticketId }: { ticketId: string }) {
  const response = await ApiManager<TicketResponse, never, never>({
    path: `/ticket/${ticketId}`,
    method: "GET",
  });
  if (response.success && response.data) {
    return {
      success: true,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}

export async function createTicket(data: any) {
  console.log(data);
  const response = await ApiManager<
    TicketResponse,
    never,
    TicketRequestBodyDTO
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
  itemsPerPage = 6,
  keyword,
  filters = {},
}: {
  page?: number;
  itemsPerPage?: number;
  keyword?: string;
  filters?: Filterers;
} = {}) {
  const response = await ApiManager<{
    tickets: TicketResponse[];
    pagination: PaginationResponse;
  }>({
    path: "/ticket",
    method: "GET",
    query: {
      page,
      itemsPerPage,
      keyword,
      ...filters,
    },
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
    console.log(response.status, response.data);
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
      success: true,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}

export async function editTicket(
  { ticketId }: { ticketId: string },
  data: any
) {
  const response = await ApiManager<
    TicketResponse,
    never,
    TicketRequestBodyDTO
  >({
    path: `/ticket/${ticketId}`,
    method: "PUT",
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
    console.log(response);
    throw new Error("Failed to fetch data");
  }
}

export async function closeTicket(
  { ticketId }: { ticketId: string },
  data: any
) {
  const response = await ApiManager<
    TicketResponse,
    never,
    CloseTicketRequestBodyDTO
  >({
    path: `/closeticket/${ticketId}`,
    method: "PUT",
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
    console.log(response);
    throw new Error("Failed to fetch data");
  }
}

export async function reOpenTicket({ ticketId }: { ticketId: string }) {
  const response = await ApiManager<TicketResponse, never, never>({
    path: `/reopenticket/${ticketId}`,
    method: "PUT",
    next: {
      revalidateTags: ["get-ticket-list"],
    },
  });
  if (response.success && response.data) {
    return {
      success: true,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}
