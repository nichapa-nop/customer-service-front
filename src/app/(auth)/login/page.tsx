"use client";

import "./login.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import seenpic from "../../../../img/SV_SEEN-C_.png";
import bgpic from "../../../../img/Rectangle 3.png";
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
      // toast.error(loginResponse.data.message, {
      //   //   position: "top-right",
      // });
    }
  }

  return (
    <div className=" bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red h-screen ">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-row bg-white h-[529px] w-[923px] rounded-lg overflow-hidden">
          <div className=" flex flex-col w-[462px] p-12">
            <div className=" flex mt-2 justify-center">
              <img
                src={seenpic.src}
                alt="image"
                className=" w-[137px] h-[95px]"
              ></img>
            </div>
            <div className=" mt-4 justify-center items-center text-center">
              <p className=" bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red   inline-block text-transparent bg-clip-text font-medium">
                Sign in
              </p>
            </div>
            <div className=" flex flex-col  mt-1 ">
              <span>Email</span>
              <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red p-[2px]  mt-1 rounded-[15px]">
                <input
                  id="email"
                  type="text"
                  className=" w-full h-[48px] rounded-[13px] pl-4"
                  placeholder="example.ee@baseplayhouse.co"
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                  }}
                  value={email}
                ></input>
              </div>
            </div>
            <div className=" flex flex-col  mt-[14px] ">
              <span>Password</span>
              <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red  mt-1 p-[2px]  rounded-[15px]">
                <input
                  type="password"
                  id="password"
                  className=" w-full h-[48px] rounded-[13px] pl-5"
                  placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
                  onChange={(e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                  }}
                  value={password}
                ></input>
              </div>
            </div>
            <div className=" flex justify-end mt-2">
              <button className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red  inline-block text-transparent bg-clip-text font-medium">
                Forgot Password?
              </button>
            </div>
            <div className=" mt-5 text-center ">
              <button
                className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-full rounded-[15px] h-12 text-white text-md "
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-[461px] h-[529px] overflow-hidden">
            <img
              src={bgpic.src}
              alt="image"
              className="w-full h-full opacity-60"
            ></img>
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
}
