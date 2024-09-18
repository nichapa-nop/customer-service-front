"use server";

import { getAccountList } from "@/actions/account.action";
import AccountManagementClient from "./client";
import { getRoleList } from "@/actions/role.action";

export default async function AccountManagementPage() {
  const getAccountListResponse = await getAccountList({
    page: 1,
    itemsPerPage: 6,
  });
  const getRoleListResponse = await getRoleList({
    page: 1,
    itemsPerPage: 6,
  });
  if (!(getAccountListResponse.success && getAccountListResponse.data)) {
    throw new Error("Can not fetch account list");
  }
  return (
    <AccountManagementClient
      accounts={getAccountListResponse.data}
      roles={getRoleListResponse.data}
    />
  );
}
