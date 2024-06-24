"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { forgotPassword } from "@/actions/forgotpassword.action";
import toast, { Toaster } from "react-hot-toast";
import { sendMail } from "@/actions/sendmailforgotpass.action";

export default function forgotpassword() {
  const [email, setEmail] = useState<string>();
  // const router = useRouter();

  // const handleBackToLogin = () => {
  //   console.log("Router instance:", router);
  //   try {
  //     router.push("/login");
  //   } catch (error) {
  //     console.error("Failed to navigate:", error);
  //   }
  //   // router.push("/login"); // Change this to the route you want to navigate to
  // };

  async function handleSendmail() {
    // if (!email) {
    //   // toast.error("Email is requires.");
    // }
    let sendMailResponse = await sendMail({ email });
    if (sendMailResponse.success) {
      toast.success("Please check your Email!");
    } else {
      toast.error("Email is requires.");
    }
  }

  return (
    <div className="h-screen  bg-gradient-to-r from-orange-300 to-red-500">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[400px] h-[390px] bg-white shadow-lg rounded-lg p-8 items-center justify-center">
          <div className="flex items-center justify-center mt-5">
            <img
              className="w-[52px] h-[50px]"
              src="https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png"
            ></img>
          </div>
          <div className=" text-center mt-2 mb-2">
            <p className=" font-bold text-[24px]">Trouble logging in?</p>
          </div>
          <div>
            <div className=" flex flex-col h-[210px] rounded-md p-1   ">
              <div className="flex flex-col  h-[110px] p-1  ">
                <div className="  flex  h-[60px] items-center justify-center  ">
                  <p className="  text-[13px] text-center text-balance">
                    Enter your email and we'll send you a link to reset your
                    password.
                  </p>
                </div>
                {/* <p className=" text-[16px] ">Email</p> */}
                <div className="flex  h-[40px] justify-center items-center ">
                  <input
                    type="text"
                    id="email"
                    className=" bg-gray-100  w-[230px] h-[26px] rounded-[4px] text-[12px] text-center"
                    placeholder="Enter your Email"
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </div>
              </div>

              <div className="flex h-[45px]  p-2 justify-center items-center">
                <button
                  className=" w-[230px] h-[35px] hover:opacity-75  bg-gradient-to-r from-orange-300 to-red-500  rounded-[30px]"
                  onClick={handleSendmail}
                >
                  <p className=" text-white font-semibold text-[15px] ">SEND</p>
                </button>
              </div>
              <div className=" flex mt-3 ml-6 h-[20px]">
                <p className=" text-[14px] mr-1 ">Back to </p>
                <a
                  className=" text-[13px] underline "
                  href="http://localhost:3000/login"
                  // onClick={handleBackToLogin}
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />

      {/* <div>forgotpassword</div> */}
    </div>
  );
}
