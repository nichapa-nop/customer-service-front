// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// // import bgpic from "../../../img/Rectangle 3.png";
// // import seenpic from "../../../../img/SV_SEEN-C_.png";
// import toast, { Toaster } from "react-hot-toast";
// import { login } from "@/actions/login.action";
// import Image from "next/image";

// export default function LoginPage() {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const router = useRouter();

//   async function handleLogin() {
//     if (!(email && password)) {
//       toast.error("Email & password is required", {
//         // position: "top-right",
//       });
//     }
//     let loginResponse = await login({ email, password });
//     if (loginResponse.success) {
//       toast.success("Login Success!", {
//         // Displays a success message
//         // position: "top-right",
//       });
//       router.replace("/ticket-management");
//     } else {
//       toast.error(loginResponse.data.message, {
//         //   position: "top-right",
//       });
//     }
//   }

//   return (
//     <div className=" bg-gradient-to-tr from-deep-blue to-bright-red h-screen w-full">
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="flex flex-row bg-white h-[529px] w-[923px] rounded-lg overflow-hidden">
//           <div className=" flex flex-col w-[462px] p-12">
//             <div className=" flex mt-2 justify-center">
//               <Image
//                 src="/assets/images/SV_SEEN-C_.png"
//                 alt="image"
//                 // className=" w-[137px] h-[95px]"
//                 width={137}
//                 height={95}
//               ></Image>
//               {/* <img
//                 src={seenpic.src}
//                 alt="image"
//                 className=" w-[137px] h-[95px]"
//               ></img> */}
//             </div>

//             <div className=" mt-4 justify-center items-center text-center">
//               <p className=" bg-gradient-to-tr from-deep-blue to-bright-red   inline-block text-transparent bg-clip-text font-medium">
//                 Sign in
//               </p>
//             </div>
//             {/* <form action="#" noValidate> */}
//             {/* <label>
//               <div className=" flex flex-col  mt-1">
//                 <span>Email</span>
//                 <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red p-[2px]  mt-1 rounded-[15px]">
//                   <input
//                     id="email"
//                     type="text"
//                     className=" w-full h-[48px] rounded-[13px] pl-4 lowercase peer"
//                     placeholder="example.ee@baseplayhouse.co"
//                     onFocus={(e) => (e.target.placeholder = "")}
//                     onBlur={(e) =>
//                       (e.target.placeholder = "example.ee@baseplayhouse.co")
//                     }
//                     onChange={(e) => {
//                       e.preventDefault();
//                       setEmail(e.target.value);
//                     }}
//                     value={email}
//                     required
//                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//                   />
//                   <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
//                       Please enter a valid email address
//                     </span>
//                 </div>
//                 <p className="text-red-500 mt-9  absolute hidden peer-invalid:peer-placeholder-shown:hidden peer-invalid:block">
//                   Email is required.
//                 </p>
//               </div>
//             </label> */}
//             <div className="relative flex flex-col mt-1">
//               <label htmlFor="email">Email</label>
//               <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red p-[2px] mt-1 rounded-[15px]">
//                 <input
//                   id="email"
//                   type="email"
//                   className="w-full h-[48px] rounded-[13px] pl-4 lowercase peer"
//                   placeholder="example.ee@baseplayhouse.co"
//                   required
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                   minLength={6}
//                 />
//               </div>
//               <p className="mt-1 invisible peer-invalid:visible text-red-500 text-sm">
//                 Please enter a valid email address
//               </p>
//             </div>
//             <label>
//               <div className=" flex flex-col  mt-[14px] ">
//                 <span>Password</span>
//                 <div className="bg-dark-gray hover:bg-gradient-to-tr from-deep-blue to-bright-red  mt-1 p-[2px]  rounded-[15px]">
//                   <input
//                     type="password"
//                     id="password"
//                     className=" w-full h-[48px] rounded-[13px] pl-5"
//                     placeholder="● ● ● ● ● ● ● ● ● ● ● ●"
//                     onFocus={(e) => (e.target.placeholder = "")}
//                     onBlur={(e) =>
//                       (e.target.placeholder = "● ● ● ● ● ● ● ● ● ● ● ●")
//                     }
//                     onChange={(e) => {
//                       e.preventDefault();
//                       setPassword(e.target.value);
//                     }}
//                     value={password}
//                     // pattern=".{7,}"
//                     // required
//                   ></input>
//                   {/* <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
//                       Password required
//                     </span> */}
//                 </div>
//               </div>
//               <div className=" flex justify-end mt-2">
//                 <a
//                   className="bg-gradient-to-tr from-deep-blue to-bright-red  inline-block text-transparent bg-clip-text font-medium hover:opacity-70 "
//                   href="/forgotpassword"
//                 >
//                   Forgot Password?
//                 </a>
//               </div>
//               <div className=" mt-5 text-center ">
//                 <button
//                   className="bg-gradient-to-tr from-deep-blue to-bright-red w-full rounded-[15px] h-12 text-white text-md hover:opacity-90 "
//                   onClick={handleLogin}
//                 >
//                   Sign In
//                 </button>
//               </div>
//             </label>
//             {/* </form> */}
//           </div>
//           <div className="bg-gradient-to-tr relative from-deep-blue to-bright-red w-[461px] h-[529px] overflow-hidden">
//             <Image
//               src="/assets/images/Rectangle 3.png"
//               alt=""
//               fill
//               className="object-fill"
//             ></Image>
//             {/* <img
//               src={bgpic.src}
//               alt="image"
//               className="w-full h-full opacity-60"
//             ></img> */}
//           </div>
//         </div>
//         <Toaster position="bottom-center" />
//       </div>
//     </div>
//   );
// }
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
                {passwordTouched && !isPasswordValid && (
                  <p className="text-red-500 text-sm">
                    Password must be at least 3 characters
                  </p>
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
