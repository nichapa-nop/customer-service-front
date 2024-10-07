"use server";

import { getResetPasswordInformation } from "@/actions/account.action";
import ResetPasswordClient from "./client";

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
    throw new Error("Token is invalid");
  }
  if (getTokenInformation.data.isExpired) {
    throw new Error("Token has been expired");
  }
  return (
    <ResetPasswordClient token={token} email={getTokenInformation.data.email} />
  );
}
