"use client";

import "./login.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { login } from "@/actions/login.action";

export default function loginPage() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  async function handleLogin() {
    if (!(email && password)) {
      toast.error("Email & password is required", {
        // position: "top-right",
      });
    }
    let loginResponse = await login({ email, password });
    if (loginResponse.success) {
      toast.success("Login Success!", {
        // Displays a success message
        // position: "top-right",
      });
    } else {
      toast.error(loginResponse.data.message, {
        //   position: "top-right",
      });
    }
  }

  return (
    <div className="h-screen  bg-gradient-to-r from-orange-300 to-red-500">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[400px] h-[500px] bg-white shadow-lg rounded-lg p-8 items-center justify-center">
          <div className="text-center mt-4 mb-5">
            <p className=" font-bold text-[32px]">Login</p>
          </div>
          <div>
            <div className=" flex flex-col h-[360px] rounded-md p-3 ">
              <div className="flex flex-col  h-[90px] p-4">
                <p className=" text-[16px] ">Email</p>
                <input
                  type="text"
                  id="email"
                  className=" bg-gray-100 w-[280px] h-[26px] mt-2 rounded-[4px] text-[12px]"
                  placeholder="Enter your Email"
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </div>
              <div className="flex flex-col  h-[90px] p-4">
                <p className="text-[16px]">Password</p>
                <input
                  type="password"
                  id="password"
                  className=" bg-gray-100 w-[280px] h-[26px]  mt-2 rounded-[4px] text-[12px]"
                  placeholder="Enter your Password"
                  onChange={(e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
              </div>
              <div className="flex flex-col  h-[30px] items-end p-3">
                <a
                  type="button"
                  className=" text-gray-600 border border-transparent  hover:opacity-75 text-[12px] hover:cursor-pointer"
                  href="http://localhost:3000/forgotpassword"
                  //   onClick={() => router.push("/forgotpassword")}
                >
                  forgot password?
                </a>
              </div>
              <div className=" flex  h-[70px] items-center justify-center p-2 mt-2">
                <button
                  className=" hover:opacity-75 h-[50px] w-full bg-gradient-to-r from-orange-300 to-red-500  rounded-[30px]"
                  onClick={handleLogin}
                >
                  <p className=" text-white font-semibold text-[15px] ">
                    LOGIN
                  </p>
                </button>
              </div>
              <div className="flex flex-col mt-8 items-end">
                <a
                  className="hover:opacity-75 text-gray-600 text-[14px]"
                  href="http://localhost:3000/createaccount"
                >
                  Create your Account →
                </a>
              </div>
            </div>
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
}
