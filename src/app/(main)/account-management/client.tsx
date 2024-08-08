"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { useState } from "react";

export default function AccountManagementClient() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white h-full w-full flex">
      <div className="w-full">
        <div className="flex w-full items-center justify-center ">
          <div className=" h-screen w-full  shadow-lg rounded-lg  items-center justify-center">
            <div className=" pt-6 px-6 p-2">
              <div className=" mt-3 mb-10">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold ">
                  Account Management
                </span>
              </div>

              <div className=" flex flex-col h-full">
                <div className="grid grid-cols-7 space-x-4 h-[44px]  justify-center items-center mb-2 text-[14px] ">
                  <label className="flex items-center col-span-5 h-full rounded-[20px] px-4 space-x-3 shadow-light2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-[21px] "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>

                    <input
                      id="searchbox"
                      placeholder="Search"
                      className="grow focus:placeholder:text-white focus:outline-none placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red placeholder:text-bold"
                    ></input>
                  </label>
                  <button className="flex flex-row items-center justify-between px-10 bg-white h-full rounded-[20px] shadow-light2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
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
                          />{" "}
                          {/* deep-blue */}
                          <stop
                            offset="50%"
                            style={{ stopColor: "#82303d", stopOpacity: 1 }}
                          />{" "}
                          {/* fade-purple */}
                          <stop
                            offset="100%"
                            style={{ stopColor: "#ec4723", stopOpacity: 1 }}
                          />{" "}
                          {/* bright-red */}
                        </linearGradient>
                      </defs>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                        stroke="url(#gradient1)"
                      />
                    </svg>
                    <span className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red inline-block text-transparent bg-clip-text">
                      Filter
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex flex-row items-center justify-between px-4 bg-gradient-to-tr from-deep-blue to-bright-red text-white h-full rounded-[20px] shadow-light2"
                    // onClick={openModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    New Account
                  </button>
                </div>
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
                          Create New Account
                        </DialogTitle>
                        {/* <Description>
                            This will permanently deactivate your account
                          </Description> */}

                        <div className=" bg-blue-300 px-6 h-[500px] rounded-xl">
                          {/* <p className="font-semibold text-[20px] pl-6">
                              Customer Info
                            </p> */}
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
                            <div className="flex flex-col gap-2 bg-purple-200 p-4">
                              <p>First Name (TH)</p>
                              <input
                                className=" w-full h-10 rounded-[15px] pl-4"
                                placeholder="Nichapa"
                              ></input>
                            </div>
                            <div className="flex flex-col gap-2 bg-yellow-200 p-4">
                              <p>Last Name (TH)</p>
                              <input
                                className=" w-full h-10 rounded-[15px] pl-4"
                                placeholder="Nopparat"
                              ></input>
                            </div>
                            <div className="flex flex-col gap-2 bg-pink-200 p-4">
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
                <tr className="h-[68px] hover:bg-light-orange">
                  <td className="flex flex-col items-start">
                    Nichapa Nopparat
                    <span className="text-dark-gray">Trainee</span>
                  </td>
                  <td>nichapa.no@baseplayhouse.co</td>
                  <td>0909090909</td>
                  <td>
                    <div className="bg-green-400 h-7 rounded-[15px] items-center justify-center">
                      <span>Verified</span>
                    </div>
                  </td>
                  <td className="space-x-2">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 "
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
                            />{" "}
                            {/* deep-blue */}
                            <stop
                              offset="50%"
                              style={{ stopColor: "#82303d", stopOpacity: 1 }}
                            />{" "}
                            {/* fade-purple */}
                            <stop
                              offset="100%"
                              style={{ stopColor: "#ec4723", stopOpacity: 1 }}
                            />{" "}
                            {/* bright-red */}
                          </linearGradient>
                        </defs>
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                          clipRule="evenodd"
                          fill="url(#gradient1)"
                        />
                      </svg>
                    </button>
                  </td>
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
            <footer className=" flex space-x-5 items-center  justify-end p-3 ">
              <button
                className="flex bg-light-gray1 h-[34px] w-[34px] rounded-[20px]  items-center justify-center"
                // onClick={() => setPage(page - 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <input
                className="outline outline-light-gray1 w-20 h-11 rounded-[15px] text-center"
                placeholder={`page`}
              ></input>
              <button
                className="flex bg-light-gray1 h-[34px] w-[34px] rounded-[20px]  items-center justify-center"
                // onClick={() => setPage(page + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <span>Page 1 from 10</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
