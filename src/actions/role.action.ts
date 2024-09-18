import { ApiManager } from "@/api";

export async function getRoleList({
  page = 1,
  itemsPerPage = 6,
  keyword,
}: { page?: number; itemsPerPage?: number; keyword?: string } = {}) {
  const response = await ApiManager<{
    roles: RoleResponse[];
    pagination: PaginationResponse;
  }>({
    path: "/role",
    method: "GET",
    query: { page, itemsPerPage, keyword },
    next: {
      tags: ["get-role-list"],
    },
  });
  if (response.success && response.data) {
    return {
      data: response.data.roles,
      success: true,
      pagination: response.data.pagination,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}
