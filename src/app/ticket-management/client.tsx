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
                    className=" bg-red-500 h-10 rounded-[20px]"
                    onClick={() => setIsOpen(true)}
                  >
                    + New Ticket
                  </button>
                  <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative z-50 "
                  >
                    <DialogBackdrop className="fixed inset-0 bg-black/30" />
                    <div className="fixed inset-0 w-screen overflow-y-auto p-1 py-24">
                      <div className="flex min-h-full  items-center justify-center">
                        <DialogPanel className=" w-[1000px] space-y-[50px] border rounded-xl bg-red-300 p-12">
                          <DialogTitle className="font-semibold text-center text-[20px]">
                            Create New Ticket
                          </DialogTitle>
                          <Description>
                            {/* This will permanently deactivate your account */}
                          </Description>

                          <div className=" bg-blue-300 p-6 h-[480px] rounded-xl">
                            <p className="font-semibold text-[20px] pl-6">
                              Customer Info
                            </p>
                            <div className="grid grid-cols-2 gap-2  bg-slate-500 p-3">
                              <div className="flex flex-col gap-2 bg-red-200 p-4">
                                <p>First Name (EN)</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Nichapa"
                                ></input>
                              </div>
                              <div className="flex flex-col gap-2 bg-lime-200 p-4">
                                <p>Last Name (EN)</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Nopparat"
                                ></input>
                              </div>
                              <div className="flex flex-col gap-2 bg-lime-200 p-4">
                                <p>Phone Number</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="0123456789"
                                ></input>
                              </div>
                              <div className="flex flex-col gap-2 bg-red-200 p-4">
                                <p>Type</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Select"
                                ></input>
                              </div>
                              <div className=" flex flex-col gap-2 bg-red-200 p-4">
                                <p>Email</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="ee@baseplayhouse.co"
                                ></input>
                              </div>
                              <div className=" flex flex-col gap-2 bg-lime-200 p-4">
                                <p>Company Name</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="BASE PLAYHOUSE CO. TLD."
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 rounded-xl bg-pink-300 h-[420px]">
                            <p className="font-semibold text-[20px] mb-2  pl-6">
                              System Info
                            </p>
                            <div className="grid grid-cols-2 gap-2  bg-slate-500 p-3">
                              <div className="flex flex-col gap-2 bg-red-200 p-4">
                                <p>Platform</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Select"
                                ></input>
                              </div>
                              <div className="flex flex-col gap-2 bg-lime-200 p-4">
                                <p>Incident Type</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Select"
                                ></input>
                              </div>
                              <div className="flex flex-col gap-2 bg-lime-200 p-4">
                                <p>Business Impact</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Select"
                                ></input>
                              </div>
                              <div className="flex flex-col gap-2 bg-red-200 p-4">
                                <p>Feedback Channels</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Select"
                                ></input>
                              </div>
                              <div className="flex flex-col gap-2 bg-red-200 p-4">
                                <p>Ticket Link</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Select"
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col p-6 rounded-xl bg-green-300 h-[500px]">
                            <p className=" font-semibold text-[20px] pl-6">
                              General Info
                            </p>
                            <div className=" bg-slate-500 p-3">
                              <div className="flex flex-col gap-2 bg-red-200 p-4">
                                <p>Topic</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Text"
                                ></input>
                              </div>
                              <div className="flex flex-col gap-2 bg-lime-200 p-4">
                                <p>Description</p>
                                <input
                                  className=" w-full h-[240px] rounded-[15px] pl-4 "
                                  placeholder="Text"
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className=" p-6 rounded-xl bg-cyan-300 h-80">
                            <p className=" font-semibold text-[20px] pl-6">
                              CS Info
                            </p>
                            <div className="grid grid-cols-2 gap-2  bg-slate-500 p-3">
                              <div className="flex flex-col gap-2 bg-red-200 p-4">
                                <p>First Name (EN)</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Nichapa"
                                ></input>
                              </div>
                              <div className="flex flex-col gap-2 bg-lime-200 p-4">
                                <p>Last Name (EN)</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="Nopparat"
                                ></input>
                              </div>
                              <div className="col-span-2 flex flex-col gap-2 bg-lime-200 p-4">
                                <p>Assign To</p>
                                <input
                                  className=" w-full h-10 rounded-[15px] pl-4"
                                  placeholder="ee@baseplayhouse.co"
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4 items-center justify-center ">
                            <button className=" bg-slate-600 w-64 h-14 rounded-[30px] text-white">
                              Create Ticket
                            </button>
                            {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
                          </div>
                        </DialogPanel>
                      </div>
                    </div>
                  </Dialog>
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
                    <div className=" bg-green-300 h-10 w-[110px] rounded-[20px]">
                      In progress
                    </div>
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
