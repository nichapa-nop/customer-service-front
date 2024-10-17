"use server";

import { ApiManager } from "@/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
      revalidateTags: ["get-account-list"],
    },
  });
  return response;
}

export async function editAccount({ uuid }: { uuid: string }, data: any) {
  const response = await ApiManager<
    AccountResponse,
    never,
    AccountRequestBodyDTO
  >({
    path: `/account/${uuid}`,
    method: "PUT",
    body: data,
    next: {
      revalidateTags: ["get-account-list"],
    },
  });

  if (response.success && response.data) {
    return {
      data: response.data,
      success: true,
    };
  } else {
    console.log(response.data);
    throw new Error("Failed to fetch data");
  }
}

export async function enableAndDisableAccount({ uuid }: { uuid: string }) {
  const response = await ApiManager<AccountResponse, never, never>({
    path: `/disableAndEnable-account/${uuid}`,
    method: "PUT",
    next: {
      revalidateTags: ["get-account-list"],
    },
  });
  if (response.success && response.data) {
    return {
      success: true,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}

export async function recoveryAccount({ uuid }: { uuid: string }) {
  const response = await ApiManager<AccountResponse, never, never>({
    path: `/recovery-account/${uuid}`,
    method: "PUT",
    next: {
      revalidateTags: ["get-account-list"],
    },
  });
  if (response.success && response.data) {
    return {
      success: true,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}

export async function deleteAccount({ uuid }: { uuid: string }) {
  const response = await ApiManager<AccountResponse, never, never>({
    path: `/account/${uuid}`,
    method: "DELETE",
    next: {
      revalidateTags: ["get-account-list"],
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

export async function sendVerifyEmail({ uuid }: { uuid: string }) {
  const response = await ApiManager<AccountResponse, never, never>({
    path: `/send-verifyemail/${uuid}`,
    method: "POST",
    next: {
      revalidateTags: ["get-account-list"],
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

export async function sendResetPasswordEmail(data: any) {
  const response = await ApiManager<
    AccountResponse,
    never,
    AccountRequestBodyDTO
  >({
    path: `/reset-password`,
    method: "POST",
    body: data,
    // next: {
    //   revalidateTags: ["get-account-list"],
    // },
  });
  if (response.success) {
    return {
      success: true,
    };
  } else {
    throw new Error("Failed to fetch data");
  }
}

export async function getResetPasswordInformation(token: string) {
  return await ApiManager<ResetPasswordTokenInformation, never, never>({
    method: "GET",
    path: `/reset-password/${token}`,
  });
}

export async function resetPassword(
  token: string,
  data: ResetPasswordRequestBodyDTO
) {
  return ApiManager<AccountResponse, never, ResetPasswordRequestBodyDTO>({
    path: `/reset-password/${token}`,
    method: "PUT",
    body: data,
  });
}

export async function getMyInfo() {
  return ApiManager<AccountResponse, never, never>({
    path: `/account-info`,
    method: "GET",
    next: {
      tags: ["my-info"],
    },
  });
}

export async function logout() {
  cookies().delete("accessToken");
  return redirect("/login");
}
