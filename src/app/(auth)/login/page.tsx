"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { login } from "@/actions/login.action";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const router = useRouter();

  const isEmailValid = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const isPasswordValid = password.length >= 3;

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);

    if (!isEmailValid || !isPasswordValid) {
      toast.error("Please correct the form errors");
      return;
    }

    let loginResponse = await login({ email, password });
    if (loginResponse.success) {
      toast.success("Login Success!");
      router.replace("/ticket-management");
    } else {
      toast.error(loginResponse.data.message);
    }
  }

  return (
    <div className="bg-gradient-to-tr from-deep-blue to-bright-red h-screen w-full">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-row bg-white w-[923px] h-[529px] rounded-lg overflow-hidden">
          <div className="flex flex-col w-[462px] px-12 py-10">
            <div className="flex mt-2 h-[95px] justify-center">
              <Image
                src="/assets/images/SV_SEEN-C_.png"
                alt="image"
                width={137}
                height={95}
              />
            </div>

            <div className="mt-4 justify-center items-center text-center">
              <p className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text font-medium">
                Sign in
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="relative flex flex-col mt-1">
                <label htmlFor="email">Email</label>
                <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red p-[2px] mt-1 rounded-[15px]">
                  <input
                    id="email"
                    type="email"
                    className="w-full h-[48px] rounded-[13px] pl-4 lowercase"
                    placeholder="example.ee@baseplayhouse.co"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    required
                  />
                </div>
                {emailTouched && !isEmailValid && (
                  <p className="text-red-500 text-sm">
                    Please enter a valid email address
                  </p>
                )}
              </div>

              <div className="relative flex flex-col pt-[14px]">
                <label htmlFor="password">Password</label>
                <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red mt-1 p-[2px] rounded-[15px]">
                  <input
                    type={showPassword ? "text" : "password"} // Toggle input type
                    id="password"
                    className="w-full h-[48px] rounded-[13px] pl-5"
                    placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => setPasswordTouched(true)}
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="absolute right-4 transform translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-6 h-6 text-dark-gray"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z"
                          clipRule="evenodd"
                        />
                        <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-6 h-6 text-dark-gray"
                      >
                        <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path
                          fillRule="evenodd"
                          d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {passwordTouched && !isPasswordValid && (
                  <p className="text-red-500 text-sm">Password is required</p>
                )}
              </div>

              <div className="flex justify-end pt-2">
                <a
                  className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text font-medium hover:opacity-70"
                  href="/forgotpassword"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="pt-3 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-tr from-deep-blue to-bright-red w-full rounded-[15px] h-12 text-white text-md hover:opacity-90"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

          <div className="bg-gradient-to-tr relative from-deep-blue to-bright-red w-[461px] h-[529px] overflow-hidden">
            <Image
              src="/assets/images/Rectangle 3.png"
              alt=""
              fill
              className="object-fill opacity-60"
            />
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
}
