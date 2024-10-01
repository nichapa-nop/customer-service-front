"use client";

import React from "react";
import seenpic from "../../../../img/SV_SEEN-C_.png";
import bgpic from "../../../../img/Rectangle 3.png";

export default function resetPassword() {
  return (
  <div className=" bg-gradient-to-tr from-deep-blue to-bright-red h-screen w-full">
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-row bg-white h-[650px] w-[923px] rounded-lg overflow-hidden">
        <div className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-[461px] h-[650px] overflow-hidden">
          <img
            src={bgpic.src}
            alt="image"
            className="w-full h-full opacity-60"
          ></img>
        </div>
        <div className=" flex flex-col w-[462px] px-12 py-10">
          <div className=" flex mt-2 justify-center">
            <img
              src={seenpic.src}
              alt="image"
              className=" w-[137px] h-[95px]"
            ></img>
          </div>
          <div className="pt-5 pb-5 justify-center items-center text-center">
            <span className=" bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red   inline-block text-transparent bg-clip-text font-medium">
            Please provide your new password
            </span>
          </div>
          <div className=" flex flex-col pt-1">
            <span>Email</span>
            <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red p-[2px]  mt-1 rounded-[15px]">
              <input
                id="email"
                type="text"
                className=" w-full h-[48px] rounded-[13px] pl-4"
                placeholder="example.ee@baseplayhouse.co"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) =>
                  (e.target.placeholder = "example.ee@baseplayhouse.co")
                }
                onChange={(e) => {
                  e.preventDefault();
                  // setEmail(e.target.value);
                }}
                // value={email}
              ></input>
            </div>
          </div>
          <div className=" flex flex-col pt-8">
            <span>New Password</span>
            <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red p-[2px]  mt-1 rounded-[15px]">
              <input
                id="email"
                type="text"
                className=" w-full h-[48px] rounded-[13px] pl-4"
                placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) =>
                      (e.target.placeholder = "● ● ● ● ● ● ● ● ● ● ● ●")
                    }
                    onChange={(e) => {
                      e.preventDefault();
                      // setPassword(e.target.value);
                    }}
                    // value={password}
              ></input>
            </div>
          </div>
          <div className=" flex flex-col pt-5">
            <span>Confirm Password</span>
            <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red p-[2px]  mt-1 rounded-[15px]">
              <input
                id="email"
                type="text"
                className=" w-full h-[48px] rounded-[13px] pl-4"
                placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) =>
                      (e.target.placeholder = "● ● ● ● ● ● ● ● ● ● ● ●")
                    }
                    // onChange={(e) => {
                    //   e.preventDefault();
                    //   setPassword(e.target.value);
                    // }}
                    // value={password}
              ></input>
            </div>
          </div>
          <div className="pt-8 text-center">
            <button
              className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-full rounded-[15px] h-12 text-white text-md  hover:opacity-90"
              // onClick={handleSendmail}
            >
              Reset Password
            </button>
          </div>
          
        </div>
        {/* <Toaster position="bottom-center" /> */}
      </div>
    </div>
  </div>
  );
}
