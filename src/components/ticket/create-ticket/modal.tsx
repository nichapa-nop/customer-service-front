"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CreateTicket({ isOpen, setIsOpen }: Props) {
  // let [isOpen, setIsOpen] = useState(false);

  const openModal = () => {};

  return (
    <>
      {/* <button
        type="button"
        className=" bg-red-500 h-10 rounded-[20px]"
        onClick={() => setIsOpen(true)}
      >
        + New Ticket
      </button> */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 w-screen overflow-y-auto p-1 py-24">
          <div className="flex min-h-full  items-center justify-center">
            <DialogPanel className="bg-light-gray2 w-[1000px] space-y-[50px] border rounded-[30px] p-12">
              <DialogTitle className="font-semibold text-center text-[20px]">
                Create New Ticket
              </DialogTitle>
              <Description>
                {/* This will permanently deactivate your account */}
              </Description>

              <div className="bg-white p-6 h-[460px] rounded-xl shadow-sm">
                <p className="font-semibold text-[20px] pl-6">Customer Info</p>
                <div className="grid grid-cols-2 gap-2  p-3">
                  <div className="flex flex-col gap-2 p-4">
                    <p>First Name (EN)</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Nichapa"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Last Name (EN)</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Nopparat"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Phone Number</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="0123456789"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Type</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Select"
                    ></input>
                  </div>
                  <div className=" flex flex-col gap-2 p-4">
                    <p>Email</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="ee@baseplayhouse.co"
                    ></input>
                  </div>
                  <div className=" flex flex-col gap-2 p-4">
                    <p>Company Name</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="BASE PLAYHOUSE CO. TLD."
                    ></input>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl h-[430px] shadow-sm">
                <p className="font-semibold text-[20px] mb-2  pl-6">
                  System Info
                </p>
                <div className="grid grid-cols-2 gap-2  p-3">
                  <div className="flex flex-col gap-2 p-4">
                    <p>Platform</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Select"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Incident Type</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Select"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Business Impact</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Select"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Feedback Channels</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Select"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Ticket Link</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Select"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white p-6 rounded-[15px] h-[510px] shadow-sm">
                <p className=" font-semibold text-[20px] pl-6">General Info</p>
                <div className=" p-3">
                  <div className="flex flex-col gap-2 p-4">
                    <p>Topic</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Text"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Description</p>
                    <input
                      className="bg-light-gray2 w-full h-[240px] rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Text"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl h-80 shadow-sm">
                <p className=" font-semibold text-[20px] pl-6">CS Info</p>
                <div className="grid grid-cols-2 gap-2  p-3">
                  <div className="flex flex-col gap-2 p-4 hover:placeholder:text-space-black">
                    <p>First Name (EN)</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Nichapa"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <p>Last Name (EN)</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Nopparat"
                    ></input>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2 p-4">
                    <p>Assign To</p>
                    <input
                      className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="ee@baseplayhouse.co"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center ">
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
