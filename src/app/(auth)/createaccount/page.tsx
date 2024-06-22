import React from "react";

export default function createAccount() {
  return (
    <div className="h-screen  bg-gradient-to-r from-orange-300 to-red-500">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[700px] h-[550px] bg-white shadow-lg rounded-lg p-8 items-center justify-center">
          <div className=" bg-slate-600 mb-5">
            <p className=" font-semibold text-[20px]">Create Your Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
