"use server";

import { ApiManager } from "@/api";

export async function getGroupMenuList() {
  return await ApiManager<GroupMenuListResponseBodyDTO, never, never>({
    method: "GET",
    path: `/group-menu`,
  });
}
