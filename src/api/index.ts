"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { stringify } from "querystring";

const apiEndpoint = process.env.PROJECT_API_ENDPOINT;

type ApiResponse<T> = {
  success: boolean;
  data: T | null;
};

export async function ApiManager<
  TResponseBody = never,
  TRequestQuery extends Record<string, string | number | undefined> = Record<
    string,
    string | number | undefined
  >,
  TRequestBody = never
>({
  path,
  body,
  query,
  useAccessToken = true,
  apiVersion = "v1",
  method,
}: {
  path: string;
  body?: TRequestBody;
  query?: TRequestQuery;
  useAccessToken?: boolean;
  apiVersion?: "v1" | "v2";
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}): Promise<ApiResponse<TResponseBody>> {
  let targetEndpoint = `${apiEndpoint}/${apiVersion}${path}`;
  if (query) {
    targetEndpoint += `?${stringify(query)}`;
  }
  const response = await fetch(targetEndpoint, {
    headers: {
      Authorization: useAccessToken
        ? `Bearer ${cookies().get("accessToken")?.value}`
        : "",
      "Content-Type": "application/json",
    },
    method,
    body: body ? JSON.stringify(body) : undefined,
  });

  const success = response.ok;
  const responseData = await response.json();
  if (!success) {
    if ([401, 403].includes(response.status)) {
      redirect("/login");
    }
    return { success, data: null, ...responseData };
  }
  return {
    success,
    data: responseData,
  };
}
