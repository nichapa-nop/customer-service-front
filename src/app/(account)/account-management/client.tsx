"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { useState } from "react";
import seenpic from "../../../../img/image 7.png";

export default function AccountManagementClient() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full flex">
      <div className="w-full">
        <div className="flex w-full items-center justify-center ">
          <div className=" h-screen w-full  shadow-lg rounded-lg  items-center justify-center">
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
                  <button
                    className=" bg-gradient-to-tr from-deep-blue to-bright-red text-white h-10 rounded-[20px]"
                    onClick={() => setIsOpen(true)}
                  >
                    + New Accont
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
