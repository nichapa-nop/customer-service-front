import { getRoleList } from "@/actions/role.action";
import RoleManagementClient from "./client";
import { getGroupMenuList } from "@/actions/group-menu.action";

export default async function RoleManagementPage() {
  const [getRoleListResponse, groupMenuListResponse] = await Promise.all([
    getRoleList({
      page: 1,
      itemsPerPage: 6,
    }),
    getGroupMenuList(),
  ]);
  if (!(getRoleListResponse.success && getRoleListResponse.data)) {
    throw new Error("Can not fetch role list");
  }
  return (
    <RoleManagementClient
      roles={getRoleListResponse.data}
      groupMenus={groupMenuListResponse.data?.groupMenus}
    />
  );
}
