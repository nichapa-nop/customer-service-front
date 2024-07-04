"use server";

import TicketManagementClient from "./client";

export default async function TicketManagementPage() {
  const apiResponse = "abc";
  return <TicketManagementClient data={apiResponse} />;
}
