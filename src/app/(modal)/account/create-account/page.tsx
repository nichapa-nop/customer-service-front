"use client";
import React from "react";
import { useState } from "react";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
// import successpic from "../../../../img/success.png";

export default function ticketManagement() {
  const [type, setType] = useState<string>();
  const [platform, setPlatform] = useState<string>();
  const [incidentType, setIncidentType] = useState<string>();
  const [businessImpact, setBusinessImpact] = useState<string>();
  const [feedbackCh, setFeedbackCh] = useState<string>();
  let [isOpen, setIsOpen] = useState(false);

  //   const [type, setType] = useState<string>();

  function logType() {
    console.log(type);
  }

  return (
    <>
      <button
        className=" bg-red-500 h-10 rounded-[20px]"
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
        <div className="fixed inset-0 w-screen overflow-y-auto p-1 ">
          <div className="flex min-h-full  items-center justify-center">
            <DialogPanel className=" bg-white w-[830px] h-[620px]  border rounded-[20px] p-6">
              <DialogTitle className="font-semibold text-center text-[20px] mt-6 mb-10">
                Create New Account
              </DialogTitle>
              {/* <Description>
                            This will permanently deactivate your account
                          </Description> */}

              <div className="px-6 h-[400px] rounded-xl">
                {/* <p className="font-semibold text-[20px] pl-6">
                              Customer Info
                            </p> */}
                <div className="grid grid-cols-2 gap-x-9 gap-y-6 ">
                  <div className="flex flex-col gap-2 ">
                    <p className=" font-medium text-[14px]">First Name (EN)</p>
                    <input
                      className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nichapa"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className=" font-medium text-[14px]">Last Name (EN)</p>
                    <input
                      className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nopparat"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" font-medium text-[14px]">First Name (TH)</p>
                    <input
                      className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                      placeholder="สมชาย"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className=" font-medium text-[14px]">Last Name (TH)</p>
                    <input
                      className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                      placeholder="ใจดี"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className=" font-medium text-[14px]">Phone Number</p>
                    <input
                      className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                      placeholder="0123456789"
                    ></input>
                  </div>

                  <div className=" flex flex-col gap-2 ">
                    <p className=" font-medium text-[14px]">Email</p>
                    <input
                      className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                      placeholder="ee@baseplayhouse.co"
                    ></input>
                  </div>
                  <div className=" flex flex-col gap-2 ">
                    <p className=" font-medium text-[14px]">Role</p>
                    <input
                      className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                      placeholder="Select"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex  items-center justify-center ">
                <button className=" bg-gradient-to-tr from-deep-blue to-bright-red w-64 h-14 rounded-[30px] text-white">
                  Create Ticket
                </button>
                {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
