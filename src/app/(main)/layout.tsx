"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getTitle = () => {
    switch (pathname) {
      case "/ticket-management":
        return "Ticket Management";
      case "/account-management":
        return "Account Management";
      case "/role-management":
        return "Role Management";
      default:
        return "";
    }
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main
        className={`flex justify-end h-full w-full transform transition-spacing bg-white ${
          // isSidebarOpen ? "w-[calc(100vw-256px)]" : "w-full"
          isSidebarOpen ? "pl-[256px]" : "pl-0"
        }`}
      >
        {/* <div className="mt-3 mb-10 ml-6"> */}
        <div className="flex flex-col w-full pt-10">
          <div className="pl-6 pb-5">
            <span className="text-lg md:text-xl lg:text-2xl font-semibold ">
              {getTitle()}
            </span>
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
