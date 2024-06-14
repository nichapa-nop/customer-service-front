"use client";

import React from "react";
import { forgotPassword } from "@/actions/forgotpassword.action";

export default function forgotpassword() {
  return (
    <div className="h-screen  bg-gradient-to-r from-orange-300 to-red-500">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[400px] h-[350px] bg-white shadow-lg rounded-lg p-8 items-center justify-center">
          <div className=" text-center mt-4 mb-5">
            <p className=" font-bold text-[24px]">Trouble logging in?</p>
          </div>
          <div>
            <div className=" flex flex-col h-[220px] rounded-md p-1 bg-red-500">
              <div className="flex flex-col  h-[130px] p-1 bg-pink-400 mt-2">
                <div className=" flex bg-yellow-400 h-[60px] items-center justify-center  ">
                  <p className=" bg-white text-[13px] text-center text-balance">
                    Enter your email and we'll send you a link to get back into
                    your account.
                  </p>
                </div>
                {/* <p className=" text-[16px] ">Email</p> */}
                <div className="flex bg-orange-400 h-[60px] justify-center items-center">
                  <input
                    type="text"
                    id="email"
                    className="  w-[230px] h-[26px] rounded-[4px] text-[12px] text-center"
                    placeholder="Enter your Email"
                    // onChange={(e) => {
                    //   e.preventDefault();
                    //   setEmail(e.target.value);
                    // }}
                    // value={email}
                  />
                </div>
              </div>

              <div className="flex h-[60px] bg-blue-400 p-2 justify-center items-center">
                <button className=" w-[120px] h-10 hover:opacity-75  bg-gradient-to-r from-orange-300 to-red-500  rounded-[30px]">
                  <p className=" text-white font-semibold text-[15px] ">SEND</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>forgotpassword</div> */}
    </div>
  );
}
