"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { useState } from "react";
import seenpic from "../../../img/image 7.png";

type Props = {
  data: string;
};

export default function TicketManagementClient({ data }: Props) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full flex">
      <div className="w-full">
        <div className="flex w-full items-center justify-center ">
          <div className="h-screen w-full  shadow-lg rounded-lg  items-center justify-center">
            <div className="pt-6 px-6 p-2">
              <div className="mt-6 mb-10">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold ">
                  Ticket Management
                </span>
              </div>

              <div className=" flex flex-col h-full">
                <div className="grid grid-cols-7 space-x-2 h-[50px]  justify-center items-center mb-2">
                  <input
                    id="searchbox"
                    placeholder="search"
                    className=" col-span-4 h-10 rounded-[20px] pl-4"
                  ></input>
                  <button className="bg-white h-10 rounded-[20px]">
                    export
                  </button>
                  <button className="bg-white h-10 rounded-[20px]">
                    filter
                  </button>
                  <button
                    type="button"
                    className="bg-gradient-to-tr from-deep-blue to-bright-red text-white h-10 rounded-[20px]"
                    onClick={() => setIsOpen(true)}
                  >
                    + New Ticket
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col"> */}
            <table className=" bg-white w-full items-center justify-center text-center">
              <thead>
                <tr className="h-[68px] ">
                  <th>
                    <input
                      type="checkbox"
                      className="w-[27px] h-[27px]"
                    ></input>
                  </th>
                  <th>Ticket ID</th>
                  <th>Topic</th>
                  <th>Platform</th>
                  <th>Incident Type</th>
                  <th>BI</th>
                  <th>Assign To</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[68px] ">
                  <td>
                    <input
                      type="checkbox"
                      className="w-[27px] h-[27px]"
                    ></input>
                  </td>
                  <td>INC00001</td>
                  <td>Test</td>
                  <td>HR</td>
                  <td>ISSUE</td>
                  <td>S1</td>
                  <td>Nichapa</td>
                  <td>
                    {/* <div className=" bg-green-300 h-10 w-[110px] rounded-[20px]"> */}
                    In progress
                    {/* </div> */}
                  </td>
                  <td>S1</td>
                </tr>
                <tr className="h-[68px] ">
                  <td>
                    <input
                      type="checkbox"
                      className="w-[27px] h-[27px]"
                    ></input>
                  </td>
                  <td>INC00001</td>
                  <td>Test</td>
                  <td>HR</td>
                  <td>ISSUE</td>
                  <td>S1</td>
                  <td>Nichapa</td>
                  <td>In progress</td>
                  <td>S1</td>
                </tr>
                <tr className="h-[68px] ">
                  <td>
                    <input
                      type="checkbox"
                      className="w-[27px] h-[27px]"
                    ></input>
                  </td>
                  <td>INC00001</td>
                  <td>Test</td>
                  <td>HR</td>
                  <td>ISSUE</td>
                  <td>S1</td>
                  <td>Nichapa</td>
                  <td>In progress</td>
                  <td>S1</td>
                </tr>
                <tr className="h-[68px] ">
                  <td>
                    <input
                      type="checkbox"
                      className="w-[27px] h-[27px]"
                    ></input>
                  </td>
                  <td>INC00001</td>
                  <td>Test</td>
                  <td>HR</td>
                  <td>ISSUE</td>
                  <td>S1</td>
                  <td>Nichapa</td>
                  <td>In progress</td>
                  <td>S1</td>
                </tr>
                <tr className="h-[68px] ">
                  <td>
                    <input
                      type="checkbox"
                      className="w-[27px] h-[27px]"
                    ></input>
                  </td>
                  <td>INC00001</td>
                  <td>Test</td>
                  <td>HR</td>
                  <td>ISSUE</td>
                  <td>S1</td>
                  <td>Nichapa</td>
                  <td>In progress</td>
                  <td>S1</td>
                </tr>
                <tr className="h-[68px] ">
                  <td>
                    <input
                      type="checkbox"
                      className="w-[27px] h-[27px]"
                    ></input>
                  </td>
                  <td>INC00001</td>
                  <td>Test</td>
                  <td>HR</td>
                  <td>ISSUE</td>
                  <td>S1</td>
                  <td>Nichapa</td>
                  <td>In progress</td>
                  <td>S1</td>
                </tr>
              </tbody>
            </table>
            {/* <div className=" grid grid-rows-9 h-full bg-pink-200 "></div>
            </div> */}
            <div className=" flex space-x-5 items-center  justify-end p-3 ">
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
