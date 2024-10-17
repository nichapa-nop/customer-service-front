"use client";

import React, { useState, useEffect } from "react";
import seenpic from "../../../../img/SV_SEEN-C_.png";
import bgpic from "../../../../img/Rectangle 3.png";
import { useParams, useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { resetPasswordSchema } from "@/schemas/account.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassword } from "@/actions/account.action";
import toast, { Toaster } from "react-hot-toast";

type ResetPasswordFields = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordClient({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<ResetPasswordFields>({
    mode: "onChange",
    resolver: zodResolver(resetPasswordSchema),
  });
  // useEffect(() => {
  //   // Extract token from the URL query parameters
  //   const { token } = router.query;
  //   if (token) {
  //     setToken(token as string);
  //   }
  // }, [router.query]);

  const processForm: SubmitHandler<ResetPasswordFields> = async (data) => {
    // Validate passwords
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Send the token and new password to the backend
    const response = await resetPassword(token, {
      password: data.password,
    });

    if (response.success) {
      toast.success("Password successfully reset", {
        position: "bottom-center",
      });
      setTimeout(() => {
        router.replace("/login");
      }, 2000);
    } else {
      alert("Failed to reset password.");
    }
  };

  return (
    <div className="bg-gradient-to-tr from-deep-blue to-bright-red h-screen w-full">
      <div className="flex items-center justify-center min-h-screen">
        <form
          className="flex flex-row bg-white h-[650px] w-[923px] rounded-lg overflow-hidden"
          onSubmit={handleSubmit(processForm)}
        >
          <div className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-[461px] h-[650px] overflow-hidden">
            <img
              src={bgpic.src}
              alt="image"
              className="w-full h-full opacity-60"
            />
          </div>
          <div className="flex flex-col w-[462px] px-12 py-10">
            <div className="flex mt-2 justify-center">
              <img
                src={seenpic.src}
                alt="image"
                className="w-[137px] h-[95px]"
              />
            </div>
            <div className="pt-6 pb-4 justify-center items-center text-center">
              <span className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red inline-block text-transparent bg-clip-text ">
                Please provide your new password
              </span>
            </div>
            <div className="flex flex-col pt-1">
              <span>Email</span>
              <div className="bg-dark-gray p-[2px] hover:cursor-default mt-1 rounded-[15px]">
                <div
                  id="email"
                  className="bg-white w-full h-[48px] rounded-[13px] pl-4 flex items-center"
                >
                  {email}
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-6">
              <label htmlFor="password">New Password</label>

              <Controller
                control={control}
                name="password"
                render={({
                  field: { name, value, onChange, onBlur },
                  fieldState: { error, isTouched },
                }) => (
                  <>
                    <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red mt-1 p-[2px] rounded-[15px]">
                      <input
                        type={showPassword ? "text" : "password"} // Toggle input type
                        id="password"
                        className="w-full h-[48px] rounded-[13px] pl-5"
                        name={name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        required
                        placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
                        minLength={6}
                      />
                      <button
                        type="button"
                        className="absolute transform translate-y-1/2 -ml-10"
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
                    {isTouched && error?.message && (
                      <p className="text-red-500 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex flex-col pt-3">
              <label htmlFor="confirmPassword">Confirm Password</label>

              <Controller
                control={control}
                name="confirmPassword"
                render={({
                  field: { name, value, onChange, onBlur },
                  fieldState: { error, isTouched },
                }) => (
                  <>
                    <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red mt-1 p-[2px] rounded-[15px]">
                      <input
                        type={showConfirmPassword ? "text" : "password"} // Toggle input type
                        id="confirm-password"
                        className="w-full h-[48px] rounded-[13px] pl-5"
                        placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
                        name={name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        required
                        minLength={6}
                      />
                      <button
                        type="button"
                        className="absolute transform translate-y-1/2 -ml-10"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        } // Toggle showPassword state
                      >
                        {showConfirmPassword ? (
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
                    {isTouched && error?.message && (
                      <p className="text-red-500 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="mt-auto pt-8 text-center">
              <button
                className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-full rounded-[15px] h-12 text-white text-md hover:opacity-90"
                type="submit"
              >
                Reset Password
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}
