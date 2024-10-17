"use server";

import { getResetPasswordInformation } from "@/actions/account.action";
import ResetPasswordClient from "./client";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    token: string;
  };
};

export default async function ResetPasswordPage({
  searchParams: { token },
}: Props) {
  if (!token) {
    throw new Error("Token is missing");
  }
  const getTokenInformation = await getResetPasswordInformation(token);
  if (!(getTokenInformation.success && getTokenInformation.data?.isValid)) {
    redirect("/login");
  }
  if (getTokenInformation.data.isExpired) {
    redirect("/login");
  }
  return (
    <ResetPasswordClient token={token} email={getTokenInformation.data.email} />
  );
}
