"use server";

import { getAccountList } from "@/actions/account.action";
import AccountManagementClient from "./client";

export default async function AccountManagementPage() {
  const getAccountListResponse = await getAccountList({
    page: 1,
    itemsPerPage: 6,
  });
  if (!(getAccountListResponse.success && getAccountListResponse.data)) {
    throw new Error("Can not fetch account list");
  }
  return <AccountManagementClient accounts={getAccountListResponse.data} />;
}
