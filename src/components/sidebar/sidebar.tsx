"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import { seenpic } from ""

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar?: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <aside
        id="default-sidebar"
        className={`top-0 absolute left-0 z-40 w-64 h-[100vh] transition-transform 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } text-[14px] shadow-sm flex flex-col bg-light-gray2`}
        aria-label="Sidebar"
      >
        <div className="flex-grow h-full px-3 py-4 dark:bg-gray-800">
          {/* Added flex-grow */}
          <ul className="space-y-4 font-medium">
            <li className="flex items-center justify-between mt-1">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Image
                  src="/assets/images/image 7.png "
                  alt="image"
                  width={71}
                  height={43}
                  // className=" w-[80px] h-[60px]"
                ></Image>
              </a>
              <button onClick={toggleSidebar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.5h16.5M3.75 12.5h16.5M3.75 18.5h16.5"
                  />
                </svg>
              </button>
            </li>

            <li>
              <a
                href="/ticket-management"
                //   className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group h-14 rounded-[20px] shadow-light1 "
                className={`flex items-center p-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group h-14 rounded-[20px] shadow-light1 ${
                  pathname === "/ticket-management"
                    ? "bg-gradient-to-tr from-deep-blue to-bright-red bg-clip-text text-transparent "
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#1f1a4f", stopOpacity: 1 }}
                      />
                      {/* deep-blue */}
                      <stop
                        offset="50%"
                        style={{ stopColor: "#82303d", stopOpacity: 1 }}
                      />
                      {/* fade-purple */}
                      <stop
                        offset="100%"
                        style={{ stopColor: "#ec4723", stopOpacity: 1 }}
                      />
                      {/* bright-red */}
                    </linearGradient>
                  </defs>

                  <path
                    fillRule="evenodd"
                    d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                    clipRule="evenodd"
                    fill={
                      pathname === "/ticket-management"
                        ? "url(#gradient1)"
                        : "black"
                    }
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Ticket Management
                </span>
              </a>
            </li>
            <li>
              <a
                href="/account-management"
                className={`flex items-center p-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group h-14 rounded-[20px] shadow-light1 ${
                  pathname === "/account-management"
                    ? "bg-gradient-to-tr from-deep-blue to-bright-red bg-clip-text text-transparent "
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#1f1a4f", stopOpacity: 1 }}
                      />
                      {/* deep-blue */}
                      <stop
                        offset="50%"
                        style={{ stopColor: "#82303d", stopOpacity: 1 }}
                      />
                      {/* fade-purple */}
                      <stop
                        offset="100%"
                        style={{ stopColor: "#ec4723", stopOpacity: 1 }}
                      />
                      {/* bright-red */}
                    </linearGradient>
                  </defs>

                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                    fill={
                      pathname === "/account-management"
                        ? "url(#gradient1)"
                        : "black"
                    }
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Account Management
                </span>
              </a>
            </li>
            <li>
              <a
                href="/role-management"
                className={`flex items-center p-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group h-14 rounded-[20px] shadow-light1 ${
                  pathname === "/role-management"
                    ? "bg-gradient-to-tr from-deep-blue to-bright-red bg-clip-text text-transparent "
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#1f1a4f", stopOpacity: 1 }}
                      />
                      {/* deep-blue */}
                      <stop
                        offset="50%"
                        style={{ stopColor: "#82303d", stopOpacity: 1 }}
                      />
                      {/* fade-purple */}
                      <stop
                        offset="100%"
                        style={{ stopColor: "#ec4723", stopOpacity: 1 }}
                      />
                      {/* bright-red */}
                    </linearGradient>
                  </defs>
                  <path
                    fillRule="evenodd"
                    d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                    clipRule="evenodd"
                    fill={
                      pathname === "/role-management"
                        ? "url(#gradient1)"
                        : "black"
                    }
                  />
                  <path
                    d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z"
                    fill={
                      pathname === "/role-management"
                        ? "url(#gradient1)"
                        : "black"
                    }
                  />
                  <path
                    fillRule="evenodd"
                    d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                    fill={
                      pathname === "/role-management"
                        ? "url(#gradient1)"
                        : "black"
                    }
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Role Management
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/*user session*/}
        <div className="flex rounded-[20px] items-end justify-center p-3 mt-auto">
          <div className=" flex space-x-3 bg-white w-full h-[75px] rounded-[20px] p-4 shadow-light1">
            <div className="rounded-full overflow-hidden">
              <Image
                src="/assets/images/profilepic.jpg"
                alt="user"
                width={40}
                height={40}
              ></Image>
            </div>
            <div className="flex flex-col">
              <span>Nichapa Nopparat</span>
              <span className=" text-gray-500">Trainee</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
