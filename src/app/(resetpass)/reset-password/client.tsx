// "use client";

// import React, { useState } from "react";
// import seenpic from "../../../../img/SV_SEEN-C_.png";
// import bgpic from "../../../../img/Rectangle 3.png";

// export default function resetPassword() {
//   const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
//   const [passwordTouched, setPasswordTouched] = useState(false);
//   // const router = useRouter();

//   async function handleResetPassword(e: React.FormEvent) {
//     e.preventDefault();
//     setConfirmPasswordTouched(true);
//     setPasswordTouched(true);
//   }
//   return (
//     <div className=" bg-gradient-to-tr from-deep-blue to-bright-red h-screen w-full">
//       <div className="flex items-center justify-center min-h-screen">
//         <form className="flex flex-row bg-white h-[650px] w-[923px] rounded-lg overflow-hidden">
//           <div className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-[461px] h-[650px] overflow-hidden">
//             <img
//               src={bgpic.src}
//               alt="image"
//               className="w-full h-full opacity-60"
//             ></img>
//           </div>
//           <div className=" flex flex-col w-[462px] px-12 py-10">
//             <div className=" flex mt-2 justify-center">
//               <img
//                 src={seenpic.src}
//                 alt="image"
//                 className=" w-[137px] h-[95px]"
//               ></img>
//             </div>
//             <div className="pt-6 pb-4 justify-center items-center text-center">
//               <span className=" bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red inline-block text-transparent bg-clip-text font-medium">
//                 Please provide your new password
//               </span>
//             </div>
//             <div className=" flex flex-col pt-1">
//               <span>Email</span>
//               <div className="bg-dark-gray p-[2px] hover:cursor-default mt-1 rounded-[15px]">
//                 <div
//                   id="email"
//                   // type="text"
//                   className="bg-white w-full h-[48px] rounded-[13px] pl-4 flex items-center"
//                   // placeholder="example.ee@baseplayhouse.co"
//                   // onFocus={(e) => (e.target.placeholder = "")}
//                   // onBlur={(e) =>
//                   //   (e.target.placeholder = "example.ee@baseplayhouse.co")
//                   // }
//                   // onChange={(e) => {
//                   //   e.preventDefault();
//                   //   // setEmail(e.target.value);
//                   // }}
//                   // value={email}
//                 >
//                   example.ee@baseplayhouse.co
//                 </div>
//               </div>
//             </div>
//             <div className=" flex flex-col pt-6">
//               <label htmlFor="confirmPassword">New Password</label>
//               <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red mt-1 p-[2px] rounded-[15px]">
//                 <input
//                   type="password"
//                   id="password"
//                   className="w-full h-[48px] rounded-[13px] pl-5"
//                   placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
//                   // value={password}
//                   // onChange={(e) => setPassword(e.target.value)}
//                   onBlur={() => setPasswordTouched(true)}
//                   required
//                   minLength={3}
//                 />
//               </div>
//               {/* {passwordTouched && !isPasswordValid && ( */}
//               {passwordTouched && (
//                 <p className="text-red-500 text-sm">Password is required</p>
//               )}
//             </div>
//             <div className=" flex flex-col pt-3">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red mt-1 p-[2px] rounded-[15px]">
//                 <input
//                   type="password"
//                   id="password"
//                   className="w-full h-[48px] rounded-[13px] pl-5"
//                   placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
//                   // value={password}
//                   // onChange={(e) => setPassword(e.target.value)}
//                   onBlur={() => setConfirmPasswordTouched(true)}
//                   required
//                   minLength={3}
//                 />
//               </div>
//               {/* {passwordTouched && !isPasswordValid && ( */}
//               {confirmPasswordTouched && (
//                 <p className="text-red-500 text-sm">Password do not match</p>
//               )}
//             </div>
//             <div className="mt-auto pt-8 text-center">
//               <button
//                 className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-full rounded-[15px] h-12 text-white text-md  hover:opacity-90"
//                 type="submit"
//                 // href="/login"
//               >
//                 Reset Password
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import seenpic from "../../../../img/SV_SEEN-C_.png";
import bgpic from "../../../../img/Rectangle 3.png";
import { useParams, useRouter } from "next/navigation";

export default function ResetPasswordClient({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  // const [token, setToken] = useState<string | null>(null);
  //   const { token } = useParams<{ token: string }>();
  const router = useRouter();

  // useEffect(() => {
  //   // Extract token from the URL query parameters
  //   const { token } = router.query;
  //   if (token) {
  //     setToken(token as string);
  //   }
  // }, [router.query]);

  async function handleResetPassword(e: React.FormEvent) {
    e.preventDefault();
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);

    // Validate passwords
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Send the token and new password to the backend
    try {
      const response = await fetch("http://localhost:5000/v1/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token, // Send the token from the URL
          password,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Password successfully reset!");
        router.push("/login");
      } else {
        alert(result.message || "Failed to reset password.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <div className="bg-gradient-to-tr from-deep-blue to-bright-red h-screen w-full">
      <div className="flex items-center justify-center min-h-screen">
        <form
          className="flex flex-row bg-white h-[650px] w-[923px] rounded-lg overflow-hidden"
          onSubmit={handleResetPassword}
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
              <span className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red inline-block text-transparent bg-clip-text font-medium">
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
              <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red mt-1 p-[2px] rounded-[15px]">
                <input
                  type="password"
                  id="password"
                  className="w-full h-[48px] rounded-[13px] pl-5"
                  placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setPasswordTouched(true)}
                  required
                  minLength={3}
                />
              </div>
              {passwordTouched && password.length < 3 && (
                <p className="text-red-500 text-sm">
                  Password must be at least 3 characters long
                </p>
              )}
            </div>
            <div className="flex flex-col pt-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red mt-1 p-[2px] rounded-[15px]">
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full h-[48px] rounded-[13px] pl-5"
                  placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={() => setConfirmPasswordTouched(true)}
                  required
                  minLength={3}
                />
              </div>
              {confirmPasswordTouched && password !== confirmPassword && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              )}
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
    </div>
  );
}
