"use server";

import { getTicketList } from "@/actions/ticket.action";
import TicketManagementClient from "./client";

async function TicketManagementPage() {
  // const apiResponse = "abc";
  // return <TicketManagementClient data={apiResponse} />;
  const ticketDetailResponse = await getTicketList();

  if (!(ticketDetailResponse.success && ticketDetailResponse.data?.tickets)) {
    throw new Error("Can not fetch ticket list");
  }
  return <TicketManagementClient tickets={ticketDetailResponse.data.tickets} />;
}

export default TicketManagementPage;
