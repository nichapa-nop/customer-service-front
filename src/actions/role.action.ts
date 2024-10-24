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

export async function createRole(data: any) {
  const response = await ApiManager<RoleResponse, never, RoleRequestBodyDTO>({
    path: "/role",
    method: "POST",
    body: data,
    next: {
      revalidateTags: ["get-role-list"],
    },
  });
  if (response.success && response.data) {
    return {
      data: response.data,
      success: true,
    };
  } else {
    //console.log(response);
    throw new Error("Failed to fetch data");
  }
}

export async function editRole({ id }: { id: number }, data: any) {
  const response = await ApiManager<RoleResponse, never, RoleRequestBodyDTO>({
    path: `/role/${id}`,
    method: "PUT",
    body: data,
    next: {
      revalidateTags: ["get-role-list"],
    },
  });
  if (response.success && response.data) {
    return {
      data: response.data,
      success: true,
    };
  } else {
    //console.log(response);
    throw new Error("Failed to fetch data");
  }
}

export async function deleteRole({ id }: { id: number }) {
  const response = await ApiManager<RoleResponse, never, never>({
    path: `/role/${id}`,
    method: "DELETE",
    next: {
      revalidateTags: ["get-role-list"],
    },
  });
  if (response.success) {
    return {
      success: true,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}
