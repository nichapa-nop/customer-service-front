import { getRoleList } from "@/actions/role.action";
import RoleManagementClient from "./client";

export default async function RoleManagementPage() {
  const getRoleListResponse = await getRoleList({
    page: 1,
    itemsPerPage: 6,
  });
  if (!(getRoleListResponse.success && getRoleListResponse.data)) {
    throw new Error("Can not fetch role list");
  }
  return <RoleManagementClient roles={getRoleListResponse.data} />;
}
