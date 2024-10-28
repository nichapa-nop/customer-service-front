"use client";

// import "./login.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import seenpic from "../../../../img/SV_SEEN-C_.png";
import bgpic from "../../../../img/Rectangle 3.png";
import toast, { Toaster } from "react-hot-toast";
import { sendMail } from "@/actions/sendmailforgotpass.action";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>("");
  const [emailTouched, setEmailTouched] = useState(false);
  const router = useRouter();

  const isEmailValid = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  async function handleSendmail(e: React.FormEvent) {
    e.preventDefault();
    setEmailTouched(true);

    // if (!email) {
    //   // toast.error("Email is requires.");
    // }
    if (!isEmailValid) {
      toast.error("Please correct the form errors");
      return;
    }
    let sendMailResponse = await sendMail({ email });
    if (sendMailResponse.success) {
      toast.success("Please check your Email!");
      // router.replace("/ticket-management");
    } else {
      toast.error("Email is requires.");
    }
  }
  return (
    <div className=" bg-gradient-to-tr from-deep-blue to-bright-red h-screen w-full">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-row bg-white h-[529px] w-[923px] rounded-lg overflow-hidden">
          <div className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-[461px] h-[529px] overflow-hidden">
            <img
              src={bgpic.src}
              alt="image"
              className="w-full h-full opacity-60"
            ></img>
          </div>
          <div className=" flex flex-col w-[462px] px-12 pt-14">
            <div className=" flex mt-2 justify-center">
              <img
                src={seenpic.src}
                alt="image"
                className=" w-[137px] h-[95px]"
              ></img>
            </div>
            <div className=" mt-10 mb-6 justify-center items-center text-center">
              <span className=" bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red   inline-block text-transparent bg-clip-text font-medium">
                Enter your email address and we&apos;ll send <br />
                you a link to re-setpassword
              </span>
            </div>
            <form onSubmit={handleSendmail} className=" flex flex-col  mt-1">
              <span>Email</span>
              <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red p-[2px]  mt-1 rounded-[15px]">
                <input
                  id="email"
                  type="email"
                  className="w-full h-[48px] rounded-[13px] pl-4 lowercase"
                  placeholder="example.ee@baseplayhouse.co"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  required
                ></input>
              </div>
              {emailTouched && !isEmailValid && (
                <p className="text-red-500 text-sm pt-1">
                  Please enter a valid email address
                </p>
              )}

              <div className=" mt-5 text-center ">
                <button
                  type="submit"
                  className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-full rounded-[15px] h-12 text-white text-md  hover:opacity-90"
                >
                  Send
                </button>
              </div>
            </form>
            <div className=" flex justify-center mt-4">
              <a
                className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red  inline-block text-transparent bg-clip-text font-medium hover:opacity-70"
                href="/login"
              >
                Back to Sign in
              </a>
            </div>
          </div>
          <Toaster position="bottom-center" />
        </div>
      </div>
    </div>
  );
}
