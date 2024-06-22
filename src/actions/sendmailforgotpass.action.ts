"use server";

import { cookies } from "next/headers";

export async function sendMail({ email }: { email: string }) {
  const res = await fetch(`http://localhost:5000/v1/reset-password`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email,
    }),
  });

  const responseData = await res.json();
  if (res.ok) {
    cookies().set("accessToken", responseData.accessToken, {
      secure: true,
      httpOnly: true,
    });
  }
  return { data: responseData, success: res.ok };
}
