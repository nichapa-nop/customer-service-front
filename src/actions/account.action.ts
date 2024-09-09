import { ApiManager } from "@/api";

export async function getAccountList({
  page = 1,
  itemsPerPage = 6,
  keyword,
}: { page?: number; itemsPerPage?: number; keyword?: string } = {}) {
  const response = await ApiManager<{
    accounts: AccountResponse[];
    pagination: PaginationResponse;
  }>({
    path: "/account",
    method: "GET",
    query: { page, itemsPerPage, keyword },
    next: {
      tags: ["get-account-list"],
    },
  });
  // console.log(keyword);
  if (response.success && response.data) {
    return {
      data: response.data.accounts,
      success: true,
      pagination: response.data.pagination,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}

export async function createAccount(data: any) {
  const response = await ApiManager<
    AccountResponse,
    never,
    AccountRequestBodyDTO
  >({
    path: "/account",
    method: "POST",
    body: data,
    next: {
      // revalidateTags: ["get-account-list"]
    },
  });
  if (response.success && response.data) {
    return {
      data: response.data,
      success: true,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}
