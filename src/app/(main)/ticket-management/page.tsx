"use server";

import { getTicketList } from "@/actions/ticket.action";
import TicketManagementClient from "./client";

async function TicketManagementPage() {
  // const apiResponse = "abc";
  // return <TicketManagementClient data={apiResponse} />;
  const getTicketListResponse = await getTicketList({
    page: 1,
    itemsPerPage: 7,
  });

  console.log(new Date());

  if (!(getTicketListResponse.success && getTicketListResponse.data)) {
    throw new Error("Can not fetch ticket list");
  }
  return <TicketManagementClient tickets={getTicketListResponse.data} />;
}

export default TicketManagementPage;
