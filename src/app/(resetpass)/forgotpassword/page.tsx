"use client";

// import "./login.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import seenpic from "../../../../img/SV_SEEN-C_.png";
import bgpic from "../../../../img/Rectangle 3.png";
import toast, { Toaster } from "react-hot-toast";
import { login } from "@/actions/login.action";
import { sendMail } from "@/actions/sendmailforgotpass.action";

export default function loginPage() {
  const [email, setEmail] = useState<string>("");

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
    <div className=" bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red h-screen ">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-row bg-white h-[529px] w-[923px] rounded-lg overflow-hidden">
          <div className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-[461px] h-[529px] overflow-hidden">
            <img
              src={bgpic.src}
              alt="image"
              className="w-full h-full opacity-60"
            ></img>
          </div>
          <div className=" flex flex-col w-[462px] p-12">
            <div className=" flex mt-2 justify-center">
              <img
                src={seenpic.src}
                alt="image"
                className=" w-[137px] h-[95px]"
              ></img>
            </div>
            <div className=" mt-4 justify-center items-center text-center"></div>
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
}
