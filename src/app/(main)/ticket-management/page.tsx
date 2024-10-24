"use server";

import { getTicketList } from "@/actions/ticket.action";
import TicketManagementClient from "./client";

async function TicketManagementPage() {
  // const apiResponse = "abc";
  // return <TicketManagementClient data={apiResponse} />;
  const getTicketListResponse = await getTicketList({
    page: 1,
    itemsPerPage: 6,
  });

  if (!(getTicketListResponse.success && getTicketListResponse.data)) {
    //console.log(getTicketListResponse.data);
    throw new Error("Can not fetch ticket list");
  }
  return <TicketManagementClient tickets={getTicketListResponse.data} />;
}

export default TicketManagementPage;
