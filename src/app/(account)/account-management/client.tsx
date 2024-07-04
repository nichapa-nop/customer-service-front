"use client";

import React from "react";
import seenpic from "../../../../img/image 7.png";

export default function AccountManagementClient() {
  return (
    <div className="h-full flex">
      <aside
        id="default-sidebar"
        className=" top-0 left-0 z-40 min-w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 text-[14px]"
        aria-label="Sidebar"
      >
        <div className="h-full w-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={seenpic.src}
                  alt="image"
                  // className=" w-[80px] h-[60px]"
                ></img>

                {/* <span className="ms-3">SEEN</span> */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group h-14 rounded-[20px] shadow-md"
              >
                {/* <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                ></svg> */}
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Ticket Management
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group h-14 rounded-[20px] shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Account Management
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group h-14 rounded-[20px] shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Role Management
                </span>
              </a>
            </li>
          </ul>
          <div className="flex  h-[470px] rounded-[20px] items-end justify-center  p-3">
            <div className=" flex flex-col bg-white w-full h-[75px] rounded-[20px] p-3 shadow-md">
              <span>Nichapa Nopparat</span>
              <span className=" text-gray-500">Trainee</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="  w-full">
        <div className="flex w-full items-center justify-center ">
          <div className=" h-screen w-full bg-red-300 shadow-lg rounded-lg  items-center justify-center">
            <div className=" pt-6 px-6 p-2">
              <div className=" mt-6 mb-10">
                <span className=" text-2xl font-semibold ">
                  Account Management
                </span>
              </div>

              <div className=" flex flex-col h-full">
                <div className="grid grid-cols-7 space-x-2 h-[50px]  justify-center items-center mb-2">
                  <input
                    id="searchbox"
                    placeholder="search"
                    className=" col-span-5 h-10 rounded-[20px] pl-4"
                  ></input>
                  {/* <button className="bg-white h-10 rounded-[20px]">
                    export
                  </button> */}
                  <button className="bg-white h-10 rounded-[20px]">
                    filter
                  </button>
                  <button className=" bg-red-500 h-10 rounded-[20px]">
                    + New Accont
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col"> */}
            <table className=" bg-white w-full items-center justify-center text-center">
              <thead>
                <tr className="h-[68px] ">
                  <th>Account</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[68px] ">
                  <td className="flex flex-col items-start">
                    Nichapa Nopparat
                    <span>Trainee</span>
                  </td>
                  <td>nichapa.no@baseplayhouse.co</td>
                  <td>0909090909</td>
                  <td>
                    <div className="bg-green-400 h-7 rounded-[15px] items-center justify-center">
                      <span>Verified</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr className="h-[68px] ">
                  <td className="flex flex-col items-start">
                    Nichapa Nopparat
                    <span>Trainee</span>
                  </td>
                  <td>nichapa.no@baseplayhouse.co</td>
                  <td>0909090909</td>
                  <td>
                    <div className="bg-green-400 h-7 rounded-[15px] items-center justify-center">
                      <span>Verified</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr className="h-[68px] ">
                  <td className="flex flex-col items-start">
                    Nichapa Nopparat
                    <span>Trainee</span>
                  </td>
                  <td>nichapa.no@baseplayhouse.co</td>
                  <td>0909090909</td>
                  <td>
                    <div className="bg-green-400 h-7 rounded-[15px] items-center justify-center">
                      <span>Verified</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr className="h-[68px] ">
                  <td className="flex flex-col items-start">
                    Nichapa Nopparat
                    <span>Trainee</span>
                  </td>
                  <td>nichapa.no@baseplayhouse.co</td>
                  <td>0909090909</td>
                  <td>
                    <div className="bg-green-400 h-7 rounded-[15px] items-center justify-center">
                      <span>Verified</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr className="h-[68px] ">
                  <td className="flex flex-col items-start">
                    Nichapa Nopparat
                    <span>Trainee</span>
                  </td>
                  <td>nichapa.no@baseplayhouse.co</td>
                  <td>0909090909</td>
                  <td>
                    <div className="bg-green-400 h-7 rounded-[15px] items-center justify-center">
                      <span>Verified</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr className="h-[68px] ">
                  <td className="flex flex-col items-start">
                    Nichapa Nopparat
                    <span>Trainee</span>
                  </td>
                  <td>nichapa.no@baseplayhouse.co</td>
                  <td>0909090909</td>
                  <td>
                    <div className="bg-green-400 h-7 rounded-[15px] items-center justify-center">
                      <span>Verified</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            {/* <div className=" grid grid-rows-9 h-full bg-pink-200 "></div>
            </div> */}
            <div className=" flex bg-red-500 h-[85px] space-x-5 items-center  justify-end p-3 ">
              <button className="bg-white h-10 w-20 rounded-[20px]">
                previous
              </button>
              <input className=" w-9"></input>
              <button className="bg-white  h-10 w-20 rounded-[20px]">
                next
              </button>
              <span>Page 1 from 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
