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
    </>
  );
}
